import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact',
  description: 'Contactez Ritam Yoga Wellness à Casablanca. Formulaire de contact, adresse, téléphone et horaires d\'ouverture.',
}

export default function Contact() {
  return (
    <>
      <div className="py-16 bg-gradient-to-br from-japanese-violet/5 to-ritam-yellow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-japanese-violet mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600">
              Nous sommes là pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-japanese-violet mb-6">
                Informations de Contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-japanese-violet mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-japanese-violet mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      27 Bd Abdellah Ben Yacine<br />
                      Casablanca 20250, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-japanese-violet mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-japanese-violet mb-1">Téléphone</h3>
                    <a href="tel:+212660240201" className="text-gray-700 hover:text-ritam-yellow transition-colors">
                      +212 660 24 02 01
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-japanese-violet mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-japanese-violet mb-1">Horaires</h3>
                    <div className="text-gray-700">
                      <p>Lundi - Vendredi: 9h00 - 20h00</p>
                      <p>Samedi: 10h00 - 18h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-japanese-violet/5 rounded-lg p-6">
                <h3 className="font-semibold text-japanese-violet mb-3">
                  Comment nous rejoindre
                </h3>
                <p className="text-gray-700 text-sm">
                  Notre studio est facilement accessible en voiture ou en transport en commun. 
                  Un parking est disponible à proximité. N'hésitez pas à nous contacter 
                  si vous avez besoin d'indications pour trouver notre adresse.
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-japanese-violet mb-6">
              Localisation
            </h2>
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}

