import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X, Ghost } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#science', label: t('nav.science') },
    { href: '#dev', label: t('nav.dev') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] py-[18px] bg-[#020b18]/85 border-b border-border backdrop-blur-md">
        <div className="font-orbitron text-[1.1rem] font-black text-cyan tracking-[3px] z-[101] flex items-center gap-2">
          <Ghost size={24} className="text-cyan" /> 
          <span className="text-glow-cyan">SPIDER_GOST</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-sharetech text-[0.85rem] text-muted tracking-[2px] transition-colors hover:text-cyan hover:text-glow-cyan">
                  // {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-2 font-sharetech text-[0.7rem] text-muted z-[101]">
            <button 
              onClick={() => changeLanguage('fr')} 
              className={`transition-colors ${i18n.language === 'fr' ? 'text-cyan text-glow-cyan' : 'hover:text-cyan'}`}
            >FR</button>
            <span>/</span>
            <button 
              onClick={() => changeLanguage('en')} 
              className={`transition-colors ${i18n.language === 'en' ? 'text-cyan text-glow-cyan' : 'hover:text-cyan'}`}
            >EN</button>
          </div>

          <button 
            className="lg:hidden text-cyan z-[101]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#020b18]/95 backdrop-blur-lg z-[99] transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="font-orbitron text-xl text-white tracking-[2px] transition-colors hover:text-cyan hover:text-glow-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                // {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
