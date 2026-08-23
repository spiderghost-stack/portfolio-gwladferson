import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Palette, Eye, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DesignDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const projectTranslations = t(`projects.items.${id}`, { returnObjects: true });

  const designMetadata = {
    '1': {
      img: 'CardForMe.jpg',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      category: 'Print / Affiche'
    },
    '2': {
      img: 'ABUJA-EXO.jpg',
      tools: ['Adobe Photoshop', 'Canva'],
      category: 'Print / Commercial'
    },
    '3': {
      img: 'boutiquezirack-1-2.jpg',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      category: 'Print / Retail'
    },
    '4': {
      img: 'Sobou.jpg',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      category: 'Packaging / Étiquette'
    },
    '5': {
      img: "Karen's.jpg",
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      category: 'Branding / Logo'
    },
    '6': {
      img: 'visite-card-honoré.jpg',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      category: 'Print / Carte de visite'
    }
  };

  const projectInfo = designMetadata[id];

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
      
      <div className="bg-bg2 border border-border rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,231,0.03)] mt-4">
        {/* Image en grand */}
        <div className="relative w-full max-h-[500px] overflow-hidden">
          <img src={`/assets/${projectInfo.img}`} alt={projectTranslations.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-bg2 to-transparent"></div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="font-sharetech text-[0.75rem] text-cyan tracking-[3px] uppercase mb-2">{projectTranslations.cat}</div>
                <h1 className="font-orbitron text-[clamp(1.8rem,4vw,3rem)] font-bold text-white mb-4 leading-tight">{projectTranslations.title}</h1>
                <p className="text-muted text-[1.1rem] leading-relaxed">{projectTranslations.desc}</p>
              </div>

              <div>
                <h2 className="font-orbitron text-lg text-white mb-4 border-b border-border pb-2 flex items-center gap-2">
                  <Eye size={18} className="text-cyan" /> Description détaillée
                </h2>
                <p className="text-muted text-[0.95rem] leading-[1.85]">{projectTranslations.longDesc}</p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#010a16] border border-border rounded-lg p-6">
                <h3 className="font-sharetech text-white mb-4 tracking-[1px]">CATÉGORIE</h3>
                <span className="font-sharetech text-[0.8rem] px-3 py-1.5 rounded border border-cyan/20 text-cyan bg-cyan/5 tracking-[1px]">{projectInfo.category}</span>
              </div>

              <div className="bg-[#010a16] border border-border rounded-lg p-6">
                <h3 className="font-sharetech text-white mb-4 tracking-[1px] flex items-center gap-2">
                  <Palette size={16} className="text-[#ff6b35]" /> OUTILS UTILISÉS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectInfo.tools.map(tool => (
                    <span key={tool} className="font-sharetech text-[0.72rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">{tool}</span>
                  ))}
                </div>
              </div>

              <a 
                href={`/assets/${projectInfo.img}`} 
                download 
                className="w-full flex items-center justify-center gap-2 font-sharetech text-[0.85rem] font-bold py-3 rounded bg-gradient-to-r from-green to-cyan text-bg hover:opacity-90 transition-opacity tracking-[1px] shadow-[0_0_15px_rgba(0,255,231,0.2)]"
              >
                <Download size={16} /> TÉLÉCHARGER L'IMAGE
              </a>

              <Link to="/#projects" className="block w-full text-center font-sharetech text-[0.85rem] py-3 rounded border border-muted text-muted hover:text-white hover:border-white transition-colors tracking-[1px]">
                ← Voir tous les projets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
