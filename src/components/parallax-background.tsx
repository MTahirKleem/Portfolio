"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxBackgroundProps {
  className?: string
  speed?: number
}

export function ParallaxBackground({ className = "", speed = 0.5 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

interface FloatingShapesProps {
  count?: number
}

export function FloatingShapes({ count = 5 }: FloatingShapesProps) {
  const [shapes, setShapes] = useState<Array<{
    id: number
    size: number
    x: number
    y: number
    duration: number
    delay: number
  }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setShapes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 20,
        delay: Math.random() * 5,
      }))
    )
    setMounted(true)
  }, [count])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-20 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

