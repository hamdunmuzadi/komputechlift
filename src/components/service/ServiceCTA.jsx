import Link from "next/link";

export default function ServiceCTA({
    title = "Konsultasikan Kebutuhan Lift Anda",
    description = "Tim KOMPUTECLIFT siap membantu menentukan solusi yang paling sesuai untuk proyek Anda.",
    buttonText = "Hubungi Kami",
    buttonHref = "https://wa.me/62817610929",
}) {
    return (
        <section className="py-24 bg-blue-600">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {title}
                </h2>

                <p className="text-blue-100 mb-8 text-lg">
                    {description}
                </p>

                <Link
                    href={buttonHref}
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    {buttonText}
                </Link>

            </div>
        </section>
    );
}