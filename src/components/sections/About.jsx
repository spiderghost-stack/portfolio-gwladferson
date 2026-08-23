import { useTranslation } from 'react-i18next';
import { Download, Eye } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative z-10 px-[8vw] py-[100px]">
      <p className="font-sharetech text-[0.75rem] text-green tracking-[4px] uppercase mb-[10px] text-glow-green">
        // {t('about.tag')}
      </p>
      <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[50px] leading-[1.2]">
        {t('about.title')} <span className="text-cyan text-glow-cyan">{t('about.titleHighlight')}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
        <div className="text-muted text-[1.05rem] space-y-5">
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
          <p>{t('about.text3')}</p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/assets/CV_Gwladferson.pdf" target="_blank" rel="noopener noreferrer" className="font-sharetech text-[0.85rem] tracking-[2px] px-6 py-[12px] rounded border border-cyan text-cyan hover:bg-cyan/5 hover:shadow-[0_0_8px_rgba(0,255,231,0.15)] transition-all flex items-center gap-2">
              <Eye size={16} /> {t('about.cvView')}
            </a>
            <a href="/assets/CV_Gwladferson.pdf" download className="font-sharetech text-[0.85rem] tracking-[2px] px-6 py-[12px] rounded border border-green text-green hover:bg-green/5 hover:shadow-[0_0_8px_rgba(0,255,136,0.15)] transition-all flex items-center gap-2">
              <Download size={16} /> {t('about.cvDownload')}
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Profile Card */}
          <div className="bg-bg2 border border-border rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,231,0.03)] p-4 flex flex-col items-center justify-center">
             <img src="/assets/profile.png" alt="Profile" className="w-full h-auto rounded object-cover object-top max-h-[400px]" />
          </div>

          {/* Terminal */}
          <div className="bg-bg2 border border-border rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,231,0.03)]">
            <div className="bg-dim px-4 py-2.5 flex items-center gap-2">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></span>
              <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]"></span>
              <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]"></span>
              <span className="font-sharetech text-[0.75rem] text-muted mx-auto tracking-[2px]">profile.sh</span>
            </div>
            <div className="p-6 font-sharetech text-[0.82rem] leading-loose">
              <div className="flex gap-2.5"><span className="text-green">$</span><span className="text-text"> cat profil.json</span></div>
              <div className="text-muted pl-5">{`{ `}<span className="text-cyan">"nom"</span>: "{t('about.termName')}",</div>
              <div className="text-muted pl-5">&nbsp;&nbsp;<span className="text-cyan">"statut"</span>: "{t('about.termStatus')}",</div>
              <div className="text-muted pl-5">&nbsp;&nbsp;<span className="text-cyan">"ville"</span>: "{t('about.termCity')}",</div>
              <div className="text-muted pl-5">&nbsp;&nbsp;<span className="text-cyan">"passions"</span>: ["science", "art", "code"],</div>
              <div className="text-muted pl-5">&nbsp;&nbsp;<span className="text-cyan">"disponible"</span>: <span className="text-green">true</span> {`}`}</div>
              <br/>
              <div className="flex gap-2.5"><span className="text-green">$</span><span className="text-text"> whoami</span></div>
              <div className="text-muted pl-5"><span className="text-cyan">{t('about.termWhoami')}</span> 🔬🎨💻</div>
              <br/>
              <div className="flex gap-2.5"><span className="text-green">$</span><span className="text-text"> echo $MOTTO</span></div>
              <div className="text-muted pl-5">"{t('about.termMotto')}"</div>
              <br/>
              <div className="flex gap-2.5"><span className="text-green">$</span><span className="inline-block w-[2px] h-[1.1em] bg-cyan shadow-glow-c animate-pulse mt-1"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
