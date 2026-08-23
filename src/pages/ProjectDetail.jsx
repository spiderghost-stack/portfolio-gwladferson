import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Globe, GitFork, Layers, Users, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const projectTranslations = t(`dev.items.${id}`, { returnObjects: true });

  const projectMetadata = {
    'portfolio': {
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'i18next', 'React Router'],
      features: [
        'Design Cyberpunk avec effets néon',
        'Système multilingue FR/EN complet',
        'Animations au défilement avec Framer Motion',
        'Filtres dynamiques pour le portfolio graphique',
        'Pages de détail pour chaque projet',
        'Formulaire de contact Gmail + WhatsApp',
        'Téléchargement de CV en PDF',
        'Design 100% responsive'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/spiderghost-stack/portfolio-gwladferson'
    },
    'blog': {
      stack: ['TypeScript', 'React', 'Next.js', 'MDX', 'Prisma'],
      features: [
        'Typage strict avec TypeScript',
        'Rendu côté serveur (SSR) avec Next.js',
        'Articles en MDX avec coloration syntaxique',
        'Design responsive et mode sombre',
        'Optimisation SEO automatique',
        'Système de tags et catégories'
      ],
      liveUrl: 'https://github.com/spiderghost-stack/blog',
      githubUrl: 'https://github.com/spiderghost-stack/blog'
    },
    'fast-connect': {
      stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      features: [
        'Connexion en temps réel via WebSockets',
        'Messagerie instantanée entre utilisateurs',
        'Partage de profils et QR codes',
        'Notifications push en temps réel',
        'Authentification sécurisée avec JWT',
        'Recherche de contacts par compétences'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  };

  const projectInfo = projectMetadata[id];

  if (!projectInfo || !projectTranslations || typeof projectTranslations !== 'object') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-white gap-4">
        <h2 className="font-orbitron text-2xl">Projet non trouvé</h2>
        <Link to="/" className="text-cyan underline font-sharetech">← Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[120px] pb-[80px] px-[8vw] bg-bg relative z-10">
      <Link to="/" className="font-sharetech text-[0.85rem] text-muted hover:text-cyan mb-8 inline-flex items-center gap-2 transition-colors">
        <ArrowLeft size={16} /> Retour à l'accueil
      </Link>
      
      <div className="bg-bg2 border border-border rounded-xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,255,231,0.03)] mt-4">
        <div className="font-sharetech text-[0.75rem] text-cyan tracking-[3px] uppercase mb-2">{projectTranslations.cat}</div>
        <h1 className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold text-white mb-6 leading-tight">{projectTranslations.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {projectInfo.stack.map(s => (
            <span key={s} className="font-sharetech text-[0.75rem] px-3 py-1.5 rounded border border-cyan/20 text-cyan bg-cyan/5 tracking-[1px]">{s}</span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Description courte */}
            <div>
              <h2 className="font-orbitron text-lg text-white mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Layers size={18} className="text-cyan" /> Résumé
              </h2>
              <p className="text-muted text-[1.05rem] leading-relaxed">{projectTranslations.desc}</p>
            </div>

            {/* Description longue */}
            <div>
              <h2 className="font-orbitron text-lg text-white mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Users size={18} className="text-cyan" /> Description détaillée
              </h2>
              <p className="text-muted text-[0.95rem] leading-[1.85]">{projectTranslations.longDesc}</p>
            </div>
            
            {/* Fonctionnalités */}
            <div>
              <h2 className="font-orbitron text-lg text-white mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Zap size={18} className="text-green" /> Fonctionnalités clés
              </h2>
              <ul className="list-none space-y-3">
                {projectInfo.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-muted text-[0.95rem]">
                    <CheckCircle2 size={18} className="text-green shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Défis */}
            <div>
              <h2 className="font-orbitron text-lg text-white mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Shield size={18} className="text-[#febc2e]" /> Défi technique
              </h2>
              <p className="text-muted text-[0.95rem] leading-[1.85] italic border-l-2 border-cyan/30 pl-4">{projectTranslations.challenges}</p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#010a16] border border-border rounded-lg p-6">
              <h3 className="font-sharetech text-white mb-4 tracking-[1px]">LIENS DU PROJET</h3>
              <div className="flex flex-col gap-4">
                <a href={projectInfo.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 font-sharetech text-[0.85rem] font-bold py-3 rounded bg-gradient-to-r from-blue to-cyan text-bg hover:opacity-90 transition-opacity tracking-[1px]">
                  <Globe size={16} /> VOIR LE SITE
                </a>
                <a href={projectInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 font-sharetech text-[0.85rem] py-3 rounded border border-muted text-muted hover:text-white hover:border-white transition-colors tracking-[1px]">
                  <GitFork size={16} /> CODE SOURCE
                </a>
              </div>
            </div>

            {/* Stack résumé */}
            <div className="bg-[#010a16] border border-border rounded-lg p-6">
              <h3 className="font-sharetech text-white mb-4 tracking-[1px]">STACK TECHNIQUE</h3>
              <div className="flex flex-wrap gap-2">
                {projectInfo.stack.map(s => (
                  <span key={s} className="font-sharetech text-[0.72rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
