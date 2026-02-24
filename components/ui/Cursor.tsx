'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mx.current = e.clientX; my.current = e.clientY }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + 'px'
        dotRef.current.style.top  = my.current + 'px'
      }
      if (ringRef.current) {
        rx.current += (mx.current - rx.current) * 0.12
        ry.current += (my.current - ry.current) * 0.12
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top  = ry.current + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none', zIndex: 9999,
  }

  return (
    <>
      <div ref={dotRef} className="cur-dot" style={{
        ...base, width: 6, height: 6,
        background: 'var(--gold)', borderRadius: '50%',
      }} />
      <div ref={ringRef} className="cur-ring" style={{
        ...base, zIndex: 9998,
        width: 32, height: 32,
        border: '1px solid rgba(196,158,78,0.45)',
        borderRadius: '50%',
        transition: 'width 0.3s, height 0.3s',
      }} />
    </>
  )
}
