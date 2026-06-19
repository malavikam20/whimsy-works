export const categories = [
  {
    id: 'clocks',
    name: 'Wall Clocks',
    description: 'Antique Kerala-style timepieces in teak and brass',
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80',
    count: 12,
  },
  {
    id: 'mirrors',
    name: 'Aranmula Mirrors',
    description: 'Legendary metal-alloy mirrors from Aranmula',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    count: 8,
  },
  {
    id: 'showpieces',
    name: 'Showpieces',
    description: 'Brass and bronze collectible art pieces',
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/showpiece-figurine/j/j/4/5-60-achm15-antique-decor-items-48-original-imagz2azsmbrbbcc.jpeg?q=90',
    count: 15,
  },
  {
    id: 'wood-carvings',
    name: 'Wood Carvings',
    description: 'Hand-carved teak and rosewood panels',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    count: 10,
  },
  {
    id: 'brass-bronze',
    name: 'Brass & Bronze',
    description: 'Traditional lamps, vessels, and ritual objects',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    count: 18,
  },
]

export const allProducts = [
  {
    id: '1',
    name: 'Kerala Grandfather Clock',
    category: 'clocks',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80',
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80',
    ],
    description: 'A 19th-century standing clock in solid teak with brass pendulum and hand-carved floral motifs. This rare piece was sourced from a heritage estate in Alappuzha district and retains its original mechanical movement.',
    origin: 'Alappuzha, Kerala',
    material: 'Teak wood, brass',
    dimensions: 'Height: 210cm, Width: 52cm, Depth: 28cm',
    featured: true,
    bestseller: true,
  },
  {
    id: '2',
    name: 'Aranmula Kannadi — Oval',
    category: 'mirrors',
    price: 28500,
    image: 'https://aranmulakannadi.net/cdn/shop/products/Aranmula-kannadi-AMS3122-02_530x@2x.jpg?v=1636995093',
    gallery: [
      'https://aranmulakannadi.net/cdn/shop/products/Aranmula-kannadi-AMS3122-02_530x@2x.jpg?v=1636995093'
    ],
    description: 'Traditional oval metal-alloy mirror with ornate brass backplate. No glass — pure metal reflection. This mirror is certified by the Aranmula Valkannadi Society and comes with a provenance document.',
    origin: 'Aranmula, Pathanamthitta',
    material: 'Metal alloy (copper-tin), brass frame',
    dimensions: 'Height: 28cm, Width: 22cm',
    featured: true,
    bestseller: true,
  },
  {
    id: '3',
    name: 'Brass Nataraja Statue',
    category: 'brass-bronze',
    price: 32000,
    image: 'https://vedanshcraft.com/cdn/shop/products/Q_7b24369f-bc04-44ef-911f-d61186e2ba6d.jpg?v=1752492914',
    gallery: [
      'https://vedanshcraft.com/cdn/shop/products/Q_7b24369f-bc04-44ef-911f-d61186e2ba6d.jpg?v=1752492914'
    ],
    description: 'Bronze dancing Shiva in classic Chola style, hand-cast by master artisans in Swamimalai. The aureole and flame detailing showcase the lost-wax casting technique perfected over generations.',
    origin: 'Swamimalai, Tamil Nadu (Kerala trade route)',
    material: 'Panchaloha bronze',
    dimensions: 'Height: 45cm, Width: 38cm',
    featured: true,
    bestseller: false,
  },
  {
    id: '4',
    name: 'Teak Elephant Panel',
    category: 'wood-carvings',
    price: 18500,
    image: 'https://5.imimg.com/data5/RA/FA/DO/SELLER-98076806/9-500x500.jpg',
    gallery: [
      'https://5.imimg.com/data5/RA/FA/DO/SELLER-98076806/9-500x500.jpg',
      'https://m.media-amazon.com/images/I/81PUnVTHj5L._AC_UF894,1000_QL80_.jpg'
    ],
    description: 'Single-panel wall carving of ceremonial elephants in procession, deep relief on aged teak. This panel once adorned the entrance of a traditional tharavadu in northern Kerala.',
    origin: 'Kannur, Kerala',
    material: 'Aged teak, natural shellac finish',
    dimensions: 'Height: 90cm, Width: 60cm, Depth: 8cm',
    featured: true,
    bestseller: false,
  },
  {
    id: '5',
    name: 'Nilavilakku Brass Lamp',
    category: 'brass-bronze',
    price: 12000,
    image: 'https://urliutsav.com/cdn/shop/files/AnnamBirdDiya-2.jpg?v=1772436074&width=1445',
    gallery: [
      'https://urliutsav.com/cdn/shop/files/AnnamBirdDiya-2.jpg?v=1772436074&width=1445',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    description: 'Traditional Kerala nilavilakku with five flames, hand-beaten from a single sheet of brass. Used in temple ceremonies and household rituals. Includes cotton wicks and a small brass oil cup.',
    origin: 'Thrissur, Kerala',
    material: 'Solid brass, hand-beaten',
    dimensions: 'Height: 55cm, Base: 20cm diameter',
    featured: false,
    bestseller: true,
  },
  {
    id: '6',
    name: 'Kathakali Face Mask',
    category: 'showpieces',
    price: 8500,
    image: 'https://itokri.com/cdn/shop/files/Pinterest_Pragati_Newalkar_480x480.jpg',
    gallery: [
      'https://itokri.com/cdn/shop/files/Pinterest_Pragati_Newalkar_480x480.jpg',
      'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80',
    ],
    description: 'Hand-painted papier-mâché Kathakali mask depicting the noble pacha (green) character. Crafted by the last remaining mask-making family in Vellinezhi, Palakkad district.',
    origin: 'Vellinezhi, Palakkad',
    material: 'Papier-mâché, natural pigments, silk ribbon',
    dimensions: 'Height: 30cm, Width: 22cm',
    featured: false,
    bestseller: false,
  },
  {
    id: '7',
    name: 'Aranmula Valkannadi — Round',
    category: 'mirrors',
    price: 22000,
    image: 'https://m.media-amazon.com/images/I/61C1LpG3t1L.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61C1LpG3t1L.jpg',
      'https://aranmulakannadi.net/cdn/shop/products/Aranmula-kannadi-AMS3122-02_530x@2x.jpg?v=1636995093',
    ],
    description: 'Classic round hand mirror with peacock handle and engraved brass border. The mirror surface is polished metal alloy that never tarnishes. Includes a wooden stand for display.',
    origin: 'Aranmula, Pathanamthitta',
    material: 'Metal alloy, engraved brass',
    dimensions: 'Diameter: 18cm, Handle: 12cm',
    featured: false,
    bestseller: false,
  },
  {
    id: '8',
    name: 'Rosewood Jewelry Box',
    category: 'wood-carvings',
    price: 15500,
    image: 'https://m.media-amazon.com/images/I/51ljspWDF8L._AC_UF1000,1000_QL80_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/51ljspWDF8L._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',
    ],
    description: 'Intricately carved rosewood jewelry box with brass inlay and velvet lining. The lid features a miniature depiction of the Padmanabhapuram Palace gopuram.',
    origin: 'Thiruvananthapuram, Kerala',
    material: 'Rosewood, brass inlay, velvet',
    dimensions: 'Length: 35cm, Width: 25cm, Height: 12cm',
    featured: false,
    bestseller: false,
  },
]

export const featuredProducts = allProducts.filter((p) => p.featured)
export const testimonials = [
  {
    id: '1',
    name: 'Anitha Menon',
    location: 'Bangalore',
    text: 'The Aranmula mirror I purchased is a conversation piece in every room. The authenticity certificate and the care in packaging made this feel like a museum acquisition.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dr. Thomas George',
    location: 'Dubai',
    text: 'I have been collecting Kerala antiques for twenty years. Triune Global is the only source I trust for pieces with genuine provenance and artisan documentation.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya S.',
    location: 'Chennai',
    text: 'The teak wall clock arrived in perfect condition. The brass detailing is even more exquisite in person than in the photographs. Highly recommended.',
    rating: 5,
  },
]

export const getProductById = (id) => allProducts.find((p) => p.id === id)
export const getProductsByCategory = (catId) => allProducts.filter((p) => p.category === catId)
export const getRelatedProducts = (id, catId) => allProducts.filter((p) => p.category === catId && p.id !== id).slice(0, 4)