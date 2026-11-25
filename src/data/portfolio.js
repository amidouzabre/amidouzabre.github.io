export const profile = {
  name: 'Amidou Zabre',
  role: 'Développeur Full-Stack Web & Mobile',
  tagline:
    'Je conçois et déploie des plateformes web robustes, des applications mobiles multiplateformes et des outils de gestion sur mesure.',
  bio: [
    "Développeur indépendant et fondateur de l'agence digitale Sioori, j'accompagne les entreprises, associations et porteurs de projets dans la création de solutions numériques complètes — de l'architecture back-end jusqu'au déploiement en production.",
    "Formé aux standards modernes du développement web (certifications Harvard Online / edX), je combine l'écosystème Laravel + Vue.js + Inertia pour le web et Flutter pour le mobile afin de livrer des produits rapides, maintenables et orientés résultats.",
  ],
  location: 'Divo, Côte d’Ivoire',
  availability: 'Disponible pour missions & projets sur mesure',
  github: 'https://github.com/amidouzabre',
  agencyUrl: 'https://www.kwiizoo.com', // Remplacez par le domaine final de Sioori dès sa mise en ligne
  email: 'contact@sioori.com',
}

export const stack = [
  {
    category: 'Back-End & Architecture',
    items: ['PHP 8+', 'Laravel', 'Inertia.js', 'REST APIs', 'MySQL / MariaDB', 'SSR & Optimisation'],
  },
  {
    category: 'Front-End & UI',
    items: ['Vue.js 3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive Design'],
  },
  {
    category: 'Développement Mobile',
    items: ['Flutter', 'Dart', 'Google Play Console', 'Synchronisation API', 'Architecture Offline-First'],
  },
  {
    category: 'DevOps, Outils & IA',
    items: ['Git & GitHub Actions', 'Linux / Arch / Hyprland', 'cPanel / VPS', 'Workflows Agents IA', 'LaTeX / KaTeX'],
  },
]

export const projects = [
  {
    title: 'Kwiizoo — Plateforme Éducative Web & Mobile',
    badge: 'Produit Phare • Web & Android',
    description:
      "Écosystème complet d'apprentissage interactif et de révision aligné sur les programmes scolaires (BEPC & Baccalauréat), incluant fiches de synthèse, quiz progressifs, suivi des performances et rendu mathématique LaTeX.",
    highlights: [
      'Architecture unifiée Laravel + Inertia.js + Vue.js pour le web',
      'Application mobile native Android développée avec Flutter et publiée sur Google Play',
      'Système de contenus pédagogiques structurés et monétisation intégrée',
    ],
    tech: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'Flutter', 'MySQL'],
    links: [
      { label: 'Visiter le site', url: 'https://www.kwiizoo.com', primary: true },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.sioori.kwiizoo',
        primary: false,
      },
    ],
  },
  {
    title: 'Plateformes de Gestion Associative & Métier',
    badge: 'Solutions Sur Mesure',
    description:
      "Conception de logiciels web de gestion dédiés aux associations et PME : suivi des adhésions, cotisations, fonds d'assistance, opérations de change multi-devises et tableaux de bord financiers.",
    highlights: [
      'Automatisation des notifications multi-canaux (Email, SMS, WhatsApp)',
      'Calculs financiers temps réel, suivi des soldes et historiques auditables',
      'Interfaces d’administration ergonomiques pensées pour les équipes terrain',
    ],
    tech: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'API Messaging'],
    links: [],
  },
  {
    title: 'DTF-Halftone-Maker',
    badge: 'Open-Source • GitHub',
    description:
      "Outil open-source dédié au traitement graphique et à la génération de trames demi-teintes (halftones) optimisées pour l'impression textile DTF (Direct-To-Film) et la sublimation.",
    highlights: [
      'Traitement d’image précis pour la préparation de visuels prêts à imprimer',
      'Code source ouvert et documenté sur GitHub',
    ],
    tech: ['Traitement d’image', 'Open-Source', 'GitHub'],
    links: [
      {
        label: 'Code source GitHub',
        url: 'https://github.com/amidouzabre/DTF-Halftone-Maker',
        primary: false,
      },
    ],
  },
]