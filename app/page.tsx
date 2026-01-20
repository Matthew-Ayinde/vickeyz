'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Globe, Star, Music, Users, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
          
          {/* Simulated Video Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1920&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Trusted by Dignitaries Worldwide</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Virtuoso Keyboard
                </span>
                <br />
                <span className="text-foreground">Mastery</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Elevating the world&apos;s most prestigious events with decades of musical excellence. 
                From intimate ceremonies to grand galas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    <span>Book Your Experience</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/legacy">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-card border-2 border-border hover:border-primary rounded-full text-foreground font-semibold text-lg transition-all"
                  >
                    View Legacy
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { icon: Globe, value: '50+', label: 'Countries' },
                  { icon: Star, value: '1000+', label: 'Performances' },
                  { icon: Users, value: '200K+', label: 'Guests Entertained' },
                  { icon: Award, value: '25+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Who I Am Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                The <span className="text-primary">VickeyZ</span> Difference
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Not just music—an immersive experience that transforms moments into lasting memories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=80)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center space-x-4">
                      <Music className="w-12 h-12 text-primary" />
                      <div>
                        <p className="text-sm text-primary font-semibold">Keyboard Virtuoso</p>
                        <p className="text-2xl font-bold text-foreground">25+ Years of Mastery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-[family-name:var(--font-playfair)]">
                    Entrusted by the Elite
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From state ceremonies with heads of state to intimate gatherings of high-net-worth individuals, 
                    VickeyZ brings unparalleled sophistication to every performance.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With a repertoire spanning classical masterpieces to contemporary hits, each performance 
                    is meticulously curated to match the elegance and prestige of your event.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  {[
                    'Performances for dignitaries and royalty',
                    'Featured at UNESCO World Heritage venues',
                    'Fluent in 10+ musical genres',
                    'Custom arrangements for every occasion',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href="/artistry" className="inline-block pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center space-x-2"
                  >
                    <span>Explore The Artistry</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Ready to Create <span className="text-primary">Magic</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how we can make your event truly unforgettable
            </p>
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Start Your Booking Inquiry
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>
  )
}
