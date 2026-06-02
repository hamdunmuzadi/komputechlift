"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaArrowRight, FaPlayCircle, FaImages } from "react-icons/fa";

export default function MediaSocial() {
    const socialChannels = [
        {
            id: 1,
            platform: "YouTube",
            icon: <FaYoutube className="text-3xl text-red-600" />,
            handle: "KOMPUTECHLIFT Official",
            desc: "Tonton dokumentasi uji kelayakan fungsi (test commission), proses instalasi struktur lift di lapangan, dan panduan edukasi K3 lift.",
            stats: "Video Edukasi & Proyek",
            actionText: "Buka Channel YouTube",
            href: "https://youtube.com", // Ganti dengan link youtube asli perusahaan
            previewIcon: <FaPlayCircle className="text-5xl text-white/80 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
        },
        {
            id: 2,
            platform: "Instagram",
            icon: <FaInstagram className="text-3xl text-pink-600" />,
            handle: "@rahmat.elevator",
            desc: "Ikuti pembaruan aktivitas harian teknisi, dokumentasi serah terima unit lift baru, serta tips perawatan preventif ringan melalui reel dan feed.",
            stats: "Galeri Aktivitas Harian",
            actionText: "Follow Instagram",
            href: "https://www.instagram.com/rahmanelevators/",
            previewIcon: <FaImages className="text-5xl text-white/80 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="media" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Media & Dokumentasi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Edukasi & Aktivitas Digital Kami
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Kami percaya pada transparansi kerja. Lihat dokumentasi proyek riil dan edukasi seputar teknologi lift langsung melalui kanal media sosial resmi kami.
                    </p>
                </div>

                {/* SOCIAL PREVIEW CARDS */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {socialChannels.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                        >
                            {/* 1. AREA PREVIEW VISUAL MODERN */}
                            <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                {/* Overlay Grafis Gradasi */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

                                {/* Pola Garis Teknis Standar */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-linear(#3b82f6_1px,transparent_1px)] bg-size[1rem_1rem]" />

                                {/* Ikon Tengah Interaktif */}
                                <div className="relative z-20">
                                    {item.previewIcon}
                                </div>

                                {/* Badge Platform di Sudut Atas */}
                                <div className="absolute top-4 left-4 z-20 bg-white border border-gray-100 px-3 py-1 rounded-lg flex items-center gap-2 shadow-sm">
                                    {item.icon}
                                    <span className="font-extrabold text-xs text-gray-900 tracking-wide">{item.platform}</span>
                                </div>
                            </div>

                            {/* 2. AREA INFORMASI & KONTEN */}
                            <div className="p-8 flex-1 flex flex-col justify-between space-y-6 bg-gray-50 border-t border-gray-100">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {item.handle}
                                    </h3>
                                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 rounded-full">
                                        {item.stats}
                                    </span>
                                    <p className="text-gray-600 text-sm leading-relaxed font-normal pt-2">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* ACTION LINK BUTTON */}
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between w-full bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 px-5 py-3 rounded-xl font-bold text-sm text-gray-700 hover:text-blue-700 transition-all duration-300 shadow-sm"
                                >
                                    <span>{item.actionText}</span>
                                    <FaArrowRight className="text-xs text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}