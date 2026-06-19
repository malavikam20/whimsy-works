import SEO from '../components/seo/Seo'
import Hero from '../components/home/Hero'
import StoryTeaser from '../components/home/StoryTeaser'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import InstagramGallery from '../components/home/InstagramGallery'
import Newsletter from '../components/home/Newsletter'
import SectionDivider from '../components/ui/SectionDivider'

const Home = () => {
  return (
    <div>
      <SEO
        title="Triune Global Trading | Antique & Heritage Crafts from Kerala"
        description="Curators of rare antique and heritage crafts from Kerala. Aranmula mirrors, teak clocks, brass sculptures, and traditional wood carvings with worldwide shipping."
        pathname="/"
      />
      <Hero />
      <StoryTeaser />
      <SectionDivider />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </div>
  )
}

export default Home