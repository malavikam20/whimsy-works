import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-24 bg-teak relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#D4AF37_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Stay Connected</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-4">
            Join the Inner Circle
          </h2>
          <p className="text-ivory/60 mb-8 leading-relaxed">
            Receive early access to new acquisitions, stories from the artisans, and invitations to private viewings.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-5 py-3 bg-ivory/10 border border-brass/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-brass transition-colors duration-300 text-sm"
            />
            <button
              type="submit"
              disabled={submitted}
              className="px-6 py-3 bg-brass text-teak font-medium tracking-wider uppercase text-sm hover:bg-brass-light transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  Subscribed
                </>
              ) : (
                <>
                  <Send size={16} />
                  Subscribe
                </>
              )}
            </button>
          </form>
          <p className="text-ivory/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter