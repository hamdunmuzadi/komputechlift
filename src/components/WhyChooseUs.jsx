"use client";

import { motion } from "framer-motion";
import { FaUserCheck, FaShieldAlt, FaHeadset, FaBolt, FaBoxes, FaComments } from "react-icons/fa";

export default function WhyChooseUs() {
    const reasons = [
        {
            id: 1,
            icon: <FaUserCheck className="text-2xl text-blue-600" />,
            title: "Teknisi Berpengalaman",
            desc: "Didukung oleh tim engineer dan teknisi ahli yang memiliki sertifikasi resmi K3 untuk menjamin presisi pengerjaan."
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-2xl text-blue-600" />,
            title: "Standar Keselamatan Mutlak",
            desc: "Setiap aspek instalasi dan pemeliharaan mengacu ketat pada regulasi keselamatan nasional dan standar manufaktur global."
        },
        {
            id: 3,
            icon: <FaHeadset className="text-2xl text-blue-600" />,
            title: "After-Sales Support Andalan",
            desc: "Komitmen mendampingi operasional gedung Anda lewat program perawatan berkala jangka panjang dan ketersediaan suku cadang."
        },
        {
            id: 4,
            icon: <FaBolt className="text-2xl text-blue-600" />,
            title: "Respons Cepat & Tanggap",
            desc: "Tim teknis lapangan yang sigap merespon laporan penanganan kendala atau troubleshooting demi meminimalisir downtime gedung."
        },
        {
            id: 5,
            icon: <FaBoxes className="text-2xl text-blue-600" />,
            title: "Pilihan Produk Fleksibel",
            desc: "Menyediakan variasi unit lift rakitan lokal (TKDN) maupun unit import utuh (CBU) dari berbagai brand terkemuka dunia."
        },
        {
            id: 6,
            icon: <FaComments className="text-2xl text-blue-600" />,
            title: "Konsultasi Profesional",
            desc: "Layanan analisis kebutuhan, perhitungan traffic gedung, hingga kustomisasi desain kabin secara transparan sebelum pengerjaan."
        }
    ];

    // Varian animasi stagger untuk memunculkan kartu secara berurutan
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Kualifikasi & Keunggulan
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Mengapa KOMPUTECHLIFT?
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Kami mengintegrasikan keahlian teknis tingkat tinggi dengan standar keamanan ketat untuk menghadirkan efisiensi mobilitas vertikal yang optimal.
                    </p>
                </div>

                {/* GRID KEUNGGULAN (KARTU MODERN) */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {reasons.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -4 }} // Hover effect ringan
                            className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5"
                        >
                            {/* Bagian Icon Aksen Biru */}
                            <div className="bg-blue-50 border border-blue-100/50 p-3.5 inline-block rounded-xl w-fit">
                                {item.icon}
                            </div>

                            {/* Teks Judul & Deskripsi */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}