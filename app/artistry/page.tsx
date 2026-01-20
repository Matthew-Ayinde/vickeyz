'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Users, Piano, Mic2, Guitar, Drum, ArrowRight, Sparkles } from 'lucide-react'

export default function Artistry() {
  return (
    <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tailored to Perfection</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                The <span className="text-primary">Artistry</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect musical experience for your event—from intimate solo performances 
                to full-scale band productions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solo Performance */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Piano className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm uppercase tracking-wider text-primary font-semibold">Solo Performance</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Intimate <span className="text-primary">Excellence</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  When you desire sophistication and intimacy, the solo keyboard performance offers 
                  unparalleled elegance. Each note is crafted with precision, creating an atmosphere 
                  of refined luxury perfect for:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Private dinner parties with distinguished guests',
                    'Intimate wedding ceremonies and cocktail hours',
                    'Corporate VIP receptions',
                    'Art gallery openings and charity galas',
                    'Luxury hotel lobby ambiance',
                    'Private birthday celebrations',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Music className="w-5 h-5 text-primary" />
                    <span>Technical Mastery</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Grand Piano, Digital Piano, or Keyboard</li>
                    <li>• Classical, Jazz, Contemporary, and Pop repertoire</li>
                    <li>• Custom song arrangements available</li>
                    <li>• Professional sound system included</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border"
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-xs text-muted-foreground">Solo Shows</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-xs text-muted-foreground">Genres</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">100%</div>
                        <div className="text-xs text-muted-foreground">Satisfied</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full Band Experience */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Band Members Icons */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-8 right-8 flex flex-col space-y-3"
                  >
                    {[Piano, Mic2, Guitar, Drum].map((Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center"
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm uppercase tracking-wider text-accent font-semibold">Full Band</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                  Spectacular <span className="text-accent">Energy</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Transform your event into an unforgettable celebration with the full band experience. 
                  Professional musicians working in perfect harmony to deliver high-energy performances 
                  that keep guests dancing all night. Ideal for:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Grand wedding receptions (200+ guests)',
                    'Corporate galas and award ceremonies',
                    'Product launches and brand events',
                    'State ceremonies and diplomatic functions',
                    'Music festivals and cultural celebrations',
                    'Luxury resort entertainment programs',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="text-foreground group-hover:text-accent transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-2xl p-4 border border-border">
                    <h4 className="font-semibold mb-2 text-sm">Band Options</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 3-Piece: Keys, Bass, Drums</li>
                      <li>• 5-Piece: + Vocals, Guitar</li>
                      <li>• 7-Piece: + Sax, Trumpet</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-4 border border-border">
                    <h4 className="font-semibold mb-2 text-sm">Production</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Professional PA System</li>
                      <li>• Stage Lighting</li>
                      <li>• Sound Engineer</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Choose Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Both options deliver world-class quality—the choice depends on your event&apos;s scale and atmosphere
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Solo Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary transition-all shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Piano className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Solo Performance</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for intimate, sophisticated atmospheres where elegance is paramount
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Guest Count</span>
                    <span className="font-medium">10-150</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Setup Time</span>
                    <span className="font-medium">30 mins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Atmosphere</span>
                    <span className="font-medium">Elegant & Refined</span>
                  </div>
                </div>
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Book Solo</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Band Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-8 border-2 border-border hover:border-accent transition-all shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Band</h3>
                <p className="text-muted-foreground mb-6">
                  Ideal for large-scale events requiring high energy and complete entertainment
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Guest Count</span>
                    <span className="font-medium">100-1000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Setup Time</span>
                    <span className="font-medium">2-3 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Atmosphere</span>
                    <span className="font-medium">Energetic & Grand</span>
                  </div>
                </div>
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-accent text-accent-foreground rounded-full font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Book Full Band</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Not Sure Which to Choose?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss your event details and find the perfect musical solution
            </p>
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>
  )
}
