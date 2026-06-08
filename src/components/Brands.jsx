"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaMapMarkerAlt, FaImages } from "react-icons/fa";

export default function Brands() {
    const BRAND_IMAGES = [
        "LiftBarangHope3.jpeg",
        "PTnatura2.jpeg"
    ];

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
            transition: { staggerChildren: 0.02 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeOut" }
        }
    };

    return (
        <section
            id="brands"
            // KUNCI UTAMA: Tetap 1 layar penuh (Full Screen) & Background Putih Bersih
            className="relative min-h-screen lg:h-screen lg:min-h-0 w-full bg-white flex items-center justify-center py-12 lg:py-0 overflow-hidden"
        >
            {/* Kontainer Utama */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:max-h-[85vh] flex flex-col justify-center space-y-6 relative z-10">

                {/* HEADER SECTION */}
                <div className="max-w-3xl space-y-1 text-left">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs block">
                        Pilihan Manufaktur & Ekosistem
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight uppercase">
                        Sistem Komponen & Unit
                    </h2>
                    <p className="text-gray-500 font-normal text-xs sm:text-sm leading-relaxed max-w-2xl">
                        Fleksibilitas opsi pengadaan unit utuh maupun komponen suku cadang dari produsen terkemuka untuk menyesuaikan anggaran gedung Anda melalui jaringan <strong className="text-gray-900 font-bold">CV. Faza Jaya Indonesia (FJI)</strong>.
                    </p>
                </div>

                {/* MAIN LAYOUT - Grid 12 kolom yang presisi */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">

                    {/* SISI KIRI: KUMPULAN BRAND LOKAL & IMPORT (Mengambil 8 Kolom) */}
                    <div className="lg:col-span-8 flex flex-col justify-between bg-gray-50/50 border border-gray-100 p-5 rounded-2xl shadow-xs">

                        {/* BAGIAN A: BRAND LOKAL */}
                        <div className="space-y-2.5 mb-5 lg:mb-4">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200/60">
                                <FaMapMarkerAlt className="text-blue-600 text-xs sm:text-sm flex-none" />
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-wide">Brand & Fabrikasi Lokal</h3>
                            </div>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {localBrands.map((brand) => (
                                    <motion.div
                                        key={brand.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -1 }}
                                        className="bg-white border border-gray-200/80 rounded-xl p-3 flex flex-col justify-center h-14 lg:h-16 transition-all duration-300 group hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/5 cursor-pointer"
                                    >
                                        <span className="font-sans font-black text-[8px] sm:text-[9px] tracking-wider text-gray-400 group-hover:text-blue-600 transition-colors uppercase">
                                            {brand.short}
                                        </span>
                                        <span className="text-xs sm:text-sm text-gray-900 font-bold tracking-tight mt-0.5">
                                            {brand.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* BAGIAN B: BRAND IMPORT */}
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200/60">
                                <FaGlobe className="text-gray-500 text-xs sm:text-sm flex-none" />
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-wide">Prinsipal Global (CBU)</h3>
                            </div>
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {importBrands.map((brand) => (
                                    <motion.div
                                        key={brand.id}
                                        variants={itemVariants}
                                        whileHover={{ y: -1 }}
                                        className="bg-white border border-gray-200/80 rounded-xl p-3 flex flex-col justify-center h-14 lg:h-16 transition-all duration-300 group hover:border-gray-900 hover:shadow-md hover:shadow-gray-900/5 cursor-pointer"
                                    >
                                        <span className="font-sans font-black text-[8px] sm:text-[9px] tracking-wider text-gray-400 group-hover:text-gray-900 transition-colors uppercase">
                                            {brand.short}
                                        </span>
                                        <span className="text-xs sm:text-sm text-gray-900 font-bold tracking-tight mt-0.5 line-clamp-1">
                                            {brand.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                    </div>

                    {/* SISI KANAN: DOKUMENTASI FOTO DENGAN UKURAN FIXED (Mengambil 4 Kolom) */}
                    <div className="lg:col-span-4 bg-gray-50/50 border border-gray-100 p-5 rounded-2xl shadow-xs flex flex-col justify-between">
                        <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200/60 mb-4">
                            <FaImages className="text-gray-500 text-xs sm:text-sm flex-none" />
                            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wide">Dokumentasi Unit</h3>
                        </div>

                        {/* Container khusus Foto: Menggunakan w-full dan h-full terbagi rata secara otomatis */}
                        <div className="flex flex-col gap-3 grow justify-center">
                            {BRAND_IMAGES.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    // SOLUSI FIXED: Di desktop tingginya dikunci presisi h-[115px] atau h-[120px] agar pas seimbang dengan tinggi box kiri
                                    className="relative h-28 lg:h-45 w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-xs group cursor-pointer"
                                >
                                    <img
                                        src={`/image/${img}`}
                                        alt={`Komponen Lift ${idx + 1}`}
                                        // object-cover memastikan gambar proporsional tanpa gepeng
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Efek overlay gloss tipis saat di-hover agar lebih menarik */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}