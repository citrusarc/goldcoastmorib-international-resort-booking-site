import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="overflow-x-hidden" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background overflow-x-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="relative z-10 container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <footer className="flex flex-col items-start justify-start py-8 sm:py-16 px-6 lg:px-[280px] sm:px-6 gap-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
                <div className="flex flex-col gap-4">
                  <p>Logo</p>
                  <p>EXAMPLE SDN BHD (12345)</p>
                  <p>
                    No. 23, Jalan Teknologi 3/6B, <br />
                    Taman Sains Selangor 1,
                    <br />
                    47810 Selangor, Malaysia.
                  </p>
                  <p>support@example.com</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
                  <div className="flex flex-col gap-4">Site Map</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-start sm:justify-between gap-8">
                <p className="hidden sm:inline">Term of Services</p>
                <p>© 2025 Example Sdn Bhd. All right reserved.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
