"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBuilding, FaUsers, FaMapMarkedAlt, FaHistory } from "react-icons/fa";

// Komponen Pendukung untuk Efek Angka Berjalan Otomatis (Count Up)
function Counter({ value, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value, 10);
            if (start === end) return;

            // Durasi total animasi sekitar 2 detik
            const totalDuration = 2000;
            const incrementTime = Math.max(Math.floor(totalDuration / end), 20);

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end); // Memastikan angka terakhir presisi
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Statistics() {
    const statsData = [
        {
            id: 1,
            icon: <FaBuilding className="text-2xl text-blue-600" />,
            number: "120",
            suffix: "+",
            title: "Projects Completed",
            desc: "Unit lift yang sukses terpasang di gedung bertingkat, mall, dan instansi."
        },
        {
            id: 2,
            icon: <FaUsers className="text-2xl text-blue-600" />,
            number: "85",
            suffix: "+",
            title: "Happy Clients",
            desc: "Kepercayaan penuh dari universitas, sektor industri, hingga dinas pemerintahan."
        },
        {
            id: 3,
            icon: <FaMapMarkedAlt className="text-2xl text-blue-600" />,
            number: "15",
            suffix: "+",
            title: "Area Layanan Wilayah",
            desc: "Cakupan operasional pengiriman, teknisi lapangan, dan jangkauan servis."
        },
        {
            id: 4,
            icon: <FaHistory className="text-2xl text-blue-600" />,
            number: "10",
            suffix: " Tahun",
            title: "Pengalaman Industri",
            desc: "Konsisten memberikan rekayasa teknologi lift terbaik dan rekam jejak K3 aman."
        }
    ];

    // Variasi animasi grid untuk scroll reveal dari arah bawah
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
        <section className="py-24 bg-white border-t border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Header Section Pembuka Singkat */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Rekam Jejak & Kredibilitas
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Komitmen Nyata Melalui Angka
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Kombinasi antara dedikasi teknis tinggi, kepatuhan keselamatan kerja, dan kepuasan klien yang membentuk reputasi komputeclift hingga hari ini.
                    </p>
                </div>

                {/* Grid Kartu Statistik Premium */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {statsData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }} // Hover Card Lift Effect
                            className="bg-gray-50 border border-gray-100 rounded-xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-gray-200 flex flex-col justify-between"
                        >
                            <div>
                                {/* Bagian Icon */}
                                <div className="bg-white border border-gray-100 p-3.5 inline-block rounded-xl shadow-sm mb-6">
                                    {item.icon}
                                </div>

                                {/* Angka Utama dengan Animasi Count-Up */}
                                <div className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                                    <Counter value={item.number} suffix={item.suffix} />
                                </div>

                                {/* Judul Parameter */}
                                <h3 className="text-base font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Deskripsi Keterangan Singkat */}
                            <p className="text-gray-500 text-xs leading-relaxed font-normal pt-2 border-t border-gray-200/60 mt-4">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}