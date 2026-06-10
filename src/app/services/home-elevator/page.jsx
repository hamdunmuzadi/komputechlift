import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

// 1. OPTIMASI METADATA (SEO TECHNICAL)
// Menambahkan 'keywords' (opsional tapi membantu) dan membuat 'description' lebih memancing CTR (Click-Through Rate).
export const metadata = {
    title: "Home Elevator untuk Rumah Tinggal",
    description:
        "Layanan home elevator untuk rumah tinggal, villa dan hunian bertingkat. Desain modern, aman dan nyaman untuk keluarga.",
    alternates: {
        canonical: "/services/home-elevator",
    },
};

export default function HomeElevatorPage() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            {/* 2. OPTIMASI HERO (PRIMARY KEYWORDS) */}
            <ServiceHero
                badge="Spesialis Pemasangan Home Elevator"
                title="Hadirkan Kemewahan & Mobilitas Tanpa Batas di Rumah Anda."
                description="Tingkatkan nilai properti dan kenyamanan mobilitas keluarga Anda. Solusi lift rumah pintar kami dirancang khusus untuk bangunan eksisting, beroperasi sangat senyap, dan menjamin keamanan 100%."
            // Prop gambar dihapus sepenuhnya sesuai konsep desain minimalis yang elegan
            />

            {/* 3. OPTIMASI FEATURES (LSI KEYWORDS & SELLING POINTS) */}
            <ServiceFeatures
                title="Mengapa Memilih Home Elevator Kami?"
                description="Inovasi teknologi lift hunian terbaru yang menyesuaikan dengan gaya hidup dan tata ruang rumah Anda."
                items={[
                    {
                        title: "Hemat Ruang (Space-Saving)",
                        description: "Dapat diinstal di area terbatas sekalipun. Desain inovatif kami tidak membutuhkan ruang mesin khusus (machine-room-less) atau galian pit bawah yang dalam."
                    },
                    {
                        title: "Konsumsi Listrik Sangat Rendah",
                        description: "Dilengkapi motor penggerak eco-friendly berdaya rendah. Menjalankan lift ini setara dengan menyalakan satu unit AC standar di rumah Anda."
                    },
                    {
                        title: "Kustomisasi Desain Premium",
                        description: "Kebebasan memilih material kabin, pintu kaca panoramik, hingga tata cahaya yang selaras dengan konsep desain interior rumah klasik maupun modern Anda."
                    },
                    {
                        title: "Sistem Keamanan Mutakhir",
                        description: "Fasilitas keselamatan standar internasional, termasuk UPS darurat (otomatis turun ke lantai terdekat saat listrik padam) dan sensor anti-terjepit."
                    }
                ]}
            />

            {/* 4. OPTIMASI FAQ (MENJAWAB 'PEOPLE ALSO ASK' DI GOOGLE) */}
            <ServiceFAQ
                title="Pertanyaan Seputar Instalasi Lift Rumah"
                description="Temukan jawaban komprehensif tentang kebutuhan teknis dan spesifikasi pemasangan elevator hunian."
                items={[
                    {
                        question: "Apakah lift rumah bisa dipasang di bangunan yang sudah jadi (eksisting)?",
                        answer: "Sangat bisa. Home elevator kami dirancang dengan struktur mandiri (self-supporting shaft) yang sangat fleksibel untuk dipasang di rumah yang sudah ditempati tanpa perlu membongkar atau merombak fondasi bangunan secara masif."
                    },
                    {
                        question: "Berapa ukuran minimal ruangan yang dibutuhkan?",
                        answer: "Kami menyediakan varian lift rumah compact yang hanya membutuhkan dimensi ruang sekitar 1 x 1 meter. Sangat ideal untuk memaksimalkan area sempit atau sudut tangga di rumah Anda."
                    },
                    {
                        question: "Bagaimana garansi dan sistem perawatannya (maintenance)?",
                        answer: "Kami memberikan garansi resmi spare part dan layanan purna jual profesional. Tim teknisi kami akan menjadwalkan inspeksi dan pelumasan rutin untuk memastikan lift selalu beroperasi dengan halus dan aman puluhan tahun ke depan."
                    }
                ]}
            />

            <ServiceCTA />
        </main>
    );
}