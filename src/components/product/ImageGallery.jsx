import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageGallery = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0])
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-[3/4] bg-teak-light rounded-sm overflow-hidden cursor-zoom-in group"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={mainImage}
            src={mainImage}
            alt={productName}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
        <div className="absolute bottom-4 right-4 bg-ivory/90 text-teak text-xs px-3 py-1 tracking-wider uppercase">
          {isZoomed ? 'Click to shrink' : 'Click to zoom'}
        </div>
      </div>

      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
              mainImage === img ? 'border-brass' : 'border-transparent hover:border-brass/40'
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery