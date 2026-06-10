import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    // Menambahkan kata "Upgrade", "Elevator", dan "Lama" untuk memperluas jangkauan pencarian
    title: "Jasa Modernisasi & Upgrade Lift Lama (Elevator) | KOMPUTECLIFT",
    description:
        "Jasa modernisasi dan upgrade lift lama untuk meningkatkan keamanan, efisiensi energi (hemat listrik), dan performa tanpa harus membongkar unit lift secara total.",
};

export default function ModernisasiLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="JASA UPGRADE & MODERNISASI LIFT"
                // Mengubah judul agar lebih menarik dan sesuai dengan masalah pelanggan (Lift Lama)
                title="Modernisasi Lift: Solusi Cerdas Perbarui Lift Tua Anda"
                description="Perbarui sistem kontrol, inverter, motor penggerak, hingga interior kabin lift Anda dengan teknologi terkini. Solusi tepat untuk mengembalikan performa lift menjadi seperti baru tanpa biaya mahal pembongkaran total."
            />

            <ServiceFeatures
                title="Keuntungan Melakukan Modernisasi Lift"
                items={[
                    {
                        title: "Hemat Biaya (Cost-Effective)",
                        // Menggunakan kata kunci perbandingan yang sering dipikirkan calon klien
                        description: "Jauh lebih hemat dibandingkan harus membeli dan menginstal lift baru, karena tetap mempertahankan struktur mekanik dan rel yang masih layak pakai.",
                    },
                    {
                        title: "Efisiensi Energi & Hemat Listrik",
                        // Memasukkan istilah teknis yang relevan (Inverter VVVF)
                        description: "Pemasangan sistem kontrol modern dan teknologi Inverter (VVVF) yang terbukti signifikan menurunkan konsumsi daya listrik gedung Anda.",
                    },
                    {
                        title: "Performa Halus & Standar Keamanan Baru",
                        description: "Pergerakan lift menjadi jauh lebih halus, presisi saat leveling (berhenti di lantai), dan dilengkapi perangkat keselamatan (safety device) berstandar masa kini.",
                    },
                    {
                        title: "Pembaruan Estetika Kabin",
                        description: "Selain pembaruan mesin, kami juga melayani peremajaan interior kabin, mulai dari tombol operasional (COP/LOP), pencahayaan LED, hingga desain lantai dan dinding.",
                    },
                ]}
            />

            <ServiceFAQ
                // Menambahkan pertanyaan krusial seperti tanda-tanda lift harus di-upgrade dan estimasi biaya/waktu
                items={[
                    {
                        question: "Kapan waktu yang tepat untuk melakukan modernisasi lift?",
                        answer: "Modernisasi disarankan jika lift Anda sudah berusia lebih dari 10-15 tahun, sering mengalami kerusakan (macet), suku cadang langka di pasaran, boros listrik, atau pergerakannya sudah tidak nyaman dan kasar.",
                    },
                    {
                        question: "Apakah lift lama harus dibongkar dan diganti seluruhnya?",
                        answer: "Tidak. Dalam proses modernisasi, kami hanya mengganti komponen 'otak' dan penggerak utama (seperti Control Panel, Kabel, Inverter, dan Tombol). Struktur berat seperti rel, sangkar (kabin), dan counterweight biasanya tetap dipertahankan.",
                    },
                    {
                        question: "Berapa lama proses pengerjaan upgrade lift ini?",
                        answer: "Waktu pengerjaan sangat bervariasi bergantung pada skala pembaruan (biasanya antara 1 hingga beberapa minggu). Kami selalu merancang jadwal kerja yang efisien untuk meminimalkan waktu henti (downtime) di gedung Anda.",
                    },
                    {
                        question: "Apakah hasil modernisasi ini bergaransi?",
                        answer: "Tentu saja. Semua komponen baru yang kami pasang dan kerjakan dalam layanan modernisasi lift dari KOMPUTECLIFT dilengkapi dengan jaminan garansi resmi dan dukungan teknisi purna jual yang andal.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}