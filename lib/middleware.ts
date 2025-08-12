import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function updateSession ( request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({name, value, options}) => 
                        cookieStore.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({name, value, options}) => 
                        supabaseResponse.cookies.set(name, value, options)
                    )
                }
            }
        }
    )

    // const {
    //     data: {user},
    // } = await supabase.auth.getUser();

    // if(
    //     !user &&
    //     !request.nextUrl.pathname.startsWith("/login") &&
    //     !request.nextUrl.pathname.startsWith("/auth")
    // ) {
    //     const url = request.nextUrl.clone();
    //     url.pathname = "/login";
    //     return NextResponse.redirect(url);
    // }
}