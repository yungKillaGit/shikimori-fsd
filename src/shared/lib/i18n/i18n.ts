import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
      prefix: '{',
      suffix: '}',
    },
  });

export const t = (key: string, options = {}) => {
  const translation = i18n.t(`translation:${key}`, options);
  if (!translation) {
    console.error(`Missing translation: ${key}`);
  }

  return translation;
};
