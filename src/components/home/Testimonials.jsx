import { motion } from 'framer-motion'
import { testimonials } from '../../data/products'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className="py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Collector Voices</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory">Testimonials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative p-8 bg-teak/30 border border-brass/10 rounded-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Quote size={32} className="text-brass/30 mb-4" />
              <p className="text-ivory/80 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-brass fill-brass" />
                ))}
              </div>
              <div className="border-t border-brass/10 pt-4">
                <p className="text-ivory font-medium">{testimonial.name}</p>
                <p className="text-ivory/50 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials