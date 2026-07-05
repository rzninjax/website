import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const rows = [
    { label: 'Ubicación de la data', saas: 'Servidores de terceros', itierx: 'Tu infraestructura' },
    { label: 'Exposición de PII', saas: 'Sí', itierx: 'Nunca sale' },
    { label: 'Auditabilidad', saas: 'Limitada', itierx: 'Total' },
    { label: 'Dependencia de internet', saas: 'Obligatoria', itierx: 'Opcional' },
    { label: 'Soberanía', saas: 'Externa', itierx: 'Propia' },
];

const seals = ['On-Premise', 'Data Isolation', 'PII Sanitization', 'Auditable'];

const Differentiator = ({ onAgendaClick }) => {
    return (
        <section id="diferenciador" className="relative pt-10 pb-24 md:pt-14 md:pb-32 px-8 md:px-24 bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-purple-vibrant text-xs tracking-widest uppercase mb-4 block">
                        IA Soberana
                    </span>
                    <h2 className="text-4xl md:text-7xl mb-6">
                        Las nubes públicas exponen tu data. <br />
                        <span className="text-purple-vibrant">Nosotros no.</span>
                    </h2>
                    <p className="font-mono text-white/60 text-sm md:text-base max-w-2xl mx-auto">
                        Dónde vive tu información lo cambia todo.
                    </p>
                </motion.div>

                {/* Tabla comparativa */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="border border-white/10 rounded-tr-3xl rounded-bl-3xl overflow-hidden"
                >
                    {/* Encabezado */}
                    <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-white/5 border-b border-white/10">
                        <div className="p-4 md:p-5" />
                        <div className="p-4 md:p-5 font-mono text-[11px] md:text-sm text-white/50 uppercase tracking-widest">
                            IA en nube pública (SaaS)
                        </div>
                        <div className="p-4 md:p-5 font-mono text-[11px] md:text-sm text-purple-vibrant uppercase tracking-widest bg-purple-vibrant/10">
                            IA soberana ITierX
                        </div>
                    </div>

                    {rows.map((r, i) => (
                        <div
                            key={r.label}
                            className={`grid grid-cols-[1.2fr_1fr_1fr] items-center ${i < rows.length - 1 ? 'border-b border-white/5' : ''}`}
                        >
                            <div className="p-4 md:p-5 font-sans text-sm md:text-base text-white">{r.label}</div>
                            <div className="p-4 md:p-5 flex items-center gap-2 font-mono text-xs md:text-sm text-white/50 bg-black/30">
                                <X size={15} className="text-white/30 shrink-0 hidden sm:block" />
                                {r.saas}
                            </div>
                            <div className="p-4 md:p-5 flex items-center gap-2 font-mono text-xs md:text-sm text-white bg-purple-vibrant/5">
                                <Check size={15} className="text-purple-vibrant shrink-0 hidden sm:block" />
                                {r.itierx}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Sellos */}
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12"
                    aria-label="Garantías técnicas"
                >
                    {seals.map((s) => (
                        <li
                            key={s}
                            className="flex items-center gap-2 px-4 py-2 rounded-tr-xl rounded-bl-xl border border-purple-vibrant/25 bg-purple-vibrant/8 font-mono text-[11px] md:text-xs tracking-widest uppercase text-white/80"
                        >
                            <ShieldCheck size={14} className="text-purple-vibrant" />
                            {s}
                        </li>
                    ))}
                </motion.ul>

                {/* CTA */}
                <div className="flex justify-center mt-14">
                    <motion.button
                        onClick={onAgendaClick}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(123, 97, 255, 0.4)', backgroundColor: '#8B73FF' }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-purple-vibrant text-white text-xs md:text-sm font-mono tracking-widest uppercase px-12 py-5 rounded-tr-3xl rounded-bl-3xl shadow-[0_4px_14px_0_rgba(123,97,255,0.39)] transition-colors"
                    >
                        Agenda una asesoría
                    </motion.button>
                </div>
            </div>

            {/* Glow decorativo, consistente con el resto del sitio */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-vibrant/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Differentiator;
