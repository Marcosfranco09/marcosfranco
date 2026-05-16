import React from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../components/ProfilePhoto';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050a0e]">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 flex justify-center"
          >
            <ProfilePhoto size="lg" />
          </motion.div>
          
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="section-title text-3xl md:text-4xl text-white mb-6">SOBRE MÍ</h2>
              <div className="w-20 h-1 bg-cyan-400 mb-8" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              Mi viaje en el mundo del desarrollo comenzó con una curiosidad insaciable por cómo funcionan las cosas en la web. Hoy en día, me especializo en construir aplicaciones full stack modernas, eficientes y centradas en el usuario.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              Como desarrollador, disfruto enfrentando desafíos complejos y convirtiéndolos en soluciones elegantes. Mi enfoque combina un sólido conocimiento técnico con una pasión por el diseño limpio y funcional.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Siempre estoy aprendiendo nuevas tecnologías y metodologías para mantenerme a la vanguardia. Creo firmemente que el buen software no solo debe funcionar perfectamente, sino también inspirar a quienes lo utilizan.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
