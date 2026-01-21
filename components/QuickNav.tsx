// input: 快捷导航文案与本地化链接
// output: 首页分类导航入口区块
// pos: components/QuickNav.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { Car, Wrench, BookOpen, Flag, Briefcase, Snowflake } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const QuickNav: React.FC = () => {
  const content = useContent();
  const { getLocalizedPath } = useLanguage();

  const navItems = [
    {
      title: content.quickNav.items.corrisRivett,
      description: "Complete build guide for the main project car",
      icon: Car,
      color: "text-rose-300",
      href: getLocalizedPath("/keywords/corris-rivett")
    },
    {
      title: content.quickNav.items.partsDatabase,
      description: "All 200+ parts catalog with locations and guides",
      icon: Wrench,
      color: "text-purple-300",
      href: getLocalizedPath("/keywords/mods")
    },
    {
      title: content.quickNav.items.beginnerGuide,
      description: "First 30 minutes walkthrough",
      icon: BookOpen,
      color: "text-cyan-300",
      href: getLocalizedPath("/keywords/how-to-get-car")
    },
    {
      title: content.quickNav.items.racingEvents,
      description: "Ice track racing and rally competitions",
      icon: Flag,
      color: "text-slate-200",
      href: getLocalizedPath("/keywords/game")
    },
    {
      title: content.quickNav.items.jobsMoney,
      description: "Fastest earning methods",
      icon: Briefcase,
      color: "text-amber-300",
      href: getLocalizedPath("/keywords/job")
    },
    {
      title: content.quickNav.items.winterSurvival,
      description: "Body temperature and survival mechanics",
      icon: Snowflake,
      color: "text-cyan-200",
      href: getLocalizedPath("/keywords/body-temp")
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 section-cut">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-display text-center text-white mb-8 md:mb-12">
          {content.quickNav.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group panel rounded-2xl p-4 md:p-6 transition-all flex flex-col items-center text-center hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-3 md:mb-4">
                <item.icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-100 group-hover:text-rose-300 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-1 hidden md:block">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNav;
