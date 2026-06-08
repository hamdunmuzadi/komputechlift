"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram, FaArrowRight } from "react-icons/fa";

export default function CommunicationHub() {
    const contacts = [
        { title: "KOMPUTECLIFT", val: "+62 817-610-929", link: "https://wa.me/62817610929", icon: <FaWhatsapp /> },
        { title: "IMAM", val: "+62 857-9516-0038", link: "https://wa.me/6285795160038", icon: <FaWhatsapp /> },
        { title: "Email", val: "komputeclift@gmail.com", link: "mailto:komputeclift@gmail.com", icon: <FaEnvelope /> },
        { title: "Workshop", val: "Komputec Nagreg", link: "https://share.google/vZ3ICXkXOp4iZMRmf", icon: <FaMapMarkerAlt /> },
    ];

    const socials = [
        { name: "YouTube", handle: "komputeclift Official", icon: <FaYoutube className="text-red-600" />, link: "https://youtube.com/@rahmatelevator?si=5jvIcCXatekM0LbS" },
        { name: "Instagram", handle: "@rahmanelevators", icon: <FaInstagram className="text-pink-600" />, link: "https://www.instagram.com/rahmanelevators?igsh=MWNleTF3OG92NWp1ag==" },
    ];

    return (
        <section id="konsultasi" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                        Mari Terhubung
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Tim kami siap melayani kebutuhan teknis dan konsultasi proyek Anda dengan profesionalisme tinggi.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Kontak Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contacts.map((c, i) => (
                            <motion.a
                                whileHover={{ y: -5 }}
                                key={i} href={c.link} target="_blank"
                                className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all"
                            >
                                <div className="text-xl text-blue-600 mb-4">{c.icon}</div>
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.title}</h4>
                                <p className="font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">{c.val}</p>
                            </motion.a>
                        ))}
                    </div>

                    {/* Media Sosial */}
                    <div className="lg:col-span-4 bg-gray-900 rounded-2xl p-8 flex flex-col justify-center space-y-6">
                        <h3 className="font-bold text-white text-lg">Ikuti Kami</h3>
                        {socials.map((s, i) => (
                            <a key={i} href={s.link} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl text-white group-hover:bg-white group-hover:text-gray-900 transition-all">
                                    {s.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.name}</p>
                                    <p className="text-sm font-semibold text-white">{s.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}