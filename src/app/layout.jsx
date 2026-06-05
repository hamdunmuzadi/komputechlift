import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL("https://komputeclift.com"),

  title: {
    default:
      "KOMPUTECLIFT | Home Elevator, Lift Makanan, Lift Barang & Maintenance Lift",
    template: "%s | KOMPUTECLIFT",
  },

  description:
    "KOMPUTECLIFT by CV. Faza Jaya Indonesia (FJI) melayani pembuatan home elevator, lift makanan (dumbwaiter), lift barang, instalasi lift baru, maintenance, modernisasi, dan rekondisi lift untuk rumah, hotel, restoran, perkantoran, dan industri di Indonesia.",

  keywords: [
    "home elevator",
    "lift rumah",
    "lift makanan",
    "dumbwaiter",
    "lift barang",
    "maintenance lift",
    "perawatan lift",
    "modernisasi lift",
    "rekondisi lift",
    "instalasi lift",
    "jasa lift",
    "kontraktor lift",
    "lift indonesia",
    "elevator indonesia",
    "komputeclift",
    "cv faza jaya indonesia",
  ],

  authors: [
    {
      name: "CV. Faza Jaya Indonesia (FJI)",
    },
  ],

  creator: "CV. Faza Jaya Indonesia (FJI)",

  openGraph: {
    title:
      "KOMPUTECLIFT | Home Elevator, Lift Makanan & Maintenance Lift",
    description:
      "Spesialis home elevator, lift makanan, lift barang, maintenance, modernisasi, dan rekondisi lift di Indonesia.",
    url: "https://komputeclift.com",
    siteName: "KOMPUTECLIFT",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KOMPUTECLIFT",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://komputeclift.com",
  },

  category: "Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}