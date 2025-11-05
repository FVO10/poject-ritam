# Ritam Yoga Wellness - Site Web

Site web professionnel pour le studio de yoga Ritam Yoga Wellness à Casablanca, Maroc.

## 🚀 Technologies

- **Next.js 13.4.12** - Framework React avec App Router
- **React 18.2** - Bibliothèque UI
- **Tailwind CSS 3.3** - Framework CSS utilitaire
- **PostCSS & Autoprefixer** - Traitement CSS
- **Lucide React** - Icônes
- **React Hook Form** - Gestion des formulaires
- **Axios** - Requêtes HTTP

## 📦 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Cloner le projet** (ou télécharger les fichiers)

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine du projet :
```bash
cp env.example .env.local
```

Puis modifiez `.env.local` avec vos valeurs :
```env
NEXT_PUBLIC_FORMSPREE_ID=xldoqgjo
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=VOTRE_CLE_API_GOOGLE_MAPS
```

**Pour obtenir une clé API Google Maps :**
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un projet ou sélectionnez-en un
3. Activez l'API "Maps Embed API"
4. Créez des identifiants (clé API)
5. Copiez la clé dans `.env.local`

4. **Ajouter les images**

Placez vos images dans le dossier `public/images/` :
- Images hero (hero-1.jpg, hero-2.jpg, hero-3.jpg)
- Images galerie (gallery-1.jpg à gallery-9.jpg)
- Images à propos (about-main.jpg, about-preview.jpg)

Voir `public/images/README.md` pour plus de détails.

5. **Ajouter le favicon**

Remplacez `public/favicon.ico` par votre favicon.

## 🛠️ Scripts NPM

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Démarrer en mode production
npm start

# Linter (si configuré)
npm run lint
```

Le site sera accessible sur `http://localhost:3000`

## 📁 Structure du Projet

```
ritam-yoga-wellness/
├── app/                    # Pages Next.js (App Router)
│   ├── page.js            # Page d'accueil
│   ├── a-propos/          # Page À propos
│   ├── services/          # Page Services
│   ├── horaires/          # Page Horaires
│   ├── galerie/           # Page Galerie
│   ├── contact/           # Page Contact
│   ├── layout.js          # Layout principal
│   ├── globals.css        # Styles globaux
│   └── sitemap.js         # Sitemap dynamique
├── components/            # Composants React réutilisables
│   ├── Layout.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── WhatsAppButton.js
│   ├── HeroSlider.js
│   ├── ServicesGrid.js
│   ├── ScheduleTable.js
│   ├── GalleryGrid.js
│   ├── ContactForm.js
│   └── Map.js
├── public/                # Fichiers statiques
│   ├── images/           # Images du site
│   ├── favicon.ico       # Favicon
│   └── robots.txt        # Robots.txt
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── .env.local.example
```

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel

1. **Poussez votre code sur GitHub**

2. **Connectez votre projet à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js

3. **Configurez les variables d'environnement**
   - Dans les paramètres du projet Vercel
   - Section "Environment Variables"
   - Ajoutez :
     - `NEXT_PUBLIC_FORMSPREE_ID` = `xldoqgjo`
     - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = votre clé API

4. **Déployez**
   - Vercel déploiera automatiquement à chaque push
   - Vous obtiendrez une URL de type `votre-projet.vercel.app`

### Méthode 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

## 📝 Configuration Formspree

Le formulaire de contact utilise Formspree avec l'ID `xldoqgjo`.

**Pour utiliser votre propre formulaire :**
1. Créez un compte sur [Formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Copiez l'ID du formulaire
4. Mettez à jour `components/ContactForm.js` ligne 18 :
```javascript
const response = await fetch('https://formspree.io/f/VOTRE_ID', {
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :
- **Japanese Violet** : `#5B3256`
- **Ritam Yellow** : `#FFD700`

### Styles

Les styles globaux sont dans `app/globals.css`. Les classes utilitaires Tailwind sont utilisées dans tous les composants.

## 📱 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ SEO optimisé (meta tags, structured data)
- ✅ Formulaire de contact (Formspree)
- ✅ Intégration Google Maps
- ✅ Bouton WhatsApp flottant
- ✅ Slider hero automatique
- ✅ Galerie d'images responsive
- ✅ Animations et transitions fluides
- ✅ Accessibilité (ARIA labels, navigation clavier)

## 🔍 SEO

- Meta descriptions optimisées par page
- Open Graph tags pour les réseaux sociaux
- Structured data (Schema.org LocalBusiness)
- Sitemap.xml dynamique
- Robots.txt configuré
- URLs courtes et descriptives
- Alt text pour toutes les images

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

## 📄 Licence

Tous droits réservés - Ritam Yoga Wellness © 2024

