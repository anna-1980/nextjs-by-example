import { writeFileSync } from "node:fs";
import qs from "qs";

//regular
// const url = "http://127.0.0.1:1337/api/posts";

// with appended related fields, like img attributes
const url =
  "http://127.0.0.1:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      filters: { uid: { $eq: "post" } },
      fields: ["uid", "title", "date", "content", "publishedAt", "content"],
      populate: { image: { fields: ["url"] } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 1, withCount: false },
    },
    { encodeValuesOnly: true }
  );
console.log(url);
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = "scripts/strapi-response.json";
// to write the response to a file
writeFileSync(file, formatted, "utf-8");

// Path: scripts/strapi-request.mjs

// // with appended related fields, like img attributes
// const url =
//   "http://127.0.0.1:1337/api/posts" +
//   "?" +
//   qs.stringify(
//     {
//       fields: ["uid", "title", "date", "content", "publishedAt"],
//       populate: { image: { fields: ["url"] } },
//       sort:["publishedAt:desc"],
//       pagination: { pageSize: 2 },
//     },
//     { encodeValuesOnly: true }
//   );
// console.log(url);
// const response = await fetch(url);
// const body = await response.json();
// const formatted = JSON.stringify(body, null, 2);
// const file = "scripts/strapi-response.json";
// // to write the response to a file
// writeFileSync(file, formatted, "utf-8");
