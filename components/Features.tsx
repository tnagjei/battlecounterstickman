// input: 功能区块文案与跳转路径
// output: 功能卡片与导航入口
// pos: components/Features.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { BookOpen, Database, Lightbulb, Map, Download, Users } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const Features: React.FC = () => {
    const content = useContent();
    const { getLocalizedPath } = useLanguage();

    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: content.features.buildGuides,
            description: "Level-by-level walkthroughs and winning tactics",
            href: getLocalizedPath("/keywords/strategy-guides"),
            accent: "text-[#d14d28]",
            hover: "group-hover:text-[#d14d28]"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: content.features.partsDatabase,
            description: "Complete database of all units with stats and abilities",
            href: getLocalizedPath("/keywords/unit-database"),
            accent: "text-[#1c7c7b]",
            hover: "group-hover:text-[#1c7c7b]"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: content.features.survival,
            description: "Pro tips to beat the hardest levels",
            href: getLocalizedPath("/keywords/level-tips"),
            accent: "text-[#c08b2a]",
            hover: "group-hover:text-[#c08b2a]"
        },
        {
            icon: <Map className="w-8 h-8" />,
            title: content.features.maps,
            description: "Best unit placements and counter strategies",
            href: getLocalizedPath("/keywords/formations"),
            accent: "text-[#4f6b5a]",
            hover: "group-hover:text-[#4f6b5a]"
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: content.features.jobs,
            description: "Verified download sources for PC, Steam, and APK",
            href: getLocalizedPath("/keywords/download"),
            accent: "text-[#d14d28]",
            hover: "group-hover:text-[#d14d28]"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: content.features.community,
            description: "Discover tips and tricks from experienced players",
            href: getLocalizedPath("/keywords/community"),
            accent: "text-[#1c7c7b]",
            hover: "group-hover:text-[#1c7c7b]"
        }
    ];

    return (
        <section id="features" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-display text-ink mb-2 md:mb-4">
                        {content.features.title}
                    </h2>
                    <p className="text-soft text-sm md:text-lg max-w-2xl mx-auto">
                        {content.features.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {features.map((feature, index) => (
                        <a
                            key={index}
                            href={feature.href}
                            className="panel card-cut rounded-2xl p-4 md:p-6 hover:-translate-y-1 transition-all group block animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className={`w-10 h-10 md:w-14 md:h-14 bg-[#1f1b16]/10 rounded-lg flex items-center justify-center ${feature.accent} mb-2 md:mb-4 glow-ring`}>
                                {feature.icon}
                            </div>
                            <h3 className={`text-sm md:text-xl font-semibold text-ink mb-1 md:mb-2 ${feature.hover} transition-colors`}>
                                {feature.title}
                            </h3>
                            <p className="text-soft text-xs md:text-sm leading-relaxed hidden md:block">
                                {feature.description}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Browse All Topics Link */}
                <div className="text-center mt-12">
                    <a
                        href={getLocalizedPath("/keywords")}
                        className="inline-flex items-center gap-2 px-6 py-3 btn-secondary rounded-full font-semibold transition-colors"
                    >
                        {content.footer.topics} →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
