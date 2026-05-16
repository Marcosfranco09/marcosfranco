import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  SiReact, SiNodedotjs, SiNextdotjs,
  SiTailwindcss, SiPython, SiMongodb,
  SiFirebase, SiRedis, SiMysql, SiExpress,
  SiSocketdotio, SiHtml5,
} from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub, FaAws, FaCss3Alt } from 'react-icons/fa';
import RippleButton from '../components/RippleButton';

const projects = [
  {
    id: 'karaoke',
    title: 'SISTEMA DE KARAOKE',
    description: 'Ecosistema web que automatiza el servicio de karaoke. Los clientes solicitan canciones vía QR, el DJ gestiona la cola de espera y el sistema proyecta el video automáticamente, eliminando la necesidad de interacción manual constante.',
    tags: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#ffffff' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
    demo: 'https://puertochop-karaoke.onrender.com/',
    repo: 'https://github.com/Marcosfranco09/karaoke-bar',
  },
  {
    title: 'ECOMMERCE GASTRONÓMICO',
    description: 'Plataforma completa para restaurantes con gestión de menú dinámico, carrito de compras integrado y sistema de pedidos online optimizado para conversión.',
    tags: [
      { name: 'JavaScript', icon: SiReact, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
    demo: 'https://templaterestaurant.onrender.com',
    repo: 'https://github.com/Marcosfranco09/template-restaurant',
    mockup: '/ecommerce.png',
  },
  {
    title: 'TALLER SAN RAFAEL',
    description: 'Landing page corporativa para rectificadora de motores, enfocada en captación de clientes con proceso visual y contacto directo vía WhatsApp.',
    tags: [
      { name: 'JavaScript', icon: SiReact, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
    demo: 'https://taller-san-rafael.onrender.com',
    repo: 'https://github.com/Marcosfranco09/taller-san-rafael',
    mockup: '/taller.png',
  },
];

function KaraokeFlow() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 bg-[#0a1628]/20 relative overflow-hidden rounded-xl">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Step 1: Cliente */}
      <div className="relative z-10 flex flex-col items-center group/item shrink-0">
        <div className="w-20 h-20 md:w-48 md:h-48 transition-all group-hover/item:scale-105 duration-300 drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
          <img src="/cliente.png" alt="Cliente" className="w-full h-full object-contain" />
        </div>
        <span className="text-[10px] md:text-[11px] font-mono font-bold text-cyan-400 mt-1 uppercase tracking-widest bg-[#050a0e]/80 px-2 py-0.5 rounded-full border border-cyan-400/20">Cliente</span>
      </div>

      {/* Connection 1: Simple Line */}
      <div className="w-6 md:w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 shrink-0" />

      {/* Step 2: DJ */}
      <div className="relative z-10 flex flex-col items-center group/item shrink-0">
        <div className="w-20 h-20 md:w-44 md:h-44 transition-all group-hover/item:scale-105 duration-300 drop-shadow-[0_0_25px_rgba(124,58,237,0.4)]">
          <img src="/dj.png" alt="DJ" className="w-full h-full object-contain" />
        </div>
        <span className="text-[10px] md:text-[11px] font-mono font-bold text-purple-400 mt-1 uppercase tracking-widest bg-[#050a0e]/80 px-2 py-0.5 rounded-full border border-purple-500/20">DJ / Admin</span>
      </div>

      {/* Connection 2: Splitter */}
      <div className="w-10 md:w-16 h-[220px] md:h-[320px] relative shrink-0">
        {/* Horizontal start */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-purple-500" />
        {/* Vertical line */}
        <div className="absolute left-1/2 top-[20%] bottom-[20%] w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />
        {/* Top branch */}
        <div className="absolute top-[20%] left-1/2 right-0 h-1 bg-cyan-400">
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-r-3 border-t-3 border-cyan-400 rotate-45" />
        </div>
        {/* Bottom branch */}
        <div className="absolute bottom-[20%] left-1/2 right-0 h-1 bg-pink-500">
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-r-3 border-t-3 border-pink-500 rotate-45" />
        </div>
      </div>

      {/* Column 3: Cola & Karaoke */}
      <div className="flex flex-col justify-around h-[220px] md:h-[320px] shrink-0">
        <div className="relative z-10 flex flex-col items-center group/item">
          <div className="w-20 h-20 md:w-36 md:h-36 transition-all group-hover/item:scale-105 duration-300 drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
            <img src="/cola.png" alt="Cola" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] md:text-[11px] font-mono font-bold text-cyan-400 mt-0.5 uppercase tracking-widest bg-[#050a0e]/80 px-2 py-0.5 rounded-full border border-cyan-400/20">Fila</span>
        </div>
        <div className="relative z-10 flex flex-col items-center group/item">
          <div className="w-20 h-20 md:w-36 md:h-36 transition-all group-hover/item:scale-105 duration-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
            <img src="/karaoke.png" alt="Karaoke" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] md:text-[11px] font-mono font-bold text-pink-500 mt-0.5 uppercase tracking-widest bg-[#050a0e]/80 px-2 py-0.5 rounded-full border border-pink-500/20">Karaoke</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <Tilt
      perspective={1000}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#00e5ff"
      glarePosition="all"
      scale={featured ? 1.01 : 1.02}
      className="h-full"
    >
      <div
        className="gradient-border-card card-shine h-full rounded-2xl overflow-hidden flex flex-col p-6 group"
        style={{
          background: 'rgba(10, 22, 40, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0,229,255,0.2)',
        }}
      >
        {/* Visual Block (Top) */}
        <div className={`relative ${featured ? 'w-full min-h-[300px] md:min-h-[380px]' : 'w-full aspect-video'} rounded-2xl overflow-hidden shadow-2xl bg-[#050a0e]/50 border border-white/5`}>
          {project.id === 'karaoke' ? (
            <div className="w-full h-full flex items-center justify-center p-2">
              <KaraokeFlow />
            </div>
          ) : (
            <>
              <img
                src={project.mockup}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e] to-transparent opacity-70" />
            </>
          )}
        </div>

        <div className={`flex flex-col flex-1 mt-6`}>
          {/* Title */}
          <h3
            className={`font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-5">
            {project.tags.map((tag) => (
              <div key={tag.name} className="flex items-center gap-1.5 text-xs text-gray-300">
                <tag.icon style={{ color: tag.color }} size={14} />
                <span>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className={`flex gap-3 ${featured ? 'mt-4' : 'mt-auto'}`}>
          <RippleButton
            className="flex-1 btn-neon-outline text-xs py-2.5 rounded-lg font-bold flex items-center justify-center gap-1.5"
            onClick={() => window.open(project.demo, '_blank')}
          >
            <FaExternalLinkAlt size={11} />
            VER DEMO
          </RippleButton>
          <RippleButton
            className="flex-1 btn-neon-outline text-xs py-2.5 rounded-lg font-bold flex items-center justify-center gap-1.5"
            onClick={() => window.open(project.repo, '_blank')}
          >
            <FaGithub size={11} />
            CÓDIGO
          </RippleButton>
        </div>
      </div>
    </div>
    </Tilt>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#050a0e]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-2">PROYECTOS DESTACADOS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <ProjectCard project={project} featured={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
