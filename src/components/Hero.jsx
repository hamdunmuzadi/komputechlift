"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaShieldAlt, FaAward, FaTools } from "react-icons/fa";

// Varian animasi tetap menggunakan framer-motion yang aman
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

export default function Hero() {
    const handleScrollToProjects = (e) => {
        e.preventDefault();
        const target = document.querySelector("#projects");
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen pt-36 pb-20 bg-gray-50 flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

                {/* KOLOM KIRI: TEKS & CTA */}
                <motion.div
                    className="lg:col-span-7 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge Otoritas */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-700 font-bold text-xs tracking-wider uppercase shadow-sm">
                        <FaShieldAlt className="text-sm" />
                        <span>Safety & Engineering Excellence</span>
                    </motion.div>

                    {/* Headline Utama */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
                    >
                        Solusi Lift Profesional untuk{" "}
                        <span className="text-blue-600 block sm:inline">
                            Gedung, Kampus, Industri dan Instansi
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed"
                    >
                        KOMPUTECHLIFT berpengalaman penuh dalam penyediaan, instalasi kustom, maintenance berkala, hingga modernisasi sistem lift demi menjamin keselamatan mobilitas vertikal Anda.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <a
                            href="https://wa.me/628xxxxxxxxxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span>Konsultasi WhatsApp</span>
                        </a>

                        <a
                            href="#projects"
                            onClick={handleScrollToProjects}
                            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-base bg-white hover:bg-gray-50 transition-all duration-300"
                        >
                            <span>Lihat Project</span>
                            <FaArrowRight className="text-sm text-gray-400" />
                        </a>
                    </motion.div>

                    {/* Mini Trust Badges */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaAward className="text-xl text-blue-600 flex-none" />
                            <span className="text-sm font-semibold text-gray-800">Teknisi Sertifikasi K3</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaTools className="text-xl text-blue-600 flex-none" />
                            <span className="text-sm font-semibold text-gray-800">Sparepart Original</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                            <span className="text-sm font-semibold text-gray-800">Response Team 24/7</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* KOLOM KANAN: ELEVATOR VISUAL COMPONENT */}
                <motion.div
                    className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {/* Menggunakan max-w-md standar (sekitar 448px) dan tinggi h-96 standar */}
                    <motion.div
                        className="w-full max-w-md h-96 bg-slate-900 rounded-2xl shadow-2xl relative border-4 border-slate-800 flex flex-col justify-between p-8 text-white"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Atas */}
                        <div className="flex justify-between items-start border-b border-slate-700 pb-4">
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">System Status</p>
                                <span className="text-emerald-400 font-mono text-sm font-bold">ONLINE</span>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 px-3 py-1 rounded">
                                <span className="text-lg font-mono text-blue-400 font-bold">FLR 18</span>
                            </div>
                        </div>

                        {/* Tengah (Simbol Lift) */}
                        <div className="relative flex justify-center items-center h-32">
                            <div className="absolute inset-y-0 w-0.5 bg-slate-700" />
                            <motion.div
                                className="w-20 h-28 bg-blue-600 rounded shadow-lg border border-blue-400 flex items-center justify-center z-10"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-0.5 h-full bg-blue-400 opacity-50" />
                            </motion.div>
                        </div>

                        {/* Bawah */}
                        <div className="pt-4 border-t border-slate-700 flex justify-between items-center text-xs">
                            <span className="font-bold tracking-wider text-white">KOMPUTECH LIFT</span>
                            <span className="text-slate-400">Cap. 1600 KG</span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}