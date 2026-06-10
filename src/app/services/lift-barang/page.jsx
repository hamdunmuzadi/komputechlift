import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    // Menambahkan kata "Jasa Pembuatan", "Pemasangan", dan "Terpercaya" untuk meningkatkan Click-Through Rate (CTR)
    title: "Jasa Pembuatan & Pemasangan Lift Barang (Cargo Lift) | KOMPUTECLIFT",
    description:
        "KOMPUTECLIFT melayani jasa pembuatan dan pemasangan lift barang (cargo lift) custom untuk gudang, pabrik, dan ruko. Konstruksi kokoh, harga terjangkau, dan bergaransi.",
};

export default function LiftBarangPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="JASA CARGO LIFT"
                // Mengubah judul agar sesuai dengan intensi pencarian (Search Intent)
                title="Jasa Pembuatan & Pemasangan Lift Barang Profesional"
                description="Tingkatkan efisiensi logistik bisnis Anda dengan solusi lift barang (cargo lift) custom. Konstruksi kokoh, aman, bergaransi, dan kapasitas dapat disesuaikan untuk kebutuhan pabrik, gudang, maupun ruko."
            />

            <ServiceFeatures
                title="Mengapa Memilih Cargo Lift dari KOMPUTECLIFT?"
                items={[
                    {
                        title: "Kapasitas Custom & Fleksibel",
                        // Menambahkan variasi angka yang sering di-googling orang
                        description: "Tersedia pilihan kapasitas mulai dari 500 kg, 1 Ton, 2 Ton, hingga 5 Ton lebih sesuai kebutuhan operasional bangunan Anda.",
                    },
                    {
                        title: "Konstruksi Baja Kokoh",
                        description: "Menggunakan material baja SNI berkualitas tinggi yang dirancang khusus untuk penggunaan intensif, awet, dan tahan beban berat.",
                    },
                    {
                        title: "Harga Terjangkau & Efisien",
                        description: "Investasi hemat dengan harga pembuatan yang kompetitif. Mesin hoist yang andal membantu mempercepat proses distribusi barang antar lantai.",
                    },
                    {
                        title: "Sistem Keamanan Terstandarisasi",
                        description: "Dilengkapi fitur keselamatan ekstra seperti sensor keamanan, auto-lock, dan pintu pengaman (safety gate) untuk melindungi operator dan barang.",
                    },
                ]}
            />

            <ServiceFAQ
                // Memperpanjang jawaban FAQ karena Google sangat menyukai konten tanya-jawab yang detail (membantu fitur PAA - People Also Ask di Google)
                items={[
                    {
                        question: "Berapa kapasitas lift barang (cargo lift) yang bisa dibuat?",
                        answer: "Kami melayani pembuatan lift barang secara custom dengan kapasitas yang bervariasi. Mulai dari kapasitas ringan 500 kg, hingga kapasitas berat seperti 1 ton, 2 ton, 3 ton, hingga di atas 5 ton sesuai spesifikasi proyek Anda.",
                    },
                    {
                        question: "Berapa harga pembuatan dan pemasangan lift barang?",
                        answer: "Harga lift barang sangat bervariasi menyesuaikan kapasitas muatan, dimensi, jumlah lantai (ketinggian), dan spesifikasi material. Silakan hubungi tim KOMPUTECLIFT untuk mendapatkan penawaran harga terbaik dan konsultasi gratis.",
                    },
                    {
                        question: "Apakah melayani pemasangan untuk ruko, gudang, dan pabrik?",
                        answer: "Ya, kami berpengalaman melakukan instalasi cargo lift untuk berbagai fasilitas komersial dan industri. Mulai dari ruko bertingkat, gudang logistik, pabrik, rumah sakit, hingga pusat perbelanjaan.",
                    },
                    {
                        question: "Apakah pemasangan lift barang ini bergaransi?",
                        answer: "Tentu. Setiap pemasangan unit lift barang dari KOMPUTECLIFT dilengkapi dengan garansi konstruksi dan mesin, serta dukungan layanan purna jual (maintenance) agar lift tetap beroperasi secara optimal dan aman.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}