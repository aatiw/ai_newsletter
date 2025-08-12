import { NextRequest } from "next/server";
import { updateSession } from "./lib/middleware";

export async function middleware(request: NextRequest){
    return await updateSession(request);
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.io|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};