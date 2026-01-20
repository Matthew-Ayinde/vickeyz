'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Calendar, MapPin, Users, DollarSign, Music, Check, ArrowRight, ArrowLeft, Sparkles, Phone, Mail, MessageSquare } from 'lucide-react'

const bookingSchema = z.object({
  // Step 1: Event Details
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select a date'),
  eventTime: z.string().min(1, 'Please select a time'),
  guestCount: z.string().min(1, 'Please enter guest count'),
  
  // Step 2: Venue & Performance
  venueName: z.string().min(2, 'Please enter venue name'),
  venueAddress: z.string().min(5, 'Please enter venue address'),
  performanceType: z.string().min(1, 'Please select performance type'),
  duration: z.string().min(1, 'Please select duration'),
  
  // Step 3: Budget & Preferences
  budgetRange: z.string().min(1, 'Please select a budget range'),
  specialRequests: z.string().optional(),
  songRequests: z.string().optional(),
  
  // Step 4: Contact Information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  hearAboutUs: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const steps = [
  { id: 1, title: 'Event Details', icon: Calendar },
  { id: 2, title: 'Venue & Performance', icon: MapPin },
  { id: 3, title: 'Budget & Preferences', icon: DollarSign },
  { id: 4, title: 'Contact Info', icon: Phone },
]

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
  })

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = []
    
    if (currentStep === 1) {
      fieldsToValidate = ['eventType', 'eventDate', 'eventTime', 'guestCount']
    } else if (currentStep === 2) {
      fieldsToValidate = ['venueName', 'venueAddress', 'performanceType', 'duration']
    } else if (currentStep === 3) {
      fieldsToValidate = ['budgetRange']
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data)
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
              className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your booking inquiry has been received. We&apos;ll contact you within 24 hours 
              to discuss your event details and provide a custom quote.
            </p>
            
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                {[
                  'We review your event details and requirements',
                  'You receive a personalized quote within 24 hours',
                  'We schedule a consultation call to discuss specifics',
                  'Contract and deposit secure your date',
                  'Pre-event coordination ensures perfection',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:booking@vickeyz.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us Directly</span>
                </motion.button>
              </a>
              <a href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-card border-2 border-border hover:border-primary rounded-full text-foreground font-semibold"
                >
                  Return to Home
                </motion.button>
              </a>
            </div>
          </motion.div>
        </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Secure Your Date</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Book Your <span className="text-primary">Experience</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete this inquiry to receive a personalized quote within 24 hours
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        currentStep > step.id
                          ? 'bg-primary border-primary'
                          : currentStep === step.id
                          ? 'bg-primary/20 border-primary'
                          : 'bg-card border-border'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-6 h-6 text-primary-foreground" />
                      ) : (
                        <step.icon
                          className={`w-6 h-6 ${
                            currentStep === step.id ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        />
                      )}
                    </motion.div>
                    <span className={`text-xs mt-2 hidden sm:block ${
                      currentStep === step.id ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${
                        currentStep > step.id ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-3xl p-8 border border-border"
                  >
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                      Event Details
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="eventType">
                          Event Type *
                        </label>
                        <select
                          {...register('eventType')}
                          id="eventType"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Gala</option>
                          <option value="private">Private Celebration</option>
                          <option value="state">State Ceremony</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.eventType && (
                          <p className="text-sm text-red-500 mt-1">{errors.eventType.message}</p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2" htmlFor="eventDate">
                            Event Date *
                          </label>
                          <input
                            {...register('eventDate')}
                            type="date"
                            id="eventDate"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                          {errors.eventDate && (
                            <p className="text-sm text-red-500 mt-1">{errors.eventDate.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2" htmlFor="eventTime">
                            Event Time *
                          </label>
                          <input
                            {...register('eventTime')}
                            type="time"
                            id="eventTime"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                          {errors.eventTime && (
                            <p className="text-sm text-red-500 mt-1">{errors.eventTime.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="guestCount">
                          Expected Guest Count *
                        </label>
                        <select
                          {...register('guestCount')}
                          id="guestCount"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select guest count</option>
                          <option value="10-50">10-50 guests</option>
                          <option value="50-100">50-100 guests</option>
                          <option value="100-200">100-200 guests</option>
                          <option value="200-500">200-500 guests</option>
                          <option value="500+">500+ guests</option>
                        </select>
                        {errors.guestCount && (
                          <p className="text-sm text-red-500 mt-1">{errors.guestCount.message}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Venue & Performance */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-3xl p-8 border border-border"
                  >
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                      Venue & Performance
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="venueName">
                          Venue Name *
                        </label>
                        <input
                          {...register('venueName')}
                          type="text"
                          id="venueName"
                          placeholder="e.g., The Ritz-Carlton"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.venueName && (
                          <p className="text-sm text-red-500 mt-1">{errors.venueName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="venueAddress">
                          Venue Address *
                        </label>
                        <input
                          {...register('venueAddress')}
                          type="text"
                          id="venueAddress"
                          placeholder="Full venue address"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.venueAddress && (
                          <p className="text-sm text-red-500 mt-1">{errors.venueAddress.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="performanceType">
                          Performance Type *
                        </label>
                        <select
                          {...register('performanceType')}
                          id="performanceType"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select performance type</option>
                          <option value="solo">Solo Keyboard</option>
                          <option value="trio">3-Piece Band</option>
                          <option value="quintet">5-Piece Band</option>
                          <option value="full">7+ Piece Band</option>
                          <option value="undecided">Not Sure Yet</option>
                        </select>
                        {errors.performanceType && (
                          <p className="text-sm text-red-500 mt-1">{errors.performanceType.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="duration">
                          Performance Duration *
                        </label>
                        <select
                          {...register('duration')}
                          id="duration"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select duration</option>
                          <option value="1-2">1-2 hours</option>
                          <option value="2-3">2-3 hours</option>
                          <option value="3-4">3-4 hours</option>
                          <option value="4-5">4-5 hours</option>
                          <option value="5+">5+ hours</option>
                        </select>
                        {errors.duration && (
                          <p className="text-sm text-red-500 mt-1">{errors.duration.message}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Budget & Preferences */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-3xl p-8 border border-border"
                  >
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                      Budget & Preferences
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="budgetRange">
                          Budget Range *
                        </label>
                        <select
                          {...register('budgetRange')}
                          id="budgetRange"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          <option value="5-10k">$5,000 - $10,000</option>
                          <option value="10-15k">$10,000 - $15,000</option>
                          <option value="15-25k">$15,000 - $25,000</option>
                          <option value="25-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                        {errors.budgetRange && (
                          <p className="text-sm text-red-500 mt-1">{errors.budgetRange.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="songRequests">
                          Song Requests (Optional)
                        </label>
                        <textarea
                          {...register('songRequests')}
                          id="songRequests"
                          rows={4}
                          placeholder="List any specific songs you'd like performed..."
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="specialRequests">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          {...register('specialRequests')}
                          id="specialRequests"
                          rows={4}
                          placeholder="Any special requirements, equipment needs, or other details we should know..."
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-3xl p-8 border border-border"
                  >
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                      Contact Information
                    </h2>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
                            First Name *
                          </label>
                          <input
                            {...register('firstName')}
                            type="text"
                            id="firstName"
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
                            Last Name *
                          </label>
                          <input
                            {...register('lastName')}
                            type="text"
                            id="lastName"
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          placeholder="john.doe@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          placeholder="+1 (234) 567-8900"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" htmlFor="hearAboutUs">
                          How did you hear about us? (Optional)
                        </label>
                        <select
                          {...register('hearAboutUs')}
                          id="hearAboutUs"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Referral</option>
                          <option value="planner">Wedding/Event Planner</option>
                          <option value="venue">Venue Recommendation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                {currentStep > 1 ? (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-card border-2 border-border hover:border-primary rounded-full font-semibold flex items-center space-x-2 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </motion.button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold flex items-center space-x-2 shadow-lg"
                  >
                    <span>Submit Inquiry</span>
                    <Check className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Contact Alternative */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4 text-center">
              Prefer to Talk Directly?
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              We&apos;re here to answer any questions and help you plan the perfect event
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="tel:+1234567890">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all cursor-pointer"
                >
                  <Phone className="w-8 h-8 text-primary mb-3" />
                  <div className="font-semibold mb-1">Call Us</div>
                  <div className="text-primary">+1 (234) 567-890</div>
                </motion.div>
              </a>
              <a href="mailto:booking@vickeyz.com">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all cursor-pointer"
                >
                  <Mail className="w-8 h-8 text-primary mb-3" />
                  <div className="font-semibold mb-1">Email Us</div>
                  <div className="text-primary">booking@vickeyz.com</div>
                </motion.div>
              </a>
            </div>
          </div>
        </section>
      </main>
  )
}
