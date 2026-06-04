"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaTools, FaAngleRight, FaTimes, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

export default function Projects() {
    const [filter, setFilter] = useState("all");
    // State untuk kontrol Modal Lightbox
    const [activeProject, setActiveProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // State untuk kontrol fitur Load More (Diubah menjadi 6)
    const ITEMS_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const categories = [
        { id: "all", name: "Semua Produk & Proyek" },
        { id: "passenger", name: "Passenger & Home Lift" },
        { id: "freight", name: "Freight & Service Lift" },
        { id: "modernization", name: "Modernization & Repair" },
    ];

    const projectsData = [
        {
            id: 1,
            category: "modernization",
            title: "Rekondisi & Pembaruan Sistem Lift",
            client: "Project Teknis",
            desc: "Pemasangan panel kontrol baru VVVF untuk meningkatkan efisiensi energi dan keamanan operasional lift lama Anda menjadi standar modern yang lebih responsif.",
            price: "Hubungi Kontak",
            shortName: "REKONDISI",
            images: [
                "/image/RekondisiLift1.jpeg",
                "/image/RekondisiLift2.jpeg",
                "/image/RekondisiLift3.jpeg",
                "/image/RekondisiLift4.jpeg",
                "/image/RekondisiLift5.jpeg",
                "/image/RekondisiLift6.jpeg",
                "/image/RekondisiLift7.jpeg"
            ]
        },
        {
            id: 2,
            category: "freight",
            title: "Lift Barang Rope Hoist Mitsubishi (4 Lantai)",
            client: "Kustom Sangkar Premium",
            desc: "Pengadaan dan instalasi lift barang kapasitas berat menggunakan hoist Mitsubishi dengan struktur sangkar kustom yang kokoh dan presisi sesuai permintaan.",
            price: "Hubungi Kontak",
            shortName: "HOIST-MITSUBISHI",
            images: [
                "/image/LiftBarangHope1.jpeg",
                "/image/LiftBarangHope2.jpeg",
                "/image/LiftBarangHope3.jpeg",
                "/image/LiftBarangHope4.jpeg",
                "/image/LiftBarangHope5.jpeg",
                "/image/LiftBarangHope6.jpeg",
                "/image/LiftBarangHope7.jpeg"
            ]
        },
        {
            id: 3,
            category: "freight",
            title: "Instalasi Lift Barang Heavy-Duty",
            client: "PT. CAR",
            desc: "Pembangunan struktur shaft luar dan instalasi lift barang sangkar besi kokoh berskala besar untuk menunjang kebutuhan logistik area industri.",
            price: "Hubungi Kontak",
            shortName: "PT-CAR",
            images: [
                "/image/LiftPTCAR1.jpeg",
                "/image/LiftPTCAR2.jpeg",
                "/image/LiftPTCAR3.jpeg",
                "/image/LiftPTCAR4.jpeg",
                "/image/LiftPTCAR5.jpeg",
                "/image/LiftPTCAR6.jpeg",
                "/image/LiftPTCAR7.jpeg"
            ]
        },
        {
            id: 4,
            category: "freight",
            title: "Lift Barang Struktur Cargo Gate",
            client: "PT Natura Boga Perisa",
            desc: "Penyediaan lift barang dengan sistem pengaman pintu harmonika (cargo gate) ganda, sangat ideal untuk standar regulasi industri pengolahan makanan.",
            price: "Hubungi Kontak",
            shortName: "PT-NATURA",
            images: [
                "/image/LiftBarangHope1.jpeg",
                "/image/LiftPTCAR4.jpeg"
            ]
        },
        {
            id: 5,
            category: "passenger",
            title: "Premium Home Elevator",
            client: "Residensial Pribadi",
            desc: "Instalasi lift rumah mewah berteknologi FUJI JPN. Dirancang ultra sunyi, hemat ruang (machine-room-less), dan menyatu elegan dengan interior hunian.",
            price: "Hubungi Kontak",
            shortName: "HOME-ELEVATOR",
            images: [
                "/image/HomeElevator1.jpeg",
                "/image/HomeElevator2.jpeg",
                "/image/HomeElevator3.jpeg",
                "/image/HomeElevator4.jpeg",
                "/image/HomeElevator5.jpeg",
                "/image/HomeElevator6.jpeg",
                "/image/HomeElevator7.jpeg",
                "/image/HomeElevator8.jpeg",
                "/image/HomeElevator9.jpeg",
                "/image/HomeElevator10.jpeg",
            ]
        },
        {
            id: 6,
            category: "freight",
            title: "Dumbwaiter (Lift Makanan & Dokumen)",
            client: "Restoran & Rumah Sakit",
            desc: "Lift vertikal berukuran kompak berbahan stainless steel standar higienis. Khusus untuk mobilitas cepat barang kecil, makanan, atau dokumen antar lantai.",
            price: "Hubungi Kontak",
            shortName: "DUMBWAITER",
            images: [
                "/image/Dumbwaiter1.jpeg",
                "/image/Dumbwaiter2.jpeg",
                "/image/Dumbwaiter3.jpeg",
                "/image/Dumbwaiter4.jpeg",
                "/image/Dumbwaiter5.jpeg",
                "/image/Dumbwaiter6.jpeg",
                "/image/Dumbwaiter7.jpeg",
                "/image/Dumbwaiter8.jpeg",
                "/image/Dumbwaiter9.jpeg"
            ]
        },
        {
            id: 7,
            category: "freight",
            title: "Dumbwaiter (Lift Makanan & Dokumen)",
            client: "Restoran & Rumah Sakit",
            desc: "Lift vertikal berukuran kompak berbahan stainless steel standar higienis. Khusus untuk mobilitas cepat barang kecil, makanan, atau dokumen antar lantai.",
            price: "Hubungi Kontak",
            shortName: "DUMBWAITER",
            images: [
                "/image/Dumbwaiter1.jpeg",
                "/image/Dumbwaiter2.jpeg",
                "/image/Dumbwaiter3.jpeg",
                "/image/Dumbwaiter4.jpeg",
                "/image/Dumbwaiter5.jpeg",
                "/image/Dumbwaiter6.jpeg",
                "/image/Dumbwaiter7.jpeg",
                "/image/Dumbwaiter8.jpeg",
                "/image/Dumbwaiter9.jpeg"
            ]
        }
    ];

    // Filter data berdasarkan kategori aktif
    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // Memotong data yang ditampilkan sesuai limit load more
    const displayedProjects = filteredProjects.slice(0, visibleCount);

    // Fungsi ganti kategori sekaligus mereset limit ke awal
    const handleCategoryChange = (categoryId) => {
        setFilter(categoryId);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (activeProject) {
            setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (activeProject) {
            setActiveImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
        }
    };

    return (
        <section id="projects" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-12">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Product & Project Showcase
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Katalog & Portofolio KOMPUTECHLIFT
                    </h2>
                    <p className="text-gray-500 text-base">
                        Sistem transportasi vertikal yang aman, andal, dan terkustomisasi untuk berbagai kebutuhan industri, komersial, maupun hunian pribadi.
                    </p>
                </div>

                {/* BUTTON FILTER */}
                <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${filter === cat.id
                                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* GRID GALERI */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -6 }}
                                onClick={() => {
                                    setActiveProject(project);
                                    setActiveImageIndex(0);
                                }}
                                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col group cursor-pointer"
                            >
                                {/* CARD VISUAL AREA (Membaca gambar ke-1 sebagai cover) */}
                                <div className="h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center text-white">
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-slate-900/60 pointer-events-none z-10" />

                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                                    />

                                    <div className="absolute bottom-4 left-4 z-20 font-mono font-black text-lg tracking-wider text-white bg-slate-950/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 uppercase">
                                        {project.shortName}
                                    </div>

                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-900 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                                        {project.category === "passenger" && <FaBuilding className="text-blue-600" />}
                                        {project.category === "freight" && <FaBuilding className="text-amber-600" />}
                                        {project.category === "modernization" && <FaTools className="text-emerald-600" />}
                                        <span>{project.category}</span>
                                    </div>

                                    <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur-sm text-white font-semibold text-[11px] px-2.5 py-1 rounded-md border border-white/10">
                                        {project.price}
                                    </div>
                                </div>

                                {/* CARD CONTENT */}
                                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                                            Klien: {project.client}
                                        </span>
                                        <h3 className="text-base font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-12">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed font-normal pt-2 border-t border-gray-200/60 line-clamp-3">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <span className="w-full bg-white group-hover:bg-blue-600 border border-gray-200 group-hover:border-blue-600 text-gray-700 group-hover:text-white font-bold text-xs py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                                            <span>Lihat Detail & Galeri</span>
                                            <FaAngleRight className="text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* TOMBOL LIHAT PROYEK LAINNYA (LOAD MORE) */}
                {filteredProjects.length > visibleCount && (
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                        >
                            <span>Lihat Proyek Lainnya</span>
                            <FaAngleRight className="text-sm" />
                        </button>
                    </div>
                )}

                {/* MODAL LIGHTBOX INTERAKTIF (SLIDER + THUMBNAILS) */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default max-h-[90vh] md:max-h-[80vh]"
                            >
                                {/* BAGIAN KIRI: SLIDER UTAMA FOTO REAL */}
                                <div className="md:w-3/5 bg-slate-950 relative flex flex-col justify-between p-4 min-h-80 md:min-h-120">

                                    {/* Close Button Mobile */}
                                    <button
                                        onClick={() => setActiveProject(null)}
                                        className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors md:hidden"
                                    >
                                        <FaTimes size={16} />
                                    </button>

                                    {/* Slider Image Viewer */}
                                    <div className="flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl bg-slate-900">
                                        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40 pointer-events-none z-10" />

                                        <motion.img
                                            key={activeImageIndex}
                                            src={activeProject.images[activeImageIndex]}
                                            alt={activeProject.title}
                                            initial={{ opacity: 0, scale: 0.97 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.97 }}
                                            transition={{ duration: 0.25 }}
                                            className="absolute inset-0 w-full h-full object-contain z-0"
                                        />

                                        {/* Navigasi Panah Kiri & Kanan */}
                                        {activeProject.images.length > 1 && (
                                            <>
                                                <button onClick={prevImage} className="absolute left-3 z-30 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-xl transition-all shadow-lg">
                                                    <FaChevronLeft size={12} />
                                                </button>
                                                <button onClick={nextImage} className="absolute right-3 z-30 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-xl transition-all shadow-lg">
                                                    <FaChevronRight size={12} />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* NAVIGASI THUMBNAILS DI BAGIAN BAWAH */}
                                    {activeProject.images.length > 1 && (
                                        <div className="z-20 flex justify-start gap-2 overflow-x-auto py-2 px-1 mt-3 scrollbar-none">
                                            {activeProject.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveImageIndex(idx)}
                                                    className={`w-14 h-14 flex-none rounded-xl overflow-hidden border-2 transition-all bg-slate-900 ${activeImageIndex === idx
                                                        ? "border-blue-500 scale-105 shadow-md"
                                                        : "border-white/10 opacity-60 hover:opacity-100"
                                                        }`}
                                                >
                                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* BAGIAN KANAN: SPESIFIKASI & WHATSAPP CTA */}
                                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
                                    <div className="space-y-5">
                                        <div className="hidden md:flex justify-between items-center">
                                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md uppercase tracking-wider">
                                                {activeProject.category}
                                            </span>
                                            <button
                                                onClick={() => setActiveProject(null)}
                                                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <FaTimes size={18} />
                                            </button>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Klien: {activeProject.client}</span>
                                            <h3 className="text-xl font-black text-gray-900 leading-snug">
                                                {activeProject.title}
                                            </h3>
                                        </div>

                                        <div className="inline-block bg-slate-50 text-slate-700 font-bold text-xs px-3 py-2 rounded-xl border border-slate-200/60">
                                            Estimasi Penawaran: <span className="text-blue-600 font-extrabold ml-1">{activeProject.price}</span>
                                        </div>

                                        <div className="pt-3 border-t border-gray-100 space-y-2">
                                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Deskripsi & Spesifikasi</h4>
                                            <p className="text-gray-600 text-xs leading-relaxed font-normal">
                                                {activeProject.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* WHATSAPP CTA LINK */}
                                    <div className="pt-6 md:pt-0 mt-6">
                                        <a
                                            href={`https://wa.me/6281234567890?text=Halo%20KOMPUTECHLIFT,%20saya%20tertarik%20dengan%20spesifikasi%20teknis%20${encodeURIComponent(activeProject.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20"
                                        >
                                            <FaWhatsapp size={16} />
                                            <span>Minta Penawaran via WhatsApp</span>
                                        </a>
                                        <p className="text-[10px] text-gray-400 text-center mt-2.5">
                                            *Konsultasi teknis, survei lokasi, dan pembuatan desain layout gratis.
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}