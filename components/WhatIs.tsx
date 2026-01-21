// input: 游戏简介与统计信息文案
// output: 游戏背景介绍与核心信息卡片
// pos: components/WhatIs.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Gamepad2, Swords, Zap, RefreshCw } from 'lucide-react';
import { useContent } from '../src/contexts/LanguageContext';

const WhatIs: React.FC = () => {
    const content = useContent();

    return (
        <section id="what-is" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-2xl md:text-4xl font-display text-white mb-4 md:mb-6">
                            {content.whatIs.title}
                        </h2>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                            {content.whatIs.description1}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {content.whatIs.description2}
                        </p>

                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm">
                                <Gamepad2 className="w-4 h-4 text-cyan-300" />
                                <span>{content.whatIs.survivalSim}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm">
                                <Swords className="w-4 h-4 text-rose-300" />
                                <span>{content.whatIs.carBuilding}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm">
                                <Zap className="w-4 h-4 text-amber-300" />
                                <span>{content.whatIs.finnishWinter}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm">
                                <RefreshCw className="w-4 h-4 text-purple-300" />
                                <span>{content.whatIs.earlyAccess}</span>
                            </div>
                        </div>
                    </div>

                    {/* Game Stats */}
                    <div className="panel panel-strong rounded-2xl p-6">
                        <h3 className="text-lg font-display text-white mb-4">{content.whatIs.gameStats}</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{content.whatIs.release}</span>
                                <span className="text-white font-medium">2024</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{content.whatIs.developer}</span>
                                <span className="text-white font-medium">Independent Studio</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{content.whatIs.platform}</span>
                                <span className="text-white font-medium">PC / Android</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{content.whatIs.genre}</span>
                                <span className="text-white font-medium">Strategy / Simulation</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{content.whatIs.setting}</span>
                                <span className="text-white font-medium">Stickman Battles</span>
                            </div>
                        </div>

                        <a
                            href="https://store.steampowered.com/search/?term=Battle+Counter+Stickman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 block w-full text-center px-4 py-3 btn-primary rounded-xl font-semibold transition-colors"
                        >
                            {content.whatIs.viewOnSteam}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIs;
