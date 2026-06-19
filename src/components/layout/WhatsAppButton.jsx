import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '919876543210'
  const message = encodeURIComponent('Hello Triune Global Trading, I would like to enquire about a product from your collection.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  )
}

export default WhatsAppButton