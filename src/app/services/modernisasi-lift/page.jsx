import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Modernisasi Lift | KOMPUTECLIFT",
    description:
        "Upgrade sistem lift lama dengan teknologi terbaru untuk meningkatkan keamanan, efisiensi, dan kenyamanan pengguna.",
};

export default function ModernisasiLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="LAYANAN KOMPUTECLIFT"
                title="Modernisasi Lift"
                description="Pembaruan sistem kontrol, inverter, motor, dan komponen penting lainnya tanpa harus mengganti seluruh unit lift."
            />

            <ServiceFeatures
                title="Manfaat Modernisasi Lift"
                items={[
                    {
                        title: "Efisiensi Energi",
                        description: "Mengurangi konsumsi listrik dengan teknologi terbaru.",
                    },
                    {
                        title: "Keamanan Lebih Baik",
                        description: "Upgrade perangkat keselamatan sesuai standar modern.",
                    },
                    {
                        title: "Kenyamanan Pengguna",
                        description: "Pergerakan lift lebih halus dan responsif.",
                    },
                    {
                        title: "Memperpanjang Umur Lift",
                        description: "Meningkatkan masa pakai sistem tanpa penggantian total.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Apakah lift lama harus diganti seluruhnya?",
                        answer: "Tidak. Banyak komponen dapat dimodernisasi tanpa mengganti seluruh sistem.",
                    },
                    {
                        question: "Apakah modernisasi memerlukan penghentian operasional lama?",
                        answer: "Ya, tetapi kami berupaya meminimalkan waktu downtime selama pengerjaan.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}