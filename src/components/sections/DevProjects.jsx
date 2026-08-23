import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Code2, Globe, Wifi } from 'lucide-react';

export default function DevProjects() {
  const { t } = useTranslation();

  const devProjects = [
    {
      id: 'portfolio',
      title: t('dev.items.portfolio.title'),
      cat: t('dev.items.portfolio.cat'),
      desc: t('dev.items.portfolio.desc'),
      stack: ['React', 'Tailwind', 'Framer Motion'],
      type: 'WEB',
      icon: <Globe className="text-[#60aaff]" size={20} />,
      liveUrl: 'https://portfolio-gwladferson.onrender.com'
    },
    {
      id: 'blog',
      title: t('dev.items.blog.title'),
      cat: t('dev.items.blog.cat'),
      desc: t('dev.items.blog.desc'),
      stack: ['TypeScript', 'React', 'Next.js'],
      type: 'WEB',
      icon: <Code2 className="text-[#60aaff]" size={20} />,
      liveUrl: 'https://mindlog-zgzb.onrender.com'
    },
    {
      id: 'fast-connect',
      title: t('dev.items.fast-connect.title'),
      cat: t('dev.items.fast-connect.cat'),
      desc: t('dev.items.fast-connect.desc'),
      stack: ['React', 'Node.js', 'Socket.io'],
      type: 'WEB',
      icon: <Wifi className="text-[#60aaff]" size={20} />,
      liveUrl: 'https://fast-connect.onrender.com'
    }
  ];

  return (
    <section id="dev" className="relative z-10 px-[8vw] py-[100px] bg-gradient-to-b from-bg to-[#020820]">
      <p className="font-sharetech text-[0.75rem] text-[#60aaff] tracking-[4px] uppercase mb-[10px]">
        // {t('dev.tag')}
      </p>
      <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[50px] leading-[1.2]">
        {t('dev.title')} <span className="text-blue shadow-glow-c">{t('dev.titleHighlight')}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {devProjects.map(p => (
          <div key={p.id} className="bg-bg2 border border-blue/15 rounded-xl overflow-hidden relative transition-all hover:-translate-y-2 hover:border-blue/25 hover:shadow-[0_20px_50px_rgba(0,128,255,0.05)] flex flex-col group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue to-cyan"></div>
            
            <div className="bg-[#010a16] border-b border-blue/10 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-[5px] mr-auto">
                <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]"></span>
                <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]"></span>
                <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]"></span>
              </div>
              <span className="font-sharetech text-[0.68rem] text-[#60aaff]">{p.id}.jsx</span>
            </div>
            
            <div className="pt-[22px] px-[24px] flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                {p.icon}
                <div className="font-sharetech text-[0.65rem] text-[#60aaff] tracking-[3px] uppercase">{p.cat}</div>
              </div>
              <h3 className="font-orbitron text-[1rem] font-bold text-white mb-2.5 group-hover:text-cyan transition-colors">{p.title}</h3>
              <p className="text-[0.88rem] text-muted leading-[1.75] mb-[18px]">{p.desc}</p>
              <div className="flex flex-wrap gap-[7px] mb-5">
                {p.stack.map(s => (
                  <span key={s} className="font-sharetech text-[0.65rem] px-2 py-1 rounded border border-blue/20 text-[#60aaff] bg-blue/5 tracking-[1px]">{s}</span>
                ))}
              </div>
            </div>
            
            <div className="p-[16px_24px] border-t border-blue/10 flex items-center justify-between gap-[10px]">
              <div className="flex gap-2.5">
                <Link to={`/project/${p.id}`} className="font-sharetech text-[0.72rem] px-[14px] py-1.5 rounded border border-blue/30 text-[#60aaff] bg-transparent hover:bg-blue/5 hover:border-blue transition-all tracking-[1px]">
                  {t('dev.details')}
                </Link>
                <a href={p.liveUrl} className="font-sharetech text-[0.72rem] font-bold px-[14px] py-1.5 rounded bg-gradient-to-r from-blue to-cyan text-bg hover:opacity-85 hover:scale-105 transition-all tracking-[1px]">
                  ▶ {t('dev.live')}
                </a>
              </div>
              <span className="font-sharetech text-[0.62rem] px-2 py-1 rounded tracking-[1px] bg-blue/10 text-[#60aaff] border border-blue/20">{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
