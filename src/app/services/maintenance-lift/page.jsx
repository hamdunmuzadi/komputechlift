import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Maintenance Lift | KOMPUTECLIFT",
    description:
        "Layanan maintenance lift berkala untuk menjaga performa, keamanan, dan keandalan sistem lift pada berbagai jenis bangunan.",
};

export default function MaintenanceLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="LAYANAN KOMPUTECLIFT"
                title="Maintenance Lift"
                description="Program perawatan preventif dan inspeksi berkala untuk memastikan lift beroperasi dengan aman, nyaman, dan efisien."
            />

            <ServiceFeatures
                title="Keunggulan Maintenance Berkala"
                items={[
                    {
                        title: "Inspeksi Rutin",
                        description: "Pemeriksaan komponen mekanikal dan elektrikal secara berkala.",
                    },
                    {
                        title: "Deteksi Dini Kerusakan",
                        description: "Mengidentifikasi potensi masalah sebelum menjadi gangguan besar.",
                    },
                    {
                        title: "Kalibrasi Sistem",
                        description: "Menjaga akurasi leveling lantai dan kenyamanan pengguna.",
                    },
                    {
                        title: "Laporan Maintenance",
                        description: "Dokumentasi hasil pemeriksaan dan rekomendasi teknis.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Seberapa sering maintenance dilakukan?",
                        answer: "Umumnya dilakukan setiap bulan sesuai standar operasional dan kebutuhan gedung.",
                    },
                    {
                        question: "Apakah melayani lift merek lain?",
                        answer: "Ya, kami dapat menangani berbagai merek dan tipe lift.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}