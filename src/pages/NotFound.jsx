import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/seo/Seo'
import AnimatedSection from '../components/ui/AnimatedSection'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-espresso text-ivory flex items-center justify-center pt-20">
      <SEO
        title="Page Not Found | Triune Global Trading"
        description="This page has been lost to time. Explore our collection of Kerala antiques and heritage crafts."
      />
      <AnimatedSection className="text-center max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-24 h-24 mx-auto mb-8 border-2 border-brass/30 rounded-full flex items-center justify-center">
            <span className="font-serif text-4xl text-brass">404</span>
          </div>
          <h1 className="font-serif text-3xl text-ivory mb-4">This Treasure Has Been Lost</h1>
          <p className="text-ivory/50 mb-8 leading-relaxed">
            The page you seek may have been moved to a private collection, or perhaps it never existed. Return to our gallery to discover pieces that are very much here.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-brass text-teak font-medium tracking-wider uppercase text-sm hover:bg-brass-light transition-colors duration-300"
          >
            Return to Gallery
          </Link>
          <div className="mt-6">
            <Link to="/shop" className="text-brass text-sm hover:underline">
              Browse the collection
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  )
}

export default NotFound