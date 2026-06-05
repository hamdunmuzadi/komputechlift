"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function Brands() {
    const localBrands = [
        { id: 1, name: "Fuji Komputec", short: "FUJI KOMPUTEC" },
        { id: 2, name: "FUJI JPN", short: "FUJI JPN" },
    ];

    const importBrands = [
        { id: 1, name: "Mitsubishi Elevator", short: "MITSUBISHI" },
        { id: 2, name: "Otis Worldwide", short: "OTIS" },
        { id: 3, name: "Schindler Group", short: "SCHINDLER" },
        { id: 4, name: "Kone Corporation", short: "KONE" },
        { id: 5, name: "Thyssenkrupp / TKE", short: "TKE" },
        { id: 6, name: "Fuji Lift Japan", short: "FUJI" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="brands" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION - Kiri rata (Left-aligned) agar selaras dengan Services & Documents */}
                <div className="max-w-3xl space-y-3">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-[11px] block">
                        Pilihan Manufaktur & Ekosistem
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight uppercase">
                        Sistem Komponen & Unit
                    </h2>
                    <p className="text-gray-500 font-normal text-sm leading-relaxed">
                        Fleksibilitas opsi pengadaan unit utuh maupun komponen suku cadang dari produsen terkemuka untuk menyesuaikan anggaran dan spesifikasi teknis gedung Anda melalui jaringan <strong>CV. Faza Jaya Indonesia (FJI)</strong>.
                    </p>
                </div>

                {/* LAYOUT MULTI-COLUMN SEJAJAR */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* KOLOM KIRI: BRAND LIFT LOKAL (Porsi 5 Kolom Grid) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <FaMapMarkerAlt className="text-blue-600 text-sm flex-none" />
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Brand & Fabrikasi Lokal</h3>
                                <p className="text-xs text-gray-400">Integrasi komponen dalam negeri standar TKDN & Sertifikasi K3</p>
                            </div>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {localBrands.map((brand) => (
                                <motion.div
                                    key={brand.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col justify-between h-28 transition-all duration-300 group hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5"
                                >
                                    <span className="font-sans font-black text-xs tracking-wider text-gray-400 group-hover:text-blue-600 transition-colors">
                                        {brand.short}
                                    </span>
                                    <span className="text-[11px] text-gray-900 font-bold tracking-tight">
                                        {brand.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* KOLOM KANAN: BRAND LIFT IMPORT (Porsi 7 Kolom Grid) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <FaGlobe className="text-gray-900 text-sm flex-none" />
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Prinsipal Global (CBU)</h3>
                                <p className="text-xs text-gray-400">Dukungan opsi unit utuh built-up import teknologi internasional</p>
                            </div>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {importBrands.map((brand) => (
                                <motion.div
                                    key={brand.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col justify-between h-24 transition-all duration-300 group hover:border-gray-900 hover:shadow-lg hover:shadow-gray-900/5"
                                >
                                    <span className="font-sans font-black text-[10px] tracking-wider text-gray-400 group-hover:text-gray-900 transition-colors">
                                        {brand.short}
                                    </span>
                                    <span className="text-[11px] text-gray-900 font-bold tracking-tight line-clamp-1">
                                        {brand.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}