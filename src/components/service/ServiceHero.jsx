"use client";

import { motion } from "framer-motion";

export default function ServiceHero({
    badge,
    title,
    description,
}) {
    return (
        <section className="bg-linear-to-b from-gray-50 to-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl space-y-6"
                >
                    {badge && (
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                            {badge}
                        </span>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                        {title}
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {description}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}