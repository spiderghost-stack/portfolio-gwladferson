import { useTranslation } from 'react-i18next';
import { Atom, Zap, Microscope } from 'lucide-react';

export default function Science() {
  const { t } = useTranslation();

  return (
    <section id="science" className="relative z-10 px-[8vw] py-[100px] bg-gradient-to-b from-bg2 to-[#020e10]">
      <p className="font-sharetech text-[0.75rem] text-cyan tracking-[4px] uppercase mb-[10px]">
        // {t('scienceSection.tag')}
      </p>
      <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[50px] leading-[1.2]">
        {t('scienceSection.title')} <span className="text-green text-glow-green">{t('scienceSection.titleHighlight')}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {/* Project 1 */}
        <div className="bg-bg2 border border-green/15 rounded-xl p-0 relative overflow-hidden transition-all hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_20px_50px_rgba(0,255,136,0.04)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green to-cyan"></div>
          <div className="bg-gradient-to-br from-green/5 to-cyan/5 p-[28px_28px_20px] flex items-start gap-[18px]">
            <div className="w-[52px] h-[52px] shrink-0 bg-gradient-to-br from-green/15 to-cyan/10 border border-green/25 rounded-[10px] flex items-center justify-center text-cyan"><Atom size={24} /></div>
            <div className="flex-1">
              <div className="font-sharetech text-[0.65rem] text-green tracking-[3px] uppercase text-glow-green mb-1">{t('scienceSection.p1cat')}</div>
              <h3 className="font-orbitron text-[0.95rem] font-bold text-white leading-[1.3]">{t('scienceSection.p1title')}</h3>
            </div>
          </div>
          <div className="px-[28px] pb-[24px]">
            <p className="text-[0.88rem] text-muted leading-[1.75] mb-5">{t('scienceSection.p1desc')}</p>
            <div className="flex flex-wrap gap-2 mb-[18px]">
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">Python</span>
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">NumPy</span>
            </div>
            <div className="inline-flex items-center gap-[7px] font-sharetech text-[0.68rem] text-muted tracking-[1px]">
              <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_4px_rgba(0,255,136,0.4)]"></span> {t('scienceSection.done')}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-bg2 border border-green/15 rounded-xl p-0 relative overflow-hidden transition-all hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_20px_50px_rgba(0,255,136,0.04)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green to-cyan"></div>
          <div className="bg-gradient-to-br from-green/5 to-cyan/5 p-[28px_28px_20px] flex items-start gap-[18px]">
            <div className="w-[52px] h-[52px] shrink-0 bg-gradient-to-br from-green/15 to-cyan/10 border border-green/25 rounded-[10px] flex items-center justify-center text-[#febc2e]"><Zap size={24} /></div>
            <div className="flex-1">
              <div className="font-sharetech text-[0.65rem] text-green tracking-[3px] uppercase text-glow-green mb-1">{t('scienceSection.p2cat')}</div>
              <h3 className="font-orbitron text-[0.95rem] font-bold text-white leading-[1.3]">{t('scienceSection.p2title')}</h3>
            </div>
          </div>
          <div className="px-[28px] pb-[24px]">
            <p className="text-[0.88rem] text-muted leading-[1.75] mb-5">{t('scienceSection.p2desc')}</p>
            <div className="flex flex-wrap gap-2 mb-[18px]">
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">Électronique</span>
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">LTSpice</span>
            </div>
            <div className="inline-flex items-center gap-[7px] font-sharetech text-[0.68rem] text-muted tracking-[1px]">
              <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_4px_rgba(0,255,136,0.4)]"></span> {t('scienceSection.done')}
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="bg-bg2 border border-green/15 rounded-xl p-0 relative overflow-hidden transition-all hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_20px_50px_rgba(0,255,136,0.04)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green to-cyan"></div>
          <div className="bg-gradient-to-br from-green/5 to-cyan/5 p-[28px_28px_20px] flex items-start gap-[18px]">
            <div className="w-[52px] h-[52px] shrink-0 bg-gradient-to-br from-green/15 to-cyan/10 border border-green/25 rounded-[10px] flex items-center justify-center text-green"><Microscope size={24} /></div>
            <div className="flex-1">
              <div className="font-sharetech text-[0.65rem] text-green tracking-[3px] uppercase text-glow-green mb-1">{t('scienceSection.p3cat')}</div>
              <h3 className="font-orbitron text-[0.95rem] font-bold text-white leading-[1.3]">{t('scienceSection.p3title')}</h3>
            </div>
          </div>
          <div className="px-[28px] pb-[24px]">
            <p className="text-[0.88rem] text-muted leading-[1.75] mb-5">{t('scienceSection.p3desc')}</p>
            <div className="flex flex-wrap gap-2 mb-[18px]">
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">Cinétique</span>
              <span className="font-sharetech text-[0.65rem] px-2.5 py-1 rounded border border-green/20 text-green bg-green/5 tracking-[1px]">Mécaniques</span>
            </div>
            <div className="inline-flex items-center gap-[7px] font-sharetech text-[0.68rem] text-muted tracking-[1px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e] shadow-[0_0_4px_#febc2e] animate-pulse"></span> {t('scienceSection.inProgress')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
