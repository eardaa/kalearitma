import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });

  // Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.vercel.app",
      "frame-src 'self' https://maps.google.com",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  );

  // Additional security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return response;
}

export const config = {
  matcher: [
    /*
     * Tüm istek yollarıyla eşleşir ama:
     * - _next/static (statik dosyalar)
     * - _next/image (görüntü optimizasyonu)
     * - favicon.ico (favicon)
     * hariçtir.
     */
    "/((?!_next/static|_next/image|favicon.ico|kale-su-aritma-logo.webp).*)",
  ],
};