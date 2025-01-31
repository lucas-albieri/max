import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // refreshing the auth token
    const user = await supabase.auth.getUser()

    // redirect to play subdomain if user is authenticated
    const hostname = request.headers.get("host") || "";
    const subdomain = hostname.split(".")[0];
    const nextUrl = request.nextUrl
    const url = nextUrl.clone()

    if (!user.error && subdomain !== "play") {
        return NextResponse.redirect(`http://play.${hostname}`)
    }
    if (subdomain === "play") {
        nextUrl.pathname = `/play${url.pathname}`
        return NextResponse.rewrite(request.nextUrl);
    }

    return supabaseResponse
}
