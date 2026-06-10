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
      "Jasa Lift Profesional | Home Elevator, Lift Barang & Maintenance Lift | KOMPUTECLIFT",
    template: "%s | KOMPUTECLIFT",
  },

  description:
    "Jasa instalasi lift profesional untuk rumah, hotel, restoran, rumah sakit, universitas, gedung perkantoran dan industri. Melayani home elevator, lift barang, lift makanan (dumbwaiter), maintenance, modernisasi dan rekondisi lift di Bandung dan seluruh Indonesia.",

  keywords: [
    // Brand
    "komputeclift",
    "komputec lift",
    "fuji komputec",
    "cv faza jaya indonesia",

    // Jasa Lift
    "jasa lift",
    "kontraktor lift",
    "perusahaan lift",
    "vendor lift",
    "supplier lift",
    "instalasi lift",
    "pemasangan lift",
    "jasa instalasi lift",
    "instalasi elevator",
    "pemasangan elevator",

    // Maintenance
    "maintenance lift",
    "jasa maintenance lift",
    "perawatan lift",
    "service lift",
    "preventive maintenance lift",
    "kontrak maintenance lift",

    // Modernisasi
    "modernisasi lift",
    "upgrade lift",
    "modernisasi elevator",
    "upgrade elevator",
    "retrofit lift",
    "rekondisi lift",

    // Home Elevator
    "home elevator",
    "lift rumah",
    "lift rumah minimalis",
    "lift rumah mewah",
    "elevator rumah",
    "home lift",

    // Lift Barang
    "lift barang",
    "cargo lift",
    "freight elevator",
    "lift barang pabrik",
    "lift barang gudang",
    "lift barang industri",

    // Lift Makanan
    "lift makanan",
    "dumbwaiter",
    "dumbwaiter lift",
    "food lift",
    "lift restoran",
    "lift hotel",

    // Area Indonesia
    "lift indonesia",
    "elevator indonesia",
    "jasa lift bandung",
    "jasa lift jakarta",
    "jasa lift surabaya",
    "home elevator indonesia",
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