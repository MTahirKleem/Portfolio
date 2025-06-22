"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

interface Skill {
  name: string
  level: number
  category: "ml" | "frontend" | "backend" | "other"
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState<"all" | "ml" | "frontend" | "backend" | "other">("all")

  const skills: Skill[] = [
    // ML & Data Science Skills
    { name: "Machine Learning", level: 95, category: "ml" },
    { name: "Deep Learning", level: 90, category: "ml" },
    { name: "TensorFlow", level: 85, category: "ml" },
    { name: "PyTorch", level: 80, category: "ml" },
    { name: "Data Analysis", level: 90, category: "ml" },
    { name: "NLP", level: 85, category: "ml" },
    { name: "Computer Vision", level: 80, category: "ml" },
    { name: "Scikit-Learn", level: 90, category: "ml" },
    { name: "Pandas", level: 95, category: "ml" },
    { name: "Matplotlib/Plotly", level: 85, category: "ml" },
    { name: "LangChain", level: 80, category: "ml" },
    { name: "RAG", level: 85, category: "ml" },

    // Frontend Skills
    { name: "React", level: 80, category: "frontend" },
    { name: "JavaScript", level: 75, category: "frontend" },
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },
    { name: "Streamlit", level: 90, category: "frontend" },

    // Backend Skills
    { name: "Python", level: 95, category: "backend" },
    { name: "Django", level: 90, category: "backend" },
    { name: "Flask", level: 85, category: "backend" },
    { name: "FastAPI", level: 80, category: "backend" },
    { name: "SQL", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "Docker", level: 80, category: "backend" },

    // Other Skills
    { name: "Git", level: 90, category: "other" },
    { name: "AWS", level: 75, category: "other" },
    { name: "MLOps", level: 80, category: "other" },
    { name: "CI/CD", level: 75, category: "other" },
    { name: "Agile", level: 85, category: "other" },
    { name: "Business Analysis", level: 80, category: "other" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" },
    }),
  }

  const filteredSkills = skills.filter((skill) => filter === "all" || skill.category === filter)

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  return (
    <section id="skills" className="py-20 skills-gradient section-animation-container" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="text-foreground/70 md:text-xl">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="skill-button rounded-full text-base px-6"
                size="lg"
              >
                All Skills
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant={filter === "ml" ? "default" : "outline"}
                onClick={() => setFilter("ml")}
                className="skill-button rounded-full text-base px-6"
                size="lg"
              >
                Machine Learning
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant={filter === "backend" ? "default" : "outline"}
                onClick={() => setFilter("backend")}
                className="skill-button rounded-full text-base px-6"
                size="lg"
              >
                Backend
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant={filter === "frontend" ? "default" : "outline"}
                onClick={() => setFilter("frontend")}
                className="skill-button rounded-full text-base px-6"
                size="lg"
              >
                Frontend
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant={filter === "other" ? "default" : "outline"}
                onClick={() => setFilter("other")}
                className="skill-button rounded-full text-base px-6"
                size="lg"
              >
                Other
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-foreground/70">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
