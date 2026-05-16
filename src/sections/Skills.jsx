import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiMongodb, SiMysql,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const skillGroups = [
  {
    label: 'Frontend',
    color: '#00e5ff',
    techs: [
      { icon: SiReact, name: 'React' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: FaCss3Alt, name: 'CSS3' },
    ],
    bars: [
      { label: 'React / Next.js', pct: 92 },
      { label: 'TypeScript', pct: 85 },
      { label: 'CSS / Tailwind', pct: 90 },
    ],
  },
  {
    label: 'Backend',
    color: '#7c3aed',
    techs: [
      { icon: SiPython, name: 'Python' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiMysql, name: 'MySQL' },
    ],
    bars: [
      { label: 'Python', pct: 92 },
      { label: 'Node.js / Express', pct: 88 },
      { label: 'Bases de Datos', pct: 85 },
    ],
  },
];

function SkillBar({ label, pct, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-gray-400">{label}</span>
        <span className="text-xs font-semibold" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2 rounded-full w-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color === '#00e5ff' ? '#7c3aed' : '#00e5ff'})`,
            boxShadow: `0 0 8px ${color}88`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" style={{ background: '#050a0e' }}>
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="waveform">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="waveform-bar" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <h2 className="section-title text-3xl md:text-4xl text-white">HABILIDADES</h2>
            <div className="waveform">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="waveform-bar" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div
                className="rounded-2xl p-6 h-full"
                style={{
                  background: 'rgba(10,22,40,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,229,255,0.15)',
                  boxShadow: '0 0 12px rgba(0,229,255,0.08)',
                }}
              >
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-5 pb-3"
                  style={{ color: group.color, borderBottom: `1px solid ${group.color}33` }}
                >
                  ({group.label})
                </h3>

                <div className="flex flex-wrap gap-4 mb-6">
                  {group.techs.map(({ icon: Icon, name }) => (
                    <motion.div
                      key={name}
                      className="flex flex-col items-center gap-1.5"
                      whileHover={{ y: -4, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${group.color}15`,
                          border: `1px solid ${group.color}33`,
                        }}
                      >
                        <Icon size={20} color={group.color} />
                      </div>
                      <span className="text-[10px] text-gray-500">{name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="h-px w-full mb-5" style={{ background: `${group.color}22` }} />

                {group.bars.map((bar, bi) => (
                  <SkillBar key={bar.label} label={bar.label} pct={bar.pct} color={group.color} index={bi} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
