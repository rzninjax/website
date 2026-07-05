import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { projects } from '../../data/projects';

const pad = (n) => String(n).padStart(2, '0');

const PortfolioModal = ({ isOpen, onClose, initialIndex = 0, onAgendaClick }) => {
    const [index, setIndex] = useState(initialIndex);
    const [isPlaying, setIsPlaying] = useState(false);

    // Abrir en el video seleccionado desde el carrusel de la sección
    useEffect(() => {
        if (isOpen) {
            setIndex(initialIndex);
            setIsPlaying(false);
        }
    }, [isOpen, initialIndex]);

    const next = () => {
        setIndex((prev) => (prev + 1) % projects.length);
        setIsPlaying(false);
    };
    const prev = () => {
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsPlaying(false);
    };

    const handleClose = () => {
        setIsPlaying(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-5xl min-h-[80vh] md:aspect-[21/9] bg-black border border-white/10 rounded-tr-3xl rounded-bl-3xl overflow-y-auto md:overflow-hidden flex flex-col"
                        data-lenis-prevent
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <div>
                                <h2 className="text-2xl font-sans font-light">Proyectos Destacados.</h2>
                                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Casos de éxito y despliegues globales.</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Carousel Content */}
                        <div className="flex-1 relative group bg-black/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex flex-col md:flex-row"
                                >
                                    <div className="flex-1 flex items-center justify-center p-6 md:p-10">
                                        <div className="relative w-full max-w-[520px] aspect-video rounded-xl overflow-hidden border border-white/10 bg-black group/item">
                                            {isPlaying && projects[index].vimeoId ? (
                                                <iframe
                                                    src={`https://player.vimeo.com/video/${projects[index].vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1${projects[index].loop ? '&loop=1' : ''}`}
                                                    frameBorder="0"
                                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                                    className="absolute inset-0 w-full h-full"
                                                    title={projects[index].title}
                                                ></iframe>
                                            ) : isPlaying && projects[index].videoSrc ? (
                                                <video
                                                    src={projects[index].videoSrc}
                                                    poster={projects[index].thumbnail}
                                                    controls
                                                    autoPlay
                                                    playsInline
                                                    className="absolute inset-0 w-full h-full object-contain bg-black"
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        src={projects[index].thumbnail}
                                                        alt={projects[index].title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                                                    />
                                                    {(projects[index].vimeoId || projects[index].videoSrc) && (
                                                        <div
                                                            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group"
                                                            onClick={() => setIsPlaying(true)}
                                                        >
                                                            <motion.div
                                                                whileHover={{ scale: 1.1 }}
                                                                className="w-16 h-16 rounded-full bg-purple-vibrant/20 border border-purple-vibrant flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(123,97,255,0.4)]"
                                                            >
                                                                <Play className="fill-white text-white ml-1" size={24} />
                                                            </motion.div>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-80 p-8 flex flex-col justify-center">
                                        <span className="font-mono text-[10px] text-purple-vibrant mb-2">{pad(index + 1)} / {pad(projects.length)}</span>
                                        <h3 className="text-2xl font-sans font-light mb-4">{projects[index].title}</h3>
                                        <p className="font-mono text-sm text-white/40 leading-relaxed mb-8">
                                            {projects[index].description}
                                        </p>
                                        <motion.button
                                            onClick={onAgendaClick}
                                            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(123, 97, 255, 0.4)', backgroundColor: '#8B73FF' }}
                                            whileTap={{ scale: 0.97 }}
                                            className="bg-purple-vibrant text-white text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-tr-2xl rounded-bl-2xl shadow-[0_4px_14px_0_rgba(123,97,255,0.39)] self-start transition-colors"
                                        >
                                            Agendar asesoría
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all z-20"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all z-20"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioModal;
