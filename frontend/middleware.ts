import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

//   if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
