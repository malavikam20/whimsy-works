import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-teak border-t border-brass/20 text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-brass mb-6">Triune Global Trading</h3>
            <p className="text-ivory/70 leading-relaxed mb-6">
              Curators of fine antique and heritage crafts from Kerala. Each piece carries a story, a lineage, and a soul.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-brass transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-brass transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-brass transition-colors" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="8" x2="12" y2="21"></line><path d="M5 12h14"></path><path d="M17 8l-4-4-4 4"></path><path d="M9 21l-4-4 4-4"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-brass mb-6">Visit Us</h4>
            <ul className="space-y-4 text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brass mt-1 shrink-0" />
                <span>123 Heritage Lane, Kayamkulam, Alappuzha, Kerala, India — 690502</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brass shrink-0" />
                <span>+91 9847040739</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brass shrink-0" />
                <span>hello@triuneglobal.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-brass mt-1 shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: By Appointment</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-brass mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-ivory/70 hover:text-brass transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-ivory/70 hover:text-brass transition-colors">Shop Collection</Link></li>
              <li><Link to="/about" className="text-ivory/70 hover:text-brass transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-ivory/70 hover:text-brass transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6 aspect-video rounded-lg bg-espresso/50 border border-brass/10 overflow-hidden">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.123456789!2d76.6!3d8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOeKwNTgnMDAuMCJOIDc2wrAzNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.1) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brass/10 text-center text-ivory/40 text-sm">
          <p>© {new Date().getFullYear()} Triune Global Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer