import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("Lang-pref") ?? "EN",
    lng: localStorage.getItem("Lang-pref") ?? "EN",
    resources: {
        EN: {
            translations: require('./locales/en/translations.json')
        },
        العربية: {
            translations: require('./locales/ar/translations.json')
        }

    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['EN', 'العربية'];

export default i18n;