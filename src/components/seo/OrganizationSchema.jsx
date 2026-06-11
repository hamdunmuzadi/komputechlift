export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        // 1. Menggunakan LocalBusiness karena memiliki area operasional dan alamat fisik
        "@type": "LocalBusiness", 
        "name": "KOMPUTECLIFT",
        // 2. Menambahkan nama legal perusahaan
        "legalName": "CV. Faza Jaya Indonesia",
        "url": "https://komputeclift.com",
        "logo": "https://komputeclift.com/komputeclift-logo.png",
        "image": "https://komputeclift.com/komputeclift-logo.png", // Diperlukan oleh Google untuk LocalBusiness

        "description": "Jasa instalasi lift, home elevator, lift barang, lift makanan, maintenance, modernisasi dan rekondisi lift di Indonesia.",
        "telephone": "+62817610929",
        "priceRange": "$$", // Opsional namun sangat direkomendasikan Google untuk LocalBusiness

        // 3. Menambahkan Alamat (Sangat krusial untuk Local SEO)
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kp. Citaman, Kec. Nagreg",
            "addressLocality": "Kabupaten Bandung",
            "addressRegion": "Jawa Barat",
            "postalCode": "40397",
            "addressCountry": "ID"
        },

        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62817610929",
            "contactType": "customer service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian"],
        },

        // 4. Mengaitkan profil sosial media untuk memperkuat Knowledge Graph
        "sameAs": [
            "https://www.instagram.com/rahmanelevators/",
            "https://youtube.com" // Ganti dengan URL channel YouTube yang spesifik jika ada
        ],

        "areaServed": {
            "@type": "Country",
            "name": "Indonesia",
        },

        "knowsAbout": [
            "Home Elevator",
            "Lift Barang",
            "Lift Makanan",
            "Dumbwaiter",
            "Maintenance Lift",
            "Modernisasi Lift",
            "Rekondisi Lift",
            "Instalasi Lift",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}