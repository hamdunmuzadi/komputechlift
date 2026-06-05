import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Lift Barang (Cargo Lift) | KOMPUTECLIFT",
    description:
        "Jasa pemasangan lift barang untuk gudang, pabrik, toko, rumah sakit, dan fasilitas industri dengan berbagai kapasitas.",
};

export default function LiftBarangPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="CARGO LIFT"
                title="Lift Barang untuk Kebutuhan Industri dan Komersial"
                description="Solusi transportasi vertikal yang kuat dan andal untuk memindahkan barang secara aman dan efisien."
            />

            <ServiceFeatures
                title="Keunggulan Lift Barang"
                items={[
                    {
                        title: "Kapasitas Besar",
                        description: "Tersedia berbagai pilihan kapasitas sesuai kebutuhan operasional.",
                    },
                    {
                        title: "Konstruksi Kokoh",
                        description: "Dirancang untuk penggunaan intensif dan beban berat.",
                    },
                    {
                        title: "Operasional Efisien",
                        description: "Meningkatkan produktivitas proses logistik dan distribusi.",
                    },
                    {
                        title: "Sistem Aman",
                        description: "Dilengkapi fitur keselamatan untuk melindungi barang dan pengguna.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Berapa kapasitas lift barang yang tersedia?",
                        answer: "Kami menyediakan berbagai kapasitas yang dapat disesuaikan dengan kebutuhan proyek.",
                    },
                    {
                        question: "Apakah bisa untuk gudang dan pabrik?",
                        answer: "Ya, lift barang sangat cocok untuk gudang, pabrik, toko, dan fasilitas industri lainnya.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}