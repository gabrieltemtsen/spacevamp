import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/store";
import ConsultationModal from "@/components/ConsultationModal";
import QuoteModal from "@/components/QuoteModal";
import ProjectModal from "@/components/ProjectModal";
import AdminDrawer from "@/components/AdminDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spacevamp.com"),
  title: "Spacevamp Designs Limited | Interior Design & Furniture Manufacturing in Nigeria",
  description: "Spacevamp is an innovative Nigerian interior design and furniture manufacturing company. We design and craft bespoke residential, office, and hospitality spaces with African cultural influence and contemporary excellence. Based in Abuja, serving nationwide.",
  keywords: [
    "Interior design company in Nigeria",
    "Interior designers in Abuja",
    "Bespoke furniture Nigeria",
    "Custom furniture Nigeria",
    "Furniture manufacturers Nigeria",
    "Office furniture Nigeria",
    "Residential interior design Nigeria",
    "Commercial interior design Nigeria",
    "Custom office furniture",
    "Bespoke wardrobes",
    "Custom kitchens",
    "Interior fit-out services Abuja"
  ],
  authors: [{ name: "Spacevamp Designs Limited" }],
  openGraph: {
    title: "Spacevamp Designs Limited | We Understand Spaces, Design Solutions & Make Things That Work",
    description: "Innovative interior design and direct in-house furniture manufacturing in Nigeria. Concept → Design → Production → Installation → Finished Space.",
    url: "https://spacevamp.com",
    siteName: "Spacevamp Designs Limited",
    images: [
      {
        url: "/logos/spacevamp-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Spacevamp Designs Limited",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/logos/spacevamp-symbol-circle.png",
    shortcut: "/logos/spacevamp-symbol-circle.png",
    apple: "/logos/spacevamp-symbol-circle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "name": "Spacevamp Designs Limited",
    "description": "Innovative interior design and furniture manufacturing company creating functional, beautiful and purposeful spaces in Nigeria.",
    "url": "https://spacevamp.com",
    "telephone": "+2348030007826",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Abuja",
      "addressRegion": "Federal Capital Territory",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0765,
      "longitude": 7.3986
    },
    "priceRange": "₦₦ - ₦₦₦",
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design & Spatial Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bespoke Furniture Manufacturing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Turnkey Corporate Office Fit-outs" } }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#121316] text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
        <AppProvider>
          {children}
          <ConsultationModal />
          <QuoteModal />
          <ProjectModal />
          <AdminDrawer />
        </AppProvider>
      </body>
    </html>
  );
}
