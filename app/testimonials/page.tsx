'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote, Star, ArrowRight, Heart, Building2, Users, Crown, Sparkles } from 'lucide-react'

const testimonials = [
  {
    name: 'Ambassador Catherine Reynolds',
    role: 'US Ambassador to France',
    category: 'Diplomatic',
    icon: Crown,
    rating: 5,
    text: 'VickeyZ performed at our embassy\'s 50th anniversary celebration. The professionalism, musical excellence, and cultural sensitivity displayed were absolutely impeccable. Every dignitary present commented on the extraordinary quality of the performance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    event: 'Embassy Anniversary Gala',
    location: 'Paris, France',
  },
  {
    name: 'Sarah & Michael Davidson',
    role: 'Newport, Rhode Island',
    category: 'Wedding',
    icon: Heart,
    rating: 5,
    text: 'Our wedding was a dream come true, and VickeyZ was the heart of it all. From the ceremony to the last dance, the music was simply magical. Guests are still raving about it six months later. Worth every penny and more!',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    event: 'Luxury Wedding Reception',
    location: 'Rosecliff Mansion',
  },
  {
    name: 'Dr. Alexandra Chen',
    role: 'CEO, TechVision Global',
    category: 'Corporate',
    icon: Building2,
    rating: 5,
    text: 'We hired VickeyZ for our Fortune 500 annual gala. The performance elevated the entire evening—sophisticated, engaging, and perfectly aligned with our brand. Our C-suite and board members were thoroughly impressed.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    event: 'Annual Corporate Gala',
    location: 'San Francisco, CA',
  },
  {
    name: 'The Harrison Family',
    role: 'Greenwich, Connecticut',
    category: 'Private',
    icon: Users,
    rating: 5,
    text: 'For my father\'s 75th birthday, we wanted something truly special. VickeyZ created custom arrangements of Dad\'s favorite jazz standards. The intimate performance in our home was the highlight of a perfect evening. Pure elegance!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    event: '75th Birthday Celebration',
    location: 'Private Residence',
  },
  {
    name: 'Victoria Beaumont',
    role: 'Luxury Wedding Planner',
    category: 'Professional',
    icon: Heart,
    rating: 5,
    text: 'I\'ve worked with VickeyZ on 15+ high-profile weddings. The reliability, talent, and attention to detail are unmatched. Clients consistently cite the music as their favorite element. A true partner for luxury events.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
    event: 'Multiple Luxury Weddings',
    location: 'New York & Hamptons',
  },
  {
    name: 'Sheikh Mohammed Al-Rashid',
    role: 'Dubai, UAE',
    category: 'International',
    icon: Crown,
    rating: 5,
    text: 'World-class musicianship combined with genuine professionalism. VickeyZ performed at our family\'s celebration with 400+ distinguished guests. The fusion of classical and contemporary music was absolutely masterful.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    event: 'Private Family Celebration',
    location: 'Burj Al Arab',
  },
]

const stats = [
  { value: '500+', label: 'Five-Star Reviews', icon: Star },
  { value: '98%', label: 'Rebook Rate', icon: Heart },
  { value: '1000+', label: 'Happy Clients', icon: Users },
  { value: '25+', label: 'Years Experience', icon: Crown },
]

export default function Testimonials() {
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
                <span className="text-sm font-medium text-primary">Kind Words</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                Social <span className="text-primary">Proof</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Don&apos;t just take our word for it—hear from distinguished clients 
                who&apos;ve experienced the VickeyZ difference
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-3xl p-8 border border-border hover:border-primary transition-all shadow-lg flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <testimonial.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-grow mb-6">
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    <p className="text-foreground leading-relaxed italic">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm">
                      <div className="font-semibold text-primary mb-1">{testimonial.event}</div>
                      <div className="text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
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
                Hear It <span className="text-primary">Firsthand</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Video testimonials from satisfied clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Sarah & Michael', event: 'Wedding Reception', duration: '2:15' },
                { name: 'Dr. Alexandra Chen', event: 'Corporate Gala', duration: '1:45' },
              ].map((video, index) => (
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
                      backgroundImage: `url(https://images.unsplash.com/photo-${index === 0 ? '1519741497674-611481863552' : '1511578314322-379afb476865'}?w=800&q=80)`,
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
                    <h3 className="text-xl font-bold text-foreground">{video.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{video.event}</p>
                      <p className="text-sm text-primary">{video.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Review */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
              <blockquote className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-foreground mb-8 leading-relaxed">
                &ldquo;VickeyZ doesn&apos;t just play music—they create an atmosphere of elegance 
                that transforms any event into an unforgettable experience. Simply the best in the business.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" 
                  alt="James Hartford"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <div className="font-bold text-foreground">James Hartford</div>
                  <div className="text-sm text-muted-foreground">Event Producer, Elite Events NYC</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Trusted by <span className="text-primary">Industry Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Proud to have performed for these prestigious organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Four Seasons',
                'Ritz-Carlton',
                'Fortune 500',
                'UNESCO',
                'Royal Families',
                'The White House',
                'Carnegie Hall',
                'Leading Hotels',
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-all"
                >
                  <span className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Join the <span className="text-primary">Elite</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the same level of excellence that has delighted hundreds of discerning clients
            </p>
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all inline-flex items-center space-x-2"
              >
                <span>Start Your Booking Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>
  )
}
