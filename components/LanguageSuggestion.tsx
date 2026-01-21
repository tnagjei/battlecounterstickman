// input: 浏览器语言与当前页面语言
// output: 语言切换建议弹窗
// pos: components/LanguageSuggestion.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState, useEffect } from 'react';
import { X, Globe } from 'lucide-react';
import { useContent } from '../src/contexts/LanguageContext';

interface LanguageConfig {
    code: string;
    name: string;
    nativeName: string;
    path: string;
}

const supportedLanguages: LanguageConfig[] = [
    { code: 'en', name: 'English', nativeName: 'English', path: '/' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi', path: '/fi/' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska', path: '/sv/' },
];

const STORAGE_KEY = 'mwc_lang_dismissed';

/**
 * 获取当前页面语言
 */
const getCurrentPageLang = (): string => {
    const path = window.location.pathname;
    if (path.startsWith('/fi/') || path === '/fi') return 'fi';
    if (path.startsWith('/sv/') || path === '/sv') return 'sv';
    return 'en';
};

/**
 * 获取浏览器语言
 */
const getBrowserLang = (): string => {
    return navigator.language.toLowerCase().split('-')[0];
};

const LanguageSuggestion: React.FC = () => {
    const [suggestedLang, setSuggestedLang] = useState<LanguageConfig | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const content = useContent();

    useEffect(() => {
        // 检查是否已经关闭过（本次会话）
        const dismissed = sessionStorage.getItem(STORAGE_KEY);
        if (dismissed) return;

        const currentPageLang = getCurrentPageLang();
        const browserLang = getBrowserLang();

        // 如果页面语言与浏览器语言相同，不提示
        if (currentPageLang === browserLang) return;

        // 查找浏览器语言对应的页面
        const matched = supportedLanguages.find(lang => lang.code === browserLang);

        if (matched) {
            setSuggestedLang(matched);
            // 延迟显示，页面加载后 1.5 秒
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem(STORAGE_KEY, 'true');
    };

    const handleSwitch = () => {
        if (suggestedLang) {
            window.location.href = suggestedLang.path;
        }
    };

    if (!isVisible || !suggestedLang) return null;

    const currentLang = supportedLanguages.find(l => l.code === getCurrentPageLang());
    const currentLangName = currentLang?.nativeName || 'this language';

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
            <div className="panel rounded-2xl p-4">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center shrink-0">
                        <Globe className="w-5 h-5 text-rose-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm mb-1">
                            {content.langSuggestion.available.replace('{lang}', suggestedLang.nativeName)}
                        </p>
                        <p className="text-slate-400 text-xs mb-3">
                            {content.langSuggestion.pageInLang
                                .replace('{currentLang}', currentLangName)
                                .replace('{targetLang}', suggestedLang.nativeName)}
                        </p>

                        <div className="flex gap-2">
                            <button
                                onClick={handleSwitch}
                                className="px-4 py-2 btn-primary text-sm font-medium rounded-lg transition-colors"
                            >
                                {content.langSuggestion.switchTo.replace('{lang}', suggestedLang.nativeName)}
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="px-4 py-2 btn-secondary text-slate-200 text-sm font-medium rounded-lg transition-colors"
                            >
                                {content.langSuggestion.stay}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleDismiss}
                        className="text-slate-500 hover:text-slate-300 transition-colors shrink-0"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSuggestion;
