import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

// Using system fonts to avoid build issues with Google Fonts
const fontVariables = "font-sans";

export const metadata: Metadata = {
  metadataBase: new URL('https://autobot.co.id'),
  title: {
    default: "Autobot Wijaya Solution - Digital Transformation Partner Indonesia",
    template: "%s | Autobot Wijaya Solution"
  },
  description: "Leading IT solutions provider in Indonesia. Custom software development, AI/ML solutions, IoT implementation, cloud services, cybersecurity, and certified IT manpower. Transform your business digitally with us.",
  keywords: [
    "IT Solutions Indonesia",
    "Software Development Jakarta",
    "AI Solutions",
    "Machine Learning",
    "IoT Indonesia",
    "Cloud Solutions",
    "Cybersecurity",
    "IT Manpower",
    "Digital Transformation",
    "Custom Software",
    "Mobile App Development",
    "Web Development",
    "ERP System",
    "Hospital Information System",
    "SIMRS",
    "IT Consulting"
  ],
  authors: [{ name: "Autobot Wijaya Solution" }],
  creator: "Autobot Wijaya Solution",
  publisher: "Autobot Wijaya Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'M1V1d6KGqlFqT0vUD8HyfLB7qGYfAZBokr9gCX-ro6M',
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "ar_SA", "vi_VN", "ja_JP", "fil_PH", "th_TH"],
    url: "https://autobot.co.id",
    siteName: "Autobot Wijaya Solution",
    title: "Autobot Wijaya Solution - Digital Transformation Partner Indonesia",
    description: "Leading IT solutions provider in Indonesia. Custom software development, AI/ML solutions, IoT implementation, cloud services, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autobot Wijaya Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autobot Wijaya Solution - Digital Transformation Partner",
    description: "Leading IT solutions provider in Indonesia. Transform your business digitally.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://autobot.co.id',
    languages: {
      'id': 'https://autobot.co.id/id',
      'en': 'https://autobot.co.id/en',
      'ar': 'https://autobot.co.id/ar',
      'vi': 'https://autobot.co.id/vi',
      'ja': 'https://autobot.co.id/ja',
      'tl': 'https://autobot.co.id/fil', // Filipino (Tagalog)
      'th': 'https://autobot.co.id/th',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
