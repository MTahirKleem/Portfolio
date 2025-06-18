"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Server } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const services = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Data Science & AI",
      description: "Developing ML models, predictive analytics, and AI solutions to solve complex business problems.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Building responsive and scalable web applications using Django, FastAPI, and React.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Management",
      description: "Managing SQL and NoSQL databases for efficient data storage and retrieval.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "MLOps & Deployment",
      description: "Implementing CI/CD pipelines, Docker containerization, and cloud deployment solutions.",
    },
  ]

  return (
    <section id="about" className="py-20 about-gradient section-animation-container" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-foreground/70 md:text-xl">
              Results-driven Data Scientist with expertise in machine learning, Python, and data visualization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-foreground/70">
                As an Associate Data Scientist at STECHAI, I&apos;ve been promoted within 3 months for increasing data model
                accuracy by 15%. I collaborate with fellow data scientists to create solutions that have directly
                impacted the company&apos;s growth by 24%.
              </p>
              <p className="text-foreground/70">
                I&apos;ve engineered high-performance Django backend services and scalable FastAPI solutions, boosting user
                traffic by 50% and tripling load capacity with 99.99% uptime.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">My Approach</h3>
              <p className="text-foreground/70">
                I believe in a data-driven approach to problem-solving, combining analytical thinking with creative
                solutions. I&apos;ve executed end-to-end AI applications &amp; chatbots, integrating with Streamlit for
                businesses, aiding 83% in their growth strategies and enhancing customer engagement.
              </p>
              <p className="text-foreground/70">
                My expertise extends to database management, including SQL databases (MySQL, PostgreSQL) and NoSQL
                databases (MongoDB), as well as containerization with Docker and cloud platforms like AWS.
              </p>
            </motion.div>
          </div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mt-12">
            What I Do
          </motion.h3>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10">{service.icon}</div>
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
