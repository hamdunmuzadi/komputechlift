"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    // Efek untuk mendeteksi scroll (mengubah background & shadow)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Deteksi active section berdasarkan posisi scroll
            const scrollPosition = window.scrollY + 100;
            menuItems.forEach((item) => {
                const el = document.querySelector(item.href);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(item.name);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handler untuk smooth scroll
    const handleScrollTo = (e, href, name) => {
        e.preventDefault();
        setActiveSection(name);
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset ukuran tinggi navbar
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50 py-4 border-b border-gray-100"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO PERUSAHAAN */}
                <a
                    href="#home"
                    onClick={(e) => handleScrollTo(e, "#home", "Home")}
                    className="flex items-center gap-2.5 group"
                >
                    <div className="bg-blue-600 text-white p-2 rounded-lg shadow-md shadow-blue-200 transition-transform group-hover:scale-105">
                        <FiTrendingUp className="text-xl transform rotate-90" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-wider text-gray-900">
                        KOMPUTECH<span className="text-blue-600">LIFT</span>
                    </span>
                </a>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {menuItems.map((item) => (
                            <li key={item.name} className="relative">
                                <a
                                    href={item.href}
                                    onClick={(e) => handleScrollTo(e, item.href, item.name)}
                                    className={`text-sm font-semibold tracking-wide transition-colors duration-300 block py-2 ${activeSection === item.name
                                            ? "text-blue-600"
                                            : "text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    {item.name}
                                </a>
                                {/* Hover & Active Underline Animation */}
                                {activeSection === item.name && (
                                    <motion.div
                                        layoutId="activeUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA BUTTON WHATSAPP */}
                    <a
                        href="https://wa.me/628xxxxxxxxxx" // Ganti dengan nomor WA perusahaan
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        <FaWhatsapp className="text-lg" />
                        <span>Hubungi Kami</span>
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-2xl text-gray-800 p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* MOBILE DROPDOWN NAVIGATION */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4">
                            <ul className="space-y-3">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleScrollTo(e, item.href, item.name)}
                                            className={`block w-full py-3 px-4 rounded-xl text-base font-bold transition-all ${activeSection === item.name
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-gray-100">
                                <a
                                    href="https://wa.me/628xxxxxxxxxx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-md"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    <span>Hubungi Kami via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}