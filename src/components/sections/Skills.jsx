import { useTranslation } from 'react-i18next';
import { Atom, Palette, CodeXml } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative z-10 px-[8vw] py-[100px]">
      <p className="font-sharetech text-[0.75rem] text-green tracking-[4px] uppercase mb-[10px] text-glow-green">
        // {t('skills.tag')}
      </p>
      <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[50px] leading-[1.2]">
        {t('skills.title')} <span className="text-cyan text-glow-cyan">{t('skills.titleHighlight')}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
        {/* Science */}
        <div className="bg-bg2 border border-border rounded-lg p-[32px_28px] relative overflow-hidden transition-all hover:-translate-y-1.5 hover:border-cyan/20 hover:shadow-[0_16px_40px_rgba(0,255,231,0.04)] group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan to-blue"></div>
          <div className="mb-4 text-cyan"><Atom size={40} /></div>
          <h3 className="font-orbitron text-[1rem] font-bold text-white mb-[18px]">{t('skills.science')}</h3>
          <ul className="list-none space-y-3">
            {[t('skills.s1'), t('skills.s2'), t('skills.s3'), t('skills.s4')].map(item => (
              <li key={item} className="font-sharetech text-[0.8rem] text-muted border-b border-white/5 pb-1 flex items-center gap-2 transition-colors group-hover:text-text">
                <span className="text-cyan text-[0.7rem]">▸</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4">
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.s1')}</span><span>85%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-cyan to-blue w-[85%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.s2')}</span><span>75%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-cyan to-blue w-[75%]"></div></div>
            </div>
          </div>
        </div>

        {/* Design */}
        <div className="bg-bg2 border border-border rounded-lg p-[32px_28px] relative overflow-hidden transition-all hover:-translate-y-1.5 hover:border-cyan/20 hover:shadow-[0_16px_40px_rgba(0,255,231,0.04)] group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#ff3cac]"></div>
          <div className="mb-4 text-[#ff6b35]"><Palette size={40} /></div>
          <h3 className="font-orbitron text-[1rem] font-bold text-white mb-[18px]">{t('skills.design')}</h3>
          <ul className="list-none space-y-3">
            {['Adobe Photoshop', 'Adobe Illustrator', 'UI Design', 'Identité de marque', 'Canva'].map(item => (
              <li key={item} className="font-sharetech text-[0.8rem] text-muted border-b border-white/5 pb-1 flex items-center gap-2 transition-colors group-hover:text-text">
                <span className="text-cyan text-[0.7rem]">▸</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4">
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.uiux')}</span><span>88%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff3cac] w-[88%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.illustration')}</span><span>75%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff3cac] w-[75%]"></div></div>
            </div>
          </div>
        </div>

        {/* Dev */}
        <div className="bg-bg2 border border-border rounded-lg p-[32px_28px] relative overflow-hidden transition-all hover:-translate-y-1.5 hover:border-cyan/20 hover:shadow-[0_16px_40px_rgba(0,255,231,0.04)] group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green to-[#00e0ff]"></div>
          <div className="mb-4 text-green"><CodeXml size={40} /></div>
          <h3 className="font-orbitron text-[1rem] font-bold text-white mb-[18px]">{t('skills.dev')}</h3>
          <ul className="list-none space-y-3">
            {['HTML / CSS / JS', 'React.js', 'Next.js', 'Python', 'Git / GitHub'].map(item => (
              <li key={item} className="font-sharetech text-[0.8rem] text-muted border-b border-white/5 pb-1 flex items-center gap-2 transition-colors group-hover:text-text">
                <span className="text-cyan text-[0.7rem]">▸</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4">
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.frontend')}</span><span>90%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green to-[#00e0ff] w-[90%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between font-sharetech text-[0.7rem] text-muted mb-1.5"><span>{t('skills.backend')}</span><span>50%</span></div>
              <div className="h-1 bg-dim rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green to-[#00e0ff] w-[50%]"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
