import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projectsList = [
    {
      id: 1,
      cat: t('projects.items.1.cat'),
      title: t('projects.items.1.title'),
      img: 'CardForMe.jpg',
      filter: 'affiche'
    },
    {
      id: 2,
      cat: t('projects.items.2.cat'),
      title: t('projects.items.2.title'),
      img: 'ABUJA-EXO.jpg',
      filter: 'affiche'
    },
    {
      id: 3,
      cat: t('projects.items.3.cat'),
      title: t('projects.items.3.title'),
      img: 'boutiquezirack-1-2.jpg',
      filter: 'affiche'
    },
    {
      id: 4,
      cat: t('projects.items.4.cat'),
      title: t('projects.items.4.title'),
      img: 'Sobou.jpg',
      filter: 'etiquette'
    },
    {
      id: 5,
      cat: t('projects.items.5.cat'),
      title: t('projects.items.5.title'),
      img: "Karen's.jpg",
      filter: 'logo'
    },
    {
      id: 6,
      cat: t('projects.items.6.cat'),
      title: t('projects.items.6.title'),
      img: 'visite-card-honoré.jpg',
      filter: 'logo'
    }
  ];

  const filteredProjects = filter === 'all' ? projectsList : projectsList.filter(p => p.filter === filter);

  return (
    <section id="projects" className="relative z-10 px-[8vw] py-[100px] bg-bg">
      <div className="text-center mb-[54px]">
        <p className="font-sharetech text-[0.75rem] text-green tracking-[4px] uppercase mb-[10px] text-glow-green justify-center flex">
          // {t('projects.tag')}
        </p>
        <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[10px] leading-[1.2]">
          {t('projects.title')} <span className="text-cyan text-glow-cyan">{t('projects.titleHighlight')}</span>
        </h2>
        <p className="font-sharetech text-[0.8rem] text-muted tracking-[2px]">{t('projects.subtitle')}</p>
      </div>

      <div className="flex gap-2.5 justify-center flex-wrap mb-[54px]">
        {['all', 'affiche', 'etiquette', 'logo'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-full border-[1.5px] font-sharetech font-semibold text-[0.8rem] tracking-[1px] transition-all
              ${filter === f ? 'text-cyan border-cyan shadow-[0_0_6px_rgba(0,255,231,0.15)]' : 'text-muted border-muted hover:text-cyan hover:border-cyan'}`}
          >
            {f === 'all' ? t('projects.all') : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {filteredProjects.map(p => (
          <div key={p.id} className="rounded-xl overflow-hidden bg-bg2 border border-border transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,255,231,0.04)] hover:border-cyan/20 group cursor-pointer">
            <div className="relative h-[220px] overflow-hidden">
              <img src={`/assets/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#020b18]/50 to-transparent pointer-events-none z-10"></div>
            </div>
            <div className="p-[20px_22px_22px]">
              <div className="font-sharetech text-[0.68rem] font-bold tracking-[2px] uppercase text-cyan mb-1.5">{p.cat}</div>
              <h3 className="font-orbitron font-bold text-[0.95rem] text-white mb-2">{p.title}</h3>
              <Link 
                to={`/design/${p.id}`}
                className="mt-3 px-[18px] py-[7px] bg-transparent border border-cyan text-cyan rounded-full font-sharetech text-[0.72rem] tracking-[1px] flex items-center gap-1.5 transition-colors hover:bg-cyan/5 w-fit"
              >
                <ZoomIn size={14} /> {t('projects.seeMore')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
