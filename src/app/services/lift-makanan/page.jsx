import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Lift Makanan (Dumbwaiter) | KOMPUTECLIFT",
    description:
        "Jasa instalasi lift makanan atau dumbwaiter untuk restoran, hotel, rumah sakit, cafe, dan dapur komersial.",
};

export default function LiftMakananPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="DUMBWAITER"
                title="Lift Makanan untuk Restoran dan Hotel"
                description="Sistem dumbwaiter modern untuk mempercepat distribusi makanan dan barang ringan antar lantai."
            />

            <ServiceFeatures
                title="Keunggulan Lift Makanan"
                items={[
                    {
                        title: "Distribusi Lebih Cepat",
                        description: "Mempercepat pengiriman makanan antar lantai.",
                    },
                    {
                        title: "Higienis",
                        description: "Mengurangi kontak langsung selama proses distribusi.",
                    },
                    {
                        title: "Efisiensi Operasional",
                        description: "Meningkatkan produktivitas staf dapur dan pelayanan.",
                    },
                    {
                        title: "Kustom Ukuran",
                        description: "Dapat disesuaikan dengan kebutuhan kapasitas usaha.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Apa itu dumbwaiter?",
                        answer: "Dumbwaiter adalah lift berukuran kecil yang digunakan untuk memindahkan makanan atau barang ringan antar lantai.",
                    },
                    {
                        question: "Apakah cocok untuk restoran kecil?",
                        answer: "Ya, dumbwaiter tersedia dalam berbagai ukuran sesuai kebutuhan usaha.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}