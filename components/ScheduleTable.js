import { Clock } from 'lucide-react'

export default function ScheduleTable() {
  const schedule = [
    { day: 'Lundi', hours: '9h00 - 20h00', closed: false },
    { day: 'Mardi', hours: '9h00 - 20h00', closed: false },
    { day: 'Mercredi', hours: '9h00 - 20h00', closed: false },
    { day: 'Jeudi', hours: '9h00 - 20h00', closed: false },
    { day: 'Vendredi', hours: '9h00 - 20h00', closed: false },
    { day: 'Samedi', hours: '10h00 - 18h00', closed: false },
    { day: 'Dimanche', hours: 'Fermé', closed: true },
  ]

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-japanese-violet/10 rounded-full mb-4">
            <Clock className="w-8 h-8 text-japanese-violet" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-japanese-violet mb-4">
            Nos Horaires
          </h2>
          <p className="text-lg text-gray-600">
            Retrouvez-nous aux heures suivantes pour vos séances de yoga
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-japanese-violet text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Jour</th>
                <th className="px-6 py-4 text-left font-semibold">Horaires</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-colors ${
                    item.closed ? 'text-gray-400' : ''
                  }`}
                >
                  <td className="px-6 py-4 font-medium">{item.day}</td>
                  <td className="px-6 py-4">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Pour réserver un créneau ou obtenir plus d'informations, contactez-nous
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  )
}

