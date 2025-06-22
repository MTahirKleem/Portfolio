"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  category: "ml" | "web" | "all"
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState<"all" | "ml" | "web">("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce with KNN Recommendations",
      description:
        "A web-based e-commerce application built with Django, featuring a KNN model for personalized product recommendations and PayPal integration.",
      image: "/images/projects/E-Commerce.jpg",
      tags: ["Django", "Machine Learning", "KNN", "PayPal", "HTML/CSS"],
      githubUrl: "#",
      demoUrl: "#",
      category: "web",
    },
    {
      id: 2,
      title: "MCQ-Based Test System",
      description:
        "A web-based MCQ test system for teachers with Django backend, React frontend, and NLP for automatic MCQ generation.",
      image: "/images/projects/MCQ.png",
      tags: ["Django", "React", "TypeScript", "NLP", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 3,
      title: "AI-Based Recommendation System",
      description:
        "An AI-driven web app with React frontend and Django backend for personalized recommendations using GPT-based models.",
      image: "/images/projects/recommendation-system.jpg",
      tags: ["React", "TypeScript", "Django", "GPT", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      category: "ml",
    },
    {
      id: 4,
      title: "PSO Interactive Dashboard",
      description:
        "An interactive dashboard built with Plotly Dash for real-time data visualization with SQL database integration.",
      image: "/images/projects/financial-mgmt.png",
      tags: ["Plotly Dash", "SQL", "Data Visualization", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      category: "ml",
    },
  ]

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 projects-gradient section-animation-container" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="text-foreground/70 md:text-xl">
              Explore a selection of my recent work across Machine Learning and Web Development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "ml" ? "default" : "outline"}
              onClick={() => setFilter("ml")}
              className="rounded-full"
            >
              Machine Learning
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="rounded-full"
            >
              Web Development
            </Button>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full overflow-hidden border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}