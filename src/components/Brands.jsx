"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function Brands() {
    // Data Placeholder Logo Brand Lokal
    const localBrands = [
        { id: 1, name: "Komputec Component A", short: "KCA" },
        { id: 2, name: "Nusantara Elevator Parts", short: "NEP" },
        { id: 3, name: "Indo Lift Perkasa", short: "ILP" },
        { id: 4, name: "Sinergi Tekno Vertikal", short: "STV" },
    ];

    // Data Placeholder Logo Brand Import (Global)
    const importBrands = [
        { id: 1, name: "Mitsubishi Elevator", short: "MITSUBISHI" },
        { id: 2, name: "Otis Worldwide", short: "OTIS" },
        { id: 3, name: "Schindler Group", short: "SCHINDLER" },
        { id: 4, name: "Kone Corporation", short: "KONE" },
        { id: 5, name: "Thyssenkrupp / TKE", short: "TKE" },
        { id: 6, name: "Fuji Lift Japan", short: "FUJI" },
    ];

    // Variasi animasi untuk memunculkan grid secara halus
    const gridVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="brands" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-20">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Pilihan Manufaktur & Ekosistem
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Didukung oleh Brand Lift Terbaik
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Fleksibilitas opsi pengadaan unit utuh maupun komponen suku cadang dari produsen terkemuka untuk menyesuaikan anggaran dan spesifikasi teknis gedung Anda.
                    </p>
                </div>

                {/* KATEGORI 1: BRAND LIFT LOKAL */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                        <div className="bg-blue-600 text-white p-2 rounded-lg">
                            <FaMapMarkerAlt className="text-sm" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Brand & Komponen Lokal</h3>
                            <p className="text-xs text-gray-500">Rakitan domestik dengan ketersediaan suku cadang cepat & sesuai regulasi TKDN / K3</p>
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {localBrands.map((brand) => (
                            <motion.div
                                key={brand.id}
                                whileHover={{ scale: 1.04, y: -2 }}
                                className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center min-h-32 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Efek Garis Aksen Biru Saat Hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                {/* Placeholder Logo Text (Sangat mudah diganti tag <img> / <Image>) */}
                                <span className="font-mono font-black text-xl tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors">
                                    {brand.short}
                                </span>
                                <span className="text-[10px] text-gray-400 mt-2 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* KATEGORI 2: BRAND LIFT IMPORT */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                        <div className="bg-slate-800 text-white p-2 rounded-lg">
                            <FaGlobe className="text-sm" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Brand Lift Import (CBU)</h3>
                            <p className="text-xs text-gray-500">Unit built-up utuh dari prinsipal global dengan reputasi teknologi internasional</p>
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {importBrands.map((brand) => (
                            <motion.div
                                key={brand.id}
                                whileHover={{ scale: 1.04, y: -2 }}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center min-h-28 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Efek Garis Aksen Biru Saat Hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                {/* Placeholder Logo Text */}
                                <span className="font-sans font-extrabold text-sm tracking-tight text-gray-500 group-hover:text-gray-900 transition-colors text-center">
                                    {brand.short}
                                </span>
                                <span className="text-[9px] text-gray-400 mt-1 font-normal text-center line-clamp-1">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}