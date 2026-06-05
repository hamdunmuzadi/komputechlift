"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceFeatures({
    title,
    description,
    items = [],
}) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-4 text-gray-600">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                        >
                            <FaCheckCircle className="text-blue-600 text-xl mb-4" />

                            <h3 className="font-bold text-lg text-gray-900 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}