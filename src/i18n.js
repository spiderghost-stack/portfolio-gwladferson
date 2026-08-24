import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "nav": {
        "about": "À PROPOS",
        "skills": "COMPÉTENCES",
        "projects": "DESIGN",
        "science": "SCIENCE",
        "dev": "DÉVELOPPEMENT",
        "contact": "CONTACT"
      },
      "hero": {
        "init": "INITIALISATION DU PROFIL...",
        "typewriter": [
          "Étudiant en Physique Fondamentale",
          "Développeur Web Full Stack",
          "Graphiste Designer Créatif"
        ],
        "desc": "Étudiant en Physique Fondamentale · Graphiste Designer · Développeur Web. À l'intersection de la science, de l'art et du code, je construis des expériences qui font réfléchir.",
        "btnProjects": "VOIR MES PROJETS",
        "btnContact": "CONTACT",
        "statProjects": "PROJETS",
        "statDomains": "DOMAINES",
        "statYears": "ANNÉES XP"
      },
      "about": {
        "title": "À propos de",
        "titleHighlight": "moi",
        "tag": "WHO AM I",
        "text1": "Je suis Nouésèwa Roesnay Gwladferson Scharaf-Dine ,scientifique curieux, créatif passionné et développeur rigoureux. Ces trois univers se nourrissent mutuellement.",
        "text2": "La rigueur de la Physique Fondamentale, la créativité du design graphique et la logique du développement web : je les combine pour créer des expériences uniques à l'intersection de la science, de l'art et du code.",
        "text3": "Attiré par l'innovation, je travaille sur des simulations interactives, des interfaces futuristes et des systèmes intelligents. Pour moi, la technologie doit transmettre une émotion et raconter une vision.",
        "cvView": "Voir mon CV",
        "cvDownload": "Télécharger le CV",
        "termName": "Nouésèwa WENON",
        "termStatus": "Licence en Physique Fondamentale",
        "termCity": "Abomey-Calavi, Bénin",
        "termWhoami": "Le savant créatif",
        "termMotto": "Me tratas bien, yo te trato aún mejor."
      },
      "skills": {
        "tag": "CAPABILITIES",
        "title": "Mes",
        "titleHighlight": "compétences",
        "science": "PHYSIQUE FONDAMENTALE",
        "design": "DESIGN GRAPHIQUE",
        "dev": "DÉVELOPPEMENT",
        "s1": "Modélisation mathématique",
        "s2": "Analyse de données expérimentales",
        "s3": "Résolution de problèmes complexes",
        "s4": "Pratique de laboratoire",
        "uiux": "UI/UX",
        "illustration": "Illustration",
        "frontend": "Frontend",
        "backend": "Backend"
      },
      "projects": {
        "tag": "MY WORK",
        "title": "Mes",
        "titleHighlight": "projets",
        "subtitle": "Album créatif",
        "all": "Tous",
        "seeMore": "Voir plus",
        "items": {
          "1": {
            "cat": "Affiche Publicitaire",
            "title": "Carte de visite",
            "desc": "Affiche avec un contraste visuel fort, mettant en valeur la puissance et la détermination.",
            "longDesc": "Ce projet d'affiche publicitaire a été conçu pour créer un impact visuel immédiat. Le design combine une typographie audacieuse avec des couleurs vives et contrastées pour capturer l'attention du spectateur."
          },
          "2": {
            "cat": "Affiche Publicitaire",
            "title": "Vente",
            "desc": "Affiche dynamique pour style épuré, moderne, orienté business.",
            "longDesc": "Cette affiche a été réalisée dans un style commercial moderne et épuré. Le design met l'accent sur la lisibilité et l'efficacité du message promotionnel."
          },
          "3": {
            "cat": "Affiche Publicitaire",
            "title": "Vente & Divers",
            "desc": "Affiche mettant en valeur une boutique.",
            "longDesc": "Ce projet visait à créer une identité visuelle attractive pour une boutique locale. Le design intègre des éléments graphiques modernes avec une palette de couleurs harmonieuse."
          },
          "4": {
            "cat": "Étiquette",
            "title": "Sobou",
            "desc": "Étiquette produit pour présenter les chips de banane Sobou.",
            "longDesc": "Ce projet de packaging a consisté à créer l'identité visuelle complète d'un produit alimentaire local : les chips de banane Sobou."
          },
          "5": {
            "cat": "Logo & Identité",
            "title": "Logo CodeRéseau",
            "desc": "Identité visuelle pour une startup tech.",
            "longDesc": "Création d'une identité visuelle complète pour une entreprise. Ce projet comprend la conception du logo principal, ses déclinaisons et la définition de la charte graphique."
          },
          "6": {
            "cat": "Identité",
            "title": "Identity Card",
            "desc": "Carte de visite professionnelle pour Honoré, développeur Full Stack.",
            "longDesc": "Design d'une carte de visite professionnelle pour un développeur Full Stack. Le concept allie minimalisme et modernité avec une touche tech."
          }
        }
      },
      "scienceSection": {
        "tag": "RESEARCH & SCIENCE",
        "title": "Projets",
        "titleHighlight": "scientifiques",
        "done": "Terminé",
        "inProgress": "En cours",
        "p1cat": "Physique quantique",
        "p1title": "Simulation de l'effet photoélectrique",
        "p1desc": "Modélisation numérique de l'effet photoélectrique à partir des équations de Planck et d'Einstein.",
        "p2cat": "Électronique",
        "p2title": "Conception d'un circuit RC",
        "p2desc": "Conception et simulation d'un circuit RC en régime transitoire et permanent.",
        "p3cat": "Relativité Restreinte",
        "p3title": "Effet Doppler",
        "p3desc": "Le Principe Fascinant qui Transforme le Son. Il s'applique à toutes les ondes."
      },
      "dev": {
        "tag": "CODE & DEV",
        "title": "Projets de",
        "titleHighlight": "développement",
        "details": "Détails",
        "live": "Live",
        "items": {
          "portfolio": {
            "title": "Ce portfolio",
            "cat": "Web App",
            "desc": "Site portfolio complet avec animations canvas, typewriter, scroll reveal, filtres dynamiques et design cyberpunk. Refait en React et Tailwind.",
            "longDesc": "Ce portfolio a été entièrement repensé et reconstruit avec React et Tailwind CSS. Il remplace la version précédente en HTML/CSS pur par une architecture modulaire et des animations fluides.",
            "challenges": "Le principal défi a été de migrer l'intégralité du design original vers une architecture React modulaire tout en conservant l'identité visuelle cyberpunk."
          },
          "blog": {
            "title": "Blog Personnel",
            "cat": "Web App",
            "desc": "Un blog complet développé avec TypeScript pour partager des articles techniques, des tutoriels et des réflexions personnelles.",
            "longDesc": "Ce blog a été conçu comme une plateforme pour documenter mon parcours d'apprentissage et partager mes connaissances. Développé en TypeScript avec React et Next.js.",
            "challenges": "Implémenter un système de rendu MDX performant avec coloration syntaxique tout en maintenant un temps de chargement rapide."
          },
          "fast-connect": {
            "title": "Fast Connect",
            "cat": "Web App",
            "desc": "Application de mise en réseau rapide permettant aux utilisateurs de se connecter, partager des profils et collaborer en temps réel.",
            "longDesc": "Fast Connect est une application web de mise en réseau instantanée conçue pour faciliter les connexions entre professionnels, étudiants et créatifs. L'application utilise les WebSockets.",
            "challenges": "Gérer la synchronisation en temps réel entre plusieurs clients connectés simultanément tout en maintenant la sécurité des données."
          }
        }
      },
      "contact": {
        "tag": "LET'S TALK",
        "title": "Contactez",
        "titleHighlight": "Moi",
        "desc": "Vous avez un projet en tête ou vous souhaitez collaborer ? N'hésitez pas à me contacter.",
        "email": "EMAIL",
        "whatsapp": "WHATSAPP",
        "write": "Écrire",
        "chat": "Discuter",
        "name": "NOM",
        "emailLabel": "EMAIL",
        "message": "MESSAGE",
        "send": "Envoyer le message"
      },
      "footer": {
        "rights": "Tous droits réservés.",
        "builtWith": "Construit avec"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "about": "ABOUT",
        "skills": "SKILLS",
        "projects": "DESIGN",
        "science": "SCIENCE",
        "dev": "DEVELOPMENT",
        "contact": "CONTACT"
      },
      "hero": {
        "init": "PROFILE INITIALIZATION...",
        "typewriter": [
          "Fundamental Physics Student",
          "Full Stack Web Developer",
          "Creative Graphic Designer"
        ],
        "desc": "Fundamental Physics Student · Graphic Designer · Web Developer. At the intersection of science, art, and code — I build thought-provoking experiences.",
        "btnProjects": "VIEW MY PROJECTS",
        "btnContact": "CONTACT",
        "statProjects": "PROJECTS",
        "statDomains": "DOMAINS",
        "statYears": "YEARS XP"
      },
      "about": {
        "title": "About",
        "titleHighlight": "me",
        "tag": "WHO AM I",
        "text1": "I am Nouésèwa Roesnay Gwladferson Scharaf-Dine curious scientist, passionate creative, and rigorous developer. These three worlds feed off each other.",
        "text2": "The rigor of Fundamental Physics, the creativity of graphic design, and the logic of web development: I combine them to create unique experiences at the intersection of science, art, and code.",
        "text3": "Drawn to innovation, I work on interactive simulations, futuristic interfaces, and intelligent systems. For me, technology should convey emotion and tell a vision.",
        "cvView": "View my Resume",
        "cvDownload": "Download Resume",
        "termName": "Nouésèwa WENON",
        "termStatus": "Licence en Physique Fondamentale",
        "termCity": "Abomey-Calavi, Benin",
        "termWhoami": "The creative scientist",
        "termMotto": "Me tratas bien, yo te trato aún mejor."
      },
      "skills": {
        "tag": "CAPABILITIES",
        "title": "My",
        "titleHighlight": "skills",
        "science": "FUNDAMENTAL PHYSICS",
        "design": "GRAPHIC DESIGN",
        "dev": "DEVELOPMENT",
        "s1": "Mathematical modeling",
        "s2": "Experimental data analysis",
        "s3": "Complex problem solving",
        "s4": "Laboratory practice",
        "uiux": "UI/UX",
        "illustration": "Illustration",
        "frontend": "Frontend",
        "backend": "Backend"
      },
      "projects": {
        "tag": "MY WORK",
        "title": "My",
        "titleHighlight": "projects",
        "subtitle": "Creative Album",
        "all": "All",
        "seeMore": "See more",
        "items": {
          "1": {
            "cat": "Advertising Poster",
            "title": "Business Card",
            "desc": "Poster with strong visual contrast, highlighting power and determination.",
            "longDesc": "This advertising poster project was designed to create an immediate visual impact. The design combines bold typography with bright, contrasting colors to capture the viewer's attention."
          },
          "2": {
            "cat": "Advertising Poster",
            "title": "Sales",
            "desc": "Dynamic poster for a sleek, modern, business-oriented style.",
            "longDesc": "This poster was created in a modern, sleek commercial style. The design emphasizes the readability and effectiveness of the promotional message."
          },
          "3": {
            "cat": "Advertising Poster",
            "title": "Sales & Misc",
            "desc": "Poster highlighting a local shop.",
            "longDesc": "This project aimed to create an attractive visual identity for a local shop. The design integrates modern graphic elements with a harmonious color palette."
          },
          "4": {
            "cat": "Label",
            "title": "Sobou",
            "desc": "Product label for Sobou banana chips.",
            "longDesc": "This packaging project consisted of creating the complete visual identity of a local food product: Sobou banana chips."
          },
          "5": {
            "cat": "Logo & Identity",
            "title": "CodeRéseau Logo",
            "desc": "Visual identity for a tech startup.",
            "longDesc": "Creation of a complete visual identity for a company. This project includes the design of the main logo, its variations, and the definition of the graphic charter."
          },
          "6": {
            "cat": "Identity",
            "title": "Identity Card",
            "desc": "Professional business card for Honoré, Full Stack developer.",
            "longDesc": "Design of a professional business card for a Full Stack developer. The concept combines minimalism and modernity with a tech touch."
          }
        }
      },
      "scienceSection": {
        "tag": "RESEARCH & SCIENCE",
        "title": "Scientific",
        "titleHighlight": "projects",
        "done": "Done",
        "inProgress": "In progress",
        "p1cat": "Quantum Physics",
        "p1title": "Photoelectric Effect Simulation",
        "p1desc": "Numerical modeling of the photoelectric effect from Planck and Einstein equations.",
        "p2cat": "Electronics",
        "p2title": "RC Circuit Design",
        "p2desc": "Design and simulation of an RC circuit in transient and steady-state modes.",
        "p3cat": "Special Relativity",
        "p3title": "Doppler Effect",
        "p3desc": "The Fascinating Principle That Transforms Sound. It applies to all waves."
      },
      "dev": {
        "tag": "CODE & DEV",
        "title": "Development",
        "titleHighlight": "projects",
        "details": "Details",
        "live": "Live",
        "items": {
          "portfolio": {
            "title": "This Portfolio",
            "cat": "Web App",
            "desc": "Complete portfolio site with canvas animations, typewriter, scroll reveal, dynamic filters and cyberpunk design. Rebuilt with React and Tailwind.",
            "longDesc": "This portfolio was completely redesigned and rebuilt with React and Tailwind CSS. It replaces the previous pure HTML/CSS version with a modular architecture and fluid animations.",
            "challenges": "The main challenge was migrating the entire original design to a modular React architecture while keeping the cyberpunk visual identity."
          },
          "blog": {
            "title": "Personal Blog",
            "cat": "Web App",
            "desc": "A complete blog developed with TypeScript to share technical articles, tutorials, and personal reflections.",
            "longDesc": "This blog was designed as a platform to document my learning journey and share my knowledge. Developed in TypeScript with React and Next.js.",
            "challenges": "Implementing a high-performance MDX rendering system with syntax highlighting while maintaining fast loading times."
          },
          "fast-connect": {
            "title": "Fast Connect",
            "cat": "Web App",
            "desc": "Fast networking application allowing users to connect, share profiles and collaborate in real-time.",
            "longDesc": "Fast Connect is an instant networking web application designed to facilitate connections between professionals, students, and creatives. The app uses WebSockets.",
            "challenges": "Managing real-time synchronization between multiple simultaneously connected clients while maintaining data security."
          }
        }
      },
      "contact": {
        "tag": "LET'S TALK",
        "title": "Contact",
        "titleHighlight": "Me",
        "desc": "Have a project in mind or want to collaborate? Feel free to reach out.",
        "email": "EMAIL",
        "whatsapp": "WHATSAPP",
        "write": "Write",
        "chat": "Chat",
        "name": "NAME",
        "emailLabel": "EMAIL",
        "message": "MESSAGE",
        "send": "Send message"
      },
      "footer": {
        "rights": "All rights reserved.",
        "builtWith": "Built with"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
