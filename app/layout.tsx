import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Isparta Su Arıtma Cihazı | Kale Su Arıtma",
    template: "%s | Kale Su Arıtma",
  },
  description:
    "Isparta'da su arıtma cihazı satış, kurulum ve bakım hizmetleri. Conax yetkili satıcısı. Hemen arayın.",
  metadataBase: new URL("https://www.ispartakalearitma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.ispartakalearitma.com",
    title: "Isparta Su Arıtma Cihazı | Kale Su Arıtma",
    description:
      "Isparta'da su arıtma cihazı kurulum ve bakımı. Hemen arayın.",
    images: [
      {
        url: "https://www.ispartakalearitma.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kale Su Arıtma - Isparta Su Arıtma Cihazı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isparta Su Arıtma Cihazı | Kale Su Arıtma",
    description:
      "Isparta'da su arıtma cihazı kurulum ve bakımı. Hemen arayın.",
    images: ["https://www.ispartakalearitma.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "lVr6zNbcxAWtaqw5HVDfekArA8FmJWHFIf_xStvDAn8",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <div className="page">
          <Nav />
          {children}
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kale Su Arıtma",
              description:
                "Isparta'da su arıtma cihazı satış, kurulum ve bakım hizmetleri. Conax yetkili satıcısı.",
              telephone: "+905462574773",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adres Bilgisini Buraya Girin",
                addressLocality: "Isparta",
                addressRegion: "Isparta",
                postalCode: "32000",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7648,
                longitude: 30.5566,
              },
              url: "https://www.ispartakalearitma.com",
              priceRange: "₺₺",
              openingHours: "Mo-Sa 09:00-20:00",
              areaServed: {
                "@type": "City",
                name: "Isparta",
              },
              serviceType: "Su Arıtma Cihazı Satış Kurulum ve Bakımı",
            }),
          }}
        />
      </body>
    </html>
  );
}