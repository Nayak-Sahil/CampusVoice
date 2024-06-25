import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {

    // redirect to respective dashboard based on role
    if (req.nextUrl.pathname.split('/').pop() === "Dashboard") {
      let role = req.nextauth.token.role.replace(req.nextauth.token.role.charAt(0), req.nextauth.token.role.charAt(0).toUpperCase());
      if (role === "Resolver") role = "QueryResolver";
      return NextResponse.rewrite(new URL('/Dashboard/${role}', req.url));
    }


    // authorization checks for student and resolver
    if (req.nextauth.token.role === "student" && req.nextUrl.pathname.startsWith('/Dashboard/QueryResolver' || '/QueryResolverr')) {
      return NextResponse.rewrite(new URL('/Unauthorized', req.url));
    }
    if (req.nextauth.token.role === "resolver" && req.nextUrl.pathname.startsWith('/Dashboard/Student' || '/Student')) {
      return NextResponse.rewrite(new URL('/Unauthorized', req.url));
    }


    // API requests
    if (req.nextUrl.pathname.startsWith('/api')) {
      //get session token
      const token = req.nextauth.token;

      //if token is not present or expired
      if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      //if token is present and not expired
      const response = NextResponse.next()
      response.cookies.set('uid', token.uid);
      response.cookies.set('role', token.role);
      return response;
    }

  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "student" || token?.role === "resolver"
    },
  }
)



export const config = {
  matcher: ["/Dashboard/:path*", "/QueryResolver/:path*", "/Student/:path*", "/api/:path*"]
}