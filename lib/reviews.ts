import { marked } from "marked";
import qs from "qs";

export interface Review {
  title: string;
  date: string;
  image: string;
  slug: string;
  body?: string;
}

interface CmsItem {
  id: number;
  attributes: any;
}

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
console.log("[ENV]", process.env.NEXT_PUBLIC_STRAPI_API_URL);
async function fetchReviews(parameters: Object) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  // console.log("[fetchReviews]", url);
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`CMS returned: ${response.status}} for ${url}`);
  return await response.json();
}

function toReviewConverter(item: CmsItem) {
  const { attributes } = item;
  return {
    slug: attributes.uid,
    title: attributes.title,
    date: attributes.date,
    image: CMS_URL + attributes.image.data[0].attributes.url,
    body: marked(attributes.content),
  };
}

export async function getReview(slug: string): Promise<Review> {
  const { data } = await fetchReviews({
    filters: { uid: { $eq: slug } },
    fields: ["uid", "title", "date", "content", "publishedAt", "content"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:asc"],
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) return null;
  const { attributes } = data[0];
  // console.log("from server", data);
  const item = data[0];
  return {
    ...toReviewConverter(item),
    body: marked(item.attributes.content),
  };
}

export async function getReviews(pageSize: number): Promise<Review[]> {
  const { data } = await fetchReviews({
    fields: ["uid", "title", "date", "publishedAt", "content"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize },
  });
  // console.log("from server", data[0].attributes.image.data[0].attributes.url);
  return data.map(toReviewConverter);
}

export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchReviews({
    firlds: ["uid"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 3 },
  });
  return data.map((item: CmsItem) => item.attributes.uid);
}
// export async function getSlugs(): Promise<string[]> {
//   const files = await readdir("./content/reviews");
//   //filter and  strip put the file extension
//   const slugs = files
//     .filter((file) => file.endsWith(".md"))
//     .map((file) => file.slice(0, -".md".length));
//   return slugs;
// }

// export async function getFeaturedReview(): Promise<FullReview> {
//   const reviews = await fetchReviews({
//     fields: ["uid", "title", "date", "publishedAt", "content"],
//     populate: { image: { fields: ["url"] } },
//     sort: ["publishedAt:desc"],
//     pagination: { pageSize: 4 },
//   });
//   const { data } = reviews;
//   const item = data[0];
//   // console.log("[getFeaturedReview]", item);
//   return {
//     ...toReviewConverter(item),
//     body: marked(item.attributes.content),
//   };
// }
