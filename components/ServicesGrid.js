import { Users, User, Calendar, Mountain } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cours collectifs',
      price: '120 MAD',
      period: 'par session',
      description: 'Cours de yoga en groupe pour tous les niveaux. Ambiance conviviale et bienveillante.',
      bookLink: '/contact',
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Cours privés',
      price: '250 MAD',
      period: 'par session',
      description: 'Séance personnalisée adaptée à vos besoins et objectifs spécifiques.',
      bookLink: '/contact',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Ateliers mensuels',
      price: '400 MAD',
      period: '2 heures',
      description: 'Ateliers thématiques approfondis pour explorer des aspects spécifiques du yoga.',
      bookLink: '/contact',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Retraites week-end',
      price: 'À partir de 900 MAD',
      period: 'week-end',
      description: 'Immersion complète dans le yoga et la méditation lors de retraites transformatrices.',
      bookLink: '/contact',
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-japanese-violet mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services pour votre bien-être
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-japanese-violet mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-japanese-violet mb-2">
                {service.title}
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-ritam-yellow">
                  {service.price}
                </span>
                <span className="text-gray-600 text-sm ml-2">{service.period}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              <a
                href={service.bookLink}
                className="btn-primary w-full text-center block"
              >
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

