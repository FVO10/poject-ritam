import ServicesGrid from '@/components/ServicesGrid'
import ScheduleTable from '@/components/ScheduleTable'

export const metadata = {
  title: 'Services',
  description: 'Découvrez nos services de yoga à Casablanca : cours collectifs, cours privés, ateliers mensuels et retraites week-end. Tarifs en MAD.',
}

export default function Services() {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-japanese-violet mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins de bien-être
            </p>
          </div>
        </div>
      </div>

      <ServicesGrid />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-japanese-violet/10 to-ritam-yellow/10 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-japanese-violet mb-6 text-center">
              Informations Pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-japanese-violet mb-4">
                  Réservation
                </h3>
                <p className="text-gray-700 mb-4">
                  Pour réserver un cours ou un atelier, vous pouvez nous contacter via le 
                  formulaire de contact, par téléphone ou WhatsApp. Nous vous recommandons 
                  de réserver à l'avance, surtout pour les cours collectifs populaires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-japanese-violet mb-4">
                  Matériel
                </h3>
                <p className="text-gray-700 mb-4">
                  Nous fournissons tous les équipements nécessaires (tapis, blocs, sangles, 
                  couvertures). Vous pouvez également apporter votre propre matériel si 
                  vous le souhaitez. Portez des vêtements confortables adaptés au mouvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleTable />
    </>
  )
}

