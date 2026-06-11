"use client";

import Link from "next/link";
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

    // Array layanan untuk meningkatkan kekuatan SEO Internal Linking
    const services = [
        { name: "Home Elevator", href: "/services/home-elevator" },
        { name: "Instalasi Lift", href: "/services/instalasi-lift" },
        { name: "Lift Barang", href: "/services/lift-barang" },
        { name: "Lift Makanan", href: "/services/lift-makanan" },
        { name: "Maintenance Lift", href: "/services/maintenance-lift" },
        { name: "Modernisasi Lift", href: "/services/modernisasi-lift" },
        { name: "Rekondisi Lift", href: "/services/rekondisi-lift" },
    ];

    const socialLinks = [
        { id: 1, icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
        { id: 2, icon: <FaInstagram />, href: "https://www.instagram.com/rahmanelevators/", label: "Instagram" },
        { id: 3, icon: <FaWhatsapp />, href: "https://wa.me/62817610929", label: "WhatsApp" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
            {/* Ornamen Grafis Halus Latar Belakang */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 w-full space-y-12 relative z-10">

                {/* BAGIAN ATAS: GRID INFORMASI */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">

                    {/* KOLOM 1: BRAND IDENTITY (4 COLS) */}
                    <div className="md:col-span-4 space-y-5">
                        <div className="flex items-center gap-2.5 text-white">
                            <span className="font-sans font-black text-lg tracking-tight">
                                KOMPUTEC<span className="text-blue-500">LIFT</span>
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
                            Layanan transportasi vertikal andal oleh <strong>CV. Faza Jaya Indonesia (FJI)</strong>. Kami mengintegrasikan pengadaan unit rakitan lokal resmi (TKDN) maupun unit import CBU premium bersertifikasi K3 nasional.
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

                    {/* KOLOM 2: QUICK LINKS (2 COLS) */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-wider uppercase">
                            Navigasi Cepat
                        </h4>
                        <ul className="space-y-2.5 text-xs flex-nowrap">
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

                    {/* KOLOM 3: LAYANAN UTAMA (3 COLS) - Solusi untuk mempercepat indeks Google */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-wider uppercase">
                            Layanan Kami
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            {services.map((service, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={service.href}
                                        className="hover:text-blue-400 transition-colors duration-200 block w-fit"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* KOLOM 4: KONTAK OPERASIONAL (3 COLS) */}
                    <div className="md:col-span-3 space-y-4">
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
                                        Komputec Lift
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
                                <a href="mailto:komputeclift@gmail.com" className="hover:text-blue-400 transition-colors">
                                    komputeclift@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BAGIAN BAWAH: COPYRIGHT & BACK TO TOP */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-slate-500 font-normal text-center sm:text-left">
                        &copy; {currentYear} komputeclift. All rights reserved. Hak Cipta Dilindungi Undang-Undang.
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