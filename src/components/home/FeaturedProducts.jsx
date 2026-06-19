import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { featuredProducts } from '../../data/products'
import { ArrowRight } from 'lucide-react'

const ProductImage = ({ src, alt }) => {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (error) {
    return (
      <div className="absolute inset-0 bg-teak-light flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-xs text-ivory/40 uppercase tracking-wider">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {!loaded && <div className="absolute inset-0 bg-teak-light animate-pulse" />}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

const FeaturedProducts = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

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
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Handpicked</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory">Featured Pieces</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative bg-teak-light rounded-sm overflow-hidden mb-4 aspect-[3/4]">
                  <ProductImage src={product.image} alt={product.name} />
                  <div className="absolute inset-0 bg-espresso/10 group-hover:bg-espresso/0 transition-colors duration-500" />
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-brass/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-brass/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.bestseller && (
                    <div className="absolute top-3 right-3 bg-maroon text-ivory text-[10px] tracking-wider uppercase px-3 py-1">
                      Bestseller
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-xl text-ivory group-hover:text-brass transition-colors duration-300 mb-1">
                  {product.name}
                </h3>
                <p className="text-brass font-medium tracking-wide mb-2">{formatPrice(product.price)}</p>
                <p className="text-ivory/50 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-brass tracking-wider uppercase text-sm font-medium hover:text-brass-light transition-colors duration-300 group"
          >
            View Full Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts