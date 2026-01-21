// input: 关于与联系文案、当前语言
// output: 站点背景说明与联系入口
// pos: components/About.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Heart, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const About: React.FC = () => {
    const content = useContent();
    const { lang } = useLanguage();

    return (
        <section id="about" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* About Section */}
                    <div>
                        <h2 className="text-3xl font-display text-white mb-6">{content.about.title}</h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                {content.about.description}
                            </p>
                            <p className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-rose-400" />
                                <span>{content.about.madeWithLove}</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact & Links */}
                    <div>
                        <h2 className="text-3xl font-display text-white mb-6" id="contact">{content.about.getInTouch}</h2>
                        <div className="space-y-4">
                            <a
                                href="#"
                                className="flex items-center gap-4 p-4 panel rounded-2xl hover:border-purple-400/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-300 group-hover:bg-purple-500/30">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-medium text-white">{content.about.joinDiscord}</div>
                                    <div className="text-sm text-slate-400">{content.about.discordDesc}</div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-slate-500 ml-auto" />
                            </a>

                            <a
                                href="mailto:tangjei414@gmail.com"
                                className="flex items-center gap-4 p-4 panel rounded-2xl hover:border-rose-400/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center text-rose-300 group-hover:bg-rose-500/30">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-medium text-white">{content.about.emailUs}</div>
                                    <div className="text-sm text-slate-400">tangjei414@gmail.com</div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-slate-500 ml-auto" />
                            </a>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-8 p-4 panel rounded-2xl">
                            <p className="text-xs text-slate-500">
                                {lang === 'fi'
                                    ? 'Tämä wiki ei ole liitetty My Winter Car -pelin kehittäjiin. Kaikki pelisisältö kuuluu omistajilleen.'
                                    : lang === 'sv'
                                        ? 'Denna wiki är inte ansluten till My Winter Car-utvecklarna. Allt spelinnehåll tillhör sina respektive ägare.'
                                        : 'This wiki is not affiliated with the developers of My Winter Car. All game content belongs to their respective owners.'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
