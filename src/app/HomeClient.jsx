"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; //
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import Projects from "../components/Projects";
import TrustedBy from "../components/TrustedBy";
import Footer from "../components/Footer";
import CommunicationHub from "@/components/CommunicationHub";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function HomeClient() {
    return (
        <div className="min-h-screen bg-white antialiased selection:bg-blue-500 selection:text-white">
            <OrganizationSchema />
            {/* Navbar melayang di atas semua konten */}
            <Navbar />

            <main>
                {/* 2. Selipkan Hero Section di urutan pertama sebelum Services */}
                <Hero />

                {/* Urutan Alur Section Selanjutnya */}
                <Services />
                <WhyChooseUs />
                <Brands />
                <Projects />
                <TrustedBy />
                <CommunicationHub />
            </main>

            <Footer />
        </div>
    );
}