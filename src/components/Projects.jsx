"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaTools, FaAngleRight, FaTimes, FaChevronLeft, FaChevronRight, FaWhatsapp, FaExpand, FaSearchPlus } from "react-icons/fa";

export default function Projects() {
    const [filter, setFilter] = useState("all");
    // State untuk kontrol Modal Lightbox Utama (Detail)
    const [activeProject, setActiveProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // State untuk kontrol Nested Fullscreen Image Viewer (Permintaan User)
    const [isFullscreenImage, setIsFullscreenImage] = useState(false);

    // State untuk kontrol fitur Load More
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
            title: "Rekondisi & Pembaruan Sistem VVVF",
            client: "Project Teknis Jakarta",
            desc: "Pemasangan panel kontrol VVVF untuk meningkatkan efisiensi energi dan keamanan operasional lift lama menjadi standar modern yang responsif.",
            price: "Minta Penawaran",
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
            category: "passenger",
            title: "Premium Machine-Room-Less Elevator",
            client: "Residensial Mewah",
            desc: "Instalasi lift rumah berteknologi FUJI JPN ultra sunyi, hemat ruang, dan menyatu elegan dengan interior hunian.",
            price: "Hubungi Kontak",
            images: [
                "/image/elevator1.jpeg",
                "/image/elevator2.jpeg",
                "/image/elevator3.jpeg",
                "/image/elevator4.jpeg",
                "/image/elevator5.jpeg",
                "/image/elevator6.jpeg"
            ]
        },
        {
            id: 3,
            category: "freight",
            title: "Cargo Gate Freight Lift Hoist (4 Lantai)",
            client: "Sektor Industri",
            desc: "Pemasangan lift barang kapasitas heavy-duty hoist Mitsubishi dengan sangkar Harmonika Cargo Gate untuk logistik gudang.",
            price: "Hubungi Kontak",
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
            id: 4,
            category: "freight",
            title: "Lift Barang Struktur Shaft Luar",
            client: "PT. CAR Logistik",
            desc: "Pembangunan struktur shaft luar dan instalasi lift barang berskala besar untuk menunjang logistik area industri.",
            price: "Minta Penawaran",
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
            id: 5,
            category: "freight",
            title: "Cargo Lift Gate Harmonika Ganda",
            client: "PT Natura Boga Perisa",
            desc: "Penyediaan lift barang dengan sistem pengaman cargo gate harmonika ganda ideal untuk standar regulasi f&b industri.",
            price: "Hubungi Kontak",
            images: [
                "/image/PTnatura4.jpeg",
                "/image/PTnatura1.jpeg",
                "/image/PTnatura2.jpeg",
                "/image/PTnatura3.jpeg",
                "/image/PTnatura5.jpeg",
                "/image/PTnatura6.jpeg"
            ]
        },
        {
            id: 6,
            category: "passenger",
            title: "Elegant Residensial Home Elevator",
            client: "Perumahan Elite",
            desc: "Solusi mobilitas vertikal rumah ultra-premium Machine Room Less (MRL) yang hemat energi dan aman bagi keluarga.",
            price: "Minta Penawaran",
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
            id: 7,
            category: "passenger",
            title: "MRL Home Elevator Type B",
            client: "Villa Pribadi Bali",
            desc: "Instalasi lift residensial MRL ultra sunyi dengan kustomisasi interior sangkar stainless-glass yang elegan.",
            price: "Minta Penawaran",
            images: [
                "/image/HomeElevaroR1.jpeg",
                "/image/HomeElevaroR2.jpeg",
                "/image/HomeElevaroR3.jpeg",
                "/image/HomeElevaroR4.jpeg",
                "/image/HomeElevaroR6.jpeg",
                "/image/HomeElevaroR7.jpeg",
                "/image/HomeElevaroR8.jpeg",
                "/image/HomeElevaroR9.jpeg"
            ]
        },
        {
            id: 8,
            category: "freight",
            title: "Dumbwaiter / Lift Makanan Stainless Steel",
            client: "Restoran & Komersial Area",
            desc: "Instalasi lift spesialisasi barang kecil/makanan berstandar f&b hygiene yang efisien untuk F&B outlet.",
            price: "Hubungi Kontak",
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
            id: 9,
            category: "freight",
            title: "Dumbwaiter / Lift Makanan Stainless Steel",
            client: "Restoran & Komersial Area",
            desc: "Instalasi lift spesialisasi barang kecil/makanan berstandar f&b hygiene yang efisien untuk F&B outlet.",
            price: "Hubungi Kontak",
            images: [
                "/image/dumwaiter_1.jpeg",
                "/image/dumwaiter_2.jpeg",
                "/image/dumwaiter_3.jpeg",
                "/image/dumwaiter_4.jpeg",
                "/image/dumwaiter_5.jpeg",
                "/image/dumwaiter_6.jpeg",
                "/image/dumwaiter_7.jpeg",
                "/image/dumwaiter_8.jpeg",
                "/image/dumwaiter_9.jpeg"
            ]
        }
    ];

    const filteredProjects = filter === "all"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    const handleCategoryChange = (categoryId) => {
        setFilter(categoryId);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };

    // Fungsi navigasi slide foto (Berlaku untuk modal detail & fullscreen viewer)
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
        <section id="projects" className="py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-12 lg:space-y-10">

                {/* 1. PERBAIKAN HEADER: Menjadi Left-Aligned seperti 'Brands' kawan */}
                <div className="max-w-3xl space-y-1 text-left">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs block">
                        Product & Project Showcase
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight uppercase">
                        Katalog Proyek KOMPUTECLIFT
                    </h2>
                    <p className="text-gray-500 font-normal text-xs sm:text-sm leading-relaxed max-w-2xl">
                        Sistem transportasi vertikal yang aman, andal, dan terkustomisasi untuk berbagai kebutuhan industri, komersial, maupun residensial.
                    </p>
                </div>

                {/* 3. OPTIMALISASI TOMBOL FILTER: Di mobile diubah agar wrap rata tengah agar clean */}
                <div className="flex flex-wrap items-center justify-center gap-2 max-w-full">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`px-4 py-2 rounded-xl font-bold text-[11px] sm:text-xs transition-all duration-300 border ${filter === cat.id
                                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                                : "bg-gray-50/50 text-gray-600 border-gray-100 hover:bg-gray-100/60"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* 2. ROMBAKAN CARD: Menggunakan aspect-video dan tipografi clean */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pt-3">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -4 }}
                                onClick={() => {
                                    setActiveProject(project);
                                    setActiveImageIndex(0);
                                }}
                                className="bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-100/40 transition-all duration-300 flex flex-col group cursor-pointer"
                            >
                                {/* CARD VISUAL AREA: Menggunakan aspect-video kawan */}
                                <div className="aspect-video relative overflow-hidden flex items-center justify-center text-white bg-slate-900 shadow-inner">
                                    <div className="absolute inset-0 bg-linear-to-br from-slate-900/10 to-slate-950/60 z-10" />

                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 z-0 opacity-90 group-hover:opacity-100"
                                    />

                                    {/* Icon Zoom Overlag saat dihover agar user tahu ini bisa di-klik */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/20">
                                        <FaSearchPlus className="text-white text-3xl opacity-60" />
                                    </div>

                                    {/* Badge HARGA: Rapi di ujung kanan bawah */}
                                    <div className="absolute bottom-3 right-3 z-20 bg-blue-600/90 text-white font-bold tracking-wider text-[9px] px-2.5 py-1.5 rounded-lg border border-blue-500/20 shadow-sm uppercase">
                                        {project.price}
                                    </div>
                                </div>

                                {/* CARD CONTENT: Mengecilkan padding luar agar clean (p-4 md:p-5) */}
                                <div className="p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3 lg:space-y-3.5">
                                    <div className="space-y-1 md:space-y-1.5">
                                        {/* Klien & Kategori: Dalam satu baris rata clean */}
                                        <div className="flex items-center justify-between gap-2 border-b border-gray-200/60 pb-2">
                                            <span className="text-[9px] md:text-[10px] font-semibold text-slate-400 uppercase tracking-wide block truncate">
                                                Klien: {project.client}
                                            </span>
                                            <span className="bg-white border border-gray-100 text-blue-600 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1.5 flex-none">
                                                {project.category === "passenger" && <FaBuilding className="text-blue-500" />}
                                                {project.category === "freight" && <FaBuilding className="text-amber-500" />}
                                                {project.category === "modernization" && <FaTools className="text-emerald-500" />}
                                                <span className="hidden sm:inline">{project.category}</span>
                                            </span>
                                        </div>

                                        {/* Judul: Mengecilkan font & min-height agar clean (text-sm md:text-base) */}
                                        <h3 className="text-sm md:text-base font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 min-h-6">
                                            {project.title}
                                        </h3>
                                        {/* Deskripsi: Rapi line-clamp-2 agar selalu sejajar */}
                                        <p className="line-clamp-2 text-gray-500 text-xs leading-relaxed font-normal pt-1.5 border-t border-gray-100">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* BUTTON: Mengecilkan padding di mobile */}
                                    <div className="pt-1.5">
                                        <span className="w-full bg-white group-hover:bg-blue-600 border border-gray-100 group-hover:border-blue-600 text-gray-700 group-hover:text-white font-bold text-[10px] md:text-xs py-2 px-2.5 md:py-3 md:px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs group-hover:shadow-md hover:shadow-blue-600/5">
                                            <span>Lihat Detail Spesifikasi</span>
                                            <FaAngleRight className="text-xs sm:text-sm opacity-80 group-hover:translate-x-1 transition-transform flex-none" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* TOMBOL LIHAT PROYEK LAINNYA */}
                {filteredProjects.length > visibleCount && (
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-6 rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                        >
                            <span>Muat Katalog Lainnya</span>
                            <FaAngleRight className="text-sm" />
                        </button>
                    </div>
                )}

                {/* MODAL LIGHTBOX DETAIL UTAMA */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // 4. PERBAIKAN: Jika user klik background overlay, reset fullscreen view ke false
                            onClick={() => { setActiveProject(null); setIsFullscreenImage(false); }}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.96, y: 15 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.96, y: 15 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default max-h-[95vh] md:max-h-[85vh] border border-gray-100"
                            >
                                {/* BAGIAN KIRI: SLIDER DETAIL FOTO */}
                                <div className="md:w-7/12 bg-slate-950 relative flex flex-col justify-between p-4 min-h-80 md:min-h-120">
                                    {/* Close Mobile Button */}
                                    <button onClick={() => { setActiveProject(null); setIsFullscreenImage(false); }} className="absolute top-4 right-4 z-40 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors md:hidden">
                                        <FaTimes size={16} />
                                    </button>

                                    {/* Viewer Foto Utama */}
                                    <div className="flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
                                        <div className="absolute inset-0 bg-linear-to-b from-slate-900/10 to-slate-950/40 pointer-events-none z-10" />

                                        <motion.img
                                            key={activeImageIndex}
                                            src={activeProject.images[activeImageIndex]}
                                            alt={activeProject.title}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 w-full h-full object-contain z-0"
                                        />

                                        {/* PERMINTAAN USER: Tombol klik untuk fullscreen view */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setIsFullscreenImage(true); }}
                                            className="absolute bottom-3 right-3 z-30 bg-white/90 backdrop-blur-sm text-gray-900 font-bold p-2.5 rounded-xl transition-all shadow-lg border border-gray-100 flex items-center gap-1.5 hover:scale-102 hover:border-blue-200"
                                        >
                                            <FaExpand size={11} />
                                            <span className="text-[10px] font-black uppercase">Fullscreen</span>
                                        </button>

                                        {/* Navigasi Slide Foto */}
                                        {activeProject.images.length > 1 && (
                                            <>
                                                <button onClick={prevImage} className="absolute left-3 z-30 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-xl transition-all shadow-lg border border-slate-700/60">
                                                    <FaChevronLeft size={12} />
                                                </button>
                                                <button onClick={nextImage} className="absolute right-3 z-30 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-xl transition-all shadow-lg border border-slate-700/60">
                                                    <FaChevronRight size={12} />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* NAVIGASI THUMBNAILS FOTO REAL */}
                                    {activeProject.images.length > 1 && (
                                        <div className="z-20 flex justify-start gap-2 overflow-x-auto py-2 px-1 mt-3 scrollbar-none border-t border-slate-800">
                                            {activeProject.images.map((img, idx) => (
                                                <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`w-14 h-14 flex-none rounded-xl overflow-hidden border-2 transition-all bg-slate-900 ${activeImageIndex === idx ? "border-blue-500 scale-105 shadow-md" : "border-slate-800/80 opacity-60 hover:opacity-100"}`}>
                                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* BAGIAN KANAN: SPESIFIKASI & CTAs */}
                                <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between bg-white overflow-y-auto">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center pb-2.5 border-b border-gray-100 mb-4">
                                            <span className="text-[9px] font-black bg-white text-blue-600 px-2.5 py-1 rounded-md uppercase tracking-wider border border-gray-100 shadow-xs flex items-center gap-1.5 flex-none">
                                                {activeProject.category === "passenger" && <FaBuilding className="text-blue-500" />}
                                                {activeProject.category === "freight" && <FaBuilding className="text-amber-500" />}
                                                {activeProject.category === "modernization" && <FaTools className="text-emerald-500" />}
                                                <span>{activeProject.category}</span>
                                            </span>
                                            <button onClick={() => { setActiveProject(null); setIsFullscreenImage(false); }} className="text-gray-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors hidden md:block">
                                                <FaTimes size={18} />
                                            </button>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Klien: {activeProject.client}</span>
                                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                                                {activeProject.title}
                                            </h3>
                                        </div>

                                        <div className="inline-block bg-slate-50 text-slate-700 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                                            Estimasi Penawaran: <span className="text-blue-600 font-black ml-1 text-[13px]">{activeProject.price}</span>
                                        </div>

                                        <div className="pt-4 border-t border-gray-100 space-y-2.5">
                                            <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider flex items-center gap-2">
                                                <FaTools className="text-blue-600" />
                                                <span>Deskripsi Teknis & Fitur Kunci</span>
                                            </h4>
                                            <p className="text-gray-600 text-xs leading-relaxed font-normal">
                                                {activeProject.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* WHATSAPP CTA LINK */}
                                    <div className="pt-6 md:pt-0 mt-6 md:mt-0">
                                        <a
                                            href={`https://wa.me/62817610929?text=Halo%20KOMPUTECLIFT,%20saya%20tertarik%20dengan%20spesifikasi%20teknis%20${encodeURIComponent(activeProject.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20"
                                        >
                                            <FaWhatsapp size={16} />
                                            <span>Minta Penawaran Teknis via WhatsApp</span>
                                        </a>
                                        <p className="text-[10px] text-gray-400 text-center mt-3">
                                            *Konsultasi teknis, survei lokasi, dan pembuatan desain layout gratis.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PERMINTAAN USER: MODAL FULLSCREEN IMAGE VIEW LAYER TERATAS */}
                <AnimatePresence>
                    {activeProject && isFullscreenImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // Klik overlay hitam untuk menutup fullscreen viewer kawan!
                            onClick={() => setIsFullscreenImage(false)}
                            className="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4 cursor-zoom-out"
                        >
                            {/* Tombol Close Fullscreen Rapi di ujung kanan atas */}
                            <button onClick={() => setIsFullscreenImage(false)} className="absolute top-6 right-6 z-110 bg-black/50 hover:bg-white/90 hover:text-gray-900 text-white p-3.5 rounded-full transition-all border border-slate-700 hover:border-white shadow-lg">
                                <FaTimes size={18} />
                            </button>

                            {/* Foto Utama Fullscreen dengan object-contain agar utuh kawan! */}
                            <motion.img
                                key={activeImageIndex}
                                src={activeProject.images[activeImageIndex]}
                                alt={activeProject.title}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.25 }}
                                className="max-w-screen max-h-screen object-contain z-100"
                            />

                            {/* Navigasi Slide Fullscreen Gede kawan! */}
                            {activeProject.images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-6 z-110 bg-black/50 hover:bg-blue-600 text-white p-4 rounded-2xl transition-all shadow-xl border border-slate-700/60">
                                        <FaChevronLeft size={16} />
                                    </button>
                                    <button onClick={nextImage} className="absolute right-6 z-110 bg-black/50 hover:bg-blue-600 text-white p-4 rounded-2xl transition-all shadow-xl border border-slate-700/60">
                                        <FaChevronRight size={16} />
                                    </button>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}