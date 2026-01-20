'use client'

import { useTheme } from '@/app/providers/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Safely get theme context
  let theme = 'dark'
  let toggleTheme = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // Theme context not available during SSR/build
  }

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-card" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full border-2 border-primary/30 bg-card hover:bg-muted flex items-center justify-center transition-all duration-300 overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.button>
  )
}
