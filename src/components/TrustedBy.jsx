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

    // Anda bisa menaruh ini di luar fungsi komponen atau di file terpisah (misal: data.js)
    const clientsCard = [
        { id: 1, image: "/image/elevator1.jpeg", alt: "Partnership 1" },
        { id: 2, image: "/image/elevator2.jpeg", alt: "Partnership 2" },
        { id: 3, image: "/image/elevator3.jpeg", alt: "Partnership 3" },
    ];

    return (
        <section className="py-24 bg-slate-950 border-b border-slate-800">
            <div className="max-w-5xl mx-auto px-6 w-full space-y-16">

                {/* 1. HEADER SECTION */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <span className="text-blue-400 font-bold tracking-widest uppercase text-xs block">
                        Our Prestigious Partners
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Dipercaya Berbagai Institusi Besar
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Standar rekayasa lift kelas dunia yang dipercaya untuk menjaga mobilitas vertikal di berbagai sektor strategis Indonesia.
                    </p>
                </div>

                {/* 2. KARTU REMI (VISUAL PEMANIS) */}
                {/* <div className="flex justify-center gap-6 py-6">
                    {clientsCard.map((card) => (
                        <motion.div
                            key={card.id}
                            whileHover={{ y: -10 }}
                            className="w-32 h-44 bg-slate-900 border border-slate-800 rounded-xl shadow-xl shrink-0 -rotate-2 hover:rotate-0 transition-transform duration-300 overflow-hidden relative"
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div> */}

                {/* 3. GRID KLIEN (SEPERTI DI image_b519c4.png) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clientsData.map((client) => (
                        <motion.div
                            key={client.id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-blue-500/50"
                        >
                            <div className="text-2xl text-slate-500 group-hover:text-blue-400">
                                {client.icon}
                            </div>
                            <span className="font-black text-[10px] text-slate-400 tracking-widest">
                                {client.shortName}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}