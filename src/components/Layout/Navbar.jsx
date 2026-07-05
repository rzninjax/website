import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
//import logo from '../../assets/itierx-logo.png';

const Navbar = ({ onContactClick, onAgendaClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-8 md:px-12 md:pl-32 z-[60] bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-md"
            >
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                        {/* <img src={logo} alt="ITIERX" className="h-8 md:h-10 w-auto object-contain" /> */}
                        <div className="hidden sm:block font-mono text-xl font-bold tracking-tighter text-white">
                            ITier<span className="text-purple-vibrant">X</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {[
                            { name: 'Home', id: 'home' },
                            { name: 'Soluciones', id: 'soluciones' },
                            { name: 'Metodología', id: 'metodologia' },
                            { name: 'Contacto', id: 'contacto' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className="text-xs font-mono text-white/100 text-[14px] hover:text-white transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-vibrant transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <motion.button
                        onClick={onContactClick}
                        whileHover={{ scale: 1.05, borderColor: "rgba(123, 97, 255, 0.6)" }}
                        className="hidden md:block border border-white/20 text-white text-[15px] font-mono tracking-widest uppercase px-5 py-3 rounded-tr-2xl rounded-bl-2xl hover:text-white transition-all"
                    >
                        hablemos!
                    </motion.button>

                    <motion.button
                        onClick={onAgendaClick}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 200px rgba(123, 97, 255, 0.4)" }}
                        className="hidden sm:block bg-purple-vibrant text-white text-[15px] font-mono tracking-widest uppercase px-6 py-3 rounded-tr-2xl rounded-bl-2xl hover:bg-purple-vibrant/90 transition-all shadow-[0_4px_14px_0_rgba(123,97,255,0.39)]"
                    >
                        Agenda una asesoría
                    </motion.button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:text-purple-vibrant transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {[
                                { name: 'Home', id: 'home' },
                                { name: 'Soluciones', id: 'soluciones' },
                                { name: 'Metodología', id: 'metodologia' },
                                { name: 'Contacto', id: 'contacto' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-sans tracking-tight hover:text-purple-vibrant transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    onAgendaClick();
                                }}
                                className="mt-8 bg-purple-vibrant text-white text-xs font-mono tracking-widest uppercase px-12 py-4 rounded-tr-2xl rounded-bl-2xl"
                            >
                                Agenda una asesoría
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    onContactClick();
                                }}
                                className="border border-white/20 text-white text-xs font-mono tracking-widest uppercase px-12 py-4 rounded-tr-2xl rounded-bl-2xl"
                            >
                                hablemos!
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
