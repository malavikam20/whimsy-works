import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Check } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEO from '../components/seo/Seo'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <SEO
        title="Contact | Triune Global Trading — Visit Our Kerala Gallery"
        description="Visit our showroom in Ponmana, Kerala, or enquire about our antique collection. WhatsApp, email, and contact form available for worldwide collectors."
        pathname="/contact"
      />
      <section className="py-16 bg-teak text-center">
        <AnimatedSection>
          <p className="text-brass text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-ivory">Contact</h1>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-teak mb-6">Visit the Gallery</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-brass mt-1 shrink-0" />
                    <div>
                      <p className="text-teak font-medium">Triune Global Trading</p>
                      <p className="text-teak/60">123 Heritage Lane, Kayamkulam</p>
                      <p className="text-teak/60">Alappuzha, Kerala — 690502</p>
                      <p className="text-teak/60">India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} className="text-brass shrink-0" />
                    <p className="text-teak/60">+91 9847040739</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={20} className="text-brass shrink-0" />
                    <p className="text-teak/60">hello@triuneglobal.in</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-brass mt-1 shrink-0" />
                    <div>
                      <p className="text-teak/60">Mon – Sat: 10:00 AM – 7:00 PM</p>
                      <p className="text-teak/60">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brass/10">
                <h3 className="font-serif text-lg text-teak mb-4">Prefer WhatsApp?</h3>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Triune%20Global%20Trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-medium tracking-wider text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="aspect-video rounded-sm bg-espresso/50 border border-brass/10 overflow-hidden">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.123456789!2d76.6!3d8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOeKwNTgnMDAuMCJOIDc2wrAzNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(30%) contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-ivory border border-brass/10 p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-teak mb-2">Send an Enquiry</h2>
              <p className="text-teak/60 text-sm mb-8">Interested in a piece? Fill in your details and we will respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-teak/70 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-brass/20 text-teak focus:outline-none focus:border-brass transition-colors text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-teak/70 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-brass/20 text-teak focus:outline-none focus:border-brass transition-colors text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-teak/70 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-brass/20 text-teak focus:outline-none focus:border-brass transition-colors text-sm"
                      placeholder="+91 9847040739"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-teak/70 mb-2">Interest</label>
                    <select
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-brass/20 text-teak focus:outline-none focus:border-brass transition-colors text-sm"
                    >
                      <option value="">General enquiry</option>
                      <option value="clock">Wall Clocks</option>
                      <option value="mirror">Aranmula Mirrors</option>
                      <option value="showpiece">Showpieces</option>
                      <option value="wood">Wood Carvings</option>
                      <option value="brass">Brass & Bronze</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-teak/70 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-cream border border-brass/20 text-teak focus:outline-none focus:border-brass transition-colors text-sm resize-none"
                    placeholder="Tell us which piece interests you, or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brass text-teak font-medium tracking-wider uppercase text-sm hover:bg-brass-light transition-colors duration-300 disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <Check size={16} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-teak/40 text-center">
                  For a faster response, message us directly on WhatsApp.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Contact