// Proyectos / videos destacados — fuente única compartida por el carrusel
// de la sección "¿Por qué ITierX?" (WhyItierx) y el PortfolioModal.
//
// - vimeoId: si existe, la miniatura permite reproducir el video en el modal.
// - thumbnail: imagen liviana (se carga con lazy-load para no penalizar el rendimiento).
export const projects = [
    {
        id: 'ia-privada',
        title: 'IA Privada a tu Medida',
        description: 'Capacitación y desarrollo de IAs privadas para tu organización: modelos on-premise donde tu información nunca sale.',
        thumbnail: '/videos/ai-itierx-cover.jpg',
        vimeoId: '1207078281',
        loop: true,
    },
    {
        id: 'project1',
        title: 'Lean makers',
        description: 'Plataforma digital para innovar, emprender y prototipar soluciones reales.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
        vimeoId: '1171578568',
    },
    {
        id: 'project2',
        title: 'Ciberseguridad Cuántica',
        description: 'Resiliencia y defensa activa para entornos de misión crítica.',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
        vimeoId: null,
    },
    {
        id: 'project3',
        title: 'Sistemas Críticos AI',
        description: 'Arquitecturas de IA soberana desplegadas donde la data no puede salir.',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        vimeoId: null,
    },
];
