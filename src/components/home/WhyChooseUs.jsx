import { motion } from 'framer-motion'
import { Check, Shield, Globe, Award } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'Authentic Handcrafted',
    description: 'Every piece sourced directly from Kerala master artisans with documented provenance.',
  },
  {
    icon: Award,
    title: 'Certificate of Authenticity',
    description: 'All items include a signed certificate verifying origin, age, and craft tradition.',
  },
  {
    icon: Globe,
    title: 'Worldwide Shipping',
    description: 'Secure, insured international delivery with custom crating for fragile antiques.',
  },
  {
    icon: Check,
    title: 'Kerala Heritage',
    description: 'Over 25 years preserving and promoting the craft traditions of God\'s Own Country.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-cream border-y border-brass/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Why Collectors Trust Us</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-teak">The Triune Promise</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 rounded-sm border border-brass/10 hover:border-brass/30 transition-colors duration-300 bg-cream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-teak/5 text-brass">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-teak mb-3">{item.title}</h3>
              <p className="text-teak/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs