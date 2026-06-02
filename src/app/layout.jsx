import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // Pastikan Tailwind CSS diimpor di sini

// Menggunakan font modern yang sangat cocok untuk gaya Corporate Engineering
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "KOMPUTECHLIFT | Solusi Transportasi Vertikal Premium",
  description: "Penyedia layanan instalasi, maintenance, dan modernisasi lift lokal (TKDN) serta import CBU berkualitas tinggi bersertifikasi K3.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakartaSans.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}