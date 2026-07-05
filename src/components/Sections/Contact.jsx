import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

const Contact = ({ onContactClick, onAgendaClick }) => {
    return (
        <section id="contacto" className="relative pt-32 pb-16 px-8 md:px-24 bg-black overflow-hidden">
            {/* City Background Placeholder Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop"
                    alt="background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-8xl font-sans font-extralight tracking-tight mb-6">
                        ¿Listo para Transformar <br />
                        <span className="text-white/70">tu Infraestructura?</span>
                    </h2>
                    <p className="font-mono text-sm md:text-base text-white/75 tracking-widest uppercase mb-12">
                        Diseñamos soluciones que escalan con tu visión.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        <motion.button
                            onClick={onAgendaClick}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 50px rgba(123, 97, 255, 0.4)",
                                backgroundColor: "#8B73FF"
                            }}
                            className="bg-purple-vibrant text-white text-sm font-mono tracking-widest uppercase px-16 py-6 rounded-tr-3xl rounded-bl-3xl transition-all shadow-[0_4px_14px_0_rgba(123,97,255,0.39)]"
                        >
                            Agenda una asesoría
                        </motion.button>
                        <motion.button
                            onClick={onContactClick}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(123, 97, 255, 0.5)"
                            }}
                            className="border border-white/20 text-white text-sm font-mono tracking-widest uppercase px-16 py-6 rounded-tr-3xl rounded-bl-3xl bg-transparent transition-all"
                        >
                            Escríbenos
                        </motion.button>
                    </div>
                </motion.div>

                {/* Footer info */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-white/10">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[13px] text-white/60 uppercase tracking-widest">No dudes en contactarnos:</span>
                        <a href="mailto:contacto@itierx.com" className="font-mono text-[15px] hover:text-purple-vibrant transition-colors">
                            Contacto@itierx.com

                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <span className="font-mono text-[13px] text-white/60 uppercase tracking-widest">Síguenos</span>
                        <div className="flex gap-6">
                            {[
                                { Icon: Linkedin, url: 'https://www.linkedin.com/company/itierx/' },
                                { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61587183754766' },
                                { Icon: Instagram, url: 'https://www.instagram.com/itierxspa/' }
                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-purple-vibrant transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <div className="text-[14px] font-mono text-white/80 mt-4">
                            technology. tiered. limitless / Itier<span className="text-purple-vibrant">X</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-vibrant shadow-[0_0_10px_rgba(123,97,255,1)]" />
                            <span className="font-mono text-[12px] text-white/60 uppercase tracking-widest">
                                COPYRIGHT © 2026 ITierX.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Decorative Text */}
            <div className="absolute left-8 bottom-12 hidden lg:block rotate-90 origin-left">
                <span className="font-mono text-[10px] text-white/20 tracking-[1em] uppercase">
                    ITerX.com
                </span>
            </div>
        </section>
    );
};

export default Contact;
