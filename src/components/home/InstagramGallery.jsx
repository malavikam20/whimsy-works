import { useState } from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400&q=80', alt: 'Antique clock' },
  { url: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80', alt: 'Brass sculpture' },
  { url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80', alt: 'Wood carving' },
  { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80', alt: 'Brass lamp' },
  { url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80', alt: 'Ornate mirror' },
  { url: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&q=80', alt: 'Heritage collection' },
]

const GalleryImage = ({ src, alt }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-full h-full bg-teak/20 flex items-center justify-center">
        <div className="text-center px-2">
          <p className="text-xs text-teak/40 uppercase tracking-wider">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

const InstagramGallery = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase mb-2">@triuneglobal</p>
          <h2 className="font-serif text-2xl text-teak">From the Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-sm group cursor-pointer bg-cream"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GalleryImage src={img.url} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery