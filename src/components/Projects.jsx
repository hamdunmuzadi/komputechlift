"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaGraduationCap, FaMapMarkerAlt, FaCogs } from "react-icons/fa";

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const categories = [
        { id: "all", name: "Semua Project" },
        { id: "pendidikan", name: "Universitas / Pendidikan" },
        { id: "swasta", name: "Sektor Swasta / Komersial" },
        { id: "pemerintah", name: "Instansi Pemerintah" },
    ];

    const projectsData = [
        {
            id: 1,
            category: "pendidikan",
            title: "Gedung Rektorat Utama",
            location: "Kampus Terkemuka, Bandung",
            liftType: "Passenger Lift - 1600 KG",
            desc: "Instalasi 3 unit lift penumpang cerdas dengan sistem kontrol VVVF hemat energi untuk mobilitas intensitas tinggi.",
            shortName: "UNIV-BDG"
        },
        {
            id: 2,
            category: "swasta",
            title: "Premium Office Tower",
            location: "Kawasan Bisnis, Jakarta",
            liftType: "High-Speed Passenger Lift",
            desc: "Modernisasi sistem kontrol lift lama dan peremajaan interior kabin kustom berlapis hairline stainless steel.",
            shortName: "OFC-JKT"
        },
        {
            id: 3,
            category: "pemerintah",
            title: "Kantor Dinas Pemerintahan",
            location: "Pusat Pemerintahan, Semarang",
            liftType: "Bed & Passenger Lift",
            desc: "Pengadaan dan instalasi lift khusus dengan spesifikasi standar fasilitas kesehatan negara yang ramah disabilitas.",
            shortName: "GOV-SMG"
        },
        {
            id: 4,
            category: "pendidikan",
            title: "Gedung Laboratorium Terpadu",
            location: "Universitas Negeri, Yogyakarta",
            liftType: "Freight Lift - 3000 KG",
            desc: "Pemasangan lift barang berkapasitas besar dengan struktur pintu kokoh untuk mengangkut peralatan laboratorium berat.",
            shortName: "LAB-YOG"
        },
        {
            id: 5,
            category: "swasta",
            title: "Gudang Logistik & Manufaktur",
            location: "Kawasan Industri, Karawang",
            liftType: "Heavy Duty Cargo Lift",
            desc: "Instalasi lift kargo dengan sistem pengaman berlapis (safety gear) guna menunjang kelancaran suplai industri.",
            shortName: "MFG-KRW"
        },
        {
            id: 6,
            category: "pemerintah",
            title: "Balai Sidang & Protokoler",
            location: "Kompleks Pemerintahan, Surabaya",
            liftType: "Observation Lift (Kaca)",
            desc: "Pemasangan lift kapsul kaca panoramik estetik untuk memberikan nilai arsitektur premium pada gedung instansi.",
            shortName: "GOV-SUB"
        }
    ];

    // Menyaring data berdasarkan tab filter aktif
    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-12">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Galeri Portofolio & Referensi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Project Unggulan KOMPUTECHLIFT
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Rekam jejak dedikasi rekayasa kami dalam menghadirkan sistem transportasi vertikal yang aman dan andal di berbagai sektor strategis.
                    </p>
                </div>

                {/* BUTTON FILTER INTERAKTIF */}
                <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${filter === cat.id
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* GRID GALERI DENGAN ANIMASI TRANSISI FILTER */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -6 }}
                                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col group"
                            >
                                {/* 1. CONTAINER FOTO / PLACEHOLDER IMAGE VISUAL */}
                                <div className="h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center p-8 text-white">
                                    {/* Grid Teknis Aksen Background */}
                                    <div className="absolute inset-0 bg-linier-to-br from-blue-900/40 to-slate-900 pointer-events-none z-10" />

                                    {/* Animasi Zoom pada Text Kode Project saat Hover */}
                                    <motion.div
                                        className="z-20 font-mono font-black text-3xl tracking-widest text-slate-400/30 group-hover:text-blue-400/50 group-hover:scale-110 transition-all duration-500"
                                    >
                                        {project.shortName}
                                    </motion.div>

                                    {/* Kategori Badge di Atas Foto */}
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-900 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                                        {project.category === "pendidikan" && <FaGraduationCap className="text-blue-600" />}
                                        {project.category === "swasta" && <FaBuilding className="text-blue-600" />}
                                        {project.category === "pemerintah" && <FaBuilding className="text-gray-600" />}
                                        <span>{project.category}</span>
                                    </div>
                                </div>

                                {/* 2. AREA KONTEN & SPESIFIKASI */}
                                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Metadata Lokasi & Spesifikasi */}
                                        <div className="space-y-1.5 pt-1">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <FaMapMarkerAlt className="text-gray-400 flex-none" />
                                                <span className="line-clamp-1">{project.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                                                <FaCogs className="text-blue-500 flex-none" />
                                                <span>{project.liftType}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Deskripsi Singkat Project */}
                                    <p className="text-gray-600 text-xs leading-relaxed font-normal pt-3 border-t border-gray-200/60">
                                        {project.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}