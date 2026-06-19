import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allProducts, categories } from '../data/products'
import SEO from '../components/seo/SEO'
import FilterBar from '../components/shop/FilterBar'
import ProductGrid from '../components/shop/ProductGrid'
import AnimatedSection from '../components/ui/AnimatedSection'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [visibleCount, setVisibleCount] = useState(8)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(8)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map((v) => (v === '50000+' ? 50000 : parseInt(v)))
      if (priceRange === '50000+') {
        filtered = filtered.filter((p) => p.price >= min)
      } else {
        filtered = filtered.filter((p) => p.price >= min && p.price <= max)
      }
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [activeCategory, sortBy, priceRange])

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleProducts.length < filteredProducts.length

  const categoryLabel = activeCategory !== 'all'
    ? categories.find(c => c.id === activeCategory)?.name || 'Collection'
    : 'Full Collection'

  return (
    <div className="min-h-screen bg-cream pt-20">
      <SEO
        title={`${categoryLabel} | Triune Global Trading Shop`}
        description={`Browse our ${categoryLabel.toLowerCase()} of antique Kerala crafts, Aranmula mirrors, brass sculptures, and heritage wood carvings.`}
        pathname="/shop"
      />

      <AnimatedSection className="py-16 text-center bg-teak">
        <p className="text-brass text-sm tracking-[0.3em] uppercase mb-3">The Collection</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ivory">Shop / Collection</h1>
      </AnimatedSection>

      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        resultCount={filteredProducts.length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid products={visibleProducts} />

        {hasMore && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 border-2 border-brass text-brass tracking-wider uppercase text-sm font-medium hover:bg-brass hover:text-teak transition-all duration-300"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Shop