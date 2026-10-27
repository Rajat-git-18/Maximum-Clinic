import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maximum Clinics | Advanced Healthcare in Jammu",
  description:
    "Your trusted health partner in Jammu. Expert doctors, modern facilities, and compassionate multi-specialty care under one roof.",
  openGraph: {
    title: "Maximum Clinics | Advanced Healthcare in Jammu",
    description:
      "Expert doctors, modern facilities, and compassionate care in Jammu. Book a visit or message the care desk on WhatsApp.",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A4D68",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-gradient-to-b from-slate-50 via-cyan-50/25 to-white font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
