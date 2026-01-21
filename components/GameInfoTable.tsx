// input: Game Info content from i18n
// output: Semantic HTML Table with game details
// pos: components/GameInfoTable.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { useContent } from '../src/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const GameInfoTable: React.FC = () => {
    const content = useContent();

    return (
        <section className="py-8 px-4 bg-[#f7efe1]">
            <div className="max-w-4xl mx-auto">
                <div className="overflow-hidden rounded-xl border border-[#d14d28]/20 shadow-sm bg-white">
                    <table className="w-full text-left text-sm md:text-base">
                        <tbody className="divide-y divide-[#1f1b16]/10">
                            {/* Status */}
                            <tr className="hover:bg-[#f7efe1]/30 transition-colors">
                                <th scope="row" className="px-6 py-4 font-bold text-ink w-1/3 bg-[#f7efe1]/50">
                                    {content.gameInfo.statusLabel}
                                </th>
                                <td className="px-6 py-4 font-medium text-ink flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 fill-green-100" />
                                    <span>{content.gameInfo.statusValue}</span>
                                </td>
                            </tr>

                            {/* Platform */}
                            <tr className="hover:bg-[#f7efe1]/30 transition-colors">
                                <th scope="row" className="px-6 py-4 font-bold text-ink w-1/3 bg-[#f7efe1]/50">
                                    {content.gameInfo.platformLabel}
                                </th>
                                <td className="px-6 py-4 text-soft">
                                    {content.gameInfo.platformValue}
                                </td>
                            </tr>

                            {/* Price */}
                            <tr className="hover:bg-[#f7efe1]/30 transition-colors">
                                <th scope="row" className="px-6 py-4 font-bold text-ink w-1/3 bg-[#f7efe1]/50">
                                    {content.gameInfo.priceLabel}
                                </th>
                                <td className="px-6 py-4 text-soft">
                                    {content.gameInfo.priceValue}
                                </td>
                            </tr>

                            {/* Last Update */}
                            <tr className="hover:bg-[#f7efe1]/30 transition-colors">
                                <th scope="row" className="px-6 py-4 font-bold text-ink w-1/3 bg-[#f7efe1]/50">
                                    {content.gameInfo.lastUpdateLabel}
                                </th>
                                <td className="px-6 py-4 font-semibold text-green-600">
                                    {content.gameInfo.lastUpdateValue}
                                </td>
                            </tr>

                            {/* Developer */}
                            <tr className="hover:bg-[#f7efe1]/30 transition-colors">
                                <th scope="row" className="px-6 py-4 font-bold text-ink w-1/3 bg-[#f7efe1]/50">
                                    {content.gameInfo.developerLabel}
                                </th>
                                <td className="px-6 py-4 text-soft">
                                    {content.gameInfo.developerValue}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default GameInfoTable;
