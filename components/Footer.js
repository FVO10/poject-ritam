import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-japanese-violet text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Rit<span className="text-ritam-yellow">a</span>m Yoga Wellness
            </h3>
            <p className="text-gray-300 text-sm">
              Votre espace de bien-être zen et minimaliste au cœur de Casablanca.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-ritam-yellow transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-ritam-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/horaires" className="text-gray-300 hover:text-ritam-yellow transition-colors">
                  Horaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-ritam-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>27 Bd Abdellah Ben Yacine<br />Casablanca 20250, Maroc</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+212660240201" className="hover:text-ritam-yellow transition-colors">
                  +212 660 24 02 01
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div>Lun-Ven: 9h-20h</div>
                  <div>Sam: 10h-18h</div>
                  <div>Dim: Fermé</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ritam Yoga Wellness. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

