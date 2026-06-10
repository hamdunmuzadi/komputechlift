import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Rekondisi Lift Profesional",
    description:
        "Layanan rekondisi lift untuk mengembalikan performa dan keandalan sistem elevator dengan biaya yang lebih efisien.",
    alternates: {
        canonical: "/services/rekondisi-lift",
    },
};

export default function RekondisiLiftPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="LAYANAN KOMPUTECLIFT"
                title="Repair & Rekondisi Lift"
                description="Penanganan gangguan, perbaikan komponen, dan rekondisi sistem lift oleh teknisi berpengalaman."
            />

            <ServiceFeatures
                title="Layanan Repair & Rekondisi"
                items={[
                    {
                        title: "Troubleshooting Cepat",
                        description: "Identifikasi dan analisis penyebab gangguan secara akurat.",
                    },
                    {
                        title: "Perbaikan Komponen",
                        description: "Perbaikan sistem mekanikal maupun elektrikal lift.",
                    },
                    {
                        title: "Penggantian Sparepart",
                        description: "Penggunaan komponen pengganti yang sesuai spesifikasi.",
                    },
                    {
                        title: "Pengujian Sistem",
                        description: "Memastikan lift kembali beroperasi secara aman setelah perbaikan.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Apakah tersedia layanan darurat?",
                        answer: "Ya, kami menyediakan layanan penanganan gangguan sesuai kebutuhan pelanggan.",
                    },
                    {
                        question: "Apakah bisa menangani lift yang sudah tua?",
                        answer: "Ya. Kami dapat melakukan evaluasi dan rekondisi pada lift lama.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}