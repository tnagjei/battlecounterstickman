// input: 使用步骤文案
// output: 站点使用流程展示区块
// pos: components/HowItWorks.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Search, BookOpen, Wrench, Trophy } from 'lucide-react';
import { useContent } from '../src/contexts/LanguageContext';

const HowItWorks: React.FC = () => {
    const content = useContent();

    const steps = [
        {
            number: "01",
            icon: <Search className="w-6 h-6" />,
            title: content.howItWorks.step1,
            description: content.howItWorks.step1Desc
        },
        {
            number: "02",
            icon: <BookOpen className="w-6 h-6" />,
            title: content.howItWorks.step2,
            description: content.howItWorks.step2Desc
        },
        {
            number: "03",
            icon: <Wrench className="w-6 h-6" />,
            title: content.howItWorks.step3,
            description: content.howItWorks.step3Desc
        },
        {
            number: "04",
            icon: <Trophy className="w-6 h-6" />,
            title: content.howItWorks.step4,
            description: content.howItWorks.step4Desc
        }
    ];

    return (
        <section id="how-it-works" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                        {content.howItWorks.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {content.howItWorks.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-rose-400/60 to-transparent" />
                            )}

                            <div className="panel rounded-2xl p-6 relative z-10 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl font-bold text-rose-300/30">{step.number}</span>
                                    <div className="w-12 h-12 bg-rose-500/90 rounded-lg flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
