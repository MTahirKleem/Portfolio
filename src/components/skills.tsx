"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParallaxSection } from "@/components/parallax-scroll"
import { ParallaxBackground, FloatingShapes } from "@/components/parallax-background"

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
    // ML & AI Skills
    { name: "Prompt Engineering", level: 95, category: "ml" },
    { name: "RAG", level: 90, category: "ml" },
    { name: "LangChain", level: 90, category: "ml" },
    { name: "LlamaIndex", level: 85, category: "ml" },
    { name: "LangGraph", level: 85, category: "ml" },
    { name: "LLM APIs", level: 90, category: "ml" },
    { name: "Multi-Agent Systems", level: 85, category: "ml" },
    { name: "Function Calling", level: 85, category: "ml" },
    { name: "Transformers", level: 85, category: "ml" },
    { name: "Hugging Face", level: 85, category: "ml" },
    { name: "PEFT/LoRA", level: 80, category: "ml" },
    { name: "Prompt Tuning", level: 85, category: "ml" },
    { name: "NLP (Sentiment, NER)", level: 90, category: "ml" },
    { name: "Computer Vision", level: 85, category: "ml" },
    { name: "YOLOv8", level: 85, category: "ml" },
    { name: "Object Detection", level: 85, category: "ml" },
    { name: "XGBoost", level: 90, category: "ml" },
    { name: "Random Forest", level: 90, category: "ml" },
    { name: "SVM", level: 85, category: "ml" },
    { name: "KNN", level: 85, category: "ml" },
    { name: "Model Evaluation", level: 90, category: "ml" },
    { name: "Feature Engineering", level: 90, category: "ml" },
    { name: "EDA", level: 95, category: "ml" },
    { name: "Pandas", level: 95, category: "ml" },
    { name: "NumPy", level: 95, category: "ml" },
    { name: "Seaborn", level: 90, category: "ml" },
    { name: "Matplotlib", level: 90, category: "ml" },
    { name: "Plotly", level: 90, category: "ml" },
    { name: "Autogen", level: 85, category: "ml" },
    { name: "CrewAI", level: 85, category: "ml" },
    { name: "OpenAI Agents", level: 90, category: "ml" },
    { name: "n8n Agents", level: 85, category: "ml" },
    { name: "Custom Voice Agents", level: 85, category: "ml" },
    { name: "Chatbots", level: 90, category: "ml" },

    // Frontend Skills
    { name: "Streamlit", level: 95, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "JavaScript", level: 75, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },

    // Backend Skills
    { name: "Python", level: 95, category: "backend" },
    { name: "Django", level: 95, category: "backend" },
    { name: "FastAPI", level: 95, category: "backend" },
    { name: "RESTful APIs", level: 90, category: "backend" },
    { name: "SQL", level: 90, category: "backend" },
    { name: "PostgreSQL", level: 90, category: "backend" },
    { name: "MySQL", level: 90, category: "backend" },
    { name: "MongoDB", level: 85, category: "backend" },
    { name: "Neo4j", level: 80, category: "backend" },
    { name: "Qdrant", level: 85, category: "backend" },
    { name: "Pinecone", level: 85, category: "backend" },

    // DevOps & Tools
    { name: "Git", level: 95, category: "other" },
    { name: "GitHub Actions", level: 85, category: "other" },
    { name: "Docker", level: 85, category: "other" },
    { name: "Linux", level: 85, category: "other" },
    { name: "AWS", level: 80, category: "other" },
    { name: "Jupyter", level: 95, category: "other" },
    { name: "VS Code", level: 95, category: "other" },
    { name: "Postman", level: 90, category: "other" },
    { name: "Zapier", level: 85, category: "other" },
    { name: "Make.com", level: 85, category: "other" },
    { name: "Airtable", level: 80, category: "other" },
    { name: "Notion", level: 85, category: "other" },
    { name: "Technical Documentation", level: 90, category: "other" },
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

  const filteredSkills = skills.filter((skill) => filter === "all" || skill.category === filter)

  const categories = [
    { id: "all", label: "All Skills", count: skills.length },
    { id: "ml", label: "ML & AI", count: skills.filter(s => s.category === "ml").length },
    { id: "backend", label: "Backend", count: skills.filter(s => s.category === "backend").length },
    { id: "frontend", label: "Frontend", count: skills.filter(s => s.category === "frontend").length },
    { id: "other", label: "DevOps", count: skills.filter(s => s.category === "other").length },
  ]

  return (
    <section id="skills" className="py-20 skills-gradient section-animation-container relative overflow-hidden" ref={ref}>
      <ParallaxBackground speed={0.35} />
      <FloatingShapes count={4} />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <ParallaxSection speed={30} direction="up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Skills & Technologies
            </h2>
          </ParallaxSection>
          <ParallaxSection speed={20} direction="up">
            <p className="text-foreground/70 md:text-xl max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable, and modern solutions
            </p>
          </ParallaxSection>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id as any)}
                className={`transition-all duration-300 ${
                  filter === category.id 
                    ? "hover-glow scale-105" 
                    : "hover:scale-105"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-effect rounded-xl p-6 space-y-3 border border-primary/10"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.02, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                    style={{
                      boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
                    }}
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

