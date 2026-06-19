import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Eye } from 'lucide-react'

const ProductCard = ({ product, index }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative bg-teak-light rounded-sm overflow-hidden mb-4 aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-500" />

          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="w-9 h-9 bg-ivory/90 text-teak rounded-full flex items-center justify-center hover:bg-brass hover:text-teak transition-colors"
              aria-label="Quick view"
            >
              <Eye size={16} />
            </button>
            <button
              className="w-9 h-9 bg-ivory/90 text-teak rounded-full flex items-center justify-center hover:bg-maroon hover:text-ivory transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={16} />
            </button>
          </div>

          {product.bestseller && (
            <div className="absolute top-3 left-3 bg-maroon text-ivory text-[10px] tracking-wider uppercase px-3 py-1">
              Bestseller
            </div>
          )}
        </div>

        <h3 className="font-serif text-lg text-teak group-hover:text-brass transition-colors duration-300 mb-1">
          {product.name}
        </h3>
        <p className="text-brass font-medium tracking-wide mb-2">{formatPrice(product.price)}</p>
        <p className="text-teak/50 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
      </Link>
    </motion.div>
  )
}

export default ProductCard