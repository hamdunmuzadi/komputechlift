import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

// OPTIMASI METADATA UNTUK SEO
export const metadata = {
    title: "Jasa Instalasi Lift Profesional",
    description:
        "Jasa instalasi lift profesional untuk gedung, hotel, rumah sakit, industri dan hunian di seluruh Indonesia.",

    alternates: {
        canonical: "/services/instalasi-lift",
    },
};

export default function InstalasiLiftPage() {
    return (
        // Wrapper utama diselaraskan dengan warna dasar aplikasi (bg-slate-50)
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            {/* HERO SECTION - Menggunakan tema terang minimalis (Tipografi Kuat) */}
            <ServiceHero
                badge="Layanan Utama KOMPUTECLIFT"
                title="Instalasi Lift Baru Berstandar Global"
                description="Solusi end-to-end mulai dari konsultasi teknis, perencanaan struktur, pengadaan unit, instalasi presisi, hingga commissioning untuk berbagai skala bangunan."
            />

            {/* FEATURES 1 - Otomatis menggunakan tema gelap (bg-slate-950) */}
            <ServiceFeatures
                title="Mengapa Memilih Layanan Instalasi Kami?"
                description="Kami memastikan setiap proyek dirancang secara kustom sesuai kebutuhan kapasitas, struktur bangunan, dan standar regulasi keselamatan ketat."
                items={[
                    {
                        title: "Konsultasi & Survey Akurat",
                        description:
                            "Tim ahli kami melakukan analisis mendalam dan survey topografi lapangan untuk menentukan spesifikasi lift yang paling efisien.",
                    },
                    {
                        title: "Teknologi Kontrol Modern",
                        description:
                            "Mengadopsi sistem mikroprosesor dan inverter terbaru untuk memberikan performa pergerakan lift yang halus dan hemat energi.",
                    },
                    {
                        title: "Standar Keselamatan Tinggi",
                        description:
                            "Setiap instalasi wajib melewati serangkaian uji beban (load test) dan kalibrasi sensor keselamatan sebelum diserahterimakan.",
                    },
                    {
                        title: "Dukungan Purna Jual Prima",
                        description:
                            "Investasi Anda terlindungi dengan layanan maintenance responsif dan jaminan ketersediaan suku cadang jangka panjang.",
                    },
                ]}
            />

            {/* FEATURES 2 - Menyambung mulus dengan area gelap di atasnya, menciptakan satu blok elegan */}
            <ServiceFeatures
                title="Jenis Lift yang Kami Tangani"
                description="KOMPUTECLIFT menyediakan infrastruktur transportasi vertikal yang andal untuk sektor residensial, komersial, maupun industrial."
                items={[
                    {
                        title: "Lift Penumpang (Passenger)",
                        description:
                            "Mobilitas berkapasitas tinggi untuk gedung perkantoran, hotel, apartemen, pusat perbelanjaan, dan rumah sakit.",
                    },
                    {
                        title: "Home Elevator",
                        description:
                            "Elevator hunian mewah dengan kustomisasi desain interior elegan, operasi sangat senyap, dan hemat ruang.",
                    },
                    {
                        title: "Lift Barang (Cargo Lift)",
                        description:
                            "Konstruksi heavy-duty yang dirancang khusus untuk mendukung arus logistik berat di gudang dan fasilitas industri.",
                    },
                    {
                        title: "Lift Makanan (Dumbwaiter)",
                        description:
                            "Solusi distribusi barang kecil yang higienis dan efisien untuk restoran, dapur komersial, hotel, dan laboratorium.",
                    },
                ]}
            />

            {/* FAQ SECTION - Kembali ke tema terang (bg-slate-50) dengan animasi akordion */}
            <ServiceFAQ
                title="FAQ Seputar Instalasi Lift"
                description="Informasi ringkas mengenai prosedur operasional dan cakupan layanan teknis instalasi KOMPUTECLIFT."
                items={[
                    {
                        question: "Apakah melayani pemasangan lift untuk bangunan yang sudah jadi?",
                        answer:
                            "Ya. Kami memiliki solusi desain lift tanpa galian pit dalam (pitless) yang aman dipasang pada bangunan eksisting tanpa merombak struktur utama secara masif.",
                    },
                    {
                        question: "Bagaimana tahapan untuk memulai instalasi?",
                        answer:
                            "Tim kami akan melakukan survey lokasi secara gratis untuk mengukur ruang luncur (hoistway), mendiskusikan kapasitas, dan menyusun penawaran harga (RAB) yang transparan.",
                    },
                    {
                        question: "Apakah KOMPUTECLIFT melayani instalasi lift barang skala industri?",
                        answer:
                            "Tentu. Kami melayani instalasi lift barang (cargo lift) berkapasitas tonase besar dengan material baja solid dan sistem penggerak traksi/hidrolik yang tangguh.",
                    },
                    {
                        question: "Apakah instalasi sudah termasuk garansi dan maintenance?",
                        answer:
                            "Pasti. Setiap pemasangan unit baru sudah mencakup garansi resmi suku cadang dan program maintenance berkala (free maintenance) selama periode awal operasional.",
                    },
                ]}
            />

            {/* CTA SECTION - Menggunakan tema kartu gelap melayang di latar putih */}
            <ServiceCTA
                title="Butuh Konsultasi Instalasi Lift?"
                description="Diskusikan spesifikasi proyek Anda bersama teknisi ahli KOMPUTECLIFT. Dapatkan estimasi harga terbaik dan jadwal survey lokasi tanpa biaya."
                buttonText="Hubungi Konsultan Kami"
            />
        </main>
    );
}