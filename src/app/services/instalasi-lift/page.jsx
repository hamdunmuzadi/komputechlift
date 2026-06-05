import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Instalasi Lift Baru | KOMPUTECLIFT",
    description:
        "Layanan instalasi lift baru untuk gedung, rumah, hotel, rumah sakit, pusat perbelanjaan, dan fasilitas industri dengan teknologi modern dan standar keselamatan tinggi.",
    keywords: [
        "instalasi lift",
        "pemasangan lift",
        "lift penumpang",
        "lift barang",
        "home elevator",
        "lift makanan",
        "kontraktor lift",
        "komputeclift",
    ],
};

export default function InstalasiLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="LAYANAN KOMPUTECLIFT"
                title="Instalasi Lift Baru"
                description="Solusi lengkap mulai dari konsultasi, perencanaan, pengadaan unit, pemasangan, hingga commissioning lift untuk berbagai jenis bangunan dengan standar keselamatan dan kualitas tinggi."
            />

            <ServiceFeatures
                title="Mengapa Memilih Layanan Instalasi Lift Kami?"
                description="Kami memastikan setiap proyek dirancang sesuai kebutuhan bangunan, kapasitas pengguna, dan standar keselamatan yang berlaku."
                items={[
                    {
                        title: "Konsultasi & Survey Lokasi",
                        description:
                            "Tim kami melakukan analisis kebutuhan dan survey lapangan untuk menentukan solusi lift yang paling sesuai.",
                    },
                    {
                        title: "Teknologi Modern",
                        description:
                            "Menggunakan sistem kontrol dan inverter modern untuk memberikan performa yang efisien dan nyaman.",
                    },
                    {
                        title: "Standar Keselamatan Tinggi",
                        description:
                            "Setiap instalasi mengikuti prosedur keselamatan dan pengujian yang ketat sebelum diserahterimakan.",
                    },
                    {
                        title: "Dukungan Purna Jual",
                        description:
                            "Didukung layanan maintenance dan dukungan teknis untuk menjaga performa lift tetap optimal.",
                    },
                ]}
            />

            <ServiceFeatures
                title="Jenis Lift yang Kami Tangani"
                description="KOMPUTECLIFT melayani berbagai kebutuhan sistem transportasi vertikal untuk sektor residensial maupun komersial."
                items={[
                    {
                        title: "Lift Penumpang",
                        description:
                            "Untuk gedung perkantoran, hotel, apartemen, rumah sakit, dan pusat perbelanjaan.",
                    },
                    {
                        title: "Home Elevator",
                        description:
                            "Lift rumah modern dengan desain elegan, nyaman, dan hemat ruang.",
                    },
                    {
                        title: "Lift Barang",
                        description:
                            "Dirancang untuk mendukung kebutuhan logistik, gudang, dan fasilitas industri.",
                    },
                    {
                        title: "Lift Makanan",
                        description:
                            "Dumbwaiter untuk restoran, hotel, rumah sakit, dan dapur komersial.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Apakah KOMPUTECLIFT melayani instalasi lift rumah?",
                        answer:
                            "Ya. Kami menyediakan solusi home elevator untuk rumah tinggal, villa, dan bangunan residensial lainnya.",
                    },
                    {
                        question: "Apakah tersedia layanan survey lokasi?",
                        answer:
                            "Ya. Tim kami dapat melakukan survey lokasi untuk menentukan spesifikasi dan kebutuhan instalasi yang paling sesuai.",
                    },
                    {
                        question: "Apakah melayani lift barang dan lift makanan?",
                        answer:
                            "Ya. Kami melayani instalasi lift barang (cargo lift) dan lift makanan (dumbwaiter) untuk berbagai kebutuhan usaha dan industri.",
                    },
                    {
                        question: "Apakah tersedia layanan maintenance setelah instalasi?",
                        answer:
                            "Ya. Kami menyediakan program maintenance berkala untuk memastikan lift tetap aman dan beroperasi secara optimal.",
                    },
                ]}
            />

            <ServiceCTA
                title="Butuh Konsultasi Instalasi Lift?"
                description="Diskusikan kebutuhan proyek Anda bersama tim KOMPUTECLIFT dan dapatkan solusi yang tepat untuk bangunan Anda."
            />

        </main>
    );
}