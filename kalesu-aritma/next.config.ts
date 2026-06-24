import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.conax.com.tr",
        pathname: "/Public/uploads/products/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/isparta-suyu-neden-sert.html",
        destination: "/blog/isparta-suyu-neden-sert",
        permanent: true,
      },
      {
        source: "/su-aritma-cihazi-nasil-secilir.html",
        destination: "/blog/su-aritma-cihazi-nasil-secilir",
        permanent: true,
      },
      {
        source: "/su-aritma-bakim-rehberi.html",
        destination: "/blog/su-aritma-bakim-rehberi",
        permanent: true,
      },
      {
        source: "/damacana-vs-su-aritma.html",
        destination: "/blog/damacana-vs-su-aritma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;