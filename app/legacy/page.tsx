'use client'

import { motion } from 'framer-motion'
import { Award, MapPin, Calendar, Star, Trophy, Globe2, Crown, Sparkles } from 'lucide-react'

const notablePerformances = [
  {
    title: 'Presidential Gala',
    location: 'The White House, Washington DC',
    date: '2024',
    type: 'State Ceremony',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8f13a?w=800&q=80',
    description: 'Honored to perform at the annual presidential gala with dignitaries from 50+ nations',
  },
  {
    title: 'Royal Wedding Reception',
    location: 'Windsor Castle, United Kingdom',
    date: '2023',
    type: 'Private Event',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    description: 'Exclusive performance for European royalty and distinguished guests',
  },
  {
    title: 'UNESCO Heritage Concert',
    location: 'Taj Mahal, India',
    date: '2023',
    type: 'Cultural Event',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    description: 'Special concert celebrating world heritage and cultural excellence',
  },
  {
    title: 'Fortune 500 Summit',
    location: 'Burj Al Arab, Dubai',
    date: '2024',
    type: 'Corporate Gala',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description: 'Keynote entertainment for global business leaders and CEOs',
  },
  {
    title: 'Charity Gala',
    location: 'Carnegie Hall, New York',
    date: '2022',
    type: 'Fundraiser',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    description: 'Headlined charity event raising $2M for children&apos;s education',
  },
  {
    title: 'G20 Summit Reception',
    location: 'Palazzo Vecchio, Florence',
    date: '2024',
    type: 'Diplomatic Event',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    description: 'Performed for world leaders during historic G20 summit',
  },
]

const pressFeatures = [
  {
    publication: 'The New York Times',
    quote: 'A virtuoso whose fingers dance across the keys with effortless grace',
    date: 'January 2024',
  },
  {
    publication: 'Billboard Magazine',
    quote: 'VickeyZ redefines luxury entertainment for the modern elite',
    date: 'December 2023',
  },
  {
    publication: 'Forbes',
    quote: 'The go-to keyboardist for high-net-worth individuals globally',
    date: 'November 2023',
  },
  {
    publication: 'Vogue Events',
    quote: 'Sophistication personified—every performance is a masterclass',
    date: 'October 2023',
  },
]

const achievements = [
  { icon: Crown, label: 'Performed for 15+ Heads of State', value: '15+' },
  { icon: Globe2, label: 'Countries Performed In', value: '52' },
  { icon: Trophy, label: 'Industry Awards', value: '12' },
  { icon: Star, label: 'Five-Star Reviews', value: '500+' },
]

export default function Legacy() {
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
                <span className="text-sm font-medium text-primary">Wall of Fame</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                The <span className="text-primary">Legacy</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Decades of performances at the world&apos;s most prestigious venues, 
                trusted by dignitaries and cultural icons
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-border hover:border-primary transition-all text-center"
                >
                  <achievement.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Performances Gallery */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Notable <span className="text-primary">Performances</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A curated collection of performances that have shaped my journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notablePerformances.map((performance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary transition-all shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${performance.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-foreground">
                        {performance.type}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{performance.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{performance.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{performance.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {performance.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Press & <span className="text-primary">Recognition</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Featured in world-renowned publications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {pressFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all"
                >
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-xl font-[family-name:var(--font-playfair)] text-foreground mb-4 leading-relaxed italic">
                    &ldquo;{feature.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{feature.publication}</span>
                    <span className="text-sm text-muted-foreground">{feature.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Performance <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the magic through select performance videos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${index === 0 ? '1459749411175-04bf5292ceea' : '1514320291840-2e0a9bf2a9ae'}?w=800&q=80)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center"
                    >
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-foreground border-b-8 border-b-transparent ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <h3 className="text-xl font-bold text-foreground">
                      {index === 0 ? 'Royal Gala Performance' : 'UNESCO Heritage Concert'}
                    </h3>
                    <p className="text-sm text-muted-foreground">4:32</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Journey of <span className="text-primary">Excellence</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

              {[
                { year: '1999', event: 'Started professional career', side: 'left' },
                { year: '2005', event: 'First international performance', side: 'right' },
                { year: '2010', event: 'Performed for first head of state', side: 'left' },
                { year: '2015', event: 'Featured in major publications', side: 'right' },
                { year: '2020', event: 'Reached 1000+ performances', side: 'left' },
                { year: '2024', event: 'Global recognition & awards', side: 'right' },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: milestone.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${milestone.side === 'left' ? 'justify-start' : 'justify-end'} mb-12`}
                >
                  <div className="w-5/12">
                    <div className={`bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all ${milestone.side === 'right' ? 'text-left' : 'text-right'}`}>
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
  )
}
