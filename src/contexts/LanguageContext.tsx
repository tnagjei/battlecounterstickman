/**
 * src/contexts/LanguageContext.tsx
 * 语言上下文，提供当前语言和翻译内容
 */
import React, { createContext, useContext, useMemo } from 'react';
import { getContent, getLangFromPath, SupportedLang, I18nContent } from '../i18n';

interface LanguageContextType {
    lang: SupportedLang;
    content: I18nContent;
    getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const lang = useMemo(() => getLangFromPath(window.location.pathname), []);
    const content = useMemo(() => getContent(lang), [lang]);

    const getLocalizedPath = (path: string): string => {
        if (lang === 'en') return path;
        // 如果路径已经包含语言前缀，返回原路径
        if (path.startsWith('/fi/') || path.startsWith('/sv/')) return path;
        // 添加语言前缀
        return `/${lang}${path}`;
    };

    return (
        <LanguageContext.Provider value={{ lang, content, getLocalizedPath }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useLang = (): SupportedLang => {
    return useLanguage().lang;
};

export const useContent = (): I18nContent => {
    return useLanguage().content;
};
