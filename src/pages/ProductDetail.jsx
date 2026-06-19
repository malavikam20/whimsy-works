import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/products'
import SEO from '../components/seo/SEO'
import ImageGallery from '../components/product/ImageGallery'
import ProductInfo from '../components/product/ProductInfo'
import RelatedProducts from '../components/product/RelatedProducts'
import AnimatedSection from '../components/ui/AnimatedSection'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
        <SEO title="Piece Not Found | Triune Global Trading" pathname={`/product/${id}`} />
        <div className="text-center">
          <h1 className="font-serif text-4xl text-teak mb-4">Piece Not Found</h1>
          <p className="text-teak/60 mb-6">This treasure has been moved to another collection.</p>
          <a href="/shop" className="text-brass hover:underline">Browse the collection</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <SEO
        title={`${product.name} | Triune Global Trading`}
        description={product.description}
        pathname={`/product/${id}`}
        image={product.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <ImageGallery images={product.gallery} productName={product.name} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ProductInfo product={product} />
          </AnimatedSection>
        </div>
      </div>

      <RelatedProducts productId={product.id} category={product.category} />
    </div>
  )
}

export default ProductDetail