"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; //
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import Projects from "../components/Projects";
import TrustedBy from "../components/TrustedBy";
import CompanyDocuments from "../components/CompanyDocuments";
import MediaSocial from "../components/MediaSocial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomeClient() {
    return (
        <div className="min-h-screen bg-white antialiased selection:bg-blue-500 selection:text-white">
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
                {/* <CompanyDocuments /> */}
                <MediaSocial />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}