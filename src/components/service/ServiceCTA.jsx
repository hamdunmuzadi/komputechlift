"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCTA({
    title = "Konsultasikan Kebutuhan Lift Anda",
    description = "Tim KOMPUTECLIFT siap membantu menentukan solusi yang paling sesuai untuk proyek Anda. Dapatkan estimasi harga dan survei lokasi secara gratis.",
    buttonText = "Hubungi Kami Sekarang",
    buttonHref = "https://wa.me/62817610929",
}) {
    return (
        // 1. Background Section tetap Putih (bg-white)
        <section className="relative py-8 lg:py-28 bg-white overflow-hidden">

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}

                    // 2 & 3. Kotak Pembungkus: bg-slate-950, rounded besar, padding (px, pb, pt)
                    // px-8 md:px-16 (Kiri-Kanan), pb-16 md:pb-24 (Bawah), pt-12 md:pt-20 (Atas)
                    className="relative bg-slate-950 border border-slate-800 rounded-xl md:rounded-md px-8 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24 text-center shadow-2xl shadow-slate-900/40 overflow-hidden"
                >
                    {/* Elemen Dekorasi: Pendaran cahaya biru halus DI DALAM kotak gelap */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-900/30 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">

                        {/* Teks diubah menjadi putih agar kontras dengan latar gelap */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                            {title}
                        </h2>

                        {/* Teks deskripsi diubah menjadi abu-abu terang */}
                        <p className="text-base md:text-lg text-slate-300 mb-10 leading-relaxed">
                            {description}
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                href={buttonHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                // Tombol diubah menjadi putih dengan teks biru agar mencolok di latar gelap
                                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-white text-slate-950 rounded-full font-bold md:text-lg shadow-xl shadow-white/10 hover:bg-slate-100 hover:shadow-white/20 transition-all duration-300"
                            >
                                {/* Ikon WhatsApp */}
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                {buttonText}
                            </Link>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}