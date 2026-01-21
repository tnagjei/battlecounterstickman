// input: 用户评价文案
// output: 口碑与信任展示区块
// pos: components/Testimonials.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useContent } from '../src/contexts/LanguageContext';

interface Testimonial {
    content: string;
    author: string;
    source: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        content: "This wiki saved me hours of frustration! The Corris Rivett build guide is incredibly detailed.",
        author: "FinnishGamer92",
        source: "Steam Review",
        rating: 5,
    },
    {
        content: "Finally a comprehensive resource for My Winter Car. The parts database is exactly what I needed.",
        author: "WinterSurvivor",
        source: "Reddit",
        rating: 5,
    },
    {
        content: "The survival tips section helped me understand the body temperature mechanics. Great wiki!",
        author: "ColdNights",
        source: "Steam Community",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    const content = useContent();

    return (
        <section id="testimonials" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-white mb-2 md:mb-4">
                        {content.testimonials.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
                        {content.testimonials.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="panel rounded-2xl p-5 md:p-6 animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-300 fill-amber-300" />
                                ))}
                            </div>

                            <div className="relative mb-4">
                                <Quote className="w-6 h-6 text-purple-400/40 absolute -left-1 -top-1" />
                                <p className="text-slate-300 text-sm leading-relaxed pl-4">
                                    {testimonial.content}
                                </p>
                            </div>

                            <div className="flex items-center justify-between text-xs">
                                <span className="text-white font-medium">{testimonial.author}</span>
                                <span className="text-slate-500">{testimonial.source}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
