import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../localization/en.json'
import translationES from '../localization/es.json'


export const languageResources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    }

};

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: languageResources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },

});

export default i18next;