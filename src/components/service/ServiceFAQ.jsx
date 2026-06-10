"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function ServiceFAQ({
    title = "Pertanyaan Umum",
    description,
    items = [],
}) {
    const [active, setActive] = useState(null);

    return (
        // Menggunakan bg-slate-50 untuk memisahkan secara visual dari CTA yang berwarna putih
        <section className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                {/* HEADER FAQ */}
                <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* DAFTAR AKORDION FAQ */}
                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isActive = active === index;

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                // Styling kartu yang interaktif
                                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? "border-blue-200 shadow-md shadow-blue-900/5" : "border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setActive(isActive ? null : index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                                >
                                    <span className={`font-semibold text-base md:text-lg transition-colors duration-300 ${isActive ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600"
                                        }`}>
                                        {item.question}
                                    </span>

                                    {/* Ikon Plus yang berputar menjadi X saat aktif */}
                                    <div className={`ml-4 shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? "bg-blue-100 text-blue-600 rotate-45" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                                        }`}>
                                        <FiPlus className="text-xl" />
                                    </div>
                                </button>

                                {/* ANIMASI BUKA TUTUP JAWABAN (Smooth Expand/Collapse) */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            {/* Padding atas dihapus agar menyatu mulus dengan tombol, cukup padding bawah (pb-6) */}
                                            <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-50 mt-1 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}