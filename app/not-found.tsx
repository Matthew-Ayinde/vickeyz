'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Music2 } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Music2 className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-foreground">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you&apos;re looking for seems to have hit a wrong note. 
            Let&apos;s get you back on track.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
