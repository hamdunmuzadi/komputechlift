import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    // Menggunakan kata "Service" dan "Perbaikan" karena pencarian ini sangat tinggi
    title: "Jasa Service & Maintenance Lift Berpengalaman | KOMPUTECLIFT",
    description:
        "Layanan jasa service, perbaikan (troubleshooting), dan maintenance lift bulanan untuk lift barang, dumbwaiter, dan lift penumpang. Teknisi profesional dan respon cepat.",
};

export default function MaintenanceLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="JASA SERVICE & MAINTENANCE LIFT"
                // Mengubah judul agar mencakup perbaikan dan perawatan
                title="Layanan Perawatan & Perbaikan Lift Profesional"
                description="Hindari kerusakan fatal dan lift macet dengan program maintenance preventif dari KOMPUTECLIFT. Kami memastikan lift Anda beroperasi dengan aman, mulus, dan memenuhi standar keselamatan gedung."
            />

            <ServiceFeatures
                title="Mengapa Memilih Layanan Maintenance Kami?"
                items={[
                    {
                        title: "Preventive Maintenance (Inspeksi Rutin)",
                        // Menambahkan detail teknis yang dicari oleh pengelola gedung (Building Management)
                        description: "Pemeriksaan menyeluruh secara berkala meliputi panel elektrikal, sistem mekanik, pelumasan (lubrikasi), dan pengecekan tali sling baja (wire rope).",
                    },
                    {
                        title: "Troubleshooting & Perbaikan Cepat",
                        description: "Layanan perbaikan (corrective maintenance) dengan respon cepat untuk mengatasi masalah lift anjlok, macet, error, atau pintu tidak tertutup rapat.",
                    },
                    {
                        title: "Dukungan Spare Part Lengkap",
                        description: "Kami menyediakan penggantian suku cadang (spare part) berkualitas tinggi dengan harga transparan untuk memastikan umur mesin lift lebih panjang.",
                    },
                    {
                        title: "Laporan Perawatan Detail (Checklist)",
                        description: "Setiap kunjungan teknisi akan disertai dengan buku log (logbook) dan laporan teknis mengenai kondisi lift serta rekomendasi pergantian part jika diperlukan.",
                    },
                ]}
            />

            <ServiceFAQ
                // Menambahkan FAQ spesifik tentang harga bulanan, jenis lift, dan kondisi darurat
                items={[
                    {
                        question: "Seberapa sering maintenance lift harus dilakukan?",
                        answer: "Untuk menjaga standar keselamatan yang optimal, kami merekomendasikan perawatan rutin dilakukan setiap 1 bulan sekali (Preventive Maintenance). Terutama untuk lift pabrik atau gedung dengan intensitas penggunaan tinggi.",
                    },
                    {
                        question: "Apakah KOMPUTECLIFT menerima service lift dari merk atau vendor lain?",
                        answer: "Tentu. Teknisi kami sangat berpengalaman dalam menangani, menganalisis, dan memperbaiki berbagai jenis serta merk lift, baik lift barang (cargo lift), dumbwaiter, maupun lift penumpang.",
                    },
                    {
                        question: "Berapa biaya kontrak maintenance lift bulanan?",
                        answer: "Biaya perawatan sangat terjangkau dan disesuaikan dengan jenis lift, jumlah lantai, usia mesin, serta jumlah unit yang dikontrak. Kami menawarkan paket service fleksibel yang bisa disesuaikan dengan anggaran perusahaan Anda.",
                    },
                    {
                        question: "Bagaimana jika lift tiba-tiba macet atau rusak di luar jadwal rutin?",
                        answer: "Anda tidak perlu khawatir. Kami memiliki layanan panggilan perbaikan (on-call service) untuk menangani kendala darurat agar operasional bisnis Anda tidak terganggu terlalu lama.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}