import { motion } from 'framer-motion'

export default function ProfilePhoto({ size = 'md', className = '' }) {
  const sizes = {
    sm: { outer: 120, inner: 100, photo: 88, ring1: 116, ring2: 108 },
    md: { outer: 200, inner: 180, photo: 160, ring1: 196, ring2: 184 },
    lg: { outer: 280, inner: 255, photo: 230, ring1: 276, ring2: 260 },
  }

  const s = sizes[size]

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: s.outer, height: s.outer }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Outer rotating ring */}
      <div
        className="ring-outer absolute rounded-full"
        style={{
          width: s.ring1,
          height: s.ring1,
          background: 'conic-gradient(from 0deg, #00e5ff, transparent, #7c3aed, transparent, #00e5ff)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Inner counter-rotating ring */}
      <div
        className="ring-inner absolute rounded-full"
        style={{
          width: s.ring2,
          height: s.ring2,
          background: 'conic-gradient(from 180deg, transparent, #00e5ff, transparent, #7c3aed, transparent)',
          filter: 'blur(0.5px)',
          opacity: 0.7,
        }}
      />

      {/* Dark background circle */}
      <div
        className="absolute rounded-full bg-[#050a0e]"
        style={{ width: s.inner - 4, height: s.inner - 4 }}
      />

      {/* Base Photo (Inside Circle) */}
      <div
        className="relative rounded-full overflow-hidden z-10 flex items-center justify-center bg-[#0a1628]"
        style={{
          width: s.photo,
          height: s.photo,
          border: '2px solid rgba(0,229,255,0.4)',
          boxShadow: '0 0 30px rgba(0,229,255,0.2), inset 0 0 20px rgba(0,0,0,0.5)',
        }}
      >
        <img 
          src="/perfil.png" 
          alt="Perfil Base" 
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            transform: 'scale(1.15) translateY(-5%)'
          }}
        />
      </div>

      {/* Protruding Head (Outside Circle) */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          width: s.photo - 4, // matches inner width to perfectly overlap the base image
          height: s.photo - 4,
          clipPath: 'inset(-30% 0 50% 0)', // Muestra la mitad superior y un 30% extra arriba para la cabeza
        }}
      >
        <img 
          src="/perfil_transparente.png" 
          alt="Perfil Cabeza" 
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            transform: 'scale(1.15) translateY(-5%)'
          }}
        />
      </div>

      {/* Glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: s.outer,
          height: s.outer,
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
