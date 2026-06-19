import { SlidersHorizontal, ChevronDown } from 'lucide-react'

const FilterBar = ({
  categories,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  resultCount,
}) => {
  return (
    <div className="bg-teak/5 border-y border-brass/10 py-6 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <SlidersHorizontal size={18} className="text-brass" />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onCategoryChange('all')}
                className={`px-4 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-brass text-teak'
                    : 'bg-teak/10 text-teak hover:bg-teak/20'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-4 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-brass text-teak'
                      : 'bg-teak/10 text-teak hover:bg-teak/20'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-teak/60">Price:</span>
              <select
                value={priceRange}
                onChange={(e) => onPriceRangeChange(e.target.value)}
                className="bg-transparent border border-brass/20 text-teak text-sm px-3 py-2 focus:outline-none focus:border-brass"
              >
                <option value="all">All Prices</option>
                <option value="0-15000">Under ₹15,000</option>
                <option value="15000-30000">₹15,000 — ₹30,000</option>
                <option value="30000-50000">₹30,000 — ₹50,000</option>
                <option value="50000+">Above ₹50,000</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-teak/60">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="bg-transparent border border-brass/20 text-teak text-sm px-3 py-2 pr-8 focus:outline-none focus:border-brass appearance-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-teak/40 pointer-events-none" />
              </div>
            </div>

            <span className="text-sm text-teak/60 ml-2">{resultCount} items</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar