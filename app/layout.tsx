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
  metadataBase: new URL("https://ispartaaritmakale.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ispartaaritmakale.vercel.app",
    title: "Isparta Su Arıtma Cihazı | Kale Su Arıtma",
    description:
      "Isparta'da su arıtma cihazı kurulum ve bakımı. Hemen arayın.",
    images: [
      {
        url: "https://ispartaaritmakale.vercel.app/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "lVr6zNbcxAWtaqw5HVDfekArA8FmJWHFIf_xStvDAn8",
  },
  icons: {
    icon: "/kale-su-aritma-logo.webp",
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
              url: "https://ispartaaritmakale.vercel.app",
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