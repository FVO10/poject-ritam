import ScheduleTable from '@/components/ScheduleTable'

export const metadata = {
  title: 'Horaires',
  description: 'Consultez les horaires d\'ouverture de Ritam Yoga Wellness à Casablanca. Lun-Ven: 9h-20h, Sam: 10h-18h, Dim: Fermé.',
}

export default function Schedule() {
  return (
    <>
      <div className="py-16 bg-gradient-to-br from-japanese-violet/5 to-ritam-yellow/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-japanese-violet mb-4">
              Nos Horaires
            </h1>
            <p className="text-xl text-gray-600">
              Retrouvez-nous aux heures suivantes pour vos séances de yoga
            </p>
          </div>
        </div>
      </div>

      <ScheduleTable />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-japanese-violet mb-6">
              Planification des Cours
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les cours collectifs sont programmés à différents moments de la journée 
                pour s'adapter à vos disponibilités. Consultez notre planning mensuel 
                ou contactez-nous pour connaître les créneaux disponibles.
              </p>
              <p>
                Les cours privés peuvent être planifiés selon vos préférences, 
                dans la limite de nos horaires d'ouverture.
              </p>
              <p>
                Les ateliers mensuels sont généralement organisés le week-end, 
                et les retraites sont planifiées à l'avance avec des dates précises.
              </p>
            </div>
            <div className="mt-8">
              <a href="/contact" className="btn-primary">
                Contactez-nous pour plus d'informations
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

