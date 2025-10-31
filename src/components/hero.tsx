"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import AnimatedBackground from "./animated-background"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden hero-gradient"
      ref={containerRef}
    >
      <AnimatedBackground />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y,
          opacity,
          background: `radial-gradient(
            circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
            hsl(var(--primary) / 0.2), 
            transparent 50%
          )`,
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium gradient-text">AI & Machine Learning Expert</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              >
                Muhammad Tahir Kleem
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl font-semibold h-[40px]"
              >
                <TypeAnimation
                  sequence={[
                    "Data Scientist 🤖",
                    2000,
                    "Machine Learning Engineer 🧠",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "AI Solutions Architect ✨",
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="gradient-text"
                  repeat={Infinity}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-foreground/70 text-lg max-w-md leading-relaxed"
            >
              Results-driven Data Scientist with expertise in Machine Learning, Python, and building intelligent
              solutions for complex business problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group hover-glow relative overflow-hidden">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-glow">
                <Link href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4"
            >
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <Link
                  href="https://www.linkedin.com/in/muhammad-tahir-55a625214/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <Link href="https://github.com/MTahirKleem" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-full aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden glass-effect">
              <img
                src="/images/profile/muhammad1.png?height=500&width=500"
                alt="Muhammad Tahir Kleem"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
