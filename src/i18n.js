
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationAr from './locales/ar/translation.json';


const resources = {
  en: {
    global: translationEN
  },
  ar: {
    global: translationAr
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
