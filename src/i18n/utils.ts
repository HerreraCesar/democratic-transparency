import { dictionary, defaultLang, showDefaultLang } from "./dictionary";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in dictionary) return lang as keyof typeof dictionary;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof dictionary) {
  return function t(key: keyof (typeof dictionary)[typeof defaultLang]) {
    return dictionary[lang][key] || dictionary[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof dictionary) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
