# Guide de Configuration Rapide

## 🚀 Installation Rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` :
```bash
# Copiez env.example vers .env.local
cp env.example .env.local
```

Puis éditez `.env.local` :
```env
NEXT_PUBLIC_FORMSPREE_ID=xldoqgjo
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=VOTRE_CLE_API
```

**⚠️ Important :** Pour obtenir une clé API Google Maps :
1. Aller sur https://console.cloud.google.com/
2. Créer un projet
3. Activer "Maps Embed API"
4. Créer une clé API
5. Copier la clé dans `.env.local`

### 3. Ajouter les images

Placez vos images dans `public/images/` :
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (1920x1080px)
- `gallery-1.jpg` à `gallery-9.jpg` (1200x1200px)
- `about-main.jpg`, `about-preview.jpg`

Voir `public/images/README.md` pour plus de détails.

### 4. Ajouter le favicon

Remplacez `public/favicon.ico` par votre favicon.

### 5. Lancer le projet

```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📦 Déploiement sur Vercel

### Option 1 : Via GitHub

1. Poussez votre code sur GitHub
2. Allez sur https://vercel.com
3. Importez votre repository
4. Ajoutez les variables d'environnement dans les paramètres Vercel
5. Déployez !

### Option 2 : Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

## ✅ Checklist

- [ ] Dépendances installées (`npm install`)
- [ ] Fichier `.env.local` créé et configuré
- [ ] Clé API Google Maps ajoutée
- [ ] Images ajoutées dans `public/images/`
- [ ] Favicon remplacé
- [ ] Test local réussi (`npm run dev`)
- [ ] Déploiement sur Vercel effectué

## 🆘 Problèmes courants

### Les images ne s'affichent pas
- Vérifiez que les images sont bien dans `public/images/`
- Vérifiez les noms de fichiers (respectez la casse)
- Les placeholders s'afficheront si les images sont manquantes

### La carte Google Maps ne s'affiche pas
- Vérifiez que `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` est bien configuré
- Vérifiez que l'API "Maps Embed API" est activée dans Google Cloud Console
- Le composant Map utilisera un fallback si la clé n'est pas configurée

### Erreur lors du build
- Vérifiez que toutes les dépendances sont installées
- Vérifiez la version de Node.js (18+ requis)
- Supprimez `.next` et réinstallez : `rm -rf .next node_modules && npm install`

