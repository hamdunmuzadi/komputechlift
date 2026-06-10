"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceHero({
    badge,
    title,
    description,
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        // Menggunakan h-dvh agar mengunci persis 1 layar penuh. flex & justify-center menengahkan otomatis.
        <section className="relative w-full h-dvh bg-white overflow-hidden flex flex-col justify-center">

            {/* Latar Belakang Dekoratif (Tipis & Elegan) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            {/* Kontainer Utama - Padding vertikal dihapus agar tidak mendesak layar */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    // Mengurangi jarak antar elemen agar lebih compact (space-y-6)
                    className="space-y-6 md:space-y-8"
                >
                    {badge && (
                        <motion.div variants={itemVariants} className="flex justify-center">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-xs md:text-sm font-semibold tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Judul: Diperkecil menjadi text-6xl / 7xl agar tidak over-size di laptop */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight md:leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* Deskripsi: Ukuran standar (text-base / lg) agar mudah dibaca dan ringkas */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal"
                    >
                        {description}
                    </motion.p>

                    {/* Tombol Kembali ke Halaman Utama */}
                    <motion.div 
                        variants={itemVariants} 
                        className="pt-4 flex justify-center"
                    >
                        <Link 
                            href="/" 
                            className="group inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm md:text-base font-medium hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            {/* Ikon panah kiri */}
                            <svg 
                                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                                />
                            </svg>
                            Kembali ke Beranda
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}