import { useEffect, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorDotRef = useRef(null)
  const cursorRef = useRef(null)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const dotX = useSpring(0, { damping: 50, stiffness: 500 })
  const dotY = useSpring(0, { damping: 50, stiffness: 500 })

  const scale = useSpring(1, { damping: 20, stiffness: 300 })

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 20)
      y.set(e.clientY - 20)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }

    const handleHoverStart = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        scale.set(2)
      }
    }

    const handleHoverEnd = () => {
      scale.set(1)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHoverStart)
    window.addEventListener('mouseout', handleHoverEnd)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHoverStart)
      window.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [x, y, dotX, dotY, scale])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] border-2 border-cyan-400"
        style={{
          x,
          y,
          scale,
          boxShadow: '0 0 12px rgba(0,229,255,0.4)',
          mixBlendMode: 'normal',
        }}
      />
      <motion.div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-cyan-400"
        style={{
          x: dotX,
          y: dotY,
          boxShadow: '0 0 8px rgba(0,229,255,0.8)',
        }}
      />
    </>
  )
}
