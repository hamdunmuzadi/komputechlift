"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function TrustedBy() {
    const clientsData = [
        { id: 1, name: "Kementerian RI", shortName: "INSTANSI GOV", icon: <FaBuilding /> },
        { id: 2, name: "Universitas Negeri", shortName: "UNIVERSITAS", icon: <FaUniversity /> },
        { id: 3, name: "PT Sektor Swasta Tbk", shortName: "KORPORASI", icon: <FaBuilding /> },
        { id: 4, name: "Rumah Sakit Daerah", shortName: "MEDIKA CENTER", icon: <FaBuilding /> },
        { id: 5, name: "Institut Teknologi", shortName: "INSTITUT TEK", icon: <FaGraduationCap /> },
        { id: 6, name: "Industrial Estate", shortName: "PABRIK LOGISTIK", icon: <FaBuilding /> },
        { id: 7, name: "Hotel & Resort", shortName: "HOTEL GROUP", icon: <FaBuilding /> },
        { id: 8, name: "Dinas Pekerjaan Umum", shortName: "DPU GOV", icon: <FaBuilding /> },
    ];

    // Varian animasi scroll reveal untuk container grid
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-12">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Kemitraan & Kolaborasi
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        Trusted by Various Institutions and Companies
                    </h2>
                    <p className="text-gray-500 font-normal text-sm max-w-xl mx-auto">
                        Amanah besar dari berbagai sektor yang terus kami jaga dengan memberikan standar pelayanan rekayasa lift terbaik di Indonesia.
                    </p>
                </div>

                {/* GRID CLIENT LOGO */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {clientsData.map((client) => (
                        <motion.div
                            key={client.id}
                            whileHover={{ y: -3 }}
                            className="bg-white border border-gray-200/60 rounded-xl p-6 min-h-24 flex flex-col items-center justify-center gap-2 shadow-sm transition-all duration-300 group hover:border-blue-400/60 hover:shadow-md"
                        >
                            {/* Placeholder Kombinasi Icon & Teks */}
                            {/* Catatan: Filter grayscale diaktifkan secara bawaan lewat class 'grayscale contrast-75', dan menjadi berwarna saat hover melalui 'group-hover:grayscale-0' */}
                            <div className="flex items-center gap-2 text-gray-400 grayscale contrast-75 group-hover:grayscale-0 group-hover:text-blue-600 transition-all duration-300">
                                <span className="text-lg">{client.icon}</span>
                                <span className="font-mono font-black text-xs tracking-wider">
                                    {client.shortName}
                                </span>
                            </div>

                            {/* Nama Panjang Sub-Keterangan */}
                            <span className="text-[10px] text-gray-400 font-medium tracking-wide text-center opacity-70 group-hover:opacity-100 group-hover:text-gray-700 transition-colors">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}