import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
// import ParticleBackground from '../components/ParticleBackground';
import RippleButton from '../components/RippleButton';
import ProfilePhoto from '../components/ProfilePhoto';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #050a0e 0%, #0a1628 50%, #050a0e 100%)' }}>
      {/* <ParticleBackground /> */}

      {/* Code decorations */}
      <div className="code-decoration left hidden lg:block" style={{ fontSize: '10px', top: '10%', left: '8px', transform: 'none' }}>
        <pre className="text-gray-500/20 font-mono">
          {`const developer = {
  status: "coding",
  coffee: true,
  bugs: 0
};`}
        </pre>
      </div>
      <div className="code-decoration right hidden lg:block" style={{ fontSize: '10px', bottom: '10%', right: '8px', transform: 'none' }}>
        <pre className="text-gray-500/20 font-mono text-right">
          {`function createMagic() {
  return code + design;
}`}
        </pre>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between mt-20">

        {/* Left Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left pt-12 lg:pt-0">
          <p className="text-cyan-400 font-mono mb-4 text-sm md:text-base tracking-widest neon-text">
            &gt; Inicializando sistema... Bienvenido
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight font-orbitron drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            HOLA, SOY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              MARCOS FRANCO
            </span>
          </h1>

          <div className="h-12 md:h-16 mb-8 text-xl md:text-3xl text-gray-300 font-medium">
            <span className="text-cyan-400 mr-2">&gt;</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Backend Engineer', 2000,
                'Python Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono text-white/90"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
            <RippleButton
              className="btn-neon w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold tracking-widest text-[#050a0e] bg-cyan-400 uppercase text-sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos <FaArrowRight />
            </RippleButton>

            <RippleButton
              className="btn-neon-outline w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold tracking-widest text-cyan-400 border border-cyan-400/50 uppercase text-sm"
            >
              <FaDownload /> Descargar CV
            </RippleButton>
          </div>
        </div>

        {/* Right Content - Profile */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative">
            <ProfilePhoto size="lg" />

            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 z-20 bg-[#050a0e] px-4 py-2 rounded-full border border-cyan-400/30 flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
              <span className="text-xs font-mono text-gray-300">Disponible para trabajar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
    </section>
  );
}
