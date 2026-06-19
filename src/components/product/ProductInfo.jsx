import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Truck, FileCheck, Ruler } from 'lucide-react'

const ProductInfo = ({ product }) => {
  const [activeTab, setActiveTab] = useState('story')
  const [activeImage, setActiveImage] = useState(0)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Triune Global Trading, I am interested in the "${product.name}" (${product.id}). Please share more details.`
  )

  const tabs = [
    { id: 'story', label: 'Craft Story' },
    { id: 'specs', label: 'Dimensions & Materials' },
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">{product.origin}</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-teak mb-4">{product.name}</h1>
        <p className="text-2xl text-brass font-medium mb-6">{formatPrice(product.price)}</p>
        <p className="text-teak/70 leading-relaxed mb-8">{product.description}</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={`https://wa.me/919876543210?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brass text-teak font-medium tracking-wider uppercase text-sm hover:bg-brass-light transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <MessageCircle size={18} />
          Enquire Now
        </a>
      </div>

      <div className="flex items-center gap-6 text-sm text-teak/50 mb-10">
        <div className="flex items-center gap-2">
          <Truck size={16} />
          <span>Worldwide shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <FileCheck size={16} />
          <span>Certificate included</span>
        </div>
      </div>

      <div className="border-t border-brass/10 pt-6">
        <div className="flex gap-6 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm tracking-wider uppercase pb-2 border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-brass border-brass'
                  : 'text-teak/50 border-transparent hover:text-teak/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'story' && (
            <div className="space-y-4 text-teak/70 leading-relaxed">
              <p>
                <strong className="text-teak">Origin:</strong> {product.origin}
              </p>
              <p>
                This piece was sourced through our network of trusted artisans and estate dealers in {product.origin}. Each item in our collection undergoes careful authentication and restoration before it is offered for sale.
              </p>
              <p>
                We work directly with families who have preserved these craft traditions for generations, ensuring that every purchase supports the living heritage of Kerala.
              </p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Ruler size={18} className="text-brass mt-1 shrink-0" />
                <div>
                  <p className="text-teak font-medium text-sm">Dimensions</p>
                  <p className="text-teak/70">{product.dimensions}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck size={18} className="text-brass mt-1 shrink-0" />
                <div>
                  <p className="text-teak font-medium text-sm">Materials</p>
                  <p className="text-teak/70">{product.material}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck size={18} className="text-brass mt-1 shrink-0" />
                <div>
                  <p className="text-teak font-medium text-sm">Authentication</p>
                  <p className="text-teak/70">Certificate of Authenticity included with provenance documentation.</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProductInfo