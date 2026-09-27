import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X, Ghost } from 'lucide-react';
import styled from 'styled-components';

const LanguageSwitch = styled.label`
  position: relative;
  display: block;
  width: 84px;
  height: 30px;
  cursor: pointer;

  input {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid rgba(0, 255, 231, 0.3);
    border-radius: 999px;
    background: #041522;
    color: #7893a7;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
  }

  span::before,
  span::after {
    position: absolute;
    top: 50%;
    display: flex;
    width: 36px;
    height: 22px;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    transition: all 0.25s ease;
  }

  span::before {
    content: 'EN';
    right: 4px;
  }

  span::after {
    content: 'FR';
    left: 3px;
    border-radius: 999px;
    background: #00ffe7;
    color: #020b18;
    box-shadow: 0 0 10px rgba(0, 255, 231, 0.35);
  }

  input:checked + span::before {
    right: auto;
    left: 4px;
  }

  input:checked + span::after {
    left: 43px;
    content: 'EN';
  }

  input:checked + span::before {
    content: 'FR';
  }

  input:focus-visible + span {
    outline: 2px solid #00ffe7;
    outline-offset: 3px;
  }
`;

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
          <span className="text-glow-cyan">SPIDERGHOST</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-sharetech text-[0.85rem] text-muted tracking-[2px] transition-colors hover:text-cyan hover:text-glow-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <LanguageSwitch title="Changer de langue / Change language">
            <input
              type="checkbox"
              checked={i18n.language.startsWith('en')}
              onChange={(event) => changeLanguage(event.target.checked ? 'en' : 'fr')}
              aria-label={i18n.language.startsWith('en') ? 'Switch to French' : 'Passer en anglais'}
            />
            <span aria-hidden="true" />
          </LanguageSwitch>

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
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
