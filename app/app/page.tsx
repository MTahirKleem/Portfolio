import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Muhammad Tahir Kleem | ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Muhammad Tahir Kleem, specializing in Machine Learning, Deep Learning, and Full Stack Development",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
