'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building2, Cake, Crown, Music2, Check, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Luxury Weddings',
    subtitle: 'Where Forever Begins',
    color: 'from-rose-500 to-pink-500',
    description: 'Transform your wedding day into an enchanting symphony. From the delicate prelude of your ceremony to the jubilant crescendo of your reception, every moment is elevated with sophisticated musical artistry.',
    features: [
      'Ceremony processional & recessional',
      'Cocktail hour ambiance',
      'First dance customization',
      'Reception entertainment',
      'Coordination with wedding planner',
      'Unlimited song requests',
    ],
    packages: [
      { name: 'Intimate', guests: '50-100', hours: '3', price: 'Custom Quote' },
      { name: 'Grand', guests: '100-250', hours: '5', price: 'Custom Quote' },
      { name: 'Royal', guests: '250+', hours: '6+', price: 'Custom Quote' },
    ],
    testimonial: '"VickeyZ made our wedding unforgettable. Guests are still talking about it months later!" - Sarah & Michael, Newport',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Corporate Galas',
    subtitle: 'Elevating Business Excellence',
    color: 'from-blue-500 to-cyan-500',
    description: 'Impress clients, reward employees, and reinforce your brand with world-class entertainment. Perfect for product launches, annual dinners, and executive retreats where sophistication meets success.',
    features: [
      'Brand-aligned song selection',
      'Professional MC services available',
      'Corporate logo integration',
      'VIP executive entertainment',
      'Multi-venue coordination',
      'Technical rider management',
    ],
    packages: [
      { name: 'Executive', guests: '100-200', hours: '3', price: 'Custom Quote' },
      { name: 'Premium', guests: '200-500', hours: '4', price: 'Custom Quote' },
      { name: 'Elite', guests: '500+', hours: '5+', price: 'Custom Quote' },
    ],
    testimonial: '"The performance elevated our Fortune 500 gala to unforgettable heights." - Alexandra Chen, CEO',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    icon: Cake,
    title: 'Private Celebrations',
    subtitle: 'Milestone Moments Made Magical',
    color: 'from-amber-500 to-orange-500',
    description: 'Whether it\'s a landmark birthday, anniversary, or intimate gathering, create memories that resonate. Curated performances for high-net-worth individuals seeking extraordinary experiences.',
    features: [
      'Personalized song arrangements',
      'Intimate venue expertise',
      'Guest interaction & dedications',
      'Multi-genre flexibility',
      'Home & private venue setup',
      'Discreet professional service',
    ],
    packages: [
      { name: 'Personal', guests: '20-50', hours: '2', price: 'Custom Quote' },
      { name: 'Celebration', guests: '50-100', hours: '3', price: 'Custom Quote' },
      { name: 'Grand Affair', guests: '100+', hours: '4+', price: 'Custom Quote' },
    ],
    testimonial: '"A 60th birthday celebration beyond our wildest dreams. Pure elegance!" - The Harrison Family',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    icon: Crown,
    title: 'State Ceremonies',
    subtitle: 'Diplomatic Excellence',
    color: 'from-purple-500 to-indigo-500',
    description: 'Trusted by governments and diplomatic missions worldwide. Performances for state dinners, embassy events, and international summits where protocol meets prestige.',
    features: [
      'Security clearance coordination',
      'Multi-lingual repertoire',
      'Protocol-compliant performance',
      'International anthems expertise',
      'Diplomatic event experience',
      'High-level discretion guaranteed',
    ],
    packages: [
      { name: 'Diplomatic', guests: '100-200', hours: '3', price: 'Custom Quote' },
      { name: 'State', guests: '200-400', hours: '4', price: 'Custom Quote' },
      { name: 'Summit', guests: '400+', hours: '5+', price: 'Custom Quote' },
    ],
    testimonial: '"Impeccable professionalism for our embassy\'s 50th anniversary celebration." - Ambassador Reynolds',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8f13a?w=800&q=80',
  },
]

export default function Experience() {
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
                <span className="text-sm font-medium text-primary">Bespoke Services</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                The <span className="text-primary">Experience</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Curated musical excellence for every prestigious occasion. 
                Each service is meticulously tailored to exceed expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={index}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)]">
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                      <Music2 className="w-5 h-5 text-primary" />
                      <span>What&apos;s Included</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="bg-muted/30 rounded-2xl p-6 border border-border mb-8">
                    <h3 className="font-semibold text-lg mb-4">Package Options</h3>
                    <div className="space-y-3">
                      {service.packages.map((pkg, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div>
                            <span className="font-semibold">{pkg.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({pkg.guests} guests)</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">{pkg.hours} hours</div>
                            <div className="text-sm font-semibold text-primary">{pkg.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-card border border-border rounded-2xl p-6 italic text-muted-foreground mb-6">
                    {service.testimonial}
                  </div>

                  <Link href="/booking">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold flex items-center space-x-2 shadow-lg`}
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    
                    {/* Overlay Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute top-8 left-8 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full"
                    >
                      <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Premium Service
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Add-On Services */}
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
                Enhance Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional services to make your event truly exceptional
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom Arrangements',
                  description: 'Personalized versions of your favorite songs',
                  price: 'From $500',
                },
                {
                  title: 'Audio Recording',
                  description: 'Professional recording of your event',
                  price: 'From $1,200',
                },
                {
                  title: 'Extended Hours',
                  description: 'Additional performance time beyond package',
                  price: 'From $800/hr',
                },
                {
                  title: 'Special Guest Features',
                  description: 'Collaborate with additional musicians',
                  price: 'Custom Quote',
                },
                {
                  title: 'Rehearsal Session',
                  description: 'Pre-event coordination and practice',
                  price: 'From $600',
                },
                {
                  title: 'Travel & Accommodation',
                  description: 'International performance arrangements',
                  price: 'Cost + 20%',
                },
              ].map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{addon.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                  <div className="text-primary font-semibold">{addon.price}</div>
                </motion.div>
              ))}
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
              Ready to Create Something <span className="text-primary">Extraordinary</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every event is unique. Let&apos;s craft the perfect musical experience for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all"
                >
                  Request Custom Quote
                </motion.button>
              </Link>
              <a href="tel:+1234567890">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-card border-2 border-border hover:border-primary rounded-full text-foreground font-bold text-xl transition-all"
                >
                  Call: +1 (234) 567-890
                </motion.button>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
  )
}
