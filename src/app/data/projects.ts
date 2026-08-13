export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;           
  imageAlt?: string;
  imageGradient?: string;   
  languages: string[];
  link: string;
  linkLabel: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'linkhub',
    title: 'LinkHub — alyssa-nkolo',
    subtitle: 'Site personnel · Next.js',
    description:
      "Ma page centrale qui regroupe tous mes liens : formations, communauté AI Hunters, WISTEM, boutique et réseaux sociaux. Design épuré, mobile-first, déployé sur Vercel.",

    image: 'img/linkhub.webp',
    imageAlt: 'Aperçu du LinkHub',
    imageGradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',

    languages: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://alyssa-nkolo.vercel.app/',
    linkLabel: 'Visiter le site',
  },
  {
    id: 'trashgo',
    title: 'TrashGo',
    subtitle: 'Application de gestion des déchets',
    description:
      "Application smart pour la collecte, le tri et le suivi des déchets urbains. Cahier des charges complet, architecture front-end pensée pour l'impact environnemental et l'usage terrain au Cameroun.",

    image: 'img/trashgo.webp',
    imageAlt: 'Aperçu TrashGo',
    imageGradient: 'linear-gradient(135deg, #10b981, #059669)',

    languages: ['Angular', 'TypeScript', 'SCSS', 'UX/UI'],
    link: '#',
    linkLabel: 'Bientôt en ligne',
  },
  {
    id: 'delices-douala',
    title: 'Les Délices de Douala',
    subtitle: 'Site vitrine restaurant test',
    description:
      "Vitrine complète pour un restaurant camerounais : menu dynamique, commandes, panier, consommation d'API REST via services Angular. Navbar en verre dépoli, design chaleureux.",

    
    image: 'img/delices-douala.webp',
    imageAlt: 'Aperçu Délices de Douala',
    imageGradient: 'linear-gradient(135deg, #f97316, #ea580c)',

    languages: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    link: 'https://delices-de-douala-tp.vercel.app/',
    linkLabel: 'Projet formation',
  },
  {
    id: 'eventdrink',
    title: 'EventDrink',
    subtitle: 'Projet de groupe · Angular',
    description:
      "Application web qui centralise la gestion des boissons pour les évènements (mariages, anniversaires, deuils) : localisation des dépôts, commande, paiement et suivi de livraison — pensée pour le marché africain.",

    // 👇 IMAGE À AJOUTER ICI — capture EventDrink (ex : 'img/eventdrink.png')
    image: undefined,
    imageAlt: 'Aperçu EventDrink',
    imageGradient: 'linear-gradient(135deg, #6366f1, #4338ca)',

    languages: ['Angular', 'TypeScript', 'SCSS', 'API REST', 'Géolocalisation'],
    link: '#',
    linkLabel: 'Voir le projet',
  },
];

export interface StackItem {
  name: string;
  category: string;
  icon: string;
  color: string;
}

export const STACK: StackItem[] = [
  { name: 'Angular', category: 'Framework front', icon: 'A', color: '#dd0031' },
  { name: 'TypeScript', category: 'Langage', icon: 'TS', color: '#3178c6' },
  { name: 'JavaScript', category: 'Langage', icon: 'JS', color: '#f7df1e' },
  { name: 'PHP', category: 'Langage back', icon: 'PHP', color: '#777bb4' },
  { name: 'Java', category: 'Langage back', icon: 'JV', color: '#f89820' },
  { name: 'Spring Boot', category: 'Framework Java', icon: 'SB', color: '#6db33f' },
  { name: 'Python', category: 'Langage', icon: 'PY', color: '#3776ab' },
  { name: 'Flask', category: 'Framework Python', icon: 'FL', color: '#000000' },
  { name: 'Django', category: 'Framework Python', icon: 'DJ', color: '#092e20' },
  { name: 'C', category: 'Langage système', icon: 'C', color: '#a8b9cc' },
  { name: 'C++', category: 'Langage système', icon: 'C++', color: '#00599c' },
  { name: 'C#', category: 'Langage', icon: 'C#', color: '#68217a' },
  { name: 'HTML / CSS', category: 'Base web', icon: 'H5', color: '#e34f26' },
  { name: 'SCSS / Sass', category: 'Style', icon: 'S', color: '#cf649a' },
  { name: 'MySQL', category: 'Base de données', icon: 'DB', color: '#4479a1' },
  { name: 'Git / GitHub', category: 'Versioning', icon: 'Git', color: '#f05032' },
];

