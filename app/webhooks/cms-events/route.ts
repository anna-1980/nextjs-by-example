import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// export function GET(request: Request) {
//   return NextResponse.json({ testStrapi: "testing GET request" });
// }
export async function POST(request: Request) {
  const payloadStrapi = await request.json();
  console.log("payload", payloadStrapi.model);
  console.log("payload", payloadStrapi.model === "post");
  if (payloadStrapi.model === "post") {
    // you can revalidate pages nere using NextJS functionality
    revalidateTag(CACHE_TAG_REVIEWS); // this will invalidate any data in the cache labeled with this tag
    console.log("revalidate: ", CACHE_TAG_REVIEWS);
  }
  return new Response("ok");
}

// route handler for Strapi so it can sent a notification if there was something changed
