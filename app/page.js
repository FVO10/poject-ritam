import HeroSlider from '@/components/HeroSlider'
import ServicesGrid from '@/components/ServicesGrid'
import Image from 'next/image'

export const metadata = {
  title: 'Accueil',
  description: 'Bienvenue à Ritam Yoga Wellness, votre studio de yoga zen et minimaliste à Casablanca. Cours collectifs, cours privés, ateliers et retraites.',
}

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesGrid />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-japanese-violet mb-6">
                Votre espace de bien-être à Casablanca
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Ritam Yoga Wellness est un studio de yoga dédié à votre épanouissement personnel. 
                Dans un cadre zen et minimaliste, nous vous accompagnons dans votre pratique, 
                que vous soyez débutant ou pratiquant confirmé.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Notre approche bienveillante et professionnelle vous permet de découvrir 
                les bienfaits du yoga dans un environnement apaisant et accueillant.
              </p>
              <a href="/a-propos" className="btn-primary inline-block">
                En savoir plus
              </a>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Studio Ritam Yoga Wellness - espace zen et minimaliste"
                fill
                className="object-cover image-hover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

