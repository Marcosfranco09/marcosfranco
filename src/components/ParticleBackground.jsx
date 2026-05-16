import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  const options = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: ['#00e5ff', '#7c3aed', '#ffffff'] },
      links: {
        color: '#00e5ff',
        distance: 150,
        enable: true,
        opacity: 0.08,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: { enable: true, area: 900 },
        value: 80,
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: { enable: true, speed: 1, minimumValue: 0.05 },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 1, max: 2.5 },
      },
    },
    detectRetina: true,
  }

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-0"
    />
  )
}
