import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getRelatedProducts } from '../../data/products'

const RelatedProducts = ({ productId, category }) => {
  const products = getRelatedProducts(productId, category)

  if (products.length === 0) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 bg-cream border-t border-brass/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">You May Also Like</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-teak">Related Pieces</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative bg-teak-light rounded-sm overflow-hidden mb-3 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg text-teak group-hover:text-brass transition-colors duration-300 mb-1">
                  {product.name}
                </h3>
                <p className="text-brass text-sm font-medium">{formatPrice(product.price)}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts