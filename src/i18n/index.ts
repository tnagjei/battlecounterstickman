/**
 * src/i18n/index.ts
 * Language content dictionary index and utilities
 */

import { en, I18nContent } from './en';
import { fi } from './fi';
import { sv } from './sv';

export type SupportedLang = 'en' | 'fi' | 'sv';

export const languages: Record<SupportedLang, I18nContent> = {
    en,
    fi,
    sv,
};

export const supportedLangs: SupportedLang[] = ['en', 'fi', 'sv'];

export const getContent = (lang: SupportedLang): I18nContent => {
    return languages[lang] || en;
};

export const getLangFromPath = (path: string): SupportedLang => {
    if (path.startsWith('/fi/') || path === '/fi') return 'fi';
    if (path.startsWith('/sv/') || path === '/sv') return 'sv';
    return 'en';
};

export { en, fi, sv };
export type { I18nContent };
