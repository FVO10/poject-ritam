'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '212660240201'
  const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur vos cours de yoga.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}

