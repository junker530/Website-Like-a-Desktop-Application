'use client'

export default function CustomCursor({ position }) {
  return (
    <div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-1 h-1 bg-neon-pink rounded-full" />
      <div className="absolute w-4 h-4 border-2 border-neon-blue rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
    </div>
  )
}