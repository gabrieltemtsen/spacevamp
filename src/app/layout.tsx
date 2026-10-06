import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121316" },
    { media: "(prefers-color-scheme: light)", color: "#121316" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://spacevamp.com"),
  title: {
    default: "Spacevamp Designs Limited | Interior Design & Bespoke Furniture Manufacturing",
    template: "%s | Spacevamp Designs Limited",
  },
  description:
    "Spacevamp Designs Limited is an innovative Nigerian interior design and furniture manufacturing company. We design and craft bespoke residential, corporate office, and hospitality spaces with African cultural influence and contemporary excellence. Based in Abuja, serving nationwide.",
  applicationName: "Spacevamp Designs",
  authors: [{ name: "Spacevamp Designs Limited", url: "https://spacevamp.com" }],
  generator: "Next.js",
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
    "Interior fit-out services Abuja",
    "Turnkey furniture packages Nigeria",
    "African contemporary design"
  ],
  creator: "Spacevamp Designs Limited",
  publisher: "Spacevamp Designs Limited",
  category: "Architecture & Interior Design",
  classification: "Interior Design Studio and Bespoke Furniture Manufacturer",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://spacevamp.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://spacevamp.com",
    siteName: "Spacevamp Designs Limited",
    title: "Spacevamp Designs Limited | Interior Design & Furniture Manufacturing",
    description:
      "We don't simply furnish spaces. We understand spaces, design solutions & make things that work. Bespoke residential, corporate, and hospitality interiors manufactured in Abuja, Nigeria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Spacevamp Designs Limited — Interior Design & Bespoke Furniture Manufacturing Nigeria",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Spacevamp Designs Limited — Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacevamp Designs Limited | Interior Design & Furniture Manufacturing",
    description:
      "We don't simply furnish spaces. We understand spaces, design solutions & make things that work. 100% in-house manufacturing in Abuja, Nigeria.",
    images: ["/og-image.jpg"],
    creator: "@spacevamp",
    site: "@spacevamp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/logos/spacevamp-symbol-circle.png", sizes: "180x180", type: "image/png" },
    ],
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
    "@id": "https://spacevamp.com/#organization",
    "name": "Spacevamp Designs Limited",
    "legalName": "Spacevamp Designs Limited",
    "alternateName": "Spacevamp",
    "url": "https://spacevamp.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://spacevamp.com/logos/spacevamp-wordmark-white.png",
      "width": 1024,
      "height": 167
    },
    "image": "https://spacevamp.com/og-image.jpg",
    "description": "Innovative interior design and furniture manufacturing company creating functional, beautiful and purposeful spaces in Abuja and across Nigeria.",
    "slogan": "We don't simply furnish spaces. We understand spaces, design solutions and make things that work.",
    "telephone": "+2348030007826",
    "email": "info@spacevamp.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Idu Industrial Area",
      "addressLocality": "Abuja",
      "addressRegion": "Federal Capital Territory",
      "postalCode": "900001",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0765,
      "longitude": 7.3986
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "₦₦ - ₦₦₦",
    "currenciesAccepted": "NGN, USD",
    "paymentAccepted": "Bank Transfer, Commercial Invoice",
    "areaServed": [
      { "@type": "City", "name": "Abuja" },
      { "@type": "City", "name": "Lagos" },
      { "@type": "City", "name": "Port Harcourt" },
      { "@type": "Country", "name": "Nigeria" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Design & Furniture Manufacturing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design & Spatial Solutions",
            "description": "End-to-end interior architecture, 3D photorealistic visualization, lighting schematics, and spatial planning."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Furniture Design & Manufacturing",
            "description": "Precision factory joinery utilizing kiln-dried Nigerian hardwoods, architectural steel, and custom upholstery."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Corporate & Commercial Office Fit-outs",
            "description": "Boardroom conference tables, modular ergonomic workstations, reception counters, and acoustic meeting spaces."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Developer Furnishing Packages",
            "description": "Multi-unit kitchen cabinetry, wardrobes, and turnkey show-home staging for real estate developers."
          }
        }
      ]
    }
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
