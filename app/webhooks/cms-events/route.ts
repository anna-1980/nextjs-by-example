import { NextResponse } from "next/server";

// export function GET(request: Request) {
//   return NextResponse.json({ testStrapi: "testing GET request" });
// }
export async function POST(request: Request) {
    const payloadStrapi = await request.json();
    console.log("payload", payloadStrapi);
  return new Response("ok");
}

// route handler for Strapi so it can sent a notification if there was something changed
