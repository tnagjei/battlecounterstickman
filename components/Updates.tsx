// input: 更新列表与本地化文案
// output: 时间线更新与欢迎卡片
// pos: components/Updates.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { UpdateItem } from '../types';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const updates: UpdateItem[] = [
  {
    date: "December 29, 2025",
    title: "My Winter Car Early Access Launch",
    content: "Game released on Steam with 97% overwhelmingly positive reviews!",
    icon: "🎉"
  },
  {
    date: "December 30, 2025",
    title: "Complete Corris Rivett Parts List",
    content: "Full documentation added for all 200+ parts needed to build the Rivett.",
    icon: "📝"
  },
  {
    date: "December 30, 2025",
    title: "mywintercar.info Wiki Launch",
    content: "Official wiki goes live with comprehensive guides and resources.",
    icon: "🏗️"
  },
  {
    date: "January 2026",
    title: "Coming Soon: Advanced Tuning Guide",
    content: "Detailed engine tuning and performance modifications guide.",
    icon: "🔜"
  }
];

const Updates: React.FC = () => {
  const content = useContent();
  const { lang } = useLanguage();

  return (
    <section className="py-12 md:py-20 px-4 section-cut">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display text-center text-white mb-16">{content.updates.title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Updates List */}
          <div className="lg:col-span-2 space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10 group">
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-rose-400 group-hover:bg-rose-300 transition-colors ring-4 ring-black"></div>

                <div className="mb-1 text-sm font-semibold text-rose-300">
                  {update.date}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
                  <span>{update.icon}</span>
                  {update.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {update.content}
                </p>
                <div className="mt-4 h-px bg-white/10 w-full group-last:hidden"></div>
              </div>
            ))}
          </div>

          {/* Right Column: Welcome Card */}
          <div className="lg:col-span-1">
            <div className="panel panel-strong rounded-2xl p-6 relative overflow-hidden h-full flex flex-col">
              {/* Decorative background accent */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  Wiki Launch
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  Welcome to mywintercar.info! 🚀
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  {lang === 'fi'
                    ? 'Rakennamme kattavinta My Winter Car -resurssikeskusta.'
                    : lang === 'sv'
                      ? 'Vi bygger den mest omfattande My Winter Car-resursen.'
                      : 'We\'re building the most comprehensive My Winter Car resource hub.'
                  }
                </p>
              </div>

              <div className="mt-auto">
                <button className="w-full py-3 btn-primary rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
                  {content.updates.joinCommunity}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
