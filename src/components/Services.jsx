"use client";

import { motion } from "framer-motion";
import { FaTools, FaWrench, FaHistory, FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
    const servicesData = [
        {
            id: 1,
            icon: <FaTools className="text-2xl text-blue-600" />,
            title: "Instalasi Lift Baru",
            desc: "Layanan perancangan, pengadaan unit, hingga pemasangan konstruksi lift secara kustom (lokal/import) dengan kalkulasi struktur presisi tinggi.",
            features: ["Sertifikasi kelayakan K3", "Opsi teknologi hemat energi", "Kustomisasi interior kabin"]
        },
        {
            id: 2,
            icon: <FaWrench className="text-2xl text-blue-600" />,
            title: "Maintenance Berkala",
            desc: "Pemeliharaan preventif secara rutin untuk menjaga keandalan sistem mekanis dan elektrikal, guna meminimalisir risiko terjadinya kerusakan fatal.",
            features: ["Kunjungan terjadwal bulanan", "Pelumasan & kalibrasi rel", "Pengecekan sensor keamanan"]
        },
        {
            id: 3,
            icon: <FaHistory className="text-2xl text-blue-600" />,
            title: "Modernisasi Sistem",
            desc: "Pembaruan komponen lift lama (panel kontrol, inverter, motor penggerak) ke teknologi cerdas terbaru tanpa perlu mengganti seluruh struktur fisik lift.",
            features: ["Peningkatan kecepatan respon", "Hemat konsumsi listrik", "Tampilan indikator digital baru"]
        },
        {
            id: 4,
            icon: <FaWrench className="text-2xl text-blue-600" />, // Menggunakan icon engineering standar yang aman
            title: "Repair & Troubleshooting",
            desc: "Layanan penanganan darurat dan perbaikan cepat oleh tim teknisi ahli siap panggil untuk mengatasi malfungsi sistem lift pada gedung Anda.",
            features: ["Analisis kerusakan akurat", "Suku cadang original ready", "Response team tanggap"]
        }
    ];

    // Varian animasi stagger untuk kemunculan kartu satu per satu
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Spesialisasi & Solusi Vertikal
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Layanan Rekayasa Lift Menyeluruh
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Dari tahap perencanaan awal hingga perawatan jangka panjang, kami memastikan mobilitas vertikal gedung Anda beroperasi pada efisiensi maksimal dan keamanan mutlak.
                    </p>
                </div>

                {/* GRID LAYOUT LAYANAN */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -6 }} // Hover Lift Effect
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-200 flex flex-col justify-between group"
                        >
                            <div className="space-y-6">
                                {/* Baris Atas: Icon & Tombol Pelajari Aksen */}
                                <div className="flex justify-between items-center">
                                    <div className="bg-white border border-gray-100 p-4 inline-block rounded-xl shadow-sm">
                                        {service.icon}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                                        <FiArrowRight className="text-xl transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>

                                {/* Judul & Deskripsi */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Fitur / Poin Keunggulan Kecil di Dalam Kartu */}
                                <div className="pt-4 border-t border-gray-200/60 grid sm:grid-cols-1 gap-2">
                                    {service.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                                            <FaCheckCircle className="text-blue-500 flex-none text-[10px]" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}