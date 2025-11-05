import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Galerie',
  description: 'Découvrez notre studio Ritam Yoga Wellness à Casablanca en images. Espaces zen, cours de yoga, ateliers et retraites.',
}

export const dynamic = 'force-dynamic'

export default function Gallery() {
  return (
    <>
      <div className="py-16 bg-gradient-to-br from-japanese-violet/5 to-ritam-yellow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-japanese-violet mb-4">
              Galerie
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plongez dans l'ambiance zen et apaisante de notre studio à Casablanca
            </p>
          </div>
        </div>
      </div>

      <GalleryGrid />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-japanese-violet mb-4">
            Prêt à commencer votre pratique ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Rejoignez-nous pour découvrir le yoga dans un environnement accueillant et bienveillant
          </p>
          <a href="/contact" className="btn-primary">
            Réserver votre première séance
          </a>
        </div>
      </section>
    </>
  )
}

