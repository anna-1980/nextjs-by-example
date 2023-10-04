import { NextResponse } from "next/server";


export function GET(request: Request) {
    return NextResponse.json({health: true})
}

// route handler for Strapi so it can sent a notification if there was something changed

