import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Home Elevator | Lift Rumah Modern | KOMPUTECLIFT",
    description:
        "Jasa pemasangan home elevator untuk rumah tinggal, villa, dan hunian bertingkat. Desain modern, aman, nyaman, dan hemat ruang.",
};

export default function HomeElevatorPage() {
    return (
        <main>
            <Navbar />
            <ServiceHero
                badge="HOME ELEVATOR"
                title="Lift Rumah Modern untuk Hunian Nyaman"
                description="Solusi home elevator yang elegan, aman, dan efisien untuk meningkatkan kenyamanan mobilitas di rumah tinggal dan villa."
            />

            <ServiceFeatures
                title="Keunggulan Home Elevator"
                items={[
                    {
                        title: "Desain Elegan",
                        description: "Menyatu dengan konsep interior rumah modern maupun klasik.",
                    },
                    {
                        title: "Hemat Ruang",
                        description: "Dapat disesuaikan dengan keterbatasan area bangunan.",
                    },
                    {
                        title: "Operasi Senyap",
                        description: "Memberikan kenyamanan tanpa suara bising berlebihan.",
                    },
                    {
                        title: "Keamanan Tinggi",
                        description: "Dilengkapi fitur keselamatan sesuai standar industri.",
                    },
                ]}
            />

            <ServiceFAQ
                items={[
                    {
                        question: "Apakah home elevator cocok untuk rumah 2 lantai?",
                        answer: "Ya, home elevator sangat cocok untuk rumah 2 lantai maupun lebih.",
                    },
                    {
                        question: "Apakah membutuhkan ruang mesin khusus?",
                        answer: "Tergantung tipe elevator yang dipilih. Kami akan merekomendasikan solusi terbaik sesuai kondisi bangunan.",
                    },
                ]}
            />

            <ServiceCTA />
        </main>
    );
}