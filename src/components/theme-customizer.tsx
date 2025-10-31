"use client"

import { useState } from "react"
import { Check, Laptop, Moon, Palette, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

const themes = [
  {
    name: "Ocean Blue",
    class: "theme-ocean",
    colors: {
      dark: "#213448",
      medium: "#547792",
      light: "#94B4C1",
      accent: "#ECEFCA",
    },
  },
  {
    name: "Deep Blue",
    class: "theme-deep-blue",
    colors: {
      dark: "#021526",
      medium: "#03346E",
      light: "#6EACDA",
      accent: "#E2E2B6",
    },
  },
  {
    name: "Nature Green",
    class: "theme-nature",
    colors: {
      dark: "#99BC85",
      medium: "#E4EFE7",
      light: "#FDFAF6",
      accent: "#FAF1E6",
    },
  },
  {
    name: "Classic Navy",
    class: "theme-classic",
    colors: {
      dark: "#123458",
      medium: "#D4C9BE",
      light: "#F1EFEC",
      accent: "#030303",
    },
  },
]

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [activeTheme, setActiveTheme] = useState("theme-ocean")

  const handleThemeChange = (themeClass: string) => {
    setActiveTheme(themeClass)
    document.documentElement.classList.remove(...themes.map((t) => t.class))
    document.documentElement.classList.add(themeClass)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
            <Palette className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.class}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleThemeChange(t.class)}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-10 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full" style={{ backgroundColor: t.colors.dark }}></div>
                  <div className="w-1/4 h-full" style={{ backgroundColor: t.colors.medium }}></div>
                  <div className="w-1/4 h-full" style={{ backgroundColor: t.colors.light }}></div>
                  <div className="w-1/4 h-full" style={{ backgroundColor: t.colors.accent }}></div>
                </div>
                <span>{t.name}</span>
              </div>
              {activeTheme === t.class && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
            <span className="h-5 w-5 flex items-center justify-center">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </span>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </div>
            {theme === "light" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </div>
            {theme === "dark" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <div className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span>System</span>
            </div>
            {theme === "system" && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
