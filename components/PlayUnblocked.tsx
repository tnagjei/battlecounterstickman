// input: 游戏嵌入配置与提示文案
// output: Unblocked 游戏嵌入区块 (16:9 iframe)
// pos: components/PlayUnblocked.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Play, RefreshCw, Download, AlertCircle } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const PlayUnblocked: React.FC = () => {
    const content = useContent();
    const { getLocalizedPath } = useLanguage();
    const [refreshKey, setRefreshKey] = React.useState(0);

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    return (
        <section id="play" className="py-12 md:py-20 px-4 section-cut bg-[#efe5d4]/70">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-ink mb-2 md:mb-4">
                        {content.playUnblocked.title}
                    </h2>
                    <p className="text-soft text-sm md:text-lg max-w-2xl mx-auto">
                        {content.playUnblocked.subtitle}
                    </p>
                </div>

                {/* Game Container - 16:9 Ratio */}
                <div className="panel panel-strong card-cut rounded-2xl overflow-hidden">
                    {/* Iframe Container */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {/* Game iframe from CrazyGames */}
                        <iframe
                            key={refreshKey}
                            src="https://games.crazygames.com/en_US/battle-simulator-counter-stickman/index.html"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            title="Battle Counter Stickman - Play Unblocked"
                            allow="fullscreen; autoplay; clipboard-write"
                        />
                    </div>

                    {/* Game Controls Bar */}
                    <div className="px-4 py-3 bg-white/70 flex items-center justify-between border-t border-[#1f1b16]/10">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleRefresh}
                                className="flex items-center gap-2 text-soft hover:text-ink text-sm transition-colors"
                            >
                                <RefreshCw className="w-4 h-4" />
                                <span className="hidden sm:inline">{content.playUnblocked.refresh}</span>
                            </button>
                        </div>
                        <a
                            href={getLocalizedPath("/keywords/download")}
                            className="flex items-center gap-2 text-[#d14d28] hover:text-[#b94526] text-sm transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            <span>{content.playUnblocked.downloadFull}</span>
                        </a>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-center">
                    <p className="text-soft text-sm flex items-center justify-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {content.playUnblocked.helpText}
                    </p>
                    <a
                        href={getLocalizedPath("/keywords/download")}
                        className="text-[#d14d28] hover:text-[#b94526] text-sm underline mt-2 inline-block"
                    >
                        {content.playUnblocked.downloadGuide}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PlayUnblocked;
