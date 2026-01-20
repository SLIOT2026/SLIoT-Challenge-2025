import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const InnovationTourPromo = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full py-20 px-[4%] md:px-[5%] lg:px-[10%] bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 shadow-2xl p-8 md:p-12 lg:p-16">
                    {/* Gradient overlay effects */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-[#46BC41] rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#01688E] rounded-full blur-[120px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Icon/Visual Element */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#46BC41] to-[#01688E] rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                                <span className="text-5xl md:text-6xl">🚀</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow text-center lg:text-left">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                            >
                                SLIoT Innovation Tour
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 max-w-3xl"
                            >
                                Join us for an island-wide IoT & AI awareness program designed for school students.
                                Discover hands-on workshops, learn from industry experts, and explore innovation opportunities across Sri Lanka.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button
                                    onClick={() => navigate('/innovation-tour')}
                                    className="group relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none"
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#46BC41_0%,#01688E_50%,#46BC41_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-base md:text-lg font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
                                        Learn More About Innovation Tour
                                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#46BC41]/20 to-[#01688E]/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#01688E]/20 to-[#46BC41]/20 rounded-full blur-xl"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default InnovationTourPromo;
