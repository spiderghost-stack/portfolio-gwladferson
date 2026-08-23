import { useTranslation } from 'react-i18next';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative z-10 px-[8vw] py-[100px] bg-gradient-to-b from-bg to-bg2">
      <p className="font-sharetech text-[0.75rem] text-green tracking-[4px] uppercase mb-[10px] text-glow-green">
        // {t('contact.tag')}
      </p>
      <h2 className="font-orbitron text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-[50px] leading-[1.2]">
        {t('contact.title')} <span className="text-cyan text-glow-cyan">{t('contact.titleHighlight')}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
        <div>
          <p className="text-muted mb-[30px] text-[1.05rem]">
            {t('contact.desc')}
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-center gap-[14px] py-[14px] border-b border-border">
              <div className="w-[38px] h-[38px] shrink-0 bg-dim border border-border rounded flex justify-center items-center text-cyan"><Mail size={18} /></div>
              <div>
                <div className="font-sharetech text-[0.72rem] text-muted tracking-[1px]">{t('contact.email')}</div>
                <div className="font-sharetech text-[0.82rem] text-cyan">gwladferson@gmail.com</div>
              </div>
              <a href="mailto:gwladferson@gmail.com" className="ml-auto font-sharetech text-[0.7rem] px-3 py-1 border border-cyan text-cyan rounded hover:bg-cyan/5 hover:shadow-[0_0_6px_rgba(0,255,231,0.1)] transition-all">{t('contact.write')}</a>
            </li>
            <li className="flex items-center gap-[14px] py-[14px] border-b border-border">
              <div className="w-[38px] h-[38px] shrink-0 bg-dim border border-border rounded flex justify-center items-center text-green"><Phone size={18} /></div>
              <div>
                <div className="font-sharetech text-[0.72rem] text-muted tracking-[1px]">{t('contact.whatsapp')}</div>
                <div className="font-sharetech text-[0.82rem] text-green">+229 01 53 07 95 76</div>
              </div>
              <a href="https://wa.me/22901530795​76" target="_blank" rel="noopener noreferrer" className="ml-auto font-sharetech text-[0.7rem] px-3 py-1 border border-green text-green rounded hover:bg-green/5 hover:shadow-[0_0_6px_rgba(0,255,136,0.1)] transition-all">{t('contact.chat')}</a>
            </li>
          </ul>
        </div>
        
        <form className="flex flex-col gap-4" action={`mailto:gwladferson@gmail.com`} method="POST" encType="text/plain">
          <div className="flex flex-col gap-1.5">
            <label className="font-sharetech text-[0.72rem] text-muted tracking-[2px]">{t('contact.name')}</label>
            <input type="text" name="name" className="bg-bg2 border border-border rounded p-[12px_16px] text-white font-rajdhani text-[1rem] outline-none focus:border-cyan focus:shadow-[0_0_0_2px_rgba(0,255,231,0.05)] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sharetech text-[0.72rem] text-muted tracking-[2px]">{t('contact.emailLabel')}</label>
            <input type="email" name="email" className="bg-bg2 border border-border rounded p-[12px_16px] text-white font-rajdhani text-[1rem] outline-none focus:border-cyan focus:shadow-[0_0_0_2px_rgba(0,255,231,0.05)] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sharetech text-[0.72rem] text-muted tracking-[2px]">{t('contact.message')}</label>
            <textarea name="message" className="bg-bg2 border border-border rounded p-[12px_16px] text-white font-rajdhani text-[1rem] outline-none focus:border-cyan focus:shadow-[0_0_0_2px_rgba(0,255,231,0.05)] transition-all min-h-[120px] resize-y"></textarea>
          </div>
          <button type="submit" className="font-sharetech text-[0.85rem] tracking-[2px] px-8 py-[14px] rounded-[3px] border border-cyan text-cyan hover:bg-cyan/5 hover:shadow-[0_0_8px_rgba(0,255,231,0.15)] transition-all mt-2 uppercase flex items-center justify-center gap-2">
            <Send size={16} /> {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  );
}
