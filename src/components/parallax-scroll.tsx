"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxScroll({ children, speed = 0.5, className = "" }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export function ParallaxSection({ children, speed = 50, className = "", direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [speed, -speed] : [-speed, speed]
  )

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
  scale?: boolean
  opacity?: boolean
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
  scale = false,
  opacity = false
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const scaleValue = scale ? useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]) : 1
  const opacityValue = opacity ? useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]) : 1

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y,
          scale: scaleValue,
          opacity: opacityValue
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Hook for parallax values
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

