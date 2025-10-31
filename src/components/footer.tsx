"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold">
              MTK
            </Link>
            <p className="text-foreground/70 mt-2 max-w-md">
              Results-driven Data Scientist with expertise in Machine Learning, Python, and building intelligent
              solutions for complex business problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full mb-4"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <p className="text-foreground/70 text-sm">
              &copy; {currentYear} Muhammad Tahir Kleem. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
