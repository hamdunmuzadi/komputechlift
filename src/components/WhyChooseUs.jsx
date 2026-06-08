"use client";

import { motion } from "framer-motion";
import { FaUserCheck, FaShieldAlt, FaHeadset, FaBolt, FaBoxes, FaComments } from "react-icons/fa";

export default function WhyChooseUs() {
    const VISUAL_IMAGES = [
        "HomeElevator5.jpeg",
        "HomeElevator6.jpeg",
        "HomeElevator2.jpeg",
        "dumwaiter_4.jpeg"
    ];

    const reasons = [
        {
            id: 1,
            icon: <FaUserCheck className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "Teknisi Ahli",
            desc: "Tim engineer berpengalaman & sertifikasi resmi K3."
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "Safety Mutlak",
            desc: "Instalasi ketat mengacu regulasi keselamatan nasional."
        },
        {
            id: 3,
            icon: <FaHeadset className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "After-Sales",
            desc: "Komitmen penuh dampingi lewat perawatan berkala."
        },
        {
            id: 4,
            icon: <FaBolt className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "Respon Cepat",
            desc: "Sigap troubleshoot demi minimalisir downtime gedung."
        },
        {
            id: 5,
            icon: <FaBoxes className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "Produk Fleksibel",
            desc: "Pilihan unit rakitan lokal TKDN maupun import CBU."
        },
        {
            id: 6,
            icon: <FaComments className="text-xs sm:text-base text-blue-400 group-hover:text-blue-600" />,
            title: "Konsultasi",
            desc: "Analisis kebutuhan traffic & kustomisasi transparan."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <section
            id="why-choose-us"
            className="relative h-screen w-full bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 flex items-center justify-center overflow-hidden border-b border-gray-800 pt-10 pb-4"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 w-full flex flex-col justify-center h-full space-y-3 sm:space-y-5 relative z-10">

                {/* HEADER SECTION WITH SEO PARAGRAPH */}
                <div className="w-full text-center md:text-left space-y-1">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-[9px] sm:text-xs block">
                        Kualifikasi & Keunggulan
                    </span>
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                        Mengapa Komputec Lift?
                    </h2>
                    {/* Paragraf Optimasi SEO (Sengaja dibuat ringkas, padat kata kunci, dan berkelas) */}
                    <p className="text-blue-100/70 text-[10px] sm:text-xs md:text-sm font-normal max-w-2xl leading-relaxed">
                        Sebagai penyedia <strong className="text-blue-400 font-semibold">jasa instalasi lift</strong> terpercaya, Komputec Lift menghadirkan solusi mobilitas vertikal modern dengan dukungan <strong className="text-blue-400 font-semibold">teknisi lift berpengalaman</strong> standar K3. Kami melayani pengadaan unit baru hingga program <strong className="text-blue-400 font-semibold">perawatan lift gedung</strong> berkala demi menjamin keamanan dan kenyamanan jangka panjang Anda.
                    </p>
                </div>

                {/* MAIN SPLIT LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center w-full">

                    {/* SISI KIRI: KOMPOSISI 4 GAMBAR ASIMETRIS GRID */}
                    <div className="col-span-1 md:col-span-5 w-full">
                        <div className="hidden md:relative md:grid grid-cols-2 gap-3 h-64 w-full p-2">

                            {/* Foto 1 - Kiri Atas */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                                viewport={{ once: true }}
                                className="w-full h-28 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 translate-y-2"
                            >
                                <img src={`/image/${VISUAL_IMAGES[0]}`} alt="Jasa Instalasi Komputec Lift" className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Foto 2 - Kanan Atas */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
                                viewport={{ once: true }}
                                className="w-full h-28 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 -translate-x-2"
                            >
                                <img src={`/image/${VISUAL_IMAGES[1]}`} alt="Teknisi Lift Berpengalaman" className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Foto 3 - Kiri Bawah */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                                viewport={{ once: true }}
                                className="w-full h-28 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 translate-x-2 -translate-y-2 z-20"
                            >
                                <img src={`/image/${VISUAL_IMAGES[2]}`} alt="Perawatan Lift Gedung" className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Foto 4 - Kanan Bawah */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                                viewport={{ once: true }}
                                className="w-full h-28 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 -translate-y-4"
                            >
                                <img src={`/image/${VISUAL_IMAGES[3]}`} alt="Standardisasi K3 Komputec" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>

                        {/* Tampilan Mobile */}
                        <div className="flex md:hidden gap-2 overflow-x-auto pb-1 justify-center w-full">
                            {VISUAL_IMAGES.slice(0, 2).map((imgName, index) => (
                                <div key={index} className="w-16 h-12 rounded-md overflow-hidden shadow-md border border-slate-800 flex-none">
                                    <img src={`/image/${imgName}`} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SISI KANAN: DAFTAR KEUNGGULAN */}
                    <motion.div
                        className="col-span-1 md:col-span-7 grid grid-cols-2 gap-2 sm:gap-4 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        {reasons.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 sm:p-4 shadow-sm hover:bg-white hover:border-white group transition-all duration-300 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-1.5 sm:gap-3"
                            >
                                <div className="bg-blue-950/80 border border-blue-900/50 group-hover:bg-blue-50 p-1.5 rounded-md text-blue-400 flex-none mt-0.5 transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <div className="space-y-0.5 w-full">
                                    <h3 className="text-[10px] sm:text-xs md:text-sm font-black text-white group-hover:text-gray-900 uppercase tracking-tight transition-colors duration-300 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-100/60 group-hover:text-gray-600 text-[9px] sm:text-[11px] leading-tight sm:leading-relaxed font-normal transition-colors duration-300 line-clamp-2 md:line-clamp-none">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}