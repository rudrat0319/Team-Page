import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Team | Armatrix",
  description:
    "Meet the Builders, Engineers, Designers, and Researchers behind Armatrix — building the next layer of robotics infrastructure.",
  openGraph: {
    title: "Team | Armatrix",
    description:
      "Meet the team behind Armatrix's snake-like robotic arm for confined and hazardous spaces.",
    url: "https://armatrix.in/team",
    siteName: "Armatrix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
