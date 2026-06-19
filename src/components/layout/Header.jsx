import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'bg-teak/95 backdrop-blur-md shadow-lg border-b border-brass/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide hover:text-brass transition-colors duration-300"
          >
            Triune Global
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-lg font-medium tracking-wider uppercase py-3 ${location.pathname === link.to
                    ? 'text-brass'
                    : 'text-ivory/80 hover:text-brass'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brass hover:text-brass-light transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Enquire</span>
            </a>
          </nav>

          <button
            className="md:hidden text-ivory p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-teak/95 backdrop-blur-md border-t border-brass/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-lg font-medium tracking-wider uppercase ${
                  location.pathname === link.to
                    ? 'text-brass'
                    : 'text-ivory/80 hover:text-brass'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brass pt-2"
            >
              <Phone size={18} />
              <span className="font-medium">WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header