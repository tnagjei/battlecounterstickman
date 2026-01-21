// input: 游戏单位数据与展示配置
// output: 单位卡片网格展示区块
// pos: components/UnitShowcase.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Eye, Heart, Swords, Coins } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

// 单位数据类型
interface Unit {
    id: string;
    name: string;
    image: string;
    hp: number;
    attack: number;
    cost: number;
}

// 示例单位数据 - 使用内联 SVG 占位图避免 404
const units: Unit[] = [
    { id: 'special-forces', name: 'Special Forces', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%23d14d28" font-size="10" font-weight="bold">SF</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Special Forces</text></svg>', hp: 150, attack: 35, cost: 200 },
    { id: 'sniper', name: 'Sniper', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%231c7c7b" font-size="10" font-weight="bold">SN</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Sniper</text></svg>', hp: 80, attack: 100, cost: 350 },
    { id: 'tank', name: 'Heavy Tank', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%23c08b2a" font-size="10" font-weight="bold">TK</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Heavy Tank</text></svg>', hp: 500, attack: 50, cost: 600 },
    { id: 'medic', name: 'Combat Medic', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%234f6b5a" font-size="10" font-weight="bold">MD</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Combat Medic</text></svg>', hp: 100, attack: 10, cost: 150 },
    { id: 'grenadier', name: 'Grenadier', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%233b5b7c" font-size="10" font-weight="bold">GR</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Grenadier</text></svg>', hp: 120, attack: 60, cost: 280 },
    { id: 'commander', name: 'Commander', image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%231f1b16" width="100" height="75"/><text x="50" y="35" text-anchor="middle" fill="%238b5a2b" font-size="10" font-weight="bold">CM</text><text x="50" y="50" text-anchor="middle" fill="%23a89a88" font-size="6">Commander</text></svg>', hp: 200, attack: 25, cost: 400 },
];

const UnitShowcase: React.FC = () => {
    const content = useContent();
    const { getLocalizedPath } = useLanguage();

    return (
        <section id="units" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-ink mb-2 md:mb-4">
                        {content.unitShowcase.title}
                    </h2>
                    <p className="text-soft text-sm md:text-lg max-w-2xl mx-auto">
                        {content.unitShowcase.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {units.map((unit, index) => (
                        <div
                            key={unit.id}
                            className="panel panel-strong card-cut rounded-2xl overflow-hidden group animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Unit Image */}
                            <div className="relative aspect-[4/3] bg-[#1f1b16]/15 overflow-hidden">
                                <img
                                    src={unit.image}
                                    alt={`Battle Counter Stickman ${unit.name}`}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    onError={(e) => {
                                        // Fallback placeholder
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 75"><rect fill="%23e5dbc7" width="100" height="75"/><text x="50" y="40" text-anchor="middle" fill="%235b5246" font-size="8">' + unit.name + '</text></svg>';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16]/60 to-transparent"></div>
                            </div>

                            {/* Unit Info */}
                            <div className="p-4">
                                <h3 className="text-lg md:text-xl font-semibold text-ink mb-3">
                                    {unit.name}
                                </h3>

                                {/* Stats */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-soft">
                                            <Heart className="w-4 h-4 text-[#d14d28]" />
                                            HP
                                        </span>
                                        <span className="text-ink font-medium">{unit.hp}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-soft">
                                            <Swords className="w-4 h-4 text-[#c08b2a]" />
                                            Attack
                                        </span>
                                        <span className="text-ink font-medium">{unit.attack}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-soft">
                                            <Coins className="w-4 h-4 text-[#1c7c7b]" />
                                            Cost
                                        </span>
                                        <span className="text-ink font-medium">{unit.cost}</span>
                                    </div>
                                </div>

                                {/* View Details Button - placeholder until pages exist */}
                                <button
                                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 btn-secondary rounded-lg font-medium text-sm transition-colors cursor-default opacity-70"
                                    title="Coming soon"
                                >
                                    <Eye className="w-4 h-4" />
                                    {content.unitShowcase.viewDetails}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Units Link */}
                <div className="text-center mt-10">
                    <button
                        className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold transition-colors cursor-default opacity-70"
                        title="Coming soon"
                    >
                        {content.unitShowcase.viewAll} →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UnitShowcase;
