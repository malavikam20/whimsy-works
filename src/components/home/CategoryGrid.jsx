import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../../data/products'

const CategoryImage = ({ src, alt }) => {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (error) {
    return (
      <div className="absolute inset-0 bg-teak-light flex items-center justify-center">
        <div className="text-center p-6">
          <p className="font-serif text-2xl text-ivory/40 mb-3">{alt}</p>
          <div className="w-16 h-px bg-brass/30 mx-auto" />
          <p className="text-xs text-ivory/30 uppercase tracking-wider mt-3">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-teak-light animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Browse By</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-teak">The Collection</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block overflow-hidden rounded-sm bg-espresso aspect-[4/3]"
              >
                <CategoryImage src={cat.image} alt={cat.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brass/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-brass/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-ivory mb-1 group-hover:text-brass transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-ivory/60 text-sm mb-2">{cat.description}</p>
                  <span className="text-brass text-xs tracking-wider uppercase">{cat.count} pieces</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid