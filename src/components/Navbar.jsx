"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);

    const services = [
        {
            name: "HOME ELEVATOR",
            href: "/services/home-elevator",
        },
        {
            name: "INSTALASI LIFT",
            href: "/services/instalasi-lift",
        },
        {
            name: "LIFT BARANG",
            href: "/services/lift-barang",
        },
        {
            name: "LIFT MAKANAN",
            href: "/services/lift-makanan",
        },
        {
            name: "MAINTENANCE LIFT",
            href: "/services/maintenance-lift",
        },
        {
            name: "MODERNISASI LIFT",
            href: "/services/modernisasi-lift",
        },
        {
            name: "REKONDISI LIFT",
            href: "/services/rekondisi-lift",
        },
    ];

    const navLinks = [
        { name: "Brand", href: "/" },
        { name: "Project", href: "/#projects" },
        // { name: "Media", href: "/#media" },
        { name: "Konsultasi", href: "/#konsultasi" },
    ];



    // Mengatur efek background navbar saat di-scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

                    {/* LOGO BRAND */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        {/* <div className="bg-blue-600 p-2 rounded-lg text-white font-black tracking-tighter text-xs transition-transform group-hover:scale-105">
                            KT
                        </div> */}
                        <div className="flex flex-col">
                            <span className={`font-sans font-black text-base tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-gray-900 sm:text-gray-900"
                                }`}>
                                KOMPUTEC<span className="text-blue-600">LIFT</span>
                            </span>
                            <p className="text-black text-xs">CV. Faza Jaya Indonesia</p>
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs font-bold text-gray-600 hover:text-blue-600 tracking-wide uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* DROPDOWN LAYANAN */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServiceOpen(true)}
                            onMouseLeave={() => setIsServiceOpen(false)}
                        >
                            {/* Tombol */}
                            <button
                                className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-600 tracking-wide uppercase transition-all duration-200 cursor-pointer"
                            >
                                Layanan

                                <FaChevronDown
                                    className={`text-[10px] transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Hover Bridge */}
                            <div className="absolute top-full left-0 h-4 w-full" />

                            <AnimatePresence>
                                {isServiceOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 12 }}
                                        transition={{ duration: 0.2 }}
                                        className="
                    absolute
                    top-full
                    left-0
                    mt-4
                    w-96
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white/95
                    backdrop-blur-md
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    z-50
                "
                                    >
                                        {/* Header */}
                                        <div className="border-b border-gray-100 bg-linear-to-r from-blue-50 to-white px-6 py-5">
                                            <h3 className="font-bold text-gray-900">
                                                Layanan Lift & Elevator
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Solusi instalasi, modernisasi, maintenance, dan
                                                perbaikan lift untuk berbagai kebutuhan.
                                            </p>
                                        </div>

                                        {/* Menu */}
                                        <div className="grid grid-cols-2 gap-2 p-3">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="
                                group
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-4
                                py-3
                                transition-all
                                duration-200
                                hover:bg-blue-50
                                hover:shadow-sm
                            "
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                                                            {service.name}
                                                        </p>

                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                            Pelajari layanan
                                                        </p>
                                                    </div>

                                                    <span
                                                        className="
                                    translate-x-0
                                    text-blue-600
                                    opacity-0
                                    transition-all
                                    duration-200
                                    group-hover:translate-x-1
                                    group-hover:opacity-100
                                "
                                                    >
                                                        →
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                                            <Link
                                                href="/"
                                                className="
                            text-sm
                            font-semibold
                            text-blue-600
                            hover:text-blue-700
                        "
                                            >
                                                Kembali Ke Halaman Utama →
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* DESKTOP CTA BUTTON */}
                    <div className="hidden md:block">
                        <Link
                            href="https://wa.me/62817610929"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/10 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <FaPhoneAlt className="text-[10px]" />
                            <span>Hubungi CV. FJI</span>
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-700 p-1 text-xl focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* MOBILE DROP-DOWN MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed left-0 right-0 bg-white border-b border-gray-100 z-30 shadow-xl p-6 md:hidden flex flex-col gap-4 transition-all duration-300 ${isScrolled ? "top-16" : "top-20"
                            }`}
                    >
                        {/* <Link
                            href={"/"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wide py-2 border-b border-gray-50 last:border-none"
                        >
                            BERANDA
                        </Link> */}
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wide py-2 border-b border-gray-50 last:border-none"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-b border-gray-100 pb-2">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">
                                Layanan
                            </p>

                            {services.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <a
                            href="https://wa.me/62817610929"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-2 w-full text-center bg-blue-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl block shadow-lg shadow-blue-600/10"
                        >
                            Hubungi CV. FJI
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}