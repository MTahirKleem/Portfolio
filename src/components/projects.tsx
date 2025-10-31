"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Link from "next/link"
import { ParallaxSection } from "@/components/parallax-scroll"
import { ParallaxBackground, FloatingShapes } from "@/components/parallax-background"

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
      title: "Taxline AI - Invoice Automation Suite",
      description:
        "Full-stack invoice automation system using AI to extract invoice data from PDFs, enrich with Chart of Accounts, VAT codes, and business line mappings. Features GPT-4o for intelligent data extraction, HMAC-signed API integration with Passeli accounting system, vendor management, and a modern dashboard UI.",
      image: "/images/projects/financial-mgmt.png",
      tags: ["FastAPI", "Next.js 15", "GPT-4o", "PostgreSQL", "React 19", "TypeScript", "AI"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 2,
      title: "ResuForge – MCP-Powered Resume Builder",
      description:
        "Modular AI-powered resume generation platform using Model Context Protocol (MCP) for multi-agent orchestration. Features conversational chat interface, real-time preview, intelligent job description tailoring, and exports to PDF/DOCX with unified resume state management.",
      image: "/images/projects/recommendation-system.jpg",
      tags: ["FastAPI", "MCP", "React", "OpenAI", "PostgreSQL", "TailwindCSS"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 3,
      title: "AI-Powered Cold Email Generation Tool",
      description:
        "AI-driven web application empowering sales professionals to generate personalized cold emails using LinkedIn, CRM, and company data. Features GPT-4 for context-aware generation, Trello-style dashboard, real-time personalization, and Stripe payment integration.",
      image: "/images/projects/E-Commerce.jpg",
      tags: ["React", "FastAPI", "GPT-4", "Supabase", "Stripe", "TailwindCSS"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 4,
      title: "Formulai – DNA-Based Wellness Platform",
      description:
        "AI-powered wellness platform providing personalized health recommendations based on DNA analysis. Built with Django REST Framework backend and React TypeScript frontend, integrating OpenAI API for intelligent insights and PostgreSQL for secure data management.",
      image: "/images/projects/recommendation-system.jpg",
      tags: ["Django", "React", "TypeScript", "OpenAI", "PostgreSQL", "REST API"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 5,
      title: "MCQ-Based Exam Prep System",
      description:
        "AI-powered web platform for adaptive exam preparation with intelligent MCQ tests. Features automated question generation using NLP (NLTK, SpaCy), real-time feedback, secure authentication, and interactive Next.js frontend for seamless user experience.",
      image: "/images/projects/MCQ.png",
      tags: ["Django", "Next.js", "NLP", "NLTK", "SpaCy", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      category: "ml",
    },
    {
      id: 6,
      title: "ShopAI – E-Commerce with AI Recommendations",
      description:
        "AI-powered e-commerce platform providing personalized product recommendations based on user preferences, region, and age. Implemented content-based filtering using K-Nearest Neighbors (KNN) with PayPal payment gateway integration.",
      image: "/images/projects/E-Commerce.jpg",
      tags: ["Django", "KNN", "Machine Learning", "PayPal", "HTML/CSS", "JavaScript"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 7,
      title: "Dashboard for POS System",
      description:
        "Interactive analytics dashboard for Point of Sale system providing real-time insights into sales performance, inventory levels, and customer behavior. Visualizes KPIs and business trends for data-driven decision-making.",
      image: "/images/projects/financial-mgmt.png",
      tags: ["Flask", "Plotly", "Dash", "SQL", "Pandas", "Data Visualization"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 8,
      title: "Nexora Notepad Agent",
      description:
        "AI-powered desktop automation tool using OpenAI GPT-3.5-turbo and PyAutoGUI that generates word-count-specific content via natural language commands. Automatically opens Notepad, types AI-generated text, and saves files for seamless documentation automation.",
      image: "/images/projects/recommendation-system.jpg",
      tags: ["Python", "OpenAI", "PyAutoGUI", "Automation", "NLP"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
    {
      id: 9,
      title: "AI Code Quality Evaluator - Gemini AI",
      description:
        "Conducted side-by-side evaluations of Google Gemini AI-generated code responses for ML/DL tasks. Designed comprehensive test cases, identified security vulnerabilities, executed code in sandbox environments, and provided evidence-based technical feedback.",
      image: "/images/projects/recommendation-system.jpg",
      tags: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Gemini AI", "Flask"],
      githubUrl: "#",
      demoUrl: "#",
      category: "ml",
    },
  ]

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 projects-gradient section-animation-container relative overflow-hidden" ref={ref}>
      <ParallaxBackground speed={0.4} />
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
              Featured Projects
            </h2>
          </ParallaxSection>
          <ParallaxSection speed={20} direction="up">
            <p className="text-foreground/70 md:text-xl max-w-2xl mx-auto">
              Showcasing innovative solutions that blend AI, machine learning, and modern web technologies
            </p>
          </ParallaxSection>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {[
              { id: "all", label: "All Projects" },
              { id: "ml", label: "ML & AI" },
              { id: "web", label: "Web Apps" },
            ].map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id as any)}
                className={`transition-all duration-300 ${
                  filter === category.id ? "hover-glow scale-105" : "hover:scale-105"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="card-hover h-full glass-effect border-primary/20 overflow-hidden">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="glass-effect">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {project.category === "ml" ? "AI Powered" : "Web App"}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex gap-3">
                    {project.demoUrl && (
                      <Button asChild variant="default" size="sm" className="flex-1 hover-glow">
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
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