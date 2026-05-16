import { useRef } from 'react'

export default function RippleButton({ children, className = '', onClick, ...props }) {
  const btnRef = useRef(null)

  const createRipple = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    if (onClick) onClick(e)
  }

  return (
    <button
      ref={btnRef}
      className={`ripple-btn ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
    </button>
  )
}
