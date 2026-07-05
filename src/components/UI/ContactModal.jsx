import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ========================================================
// CONFIGURACIÓN DE EMAILJS
// ========================================================
// REEMPLAZA ESTOS VALORES CON TUS CREDENCIALES DE EMAILJS
// https://www.emailjs.com/
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_kf7j5ap',
    TEMPLATE_ID: 'template_ppwn3fn',
    PUBLIC_KEY: 'Gpbr9u8yYAX14PQSQ',
};
// ========================================================

const ContactModal = ({ isOpen, onClose, category }) => {
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    const formRef = useRef();

    useEffect(() => {
        if (!isOpen) {
            setStatus('idle');
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Si no se han configurado las claves, avisar razonablemente
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            console.warn('EmailJS: No se han configurado las claves en ContactModal.jsx');
            // Como fallback de emergencia y para desarrollo, seguimos mostrando éxito 
            // pero avisando en consola. En producción esto debería fallar o usar mailto.
        }

        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formRef.current,
                EMAILJS_CONFIG.PUBLIC_KEY
            );
            setStatus('success');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

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
                        className="relative w-full max-w-lg bg-zinc-900/90 border border-white/10 p-8 md:p-12 rounded-tr-3xl rounded-bl-3xl shadow-2xl backdrop-blur-xl max-h-[90vh] overflow-y-auto"
                        data-lenis-prevent
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <AnimatePresence mode="wait">
                            {status === 'idle' || status === 'sending' ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <h2 className="text-3xl font-sans font-light mb-2">Hablemos.</h2>
                                    <p className="font-mono text-xs text-white/40 mb-8 tracking-widest uppercase">
                                        Cuéntanos sobre tu próximo desafío tecnológico.
                                    </p>

                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Nombre</label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                disabled={status === 'sending'}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant transition-colors disabled:opacity-50"
                                                placeholder="Tu nombre..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Email</label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                disabled={status === 'sending'}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant transition-colors disabled:opacity-50"
                                                placeholder="tu@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Servicio de Interés</label>
                                            <select
                                                name="category"
                                                disabled={status === 'sending'}
                                                defaultValue={category || ""}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant transition-colors appearance-none disabled:opacity-50"
                                            >
                                                <option value="" className="bg-zinc-900">General / Otro</option>
                                                <option value="IA soberana" className="bg-zinc-900">IA soberana</option>
                                                <option value="Ciberseguridad" className="bg-zinc-900">Ciberseguridad</option>
                                                <option value="Formación" className="bg-zinc-900">Formación</option>
                                                <option value="Infraestructura y sistemas" className="bg-zinc-900">Infraestructura y sistemas</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Mensaje</label>
                                            <textarea
                                                required
                                                name="message"
                                                rows="4"
                                                disabled={status === 'sending'}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant resize-none transition-colors disabled:opacity-50"
                                                placeholder="¿En qué podemos ayudarte?"
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            disabled={status === 'sending'}
                                            whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)" } : {}}
                                            whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                                            className="w-full bg-purple-vibrant text-white font-mono text-xs tracking-[0.2em] uppercase py-4 rounded-tr-2xl rounded-bl-2xl shadow-[0_4px_14px_0_rgba(123,97,255,0.39)] flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                'Enviar Mensaje'
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            ) : status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="flex justify-center mb-6 relative">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1.2, opacity: 0 }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="absolute inset-0 bg-purple-vibrant/20 rounded-full"
                                        />
                                        <CheckCircle size={64} className="text-purple-vibrant relative z-10" />
                                    </div>
                                    <h2 className="text-3xl font-sans font-light mb-4 text-white">¡Mensaje Enviado!</h2>
                                    <p className="font-mono text-sm text-white/60 mb-8 leading-relaxed">
                                        Hemos recibido tu consulta con éxito. <br />
                                        <span className="text-white/80">Te contactaremos a la brevedad posible.</span>
                                    </p>
                                    <motion.button
                                        onClick={onClose}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-transparent border border-white/20 px-12 py-4 rounded-tr-xl rounded-bl-xl font-mono text-[10px] uppercase tracking-[0.2em] hover:text-white transition-all"
                                    >
                                        Entendido
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="flex justify-center mb-6">
                                        <AlertCircle size={64} className="text-red-500" />
                                    </div>
                                    <h2 className="text-3xl font-sans font-light mb-4 text-white">Hubo un error</h2>
                                    <p className="font-mono text-sm text-white/60 mb-8 leading-relaxed">
                                        No pudimos enviar tu mensaje en este momento de forma directa.
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <motion.button
                                            onClick={() => setStatus('idle')}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-purple-vibrant px-8 py-3 rounded-xl font-mono text-[10px] uppercase tracking-widest text-white"
                                        >
                                            Reintentar
                                        </motion.button>
                                        <button
                                            onClick={onClose}
                                            className="text-white/40 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest"
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
