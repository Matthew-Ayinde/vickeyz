'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Music, Piano } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-full w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                style={{ left: `${(i + 1) * 12.5}%` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 text-center">
            {/* Rotating piano icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: 0
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                />
                <Piano className="w-20 h-20 text-primary relative z-10" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Title animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                VickeyZ
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-8 tracking-wide"
            >
              Virtuoso Keyboard Mastery
            </motion.p>

            {/* Animated piano keys */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex justify-center gap-2 mb-8"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-gradient-to-b from-primary to-accent rounded-full"
                  initial={{ height: 20 }}
                  animate={{ 
                    height: [20, 60, 20],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-sm text-primary font-medium tracking-widest uppercase"
            >
              Preparing Your Experience
            </motion.div>
          </div>

          {/* Corner accent lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
