# Barber Nationale — site vitrine

Site vitrine statique du barber shop **Barber Nationale**, 96 rue Nationale, 10200 Bar-sur-Aube.
HTML, CSS et JavaScript simples : pas de framework, pas d'étape de compilation.

## Pages
| Fichier | Contenu |
|---|---|
| `index.html` | Accueil |
| `prestations.html` | Prestations et tarifs |
| `barbiers.html` | L'équipe |
| `galerie.html` | Photos du salon et d'Halloween |
| `contact.html` | Adresse, téléphone, horaires, itinéraire |
| `sans-rendez-vous.html` | Fonctionnement sans rendez-vous, horaires du jour, appel |

## Dossiers
- `assets/style.css` : tout le design (couleurs, typographies, responsive).
- `assets/main.js` : menu mobile, année du pied de page, mise en avant du jour d'ouverture.
- `images/` : photos du salon optimisées pour le web. `partage.jpg` sert d'aperçu quand on partage le lien sur les réseaux.
- `vercel.json` : URLs propres sur Vercel (`/prestations` au lieu de `/prestations.html`).

## Tester en local
Double-cliquer sur `index.html`, ou lancer `python -m http.server 8000` dans ce dossier puis ouvrir http://localhost:8000.

## Mettre en ligne (GitHub + Vercel)
1. Sur github.com, créer un nouveau dépôt (par exemple `barber-nationale`).
2. Dans le dépôt, cliquer sur **Add file › Upload files**, glisser **le contenu** de ce dossier (pas le dossier lui-même), puis **Commit changes**. `index.html` doit être à la racine du dépôt.
3. Sur vercel.com, cliquer sur **Add New › Project**, importer le dépôt GitHub, laisser **Framework Preset : Other** sans commande de build, puis **Deploy**.
4. Pour un nom de domaine : dans le projet Vercel, **Settings › Domains**, ajouter le domaine et suivre les réglages DNS indiqués.

Chaque modification envoyée sur GitHub est remise en ligne automatiquement par Vercel.

## Modifier les contenus
- **Tarifs** : `prestations.html`, dans les lignes `<span class="price">`.
- **Horaires** : dans `contact.html`, `sans-rendez-vous.html`, le pied de page de chaque page, le bloc `application/ld+json` (référencement Google) et le tableau des horaires de `assets/main.js`.
- **Photos** : remplacer un fichier dans `images/` en gardant le même nom.

## Avant la mise en ligne définitive
- Ajouter une page **mentions légales** (raison sociale, SIRET, adresse, hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA).
- Avoir l'accord des personnes visibles sur les photos.
- Ajouter les liens Instagram / Facebook du salon.
- Après avoir choisi le domaine, remplacer `images/partage.jpg` dans les balises `og:image` par l'adresse complète (ex. `https://www.barbernationale.fr/images/partage.jpg`).
