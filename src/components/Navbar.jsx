"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Layanan", href: "#services" },
        // { name: "Keunggulan", href: "#why-choose-us" },
        { name: "Brand", href: "#brands" },
        { name: "Project", href: "#projects" },
        // { name: "Dokumen", href: "#documents" },
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
                    <a href="#" className="flex items-center gap-2.5 group">
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
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="text-xs font-bold text-gray-600 hover:text-blue-600 tracking-wide uppercase transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* DESKTOP CTA BUTTON */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/62817610929"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/10 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <FaPhoneAlt className="text-[10px]" />
                            <span>Hubungi CV. FJI</span>
                        </a>
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
                        className="fixed top-17px left-0 right-0 bg-white border-b border-gray-100 z-30 shadow-xl p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wide py-2 border-b border-gray-50 last:border-none"
                            >
                                {link.name}
                            </a>
                        ))}
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