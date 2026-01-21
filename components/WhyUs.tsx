// input: 价值主张与优势文案
// output: 可信度与优势展示区块
// pos: components/WhyUs.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { CheckCircle, Clock, Users, Search, Shield, Zap } from 'lucide-react';
import { useContent } from '../src/contexts/LanguageContext';

const WhyUs: React.FC = () => {
    const content = useContent();

    const reasons = [
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: content.whyUs.accurate,
            description: content.whyUs.accurateDesc,
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: content.whyUs.updated,
            description: content.whyUs.updatedDesc,
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: content.whyUs.community,
            description: content.whyUs.communityDesc,
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: content.whyUs.easyNav,
            description: content.whyUs.easyNavDesc,
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: content.whyUs.noSpoilers,
            description: content.whyUs.noSpoilersDesc,
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: content.whyUs.fastFree,
            description: content.whyUs.fastFreeDesc,
        },
    ];

    return (
        <section id="why-us" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-white mb-2 md:mb-4">
                        {content.whyUs.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
                        {content.whyUs.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="panel rounded-2xl p-4 md:p-5 animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="text-rose-300 mb-3">
                                {reason.icon}
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                                {reason.title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm hidden md:block">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
