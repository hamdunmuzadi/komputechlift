"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaAward, FaShieldAlt, FaGlobe, FaCheckCircle } from "react-icons/fa";

export default function AboutSummary() {
    // Variasi animasi untuk efek Scroll Reveal (Fade-Up)
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
        })
    };

    const commitments = [
        {
            icon: <FaShieldAlt className="text-2xl text-blue-600" />,
            title: "Fokus Keselamatan Mutlak",
            desc: "Setiap instalasi dan pemeliharaan mengacu pada standar regulasi K3 nasional dan sertifikasi internasional demi keamanan pengguna."
        },
        {
            icon: <FaAward className="text-2xl text-blue-600" />,
            title: "Komitmen Kualitas",
            desc: "Kami hanya menggunakan material tangguh dan komponen mekanis presisi tinggi yang menjamin masa pakai lift lebih panjang."
        },
        {
            icon: <FaGlobe className="text-2xl text-blue-600" />,
            title: "Opsi Lokal & Import",
            desc: "Menyediakan fleksibilitas unit lift rakitan lokal berkualitas tinggi maupun unit import utuh (CBU) dari brand global ternama."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* GRID UTAMA: GAMBAR/KARTU LOGO KIRI & TEXT KANAN */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* KOLOM KIRI: VISUAL MODERN CORPORATE CARD */}
                    <motion.div
                        className="lg:col-span-5 relative flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariants}
                    >
                        {/* Kartu Utama Mewakili Representasi Fisik/Kantor */}
                        <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden h-96 flex flex-col justify-between">
                            {/* Pola Dekoratif */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-10 rounded-full blur-2xl" />

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <FaBuilding className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg tracking-wide">KOMPUTECHLIFT</h4>
                                    <p className="text-xs text-gray-400">Headquarters & Engineering Core</p>
                                </div>
                            </div>

                            {/* Stat Pengalaman Singkat di dalam Card */}
                            <div className="space-y-4">
                                <p className="text-sm text-gray-300 leading-relaxed font-light">
                                    "Menjadi mitra andalan bagi puluhan instansi dan korporasi dalam mentransformasi mobilitas vertikal gedung secara aman dan efisien."
                                </p>
                                <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="block text-3xl font-black text-blue-400">100%</span>
                                        <span className="text-xs text-gray-400 font-medium">Sertifikasi K3 & Izin Layak K3</span>
                                    </div>
                                    <div>
                                        <span className="block text-3xl font-black text-blue-400">24/7</span>
                                        <span className="text-xs text-gray-400 font-medium">Technical Support Readiness</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aksen Kotak Kecil di Belakang untuk Efek Kedalaman */}
                        <div className="absolute -bottom-4 -right-4 w-full max-w-md h-96 bg-blue-600 rounded-2xl -z-10 opacity-5 hidden sm:block" />
                    </motion.div>

                    {/* KOLOM KANAN: PROFIL PERUSAHAAN & STRATEGI */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            className="space-y-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUpVariants}
                        >
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                                Tentang Perusahaan
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                Mitra Rekayasa Lift Terpercaya untuk Keberlanjutan Struktur Anda
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-normal">
                                KOMPUTECHLIFT adalah perusahaan penyedia solusi transportasi vertikal yang berfokus penuh pada penyediaan, perancangan instalasi, pemeliharaan preventif, hingga modernisasi lift. Kami melayani kebutuhan sektor publik, kawasan pendidikan tinggi, area industri berat, hingga gedung pemerintahan.
                            </p>
                        </motion.div>

                        {/* List Fitur / Point Pendek */}
                        <motion.div
                            className="grid sm:grid-cols-2 gap-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUpVariants}
                        >
                            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                <FaCheckCircle className="text-emerald-500 flex-none" />
                                <span>Teknologi Hemat Energi (Inverter VVVF)</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                <FaCheckCircle className="text-emerald-500 flex-none" />
                                <span>Kepatuhan Regulasi Lift Indonesia</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                <FaCheckCircle className="text-emerald-500 flex-none" />
                                <span>Kustomisasi Desain Kabin & Interior</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                                <FaCheckCircle className="text-emerald-500 flex-none" />
                                <span>Jaminan Ketersediaan Suku Cadang</span>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* BAGIAN BAWAH: 3 PREMIUM CORPORATE CARDS (KOMITMEN & LOKAL/IMPORT) */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {commitments.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                        >
                            <div className="bg-white border border-gray-100 p-4 inline-block rounded-xl shadow-sm mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-normal">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}