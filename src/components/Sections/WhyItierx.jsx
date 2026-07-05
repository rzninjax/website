import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from '../UI/VideoModal';

const WhyItierx = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="metodologia" className="relative pt-28 pb-14 md:pt-32 md:pb-16 px-8 md:px-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="font-mono text-purple-vibrant text-xs tracking-widest uppercase mb-4 block">
                        The Advantage
                    </span>
                    <h2 className="text-4xl md:text-7xl mb-6">¿Por qué ITier<span className="text-purple-vibrant">X</span>?</h2>
                    <p className="font-mono text-white/60 text-lg">
                        Tu infraestructura = <span className="text-white">Tu ventaja competitiva silenciosa.</span>
                    </p>
                </motion.div>

                {/* Video único (poster liviano, se reproduce al hacer clic) */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Reproducir video de ITierX"
                    className="group relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-purple-vibrant/40 shadow-[0_0_80px_rgba(123,97,255,0.15)]"
                >
                    <img
                        src="/videos/why-itierx-poster.jpg"
                        alt="Metodología de Impacto ITierX"
                        loading="lazy"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Botón play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-vibrant/20 border border-purple-vibrant flex items-center justify-center backdrop-blur-sm transition-all group-hover:bg-purple-vibrant/40 group-hover:scale-110">
                            <Play className="text-white fill-white ml-1" size={28} />
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-left select-none">
                        <h3 className="text-lg md:text-2xl font-sans mb-1">Metodología de Impacto</h3>
                        <p className="font-mono text-[10px] md:text-xs text-white/70 uppercase tracking-widest">
                            Sistemas que deben funcionar.
                        </p>
                    </div>
                </motion.button>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                vimeoId="1171573189"
                title="ITIERX"
            />
        </section>
    );
};

export default WhyItierx;
