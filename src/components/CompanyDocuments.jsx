"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaAward, FaCertificate, FaShieldAlt } from "react-icons/fa";

export default function CompanyDocuments() {
    const documentsData = [
        {
            id: 1,
            type: "PDF",
            icon: <FaFilePdf className="text-3xl text-red-500" />,
            title: "Company Profile KOMPUTECHLIFT",
            desc: "Dokumen resmi profil perusahaan, struktur organisasi, daftar portofolio lengkap, serta lini produk lift lokal & import.",
            fileSize: "4.8 MB",
            downloadUrl: "#" // Ganti dengan path file asli di folder public, misal: "/docs/company-profile.pdf"
        },
        {
            id: 2,
            type: "PDF",
            icon: <FaCertificate className="text-3xl text-blue-600" />,
            title: "Sertifikasi K3 & Izin Operasional",
            desc: "Salinan sertifikat keselamatan kerja (K3) teknisi, Surat Izin Operasi (SIO), dan legalitas badan usaha penunjang keselamatan lift.",
            fileSize: "3.2 MB",
            downloadUrl: "#"
        },
        {
            id: 3,
            type: "PDF",
            icon: <FaAward className="text-3xl text-amber-500" />,
            title: "Sertifikat Kelayakan Fabrikasi",
            desc: "Dokumen standar mutu komponen, hasil uji kelayakan beban maksimun lift, dan sertifikasi kepatuhan regulasi teknis nasional.",
            fileSize: "2.5 MB",
            downloadUrl: "#"
        }
    ];

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
        <section id="documents" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 w-full space-y-16">

                {/* HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
                        Legalitas & Administrasi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Dokumen Resmi & Kualifikasi Hukum
                    </h2>
                    <p className="text-gray-500 font-normal text-base">
                        Kami menjamin keterbukaan informasi dan legalitas hukum demi transparansi proses pengadaan, verifikasi tender, serta kenyamanan kerja sama jangka panjang.
                    </p>
                </div>

                {/* GRID DOKUMEN */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {documentsData.map((doc) => (
                        <motion.div
                            key={doc.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div className="space-y-6">
                                {/* Baris Atas: Icon Tipe File & Badge Ukuran */}
                                <div className="flex justify-between items-start">
                                    <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-inner">
                                        {doc.icon}
                                    </div>
                                    <span className="text-xs font-mono font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">
                                        {doc.fileSize}
                                    </span>
                                </div>

                                {/* Judul & Deskripsi Dokumen */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {doc.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed font-normal">
                                        {doc.desc}
                                    </p>
                                </div>
                            </div>

                            {/* ACTION BUTTON DOWNLOAD */}
                            <div className="pt-6 mt-6 border-t border-gray-100">
                                <a
                                    href={doc.downloadUrl}
                                    download
                                    className="flex items-center justify-center gap-2.5 w-full bg-gray-50 border border-gray-200 hover:border-blue-500 hover:bg-blue-600 text-gray-700 hover:text-white py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
                                >
                                    <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5" />
                                    <span>Unduh Dokumen ({doc.type})</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* BANNER REASSURANCE KECIL */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto shadow-inner">
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-full flex-none">
                        <FaShieldAlt className="text-xl" />
                    </div>
                    <p className="text-xs text-gray-500 font-normal leading-relaxed text-center sm:text-left">
                        Butuh dokumen legalitas tambahan seperti NPWP, NIB, atau Akta Pendirian Perusahaan untuk keperluan administrasi khusus? Hubungi tim compliance kami melalui kanal kontak yang tersedia.
                    </p>
                </div>

            </div>
        </section>
    );
}