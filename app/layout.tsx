import "@/styles/globals.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/ui/Navbar";
import { Archive, Mail, Phone } from "iconoir-react";

export const metadata: Metadata = {
  title: "Gold Coast Morib International Resort | Beachfront Family Getaway",
  description:
    "Stay at Gold Coast Morib International Resort, a beachfront destination in Banting, Selangor. Perfect for family vacations, waterpark fun, and relaxing getaways by the sea.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Gold Coast Morib",
    "Gold Coast Morib International Resort",
    "Morib beach resort",
    "family resort Selangor",
    "waterpark Malaysia",
    "resort Banting",
    "Gold Coast Resort Morib booking",
    "beachfront resort Malaysia",
    "holiday resort Selangor",
    "vacation Malaysia",
  ],
  authors: [{ name: "Gold Coast Morib International Resort" }],
  creator: "Gold Coast Morib International Resort",
  openGraph: {
    title: "Gold Coast Morib International Resort | Beachfront Family Getaway",
    description:
      "Book your stay at Gold Coast Morib International Resort. Enjoy beachfront views, family-friendly waterpark, and a relaxing getaway in Banting, Selangor.",
    url: "https://goldcoastresort-booking-site.vercel.app/",
    siteName: "Gold Coast Morib International Resort",
    images: [
      {
        url: "https://goldcoastresort-booking-site.vercel.app/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Gold Coast Morib Resort Beachfront View",
      },
      {
        url: "https://goldcoastresort-booking-site.vercel.app/Images/brand-logo.png",
        width: 800,
        height: 600,
        alt: "Gold Coast Morib Resort Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Coast Morib International Resort | Beachfront Family Getaway",
    description:
      "Discover Gold Coast Morib International Resort. Family-friendly waterpark, beachfront views, and a perfect getaway in Banting, Selangor.",
    images: [
      "https://goldcoastresort-booking-site.vercel.app/Images/banner.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className="light overflow-x-hidden"
      lang="en"
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={clsx(
          "min-h-screen text-slate-800 bg-background overflow-x-hidden font-sans antialiased",
          fontSans.variable
        )}
        style={{
          backgroundColor: "#ffffff !important",
          color: "#000000 !important",
        }}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            enableSystem: false,
          }}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="relative z-10 container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <footer className="flex flex-col items-start justify-start py-8 sm:py-16 px-6 lg:px-[280px] sm:px-6 gap-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
                <div className="flex flex-col gap-4">
                  <div>
                    <Image
                      src="/Images/brand-logo-horizontal.png"
                      alt="brand logo"
                      width={240}
                      height={240}
                    />
                  </div>

                  <p className="text-slate-800">
                    GOLD COAST MORIB INTERNATIONAL RESORT
                  </p>
                  <div className="text-slate-500">
                    <p>
                      PT 294, Kawasan Kanchong Laut, <br />
                      Mukim Morib, Morib Beach,
                      <br />
                      42700 Banting, Selangor, <br />
                      Malaysia
                    </p>
                  </div>
                  <div className="flex flex-col text-slate-500">
                    <Link href="tel:+60331981028">
                      <p className="inline-flex gap-2 items-center">
                        <Phone className="w-4 h-4 text-medium" />
                        <span className="hover:underline">+6 03 3198 1028</span>
                      </p>
                    </Link>
                    <Link href="mailto:info@goldcoastresort.com.my">
                      <p className="inline-flex gap-2 items-center">
                        <Mail className="w-4 h-4 text-medium" />
                        <span className="hover:underline">
                          info@goldcoastresort.com.my
                        </span>
                      </p>
                    </Link>
                    <Link href="mailto:reservation@goldcoastresort.com.my">
                      <p className="inline-flex gap-2 items-center">
                        <Archive className="w-4 h-4 text-medium" />
                        <span className="hover:underline">
                          reservation@goldcoastresort.com.my
                        </span>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-slate-800">
                      Our Solutions
                    </p>
                    {siteConfig.footerItems
                      .filter(
                        (item) =>
                          item.category === "explore" && !item.status?.isHidden
                      )
                      .map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="text-slate-500 hover:text-blue-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-start sm:justify-between gap-8 text-slate-500">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  {siteConfig.footerItems
                    .filter(
                      (item) =>
                        item.category === "legal" && !item.status?.isHidden
                    )
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="text-slate-500 hover:text-blue-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>
                <p>© 2025 Example Sdn Bhd. All right reserved.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
