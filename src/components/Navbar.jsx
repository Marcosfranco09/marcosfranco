import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre Mí', href: '#about' },

  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.substring(1))
      let currentActive = active;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on your layout, 150px from top is usually good
          if (rect.top <= 150 && rect.bottom >= 150) {
            const link = navLinks.find(l => l.href === `#${section}`);
            if (link) currentActive = link.label;
          }
        }
      }

      if (currentActive !== active) {
        setActive(currentActive);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  const handleNav = (label, href) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
            ? 'bg-[rgba(5,10,14,0.95)] backdrop-blur-[12px] border border-[rgba(0,229,255,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('Inicio', '#home') }}
          className="font-orbitron font-bold text-lg text-cyan-400 tracking-widest hover:text-white transition-colors"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          &lt;MARCOS FRANCO /&gt;
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(label, href) }}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${active === label ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  } ${active === label ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen && i === 0 ? 'rotate-45 translate-y-2' :
                  menuOpen && i === 1 ? 'opacity-0' :
                    menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 mx-auto max-w-5xl rounded-xl bg-[rgba(5,10,14,0.97)] backdrop-blur-xl border border-[rgba(0,229,255,0.15)] py-4"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(label, href) }}
                className={`block px-8 py-3 text-sm font-medium transition-colors ${active === label ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
