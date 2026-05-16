import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Banner() {
  return (
    <section
      id="banner"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #050a0e 50%, #0a1628 100%)',
        borderTop: '1px solid rgba(0,229,255,0.1)',
        borderBottom: '1px solid rgba(0,229,255,0.1)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <span className="text-white">SOY </span>
          <span className="gradient-text">MARCOS FRANCO</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8"
        >
          Construyendo el futuro de la web, una línea de código a la vez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-6"
        >
          {[
            { icon: FaEnvelope, href: 'mailto:marcosfranco@email.com', label: 'Email' },
            { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full flex items-center justify-center text-cyan-400"
              style={{ border: '1px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.05)' }}
              whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(0,229,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
