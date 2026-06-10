export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "KOMPUTECLIFT",
        url: "https://komputeclift.com",
        logo: "https://komputeclift.com/komputeclift-logo.png",

        description:
            "Jasa instalasi lift, home elevator, lift barang, lift makanan, maintenance, modernisasi dan rekondisi lift di Indonesia.",

        telephone: "+62817610929",

        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62817610929",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["Indonesian"],
        },

        areaServed: {
            "@type": "Country",
            name: "Indonesia",
        },

        knowsAbout: [
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