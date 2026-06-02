"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

export default function Contact() {
    const contactInfo = [
        {
            id: 1,
            icon: <FaWhatsapp className="text-2xl text-green-600" />,
            title: "WhatsApp Hotline",
            detail: "+62 812-3456-7890",
            subDetail: "Respon cepat via Chat / Call",
            href: "https://wa.me/6281234567890",
            bgIcon: "bg-green-50 border-green-100"
        },
        {
            id: 2,
            icon: <FaEnvelope className="text-2xl text-blue-600" />,
            title: "Email Korespondensi",
            detail: "info@komputechlift.co.id",
            subDetail: "Untuk proposal & undangan tender",
            href: "mailto:info@komputechlift.co.id",
            bgIcon: "bg-blue-50 border-blue-100"
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt className="text-2xl text-slate-700" />,
            title: "Workshop & Kantor Operasional",
            detail: "Komputec Nagreg",
            subDetail: "Kp. Citaman, Kec. Nagreg, Kab. Bandung", // Alamat fisik ringkas untuk kartu
            href: "https://share.google/vZ3ICXkXOp4iZMRmf", // Tautan Google Maps Anda
            bgIcon: "bg-slate-50 border-slate-100"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Hubungi Hub Operasional
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Mulai Konsultasi Modernisasi & Instalasi
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Tim engineer dan tim sales representatif kami siap membantu kalkulasi traffic gedung serta estimasi anggaran proyek Anda secara transparan.
                    </p>
                </div>

                {/* CONTACT CARDS GRID */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {contactInfo.map((item) => (
                        <motion.a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white hover:border-blue-400/50 transition-all duration-300 group"
                        >
                            <div className="space-y-6">
                                {/* Badge Icon */}
                                <div className={`p-4 border inline-block rounded-xl shadow-inner ${item.bgIcon}`}>
                                    {item.icon}
                                </div>

                                {/* Meta Teks */}
                                <div className="space-y-1.5">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 wrap-break-word">
                                        {item.detail}
                                    </p>
                                    <p className="text-xs text-gray-500 font-normal">
                                        {item.subDetail}
                                    </p>
                                </div>
                            </div>

                            {/* Tanda Panah Mikro Interaktif */}
                            <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                <span>Hubungi Sekarang</span>
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA BESAR (BIG CORPORATE CTA BANNER) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
                >
                    {/* Aksen Pola Dekoratif */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size[1.5rem_1.5rem]" />
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-xs font-semibold border border-white/10">
                            <FaClock className="text-blue-400" />
                            <span>Jam Kerja: Senin - Jumat (08.00 - 17.00 WIB)</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Siap Melakukan Pengadaan Unit Lift Tahun Ini?
                        </h3>
                        <p className="text-slate-400 text-sm font-normal leading-relaxed">
                            Dapatkan estimasi penawaran harga resmi (Quotation) terperinci yang disesuaikan dengan kapasitas beban, jumlah lantai, dan regulasi TKDN lokal.
                        </p>
                        <div className="pt-4">
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <span>Minta Penawaran Harga Resmi</span>
                                <FaArrowRight className="text-xs" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* FLOATING WHATSAPP BUTTON WITH PULSE ANIMATION */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
                {/* Lingkaran Pulse Efek Gelombang */}
                <div className="absolute w-16 h-16 bg-green-500 rounded-full animate-ping opacity-25 pointer-events-none" />

                {/* Tombol Utama */}
                <motion.a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors relative group"
                    title="Hubungi Kami via WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />

                    {/* Tooltip kecil saat hover di desktop */}
                    <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md border border-slate-800">
                        Tanya Teknisi Sekarang
                    </span>
                </motion.a>
            </div>
        </section>
    );
}