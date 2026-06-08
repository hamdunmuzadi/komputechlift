"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

export default function Contact() {
    const contactInfo = [
        {
            id: 1,
            icon: <FaWhatsapp className="text-2xl text-green-600" />,
            title: "Komputeclift",
            detail: "+62 817-610-929", // Nomor telepon resmi Komputec
            subDetail: "Respon cepat via Chat / Call",
            href: "https://wa.me/62817610929", // Tautan langsung ke WhatsApp tanpa tanda strip
            bgIcon: "bg-green-50 border-green-100"
        },
        {
            id: 2,
            icon: <FaWhatsapp className="text-2xl text-green-600" />,
            title: "IMAM",
            detail: "+62 857-9516-0038", // Nomor telepon resmi Komputec
            subDetail: "Respon cepat via Chat / Call",
            href: "https://wa.me/6285795160038", // Tautan langsung ke WhatsApp tanpa tanda strip
            bgIcon: "bg-green-50 border-green-100"
        },
        {
            id: 3,
            icon: <FaEnvelope className="text-2xl text-blue-600" />,
            title: "Email Korespondensi",
            detail: "komputeclift@gmail.com",
            subDetail: "Untuk proposal & undangan tender",
            href: "mailto:komputeclift@gmail.com",
            bgIcon: "bg-blue-50 border-blue-100"
        },
        {
            id: 4,
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
        // Menggunakan h-screen agar pas satu layar, items-center agar vertikal sentris
        <section id="contact" className="h-screen py-10 bg-white relative flex flex-col justify-center overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 w-full space-y-8">

                {/* HEADER SECTION - Dibuat lebih ringkas */}
                <div className="text-center space-y-2">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-[10px] block">
                        Hubungi Hub Operasional
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        Mulai Konsultasi Modernisasi
                    </h2>
                </div>

                {/* CONTACT CARDS GRID - Padding dikurangi agar lebih hemat tempat */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {contactInfo.map((item) => (
                        <motion.a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col justify-between hover:border-blue-400/50 transition-all group"
                        >
                            <div className="space-y-3">
                                <div className={`p-2 border inline-block rounded-lg ${item.bgIcon}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-[9px] font-bold text-gray-400 uppercase">{item.title}</h3>
                                    <p className="text-sm font-extrabold text-gray-900 group-hover:text-blue-600 truncate">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA BANNER - Disederhanakan tinggi dan padding-nya */}
                <div className="bg-slate-900 rounded-2xl p-6 text-center relative overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                        Siap Melakukan Pengadaan Unit Lift?
                    </h3>
                    <p className="text-slate-400 text-xs mb-4 max-w-lg mx-auto">
                        Dapatkan penawaran harga resmi (Quotation) yang disesuaikan dengan kapasitas dan regulasi TKDN.
                    </p>
                    <a
                        href="https://wa.me/62817610929"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        <span>Minta Penawaran Harga</span>
                        <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* FLOATING BUTTON (Tetap di posisi fixed) */}
        </section>
    );
}