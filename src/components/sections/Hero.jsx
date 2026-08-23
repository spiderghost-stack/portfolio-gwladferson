import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const phrases = t('hero.typewriter', { returnObjects: true }) || [];
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    if (!Array.isArray(phrases) || phrases.length === 0) return;
    
    const currentPhrase = phrases[phraseIndex];
    
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        if (typedText.length === 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50); // Vitesse d'effacement
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        if (typedText.length === currentPhrase.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Pause avant d'effacer
        }
      }, 100); // Vitesse de frappe
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-[120px] px-[8vw] relative z-10">
      <p className="font-sharetech text-[0.8rem] text-green tracking-[5px] text-glow-green mb-4">
        // {t('hero.init')}
      </p>
      
      <h1 className="font-orbitron text-[clamp(2rem,5vw,4.5rem)] font-black text-white leading-[1.1] mb-5">
        Roesnay Gwladferson <span className="text-cyan text-glow-cyan">WENON</span>
      </h1>
      
      <div className="font-sharetech text-[clamp(1rem,2vw,1.35rem)] text-cyan text-glow-cyan h-[2em] flex items-center gap-[10px] mb-[36px]">
        <span>{typedText}</span>
        <span className="inline-block w-[2px] h-[1.1em] bg-cyan shadow-glow-c animate-pulse"></span>
      </div>
      
      <p className="max-w-[540px] text-muted text-[1.05rem] mb-[44px]">
        {t('hero.desc')}
      </p>
      
      <div className="flex gap-4 flex-wrap">
        <a href="#projects" className="font-sharetech text-[0.85rem] tracking-[2px] px-8 py-[14px] rounded-[3px] border border-cyan text-cyan hover:bg-cyan/5 hover:shadow-[0_0_8px_rgba(0,255,231,0.15)] transition-all flex items-center gap-2">
          {t('hero.btnProjects')}
        </a>
        <a href="#contact" className="font-sharetech text-[0.85rem] tracking-[2px] px-8 py-[14px] rounded-[3px] border border-muted text-muted hover:border-green hover:text-green hover:bg-green/5 hover:shadow-[0_0_8px_rgba(0,255,136,0.1)] transition-all flex items-center gap-2">
          {t('hero.btnContact')}
        </a>
      </div>
      
      <div className="flex gap-[50px] mt-[60px] flex-wrap">
        <div className="text-center">
          <div className="font-orbitron text-[2rem] font-bold text-cyan text-glow-cyan">20</div>
          <div className="font-sharetech text-[0.7rem] text-muted tracking-[2px]">{t('hero.statProjects')}</div>
        </div>
        <div className="text-center">
          <div className="font-orbitron text-[2rem] font-bold text-cyan text-glow-cyan">3</div>
          <div className="font-sharetech text-[0.7rem] text-muted tracking-[2px]">{t('hero.statDomains')}</div>
        </div>
        <div className="text-center">
          <div className="font-orbitron text-[2rem] font-bold text-cyan text-glow-cyan">2</div>
          <div className="font-sharetech text-[0.7rem] text-muted tracking-[2px]">{t('hero.statYears')}</div>
        </div>
      </div>
    </section>
  );
}