export interface Social {
  name: string;
  handle: string;
  url: string;
  icon: string;
  color: string;
}

export const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    handle: 'Zamo Alyssa',
    url: 'https://www.linkedin.com/in/zamo-alyssa',
    icon: 'linkedin',
    color: '#0a66c2',
  },
  {
    name: 'GitHub',
    handle: '@Aly-leo',
    url: 'https://github.com/Aly-leo',
    icon: 'github',
    color: '#181717',
  },
  {
    name: 'TikTok',
    handle: '@alyssankolo',
    url: 'https://www.tiktok.com/@alyssankolo',
    icon: 'tiktok',
    color: '#010101',
  },
];

export interface ContentPlatform {
  name: string;
  handle: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

export const CONTENT_PLATFORMS: ContentPlatform[] = [
  {
    name: 'TikTok',
    handle: '@alyssankolo',
    description: "Tutoriels tech, astuces dev, coulisses de mes projets et découvertes IA.",
    url: 'https://www.tiktok.com/@alyssankolo',
    icon: 'tiktok',
    color: '#010101',
  },
  {
    name: 'LinkedIn',
    handle: 'Zamo Alyssa',
    description: "Réflexions carrière, retours d'expérience et actualité tech de l'écosystème francophone.",
    url: 'https://www.linkedin.com/in/zamo-alyssa',
    icon: 'linkedin',
    color: '#0a66c2',
  },
  {
    name: 'Instagram',
    handle: '@queeny_aly',
    description: "Format visuel : behind the scenes, vie de dev et communauté tech.",
    url: 'https://www.instagram.com/queeny_aly',
    icon: 'instagram',
    color: '#e4405f',
  },
  {
    name: 'AI Hunters',
    handle: 'Communauté WhatsApp',
    description: "La communauté francophone que je co-anime autour de l'IA, du dev et des opportunités tech.",
    url: 'https://chat.whatsapp.com/HLjHFLC92sR1fJSen5prRz',
    icon: 'whatsapp',
    color: '#25d366',
  },
];

export interface WistemPhoto {
  alt: string;
  image?: string;      
  gradient: string;    
}

export const WISTEM = {
  name: 'WISTEM Cameroon',
  tagline: 'Women in STEM · Cameroun',
  description:
    "WISTEM Cameroon est une communauté engagée à promouvoir la présence des femmes dans les sciences, la technologie, l'ingénierie et les mathématiques. Je m'y implique activement pour accompagner les jeunes filles à travers des ateliers, du mentorat et de la visibilité — parce qu'une tech inclusive commence par l'exemple.",
  values: ['Mentorat', 'Ateliers', 'Networking', 'Rôles modèles'],

  
  photos: [
    {
      alt: 'Atelier WISTEM',
      image: 'img/wistem/atelier.jpeg',
      gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    },
    {
      alt: 'Rencontre communauté',
      image: 'img/wistem/rencontre.jpeg',
      gradient: 'linear-gradient(135deg, #f472b6, #db2777)',
    },
    {
      alt: 'Session mentoring',
      image: 'img/wistem/mentoring.jpeg',
      gradient: 'linear-gradient(135deg, #60a5fa, #2563eb)',
    },
    {
      alt: 'Événement tech',
      image: 'img/wistem/tech.jpeg',
      gradient: 'linear-gradient(135deg, #34d399, #059669)',
    },
  ] as WistemPhoto[],

  socials: [
    { name: 'Linktree', url: 'https://linktr.ee/WISTEM_Cameroon', icon: 'link' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/wistem-cameroon', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/wistem_cmr/', icon: 'instagram' },
  ],
};


