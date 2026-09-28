import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "TESLABATTERIES",
    "HMC",
    "PROKAMBIUM",
    "INGRESA.CL",
    "AGROGIGANTE",
    "VOENS"
];

const LogoCarousel = () => {
    return (
        <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-24 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-mono text-[15px] text-white/70 tracking-wider"
                >
                    Nuestras soluciones han sido implementadas en organizaciones de liderazgo global:
                </motion.p>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* First set of logos */}
                    <div className="flex items-center gap-24 px-12">
                        {logos.map((logo, i) => (
                            <span
                                key={i}
                                className="text-2xl md:text-3xl font-sans font-light text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-24 px-12">
                        {logos.map((logo, i) => (
                            <span
                                key={`dup-${i}`}
                                className="text-2xl md:text-3xl font-sans font-light text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Gradient Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
};

export default LogoCarousel;
