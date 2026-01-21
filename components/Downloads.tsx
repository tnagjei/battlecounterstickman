// input: 下载选项文案与链接
// output: 多平台下载卡片展示区块
// pos: components/Downloads.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Monitor, Smartphone, Apple, Download, ExternalLink } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const Downloads: React.FC = () => {
    const content = useContent();
    const { getLocalizedPath } = useLanguage();

    const platforms = [
        {
            id: 'steam',
            name: content.downloads.pc,
            description: content.downloads.pcDesc,
            icon: Monitor,
            action: content.downloads.steam,
            href: "https://store.steampowered.com/app/2623090/Battle_Simulator_Counter_Stickman/",
            primary: true,
            color: "text-[#1b2838]", // Steam dark blue
            bg: "bg-[#1b2838]",
            text: "text-white"
        },
        {
            id: 'android',
            name: content.downloads.android,
            description: content.downloads.androidDesc,
            icon: Smartphone,
            action: content.downloads.playStore,
            href: "https://play.google.com/store/apps/details?id=com.lmstudios.battle.simulator.counter.stickman&hl=en",
            primary: false,
            color: "text-[#3dda84]", // Android green
            bg: "bg-white",
            text: "text-ink"
        },
        {
            id: 'ios',
            name: content.downloads.ios,
            description: content.downloads.iosDesc,
            icon: Apple,
            action: content.downloads.iosDesc, // "Coming soon"
            href: null,
            primary: false,
            color: "text-slate-800",
            bg: "bg-white",
            text: "text-ink",
            disabled: true
        }
    ];

    return (
        <section id="downloads" className="py-12 md:py-20 px-4 section-cut bg-[#e6dac4]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-display text-ink mb-2 md:mb-4">
                        {content.downloads.title}
                    </h2>
                    <p className="text-soft text-sm md:text-lg max-w-2xl mx-auto">
                        {content.downloads.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {platforms.map((platform, index) => (
                        <div
                            key={platform.id}
                            className={`panel card-cut rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${platform.disabled ? 'opacity-70 grayscale' : 'hover:shadow-xl'}`}
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${platform.primary ? 'bg-[#d14d28]/10 text-[#d14d28]' : 'bg-[#1f1b16]/5 text-ink'}`}>
                                <platform.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-ink mb-2">
                                {platform.name}
                            </h3>
                            <p className="text-soft text-sm mb-8 flex-grow">
                                {platform.description}
                            </p>

                            {platform.href ? (
                                <a
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${platform.primary
                                        ? 'btn-primary shadow-lg shadow-[#d14d28]/20'
                                        : 'bg-[#1f1b16] text-[#e6dac4] hover:bg-[#322d26]'
                                        }`}
                                >
                                    {platform.primary ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                                    <span>{platform.action}</span>
                                </a>
                            ) : (
                                <button disabled className="w-full py-3 px-6 rounded-xl font-bold bg-[#1f1b16]/10 text-soft cursor-not-allowed">
                                    {platform.action}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Downloads;
