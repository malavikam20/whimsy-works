import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionDivider from '../components/ui/SectionDivider'
import SEO from '../components/seo/Seo'

const timeline = [
  {
    year: '1998',
    title: 'The Beginning',
    description: 'Triune Global Trading was founded in Kayamkulam, a quiet village in Alappuzha district, with a single mission: to preserve Kerala\'s disappearing craft traditions by connecting artisans directly with appreciative collectors.',
  },
  {
    year: '2005',
    title: 'First International Shipment',
    description: 'We shipped our first container to a museum curator in London, establishing the rigorous documentation and crating standards that define our service today.',
  },
  {
    year: '2012',
    title: 'Artisan Partnership Program',
    description: 'Launched direct partnerships with 40+ master craftspeople across Kerala, ensuring fair wages and the survival of techniques like Aranmula mirror-making and lost-wax bronze casting.',
  },
  {
    year: '2020',
    title: 'Digital Gallery',
    description: 'Opened our online gallery to reach collectors worldwide during the pandemic, bringing the warmth of our showroom to screens across the globe.',
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Over 2,000 pieces placed in homes, hotels, and museums across 35 countries. Each piece still hand-selected by the founder from family workshops and estate sales.',
  },
]

const About = () => {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <section className="relative py-24 bg-espresso overflow-hidden">
        <SEO
        title="Our Story | Triune Global Trading — Kerala Heritage Since 1998"
        description="For over 25 years, Triune Global Trading has connected Kerala's master artisans with discerning collectors worldwide. Discover our journey from Ponmana to the global stage."
        pathname="/about"
      />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626806813572-8c5e1e9b6e0f?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 to-espresso" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-brass text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory mb-6">
              Rooted in Kerala, Revered Worldwide
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                alt="Kerala brass craftsmanship"
                className="rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-teak mb-4">Why We Exist</h2>
              <p className="text-teak/70 leading-relaxed mb-4">
                Every antique in our collection was once part of a Kerala home, a temple ceremony, or an artisan's workshop. When these pieces leave their original context, they risk being lost to time. We exist to ensure they find new homes where they are understood, cherished, and preserved.
              </p>
              <p className="text-teak/70 leading-relaxed">
                We do not mass-produce. We do not source from factories. We travel the backroads of Kerala, from the bronze-casting streets of Swamimalai to the mirror-making workshops of Aranmula, to find pieces with authentic provenance and undeniable soul.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl text-teak mb-4">The Artisan Connection</h2>
              <p className="text-teak/70 leading-relaxed mb-4">
                Our relationships with craftspeople span decades. The bronze Nataraja statues come from the same family workshop we have visited since 2001. The Aranmula mirrors are certified by the Valkannadi Society, and we personally witness the polishing process to confirm authenticity.
              </p>
              <p className="text-teak/70 leading-relaxed">
                When you buy from Triune Global, you are not just purchasing an object. You are supporting a craft tradition, a family livelihood, and a cultural inheritance that stretches back centuries.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://rukminim2.flixcart.com/image/480/640/xif0q/showpiece-figurine/j/j/4/5-60-achm15-antique-decor-items-48-original-imagz2azsmbrbbcc.jpeg?q=90"
                alt="Master artisan at work"
                className="rounded-sm shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-teak/5 border-y border-brass/10">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brass text-sm tracking-[0.2em] uppercase mb-3">Through the Years</p>
            <h2 className="font-serif text-4xl text-teak">Our Journey</h2>
          </AnimatedSection>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row gap-6 md:gap-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="md:w-32 shrink-0">
                  <span className="font-serif text-3xl text-brass">{item.year}</span>
                </div>
                <div className="flex-grow pb-8 border-b border-brass/10">
                  <h3 className="font-serif text-xl text-teak mb-2">{item.title}</h3>
                  <p className="text-teak/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=80"
            alt="Heritage collection"
            className="w-full h-64 md:h-96 object-cover rounded-sm mb-10 shadow-xl"
            loading="lazy"
          />
          <h2 className="font-serif text-3xl text-teak mb-4">Visit the Showroom</h2>
          <p className="text-teak/70 leading-relaxed max-w-2xl mx-auto">
            Our gallery in Kayamkulam is open by appointment. Walk through rooms filled with the scent of teak oil and brass polish, and let us tell you the story behind each piece. We welcome collectors, interior designers, and the simply curious.
          </p>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default About