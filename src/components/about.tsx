"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Server, Sparkles, Zap, Target, TrendingUp } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-scroll"
import { ParallaxBackground, FloatingShapes } from "@/components/parallax-background"

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
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="h-10 w-10 text-secondary" />,
      title: "Full Stack Development",
      description: "Building responsive and scalable web applications using Django, FastAPI, and React.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Database Management",
      description: "Managing SQL and NoSQL databases for efficient data storage and retrieval.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "MLOps & Deployment",
      description: "Implementing CI/CD pipelines, Docker containerization, and cloud deployment solutions.",
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  const stats = [
    { icon: <Target className="h-6 w-6" />, value: "15%", label: "Model Accuracy Increase" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "24%", label: "Company Growth Impact" },
    { icon: <Zap className="h-6 w-6" />, value: "50%", label: "User Traffic Boost" },
    { icon: <Sparkles className="h-6 w-6" />, value: "83%", label: "Client Growth Aid" },
  ]

  return (
    <section id="about" className="py-20 about-gradient section-animation-container relative overflow-hidden" ref={ref}>
      <ParallaxBackground speed={0.3} />
      <FloatingShapes count={3} />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <ParallaxSection speed={30} direction="up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">About Me</h2>
          </ParallaxSection>
          <ParallaxSection speed={20} direction="up">
            <p className="text-foreground/70 md:text-xl">
              Results-driven Data Scientist with expertise in machine learning, Python, and data visualization.
            </p>
          </ParallaxSection>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-xl p-6 text-center space-y-2"
              >
                <div className="flex justify-center text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                My Journey
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                As an Associate Data Scientist at STECHAI, I've been promoted within 3 months for increasing data model
                accuracy by 15%. I collaborate with fellow data scientists to create solutions that have directly
                impacted the company's growth by 24%.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I've engineered high-performance Django backend services and scalable FastAPI solutions, boosting user
                traffic by 50% and tripling load capacity with 99.99% uptime.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Zap className="h-6 w-6 text-secondary" />
                My Approach
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                I believe in a data-driven approach to problem-solving, combining analytical thinking with creative
                solutions. I've executed end-to-end AI applications & chatbots, integrating with Streamlit for
                businesses, aiding 83% in their growth strategies and enhancing customer engagement.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                My expertise extends to database management, including SQL databases (MySQL, PostgreSQL) and NoSQL
                databases (MongoDB), as well as containerization with Docker and cloud platforms like AWS.
              </p>
            </motion.div>
          </div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mt-12">
            What I Do
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="card-hover h-full glass-effect border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
