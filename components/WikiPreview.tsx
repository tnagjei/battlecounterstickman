// input: Wiki 预览文案与内容结构
// output: Unit Database 与 Strategy 卡片预览区块
// pos: components/WikiPreview.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Database, BookOpen, Download, Play } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const WikiPreview: React.FC = () => {
    const content = useContent();
    const { getLocalizedPath } = useLanguage();

    const cards = [
        {
            icon: <Database className="w-8 h-8" />,
            title: content.wikiPreview.unitStats,
            description: content.wikiPreview.unitStatsDesc,
            href: getLocalizedPath("/keywords/unit-stats"),
            color: "text-cyan-300",
            borderColor: "hover:border-cyan-400/50"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: content.wikiPreview.strategyGuide,
            description: content.wikiPreview.strategyGuideDesc,
            href: getLocalizedPath("/keywords/strategy"),
            color: "text-purple-300",
            borderColor: "hover:border-purple-400/50"
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: content.wikiPreview.downloadLinks,
            description: content.wikiPreview.downloadLinksDesc,
            href: getLocalizedPath("/keywords/download"),
            color: "text-rose-300",
            borderColor: "hover:border-rose-400/50"
        },
        {
            icon: <Play className="w-8 h-8" />,
            title: content.wikiPreview.unblockedPlay,
            description: content.wikiPreview.unblockedPlayDesc,
            href: "#play",
            color: "text-amber-300",
            borderColor: "hover:border-amber-400/50"
        }
    ];

    return (
        <section id="wiki" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-white mb-2 md:mb-4">
                        {content.wikiPreview.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
                        {content.wikiPreview.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.href}
                            className={`panel panel-strong rounded-2xl p-5 md:p-6 border border-white/10 ${card.borderColor} transition-all hover:-translate-y-1 block animate-fade-up`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-12 h-12 md:w-14 md:h-14 bg-black/40 rounded-xl flex items-center justify-center ${card.color} mb-4`}>
                                {card.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                {card.title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WikiPreview;
