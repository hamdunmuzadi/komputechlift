"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaShieldAlt, FaAward, FaTools } from "react-icons/fa";

// ====================================================================
// TEMPAT MENGELOLA GAMBAR 
// ====================================================================
const IMAGE_FILES = [
    "PTnatura2.jpeg",
    "Dumbwaiter3.jpeg",
    "LiftBarangHope3.jpeg",
    "LiftPTCAR1.jpeg",
    "RekondisiLift4.jpeg",
    "RekondisiLift3.jpeg"
];

const PRODUCTS = IMAGE_FILES.slice(0, 6).map((fileName, index) => {
    const configs = [
        { title: "Cargo Lift", rotate: "-rotate-12", translate: "-translate-x-4 sm:-translate-x-12", zIndex: "z-10" },
        { title: "Dumbwaiter", rotate: "-rotate-6", translate: "-translate-x-2 sm:-translate-x-6", zIndex: "z-20" },
        { title: "Rope Hoist", rotate: "rotate-0", translate: "translate-x-0", zIndex: "z-30" },
        { title: "Home elevator", rotate: "rotate-6", translate: "translate-x-2 sm:translate-x-6", zIndex: "z-20" },
        { title: "Passenger Lift", rotate: "rotate-12", translate: "translate-x-4 sm:translate-x-12", zIndex: "z-10" },
        { title: "Passenger Lift", rotate: "rotate-12", translate: "translate-x-4 sm:translate-x-12", zIndex: "z-10" },
    ];

    return {
        src: `/image/${fileName}`,
        title: configs[index]?.title || "Premium Lift",
        rotate: configs[index]?.rotate || "rotate-0",
        translate: configs[index]?.translate || "translate-x-0",
        zIndex: configs[index]?.zIndex || "z-10"
    };
});

const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.05,
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function Hero() {
    const handleScrollToProjects = (e) => {
        e.preventDefault();
        const target = document.querySelector("#projects");
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="home"
            // overflow-hidden tetap di sini kawan untuk mengunci section utama agar tidak muncul scrollbar browser
            className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden border-b border-gray-100 pt-16"
        >
            <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 sm:space-y-2"
                >
                    {/* 1. BADGE OTORITAS */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/60 px-4 py-1 rounded-full text-blue-700 font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-sm">
                            <FaShieldAlt className="text-xs" />
                            <span>Safety & Engineering Excellence</span>
                        </div>
                    </div>

                    {/* 2. HEADLINE UTAMA */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight uppercase max-w-3xl mx-auto">
                        Jasa Instalasi Lift Profesional<br />
                        <span className="text-blue-600 inline-block mt-0.5">
                            Sektor Industri & Instansi
                        </span>
                    </h1>

                    {/* 3. STACKED CARDS REMI (overflow-hidden dihapus dari sini agar hover tidak terpotong) */}
                    <div className="relative py-4 sm:py-6 flex justify-center items-center w-full">
                        <div className="flex justify-center items-center w-full max-w-full px-4">
                            {PRODUCTS.map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
                                    // Ditambahkan zIndex: 50 agar saat di-hover kartu otomatis berada di paling depan tumpukan
                                    whileHover={{ y: -16, scale: 1.08, zIndex: 50, transition: { duration: 0.2 } }}
                                    className={`w-16 h-24 sm:w-36 sm:h-48 rounded-lg sm:rounded-xl bg-gray-50 border border-white shadow-md sm:shadow-lg overflow-hidden flex-none first:ml-0 -ml-6 sm:-ml-12 transition-transform duration-300 transform ${product.rotate} ${product.translate} ${product.zIndex}`}
                                >
                                    <img
                                        src={product.src}
                                        alt={product.title}
                                        className="w-full h-full object-cover aspect-square select-none pointer-events-none"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-2 pt-6 opacity-0 hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-end justify-center">
                                        <span className="text-[9px] font-black uppercase text-white tracking-wider text-center">{product.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 4. SUBHEADLINE */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed px-4">
                        <strong>KOMPUTECLIFT</strong> di bawah manajemen <strong>CV. Faza Jaya Indonesia (FJI)</strong> adalah spesialis jasa pemasangan lift, home elevator, lift barang, dan maintenance lift untuk rumah, gedung, hotel, serta industri.
                    </p>

                    {/* 5. CTA BUTTONS */}
                    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-3 pt-1 max-w-xs sm:max-w-md mx-auto">
                        <a
                            href="https://wa.me/62817610929"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaWhatsapp className="text-base" />
                            <span>Konsultasi Teknis</span>
                        </a>

                        <a
                            href="#projects"
                            onClick={handleScrollToProjects}
                            className="flex items-center justify-center gap-2 border border-gray-200 text-gray-900 px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                        >
                            <span>Katalog Proyek</span>
                            <FaArrowRight className="text-xs text-gray-400" />
                        </a>
                    </div>

                    {/* 6. MINI TRUST BADGES */}


                </motion.div>

            </div>
        </section>
    );
}