import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 text-center py-[30px] px-[8vw] border-t border-border font-sharetech text-[0.72rem] text-muted tracking-[2px]">
      <p>
        © {new Date().getFullYear()} SPIDER_GOST. {t('footer.rights')} <br/>
        {t('footer.builtWith')} <span className="text-cyan"></span>passion <span className="text-cyan"></span>.
      </p>
    </footer>
  );
}
