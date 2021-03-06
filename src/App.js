import logo from './payplug.svg';
import React, {Suspense} from 'react';
import './App.css';
import { useTranslation } from "react-i18next";

function Page() {
  const { i18n, t } = useTranslation(); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button value='arab' onClick={(e) => i18n.changeLanguage(e.target.value)}>
        Arabic
     </button>
     <button value='en' onClick={(e) => i18n.changeLanguage(e.target.value)}>
        English
     </button>
     <button value='fr' onClick={(e) => i18n.changeLanguage(e.target.value)}>
        Français
     </button>
     <button value='es' onClick={(e) => i18n.changeLanguage(e.target.value)}>
        Spanish
     </button>
        <p>
        {t("welcome", "lol")}
        </p>
        <div>{t('ours.bleu', 'r')}</div>
        <p>{t('ours.gris', 'lol')}</p>
        <p>{t('new.traf', 'lol c une nouvelle trad')}</p>
        <a href='www.google.com'>{t('ours.lien', 'zouloudance')}</a>
        <p>{t('test.adam', 'Ceci est un test avec Adam')}</p>
        <p>{t('test.autopull', 'Ceci est un test d\'auto-pullance')}</p>
      </header>
    </div>
  );
}

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
