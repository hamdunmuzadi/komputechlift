import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Lift Makanan Dumbwaiter",
    description:
        "Lift makanan atau dumbwaiter untuk restoran, hotel, rumah sakit dan cafe. Praktis untuk distribusi makanan antar lantai.",
    alternates: {
        canonical: "/services/lift-makanan",
    },
};

export default function LiftMakananPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="JASA PEMBUATAN DUMBWAITER"
                // Judul lebih deskriptif dan mengandung keyword utama
                title="Jasa Pembuatan Lift Makanan (Dumbwaiter) Berkualitas"
                description="Tingkatkan efisiensi pelayanan bisnis Anda dengan dumbwaiter berbahan food-grade. Solusi distribusi makanan dan barang ringan antar lantai yang cepat, aman, dan higienis untuk restoran, cafe, hotel, hingga rumah sakit."
            />

            <ServiceFeatures
                title="Mengapa Bisnis Anda Membutuhkan Dumbwaiter Kami?"
                items={[
                    {
                        title: "Material Stainless Steel (Food Grade)",
                        // Keyword material sangat penting untuk industri makanan
                        description: "Kabin lift dibuat menggunakan material stainless steel yang anti karat, mudah dibersihkan, dan memenuhi standar higienitas dapur komersial.",
                    },
                    {
                        title: "Distribusi Cepat & Anti Tumpah",
                        description: "Sistem penggerak (hoist) yang halus dan stabil memastikan makanan atau minuman sampai ke lantai tujuan tanpa risiko tumpah atau rusak.",
                    },
                    {
                        title: "Efisiensi SDM & Waktu",
                        description: "Mengurangi beban pramusaji untuk naik-turun tangga, sehingga staf Anda dapat lebih fokus memberikan pelayanan pelanggan yang maksimal.",
                    },
                    {
                        title: "Ukuran Custom Sesuai Space",
                        // Menambahkan angka spesifik yang sering dicari
                        description: "Kapasitas muatan dapat disesuaikan mulai dari 50 kg, 100 kg, hingga 200 kg. Desain hemat ruang (space-saving) cocok untuk dapur berukuran kecil sekalipun.",
                    },
                ]}
            />

            <ServiceFAQ
                // Menambahkan FAQ yang menjawab kekhawatiran soal harga, ukuran, dan keamanan
                items={[
                    {
                        question: "Apa itu dumbwaiter (lift makanan) dan fungsinya?",
                        answer: "Dumbwaiter adalah lift barang berukuran kecil (mini lift) yang dirancang khusus untuk memindahkan makanan, minuman, dokumen, atau obat-obatan antar lantai secara efisien dan higienis.",
                    },
                    {
                        question: "Berapa harga pembuatan lift makanan (dumbwaiter)?",
                        answer: "Harga dumbwaiter bervariasi bergantung pada kapasitas beban (contoh: 50kg atau 100kg), jumlah lantai, dan dimensi kabin. Hubungi KOMPUTECLIFT untuk konsultasi kebutuhan Anda dan dapatkan estimasi harga terbaik.",
                    },
                    {
                        question: "Apakah bisa dipasang di ruko atau cafe yang sempit?",
                        answer: "Sangat bisa. Kami memproduksi dumbwaiter secara custom. Kami akan melakukan survei lokasi untuk mendesain ukuran lift (shaft) yang paling optimal tanpa memakan banyak tempat di area dapur Anda.",
                    },
                    {
                        question: "Bagaimana dengan sistem keamanannya?",
                        answer: "Dumbwaiter kami dilengkapi dengan sensor pintu otomatis dan sistem auto-stop. Lift tidak akan bergerak jika pintu belum tertutup rapat, sehingga sangat aman bagi karyawan Anda.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}