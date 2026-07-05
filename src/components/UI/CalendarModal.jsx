import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarClock } from 'lucide-react';

// ========================================================
// CONFIGURACIÓN DE CAL.COM
// ========================================================
// Pega aquí tu enlace de Cal.com (sin el dominio), por ejemplo:
//   'itierx/asesoria'  ->  https://cal.com/itierx/asesoria
// Cal.com genera automáticamente el link de Google Meet / Zoom.
// Mientras esté vacío ('') se muestra un aviso de "por configurar".
const CALCOM_LINK = 'contacto-itierx.com';
// ========================================================

const CalendarModal = ({ isOpen, onClose }) => {
    const embedUrl = CALCOM_LINK
        ? `https://cal.com/${CALCOM_LINK}?embed=true&theme=dark`
        : '';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-3xl bg-zinc-900/90 border border-white/10 rounded-tr-3xl rounded-bl-3xl shadow-2xl backdrop-blur-xl max-h-[90vh] overflow-hidden flex flex-col"
                        data-lenis-prevent
                    >
                        <div className="flex items-start justify-between p-8 md:p-10 pb-4">
                            <div>
                                <h2 className="text-3xl font-sans font-light mb-2">Agenda una asesoría.</h2>
                                <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
                                    30 min · Reunión por Zoom / Google Meet · Sin costo
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/40 hover:text-white transition-all hover:rotate-90"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-8 md:px-10 pb-10">
                            {embedUrl ? (
                                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                                    <iframe
                                        title="Agenda una asesoría con ITierX"
                                        src={embedUrl}
                                        className="w-full"
                                        style={{ height: '70vh', minHeight: 520, border: 0 }}
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center gap-6 py-14 border border-dashed border-purple-vibrant/30 rounded-2xl bg-white/5">
                                    <div className="w-16 h-16 rounded-full bg-purple-vibrant/15 border border-purple-vibrant/40 flex items-center justify-center">
                                        <CalendarClock size={28} className="text-purple-vibrant" />
                                    </div>
                                    <div className="max-w-md">
                                        <h3 className="text-xl font-sans font-light mb-2">Calendario por configurar</h3>
                                        <p className="font-mono text-xs text-white/50 leading-relaxed">
                                            {/* Visible solo hasta pegar el enlace en CALCOM_LINK (CalendarModal.jsx). */}
                                            Pega tu enlace de Cal.com en <span className="text-purple-vibrant">CALCOM_LINK</span> para
                                            activar la reserva de reuniones por Zoom / Google Meet. Mientras tanto, puedes
                                            escribirnos por el formulario de contacto.
                                        </p>
                                    </div>
                                    <a
                                        href="mailto:contacto@itierx.com"
                                        className="font-mono text-[11px] text-purple-vibrant hover:text-white transition-colors uppercase tracking-widest underline underline-offset-8"
                                    >
                                        contacto@itierx.com
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CalendarModal;
