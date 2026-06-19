import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const StoryTeaser = () => {
  return (
    <section className="py-20 bg-cream border-b border-brass/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-4">Our Heritage</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-teak mb-6">
            Rooted in Kerala, Revered Worldwide
          </h2>
          <p className="text-teak/70 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
            For over two decades, Triune Global Trading has been the bridge between Kerala's master artisans and discerning collectors across the globe. Every piece in our gallery is hand-selected, authenticated, and carries the soul of its maker.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-brass font-medium tracking-wider uppercase text-sm hover:text-brass-light transition-colors duration-300 group"
          >
            Read Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default StoryTeaser