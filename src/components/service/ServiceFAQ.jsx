"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function ServiceFAQ({
    title = "Pertanyaan Umum",
    items = [],
}) {
    const [active, setActive] = useState(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    {title}
                </h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActive(active === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900">
                                    {item.question}
                                </span>

                                {active === index ? (
                                    <FiMinus />
                                ) : (
                                    <FiPlus />
                                )}
                            </button>

                            {active === index && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}