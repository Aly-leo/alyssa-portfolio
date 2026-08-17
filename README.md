<div align="center">

# Portfolio — Alyssa Nkolo

Portfolio personnel présentant mes projets de développement, mon stack technique,
mon engagement avec **WISTEM Cameroon** et ma création de contenu tech.

**Développeuse — mais pas que.**

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SCSS](https://img.shields.io/badge/SCSS-CF649A?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat-square&logo=vercel&logoColor=white)](https://alyssa-portfolio-seven.vercel.app/)

### [Voir la démo en ligne →](https://alyssa-portfolio-seven.vercel.app/)

</div>

---

## Aperçu

![Aperçu du portfolio](docs/screenshot.png)

---

## Fonctionnalités

-  **Splash screen animé** — effet machine à écrire à l'ouverture, faux terminal
-  **Mode clair / sombre** — bascule persistée, thème clair par défaut
-  **Design futuriste minimaliste** — accents violets, navbar en verre dépoli
-  **Responsive complet** — menu hamburger, drawer mobile animé
-  **Transitions morph au scroll** — reveal léger via `IntersectionObserver`
-  **Section engagement WISTEM** — description, galerie et liens communauté
-  **Section création de contenu** — TikTok, LinkedIn, Instagram, AI Hunters

---

## Stack technique

| Domaine | Technologies |
|---|---|
| **Framework** | Angular 21 (standalone components, signals, control flow) |
| **Langage** | TypeScript 5.9 |
| **Styles** | SCSS (design system avec variables CSS, light/dark) |
| **Routing** | Angular Router (lazy loading) |
| **Animation** | CSS transitions + `IntersectionObserver` (directive `[appReveal]`) |
| **Fonts** | Space Grotesk · JetBrains Mono (Google Fonts) |
| **Déploiement** | Vercel |

---

## Lancer le projet en local

### Prérequis

- **Node.js** ≥ 20
- **npm** ≥ 10
- **Angular CLI** (optionnel — les scripts npm suffisent)

### Installation

```bash
git clone https://github.com/Aly-leo/alyssa-portfolio.git
cd alyssa-portfolio
npm install
```

### Démarrer le serveur de développement

```bash
npm start
```

Puis ouvre [http://localhost:4200](http://localhost:4200) dans ton navigateur.
Le rechargement à chaud est actif : chaque modification de code se répercute
immédiatement à l'écran.

### Construire pour la production

```bash
npm run build
```

Les artefacts optimisés sont générés dans `dist/portfolio/browser/`.

### Prévisualiser un build de production en local

```bash
npm run build && npx http-server dist/portfolio/browser -p 8080 -c-1
```

---

##  Structure du projet

```
src/
├── app/
│   ├── data/
│   │   └── projects.ts          # Projets, stack, socials, WISTEM
│   ├── pages/
│   │   ├── welcome/             # Splash screen (typing effect)
│   │   └── home/                # Portfolio principal
│   ├── services/
│   │   └── theme.service.ts     # Gestion light / dark
│   ├── shared/
│   │   ├── social-icon.ts       # Composant icônes SVG
│   │   └── reveal.directive.ts  # Reveal au scroll
│   ├── app.routes.ts
│   └── app.ts
├── styles.scss                  # Design system global (variables + thèmes)
└── index.html
public/
└── img/                         # Photos (hero, projets, WISTEM)
```

---

## Personnaliser

Toutes les données affichées (projets, liens, socials, WISTEM…) sont
centralisées dans **[`src/app/data/projects.ts`](src/app/data/projects.ts)**.

---

## Formulaire de contact (Brevo + Vercel)

Le formulaire de la section Contact envoie **deux emails automatiques** via
[Brevo](https://www.brevo.com/) : une notification pour moi et une confirmation
au visiteur. La clé API vit **uniquement côté serveur**, dans une fonction
serverless Vercel — jamais dans le code Angular.

### Configuration Brevo (une seule fois)

1. Crée un compte gratuit sur [brevo.com](https://www.brevo.com/) et vérifie ton email.
2. Vérifie une **adresse expéditrice** dans _Senders, Domains & Dedicated IPs_ → _Senders_.
3. Génère une **clé API** sur [app.brevo.com/settings/keys/api](https://app.brevo.com/settings/keys/api)
   (elle commence par `xkeysib-…`). **Copie-la immédiatement** — elle ne s'affiche qu'une fois.

### Variables d'environnement

**En production (Vercel)** — projet → _Settings_ → _Environment Variables_ :

| Variable | Valeur |
|---|---|
| `BREVO_API_KEY` | Ta clé `xkeysib-…` |
| `SENDER_EMAIL` | L'expéditeur vérifié dans Brevo |
| `OWNER_EMAIL` | Adresse où tu reçois les notifications |

> ⚠️ Les variables ne sont prises en compte qu'au **prochain déploiement**.
> Fais un `git push` ou clique _Redeploy_ dans Vercel après les avoir ajoutées.

**En local** — copie `.env.local.example` en `.env.local` et remplis les valeurs.
Le fichier `.env.local` est ignoré par Git.

### Tester le formulaire en local

`npm start` (`ng serve`) ne lance **pas** les fonctions `/api`. Pour tester
formulaire + fonction serverless ensemble en local :

```bash
npm install -g vercel
vercel login
vercel dev
```

Suivre les envois : [Brevo](https://app.brevo.com) → _Transactional_ → _Logs / Statistics_.

---

## Contact

- **Email** — [zamoalyssa@gmail.com](mailto:zamoalyssa@gmail.com)
- **LinkedIn** — [Zamo Alyssa](https://www.linkedin.com/in/zamo-alyssa)
- **GitHub** — [@Aly-leo](https://github.com/Aly-leo)
- **TikTok** — [@alyssankolo](https://www.tiktok.com/@alyssankolo)

---

<div align="center">

Fait par **Alyssa Nkolo** — Douala, Cameroun 

</div>
