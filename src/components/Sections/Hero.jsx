import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/Hero3.mp4';

const Hero = ({ onAgendaClick, onLearnMoreClick }) => {
    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-24 pt-28 pb-12 overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale opacity-85"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[clamp(1.8rem,10vw,3.2rem)] md:text-[clamp(3.5rem,8vh+2vw,6.5rem)] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6">
                        IA, ciberseguridad, <br />
                        <span className="text-purple-vibrant">arquitectura</span> y sistemas.
                    </h1>

                    <p className="font-mono text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed mb-8 md:mb-10">
                        Implementamos IA soberana segura en tu propia infraestructura:
                        tu data sensible nunca sale a servidores externos. Reforzamos tu ciberseguridad y desarrollamos sistemas escalables.
                    </p>

                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <motion.button
                            onClick={onAgendaClick}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(123, 97, 255, 0.5)",
                                backgroundColor: "#8B73FF"
                            }}
                            className="bg-purple-vibrant px-8 md:px-12 py-4 md:py-5 rounded-tr-3xl rounded-bl-3xl font-mono text-xs md:text-sm tracking-widest uppercase transition-colors shadow-[0_4px_14px_0_rgba(123,97,255,0.39)]"
                        >
                            Agenda una asesoría
                        </motion.button>
                        <motion.button
                            onClick={onLearnMoreClick}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(123, 97, 255, 0.5)",
                                boxShadow: "0 0 20px rgba(123, 97, 255, 0.2)"
                            }}
                            className="border border-white/20 px-8 md:px-12 py-4 md:py-5 rounded-tr-3xl rounded-bl-3xl font-mono text-xs md:text-sm tracking-widest uppercase bg-transparent transition-all"
                        >
                            Saber más
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Side Decorative Text (Vertical) */}
            <div className="absolute right-12 bottom-24 hidden lg:block rotate-90 origin-right">
                <span className="font-mono text-[9px] text-white/70 tracking-[1em] uppercase">
                    Technology • Performance • Security
                </span>
            </div>
        </section>
    );
};

export default Hero;
