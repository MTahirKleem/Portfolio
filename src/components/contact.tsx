"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Phone, Send, Sparkles, CheckCircle } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-scroll"
import { ParallaxBackground, FloatingShapes } from "@/components/parallax-background"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "tahirkleem250@gmail.com",
      link: "mailto:tahirkleem250@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+92 3181326250",
      link: "tel:+923181326250",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Toba Tek Singh, Pakistan",
      link: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxBackground speed={0.3} />
      <FloatingShapes count={3} />
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <ParallaxSection speed={30} direction="up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Get In Touch
              </h2>
            </ParallaxSection>
            <ParallaxSection speed={20} direction="up">
              <p className="text-foreground/70 md:text-xl max-w-2xl mx-auto">
                Let's collaborate on your next AI-powered project. I'm always open to discussing new opportunities.
              </p>
            </ParallaxSection>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="block"
              >
                <Card className="card-hover glass-effect border-primary/20 h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto text-white`}>
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-sm text-foreground/60 break-words">{info.details}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                        className="glass-effect border-primary/20"
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="glass-effect border-primary/20"
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...register("subject", { required: "Subject is required" })}
                      className="glass-effect border-primary/20"
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                      className="glass-effect border-primary/20 resize-none"
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hover-glow group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="mr-2 h-5 w-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
