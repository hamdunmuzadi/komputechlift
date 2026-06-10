"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceFeatures({
    title,
    description,
    items = [],
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        // Menggunakan max-h-dvh dan flex-col justify-center agar padat dan pas di satu layar
        <section id="features" className="w-full max-h-dvh min-h-fit flex flex-col justify-center py-16 lg:py-20 bg-slate-950 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">

                {/* BAGIAN HEADER (Lebih Ringkas & Padat) */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
                    >
                        {title}
                    </motion.h2>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* BAGIAN GRID KARTU (Compact Style) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    // Mengurangi gap dari 10 menjadi 4 atau 6 agar lebih rapat
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            // Memperkecil padding kartu (p-5 md:p-6) dan ukuran sudut (rounded-2xl)
                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-5 md:p-6 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/50 hover:border-slate-700 transition-all duration-300 flex flex-col"
                        >
                            {/* Ikon & Judul diletakkan berdampingan (Flex Row) untuk menghemat ruang vertikal */}
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center group-hover:scale-105 group-hover:border-blue-900/50 group-hover:bg-blue-900/20 transition-all duration-300">
                                    <FaCheckCircle className="text-blue-500 text-base" />
                                </div>
                                <h3 className="font-bold text-lg md:text-xl text-white tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Deskripsi */}
                            <p className="text-slate-400 text-sm leading-relaxed pl-14 md:pl-0">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}