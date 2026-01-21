// input: FAQ 文案与主题入口
// output: 常见问题折叠展示区块
// pos: components/FAQ.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const content = useContent();
    const { getLocalizedPath } = useLanguage();

    return (
        <section id="faq" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-ink mb-4">
                        {content.faq.title}
                    </h2>
                    <p className="text-soft text-lg">
                        {content.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {content.faq.items.map((item, index) => (
                        <div
                            key={index}
                            className="panel card-cut rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1f1b16]/5 transition-colors"
                            >
                                <span className="font-medium text-ink">{item.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-soft transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-soft text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Browse All Topics Link */}
                <div className="text-center mt-12">
                    <a
                        href="#features"
                        className="inline-flex items-center gap-2 text-[#d14d28] hover:text-[#b94526] transition-colors"
                    >
                        {content.footer.topics} →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
