"use client"

import { useEffect } from "react"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Enable smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        const href = anchor.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return <>{children}</>
}

