import Image from 'next/image'

export const metadata = {
  title: 'À propos',
  description: 'Découvrez Ritam Yoga Wellness, notre histoire, notre philosophie et notre approche du yoga à Casablanca.',
}

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-japanese-violet mb-4">
            À propos de Ritam Yoga Wellness
          </h1>
          <p className="text-xl text-gray-600">
            Votre espace de bien-être zen au cœur de Casablanca
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 bg-gray-200">
            <Image
              src="/images/about-main.jpg"
              alt="Studio Ritam Yoga Wellness - espace de pratique"
              fill
              className="object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                if (!parent.querySelector('.placeholder')) {
                  const placeholder = document.createElement('div')
                  placeholder.className = 'placeholder w-full h-full flex items-center justify-center text-gray-400 bg-gray-200'
                  placeholder.innerHTML = '<p>Image à ajouter</p>'
                  parent.appendChild(placeholder)
                }
              }}
            />
          </div>

          <h2 className="text-2xl font-semibold text-japanese-violet mb-4">
            Notre Histoire
          </h2>
          <p className="text-gray-700 mb-6">
            Ritam Yoga Wellness a été créé avec la vision de créer un espace de bien-être 
            authentique et accessible à tous. Situé dans le quartier dynamique de Casablanca, 
            notre studio offre un refuge de tranquillité au cœur de la ville.
          </p>

          <h2 className="text-2xl font-semibold text-japanese-violet mb-4">
            Notre Philosophie
          </h2>
          <p className="text-gray-700 mb-6">
            Nous croyons que le yoga est une pratique accessible à tous, quel que soit votre 
            niveau ou votre âge. Notre approche est basée sur la bienveillance, le respect 
            de votre corps et l'écoute de vos besoins. Chaque séance est conçue pour vous 
            permettre de progresser à votre rythme, dans un environnement sécurisé et accueillant.
          </p>

          <h2 className="text-2xl font-semibold text-japanese-violet mb-4">
            Notre Espace
          </h2>
          <p className="text-gray-700 mb-6">
            Notre studio a été pensé pour créer une atmosphère zen et minimaliste. 
            Les espaces sont aérés, la lumière naturelle est privilégiée, et chaque détail 
            a été choisi pour favoriser votre bien-être et votre pratique du yoga.
          </p>

          <h2 className="text-2xl font-semibold text-japanese-violet mb-4">
            Pourquoi Choisir Ritam Yoga Wellness ?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Des enseignants certifiés et expérimentés</li>
            <li>Des cours adaptés à tous les niveaux</li>
            <li>Un environnement zen et accueillant</li>
            <li>Une approche personnalisée et bienveillante</li>
            <li>Des tarifs transparents et accessibles</li>
            <li>Un emplacement facile d'accès à Casablanca</li>
          </ul>

          <div className="bg-japanese-violet/5 rounded-lg p-6 mt-8">
            <p className="text-gray-700 italic">
              "Le yoga est un voyage vers soi, une exploration de votre potentiel intérieur. 
              Chez Ritam Yoga Wellness, nous sommes là pour vous accompagner dans cette belle aventure."
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="btn-primary">
            Rejoignez-nous
          </a>
        </div>
      </div>
    </div>
  )
}

