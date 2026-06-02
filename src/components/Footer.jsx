"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Layanan Rekayasa", href: "#services" },
        { name: "Kemitraan Brand", href: "#brands" },
        { name: "Referensi Project", href: "#projects" },
        { name: "Dokumen Legalitas", href: "#documents" },
        { name: "Hubungi Kami", href: "#contact" },
    ];

    const socialLinks = [
        { id: 1, icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
        { id: 2, icon: <FaInstagram />, href: "https://instagram.com/rahmat.elevator", label: "Instagram" },
        { id: 3, icon: <FaWhatsapp />, href: "https://wa.me/6281234567890", label: "WhatsApp" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
            {/* Ornamen Grafis Halus Latar Belakang */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full space-y-12 relative z-10">

                {/* BAGIAN ATAS: GRID INFORMASI */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">

                    {/* KOLOM 1: BRAND IDENTITY (5 COLS) */}
                    <div className="md:col-span-5 space-y-5">
                        <div className="flex items-center gap-2.5 text-white">
                            {/* Placeholder Logo Grafik */}
                            <div className="bg-blue-600 p-2 rounded-lg text-white font-black tracking-tighter text-sm">
                                KT
                            </div>
                            <span className="font-sans font-black text-lg tracking-tight">
                                KOMPUTECH<span className="text-blue-500">LIFT</span>
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
                            Penyedia solusi transportasi vertikal andal yang mengintegrasikan pengadaan unit rakitan lokal resmi (TKDN) maupun unit import CBU premium bersertifikasi K3 nasional.
                        </p>

                        {/* SOSIAL MEDIA ICON HUB */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((soc) => (
                                <motion.a
                                    key={soc.id}
                                    href={soc.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={soc.label}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 p-3 rounded-xl text-sm transition-colors duration-300 shadow-md"
                                >
                                    {soc.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* KOLOM 2: QUICK LINKS (3 COLS) */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-wider uppercase">
                            Navigasi Cepat
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="hover:text-blue-400 transition-colors duration-200 block w-fit"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* KOLOM 3: KONTAK OPERASIONAL (4 COLS) */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-wider uppercase">
                            Hub Logistik & Informasi
                        </h4>
                        <ul className="space-y-3.5 text-xs">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-blue-500 mt-0.5 flex-none" />
                                <div className="space-y-1">
                                    <a
                                        href="https://share.google/vZ3ICXkXOp4iZMRmf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="leading-relaxed hover:text-blue-400 transition-colors font-semibold text-white block"
                                    >
                                        Komputec Liftech
                                    </a>
                                    <p className="leading-relaxed text-slate-400">
                                        Kp. Citaman, Kec. Nagreg, Kabupaten Bandung, Jawa Barat 40397
                                    </p>
                                    {/* Badge Rating Google Maps untuk Social Proof Instan */}
                                    <span className="inline-flex items-center gap-1 text-[10px] bg-blue-950 border border-blue-900 text-blue-400 px-2 py-0.5 rounded font-mono font-bold mt-1">
                                        ★ 5.0 Google Review
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-500 flex-none" />
                                <a href="mailto:info@komputechlift.co.id" className="hover:text-blue-400 transition-colors">
                                    info@komputechlift.co.id
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="md:col-span-4 space-y-4">
                    <h4 className="text-white font-bold text-xs tracking-wider uppercase">
                        Hub Logistik & Informasi
                    </h4>
                    <ul className="space-y-3.5 text-xs">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-blue-500 mt-0.5 flex-none" />
                            <a
                                href="https://share.google/vZ3ICXkXOp4iZMRmf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leading-relaxed hover:text-blue-400 transition-colors"
                            >
                                Komputec Headquarters — Klik untuk melihat rute dan lokasi peta fisik kami.
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-blue-500 flex-none" />
                            <a href="mailto:info@komputechlift.co.id" className="hover:text-blue-400 transition-colors">
                                info@komputechlift.co.id
                            </a>
                        </li>
                    </ul>
                </div>

                {/* BAGIAN BAWAH: COPYRIGHT & BACK TO TOP */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-slate-500 font-normal text-center sm:text-left">
                        &copy; {currentYear} KOMPUTECHLIFT. All rights reserved. Hak Cipta Dilindungi Undang-Undang.
                    </p>

                    {/* TOMBOL KEMBALI KE ATAS */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 text-slate-400 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 shadow-inner transition-colors duration-300"
                    >
                        <span>Kembali ke Atas</span>
                        <FaArrowUp className="text-[10px]" />
                    </motion.button>
                </div>

            </div>
        </footer>
    );
}