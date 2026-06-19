import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-espresso">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          className="text-brass text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Est. 2026 — Kayamkulam, Kerala
        </motion.p>

        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Triune Global
          <br />
          <span className="text-brass text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic">Trading</span>
        </motion.h1>

        <motion.p
          className="text-ivory/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Curators of rare antique and heritage crafts from Kerala.
          Each piece carries a story, a lineage, and a soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brass text-teak font-medium tracking-wider uppercase text-sm hover:bg-brass-light transition-all duration-300 shadow-lg hover:shadow-brass/20"
          >
            Explore Collection
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent mx-auto mb-2" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero