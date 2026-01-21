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
            href: getLocalizedPath("/keywords/strategy-guides")
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: content.features.partsDatabase,
            description: "Complete database of all units with stats and abilities",
            href: getLocalizedPath("/keywords/unit-database")
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: content.features.survival,
            description: "Pro tips to beat the hardest levels",
            href: getLocalizedPath("/keywords/level-tips")
        },
        {
            icon: <Map className="w-8 h-8" />,
            title: content.features.maps,
            description: "Best unit placements and counter strategies",
            href: getLocalizedPath("/keywords/formations")
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: content.features.jobs,
            description: "Verified download sources for PC, Steam, and APK",
            href: getLocalizedPath("/keywords/download")
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: content.features.community,
            description: "Discover tips and tricks from experienced players",
            href: getLocalizedPath("/keywords/community")
        }
    ];

    return (
        <section id="features" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-display text-white mb-2 md:mb-4">
                        {content.features.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
                        {content.features.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {features.map((feature, index) => (
                        <a
                            key={index}
                            href={feature.href}
                            className="panel rounded-2xl p-4 md:p-6 hover:-translate-y-1 transition-all group block animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-black/40 rounded-lg flex items-center justify-center text-rose-300 mb-2 md:mb-4 glow-ring">
                                {feature.icon}
                            </div>
                            <h3 className="text-sm md:text-xl font-semibold text-white mb-1 md:mb-2 group-hover:text-rose-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed hidden md:block">
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
