"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTools, FaWrench, FaHistory, FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
    const serviceImages = [
        "PTnatura6.jpeg",
        "HomeElevator4.jpeg",
        "elevator2.jpeg",
        "HomeElevator10.jpeg"
    ];

    const servicesData = [
        {
            id: 1,
            slug: "instalasi-lift",
            icon: <FaTools className="text-xl sm:text-2xl" />,
            title: "Instalasi Lift Baru",
            desc: "Layanan perancangan, pengadaan unit, hingga pemasangan konstruksi lift secara kustom menggunakan sistem terintegrasi FUJI KOMPUTEC.",
            features: ["Sertifikasi kelayakan K3", "Teknologi hemat energi"],
            image: `/image/${serviceImages[0]}`
        },
        {
            id: 2,
            slug: "maintenance-lift",
            icon: <FaWrench className="text-xl sm:text-2xl" />,
            title: "Maintenance Berkala",
            desc: "Pemeliharaan preventif secara rutin untuk menjaga keandalan sistem mekanis dan elektrikal mikro-kontroler inverter FUJI.",
            features: ["Kunjungan bulanan", "Modul safety gear"],
            image: `/image/${serviceImages[1]}`
        },
        {
            id: 3,
            slug: "modernisasi-lift",
            icon: <FaHistory className="text-xl sm:text-2xl" />,
            title: "Modernisasi Sistem",
            desc: "Pembaruan komponen lift lama ke sistem kontrol cerdas digital FUJI JPN terbaru tanpa membongkar total struktur fisik.",
            features: ["Kecepatan respon naik", "Indikator digital baru"],
            image: `/image/${serviceImages[2]}`
        },
        {
            id: 4,
            slug: "rekondisi-lift",
            icon: <FaWrench className="text-xl sm:text-2xl" />,
            title: "Repair & Troubleshooting",
            desc: "Layanan penanganan darurat dan perbaikan cepat oleh teknisi spesialis papan kontrol FUJI untuk mengatasi malfungsi.",
            features: ["Analisis error code", "Response team 24/7"],
            image: `/image/${serviceImages[3]}`
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section
            id="services"
            className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden border-b border-gray-100 pt-10 pb-6"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center h-full space-y-4 sm:space-y-6">

                {/* HEADER SECTION */}
                <div className="max-w-2xl mx-auto text-center space-y-1 sm:space-y-2">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-[10px] sm:text-xs block">
                        Spesialisasi & Solusi Vertikal
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
                        Layanan Rekayasa Lift Menyeluruh
                    </h2>
                    <p className="text-gray-500 font-normal text-xs sm:text-sm max-w-xl mx-auto leading-relaxed hidden sm:block">
                        Kami memastikan mobilitas vertikal gedung Anda beroperasi pada efisiensi maksimal dan keamanan mutlak jangka panjang.
                    </p>
                </div>

                {/* GRID LAYOUT LAYANAN */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {servicesData.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block h-full cursor-pointer group"
                        >
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:border-blue-700 h-full relative"
                            >
                                {/* Solusi Mutakhir: Menggunakan Grid Sistem murni agar tidak terdorong keluar layar */}
                                <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center h-full">

                                    {/* Bagian Teks & Konten Kiri (Memakan 8 Kolom Permanen) */}
                                    <div className="col-span-8 space-y-2 sm:space-y-3">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="bg-white border border-gray-100 p-1.5 sm:p-2 inline-block rounded-lg shadow-sm text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300 flex-none">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xs sm:text-base font-black text-gray-900 group-hover:text-white uppercase tracking-tight transition-colors duration-300 line-clamp-1">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 group-hover:text-blue-100 text-[10px] sm:text-xs leading-relaxed font-normal line-clamp-2 sm:line-clamp-3 transition-colors duration-300">
                                            {service.desc}
                                        </p>

                                        {/* Fitur Unggulan Mini */}
                                        <div className="pt-1.5 border-t border-gray-200/60 group-hover:border-blue-500/50 flex flex-col gap-0.5 sm:gap-1 transition-colors duration-300">
                                            {service.features.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-[9px] sm:text-[11px] text-gray-700 group-hover:text-white font-medium transition-colors duration-300">
                                                    <FaCheckCircle className="text-blue-500 group-hover:text-blue-200 flex-none text-[8px] sm:text-[9px]" />
                                                    <span className="line-clamp-1">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bagian Kanan: Wadah Foto (Memakan 4 Kolom Permanen - Dijamin Anti Sembunyi) */}
                                    <div className="col-span-4 w-full aspect-square rounded-lg overflow-hidden border border-white bg-gray-200 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 block">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                                        {/* Tanda Panah Penunjuk Klik */}
                                        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/90 group-hover:bg-white text-gray-400 group-hover:text-blue-600 p-1 rounded-md shadow-sm transition-all duration-300">
                                            <FiArrowRight className="text-[8px] sm:text-xs transform group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}