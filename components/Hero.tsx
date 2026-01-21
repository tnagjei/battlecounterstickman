// input: 首屏文案与本地化导航路径
// output: 视觉主区块与核心 CTA
// pos: components/Hero.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { ExternalLink, Swords, Shield, Target, Zap } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const Hero: React.FC = () => {
  const content = useContent();
  const { getLocalizedPath } = useLanguage();

  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden section-cut">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Battle Counter Stickman Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0f0f23]/90 to-[#0a0a1a]"></div>
        <div className="absolute left-6 top-24 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute right-0 bottom-16 w-72 h-72 rounded-full bg-rose-500/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="text-left animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip text-xs uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              {content.hero.subtitle}
            </span>

            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(120deg, var(--secondary), var(--accent-cyan))' }}
            >
              {content.hero.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200">
              {content.hero.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#play"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 btn-primary rounded-full font-bold transition-colors text-sm md:text-base"
              >
                {content.hero.ctaPrimary}
              </a>
              <a
                href="https://store.steampowered.com/search/?term=Battle+Counter+Stickman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 btn-secondary rounded-full font-bold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <span>{content.hero.ctaSecondary}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="panel panel-strong rounded-2xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display text-white">{content.quickNav.title}</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">BCS</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href={getLocalizedPath('/keywords/unit-stats')} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-400/50 transition-colors">
                <Swords className="w-5 h-5 text-rose-300" />
                <span className="text-sm text-slate-200">{content.quickNav.items.corrisRivett}</span>
              </a>
              <a href={getLocalizedPath('/keywords/strategy')} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-400/50 transition-colors">
                <Shield className="w-5 h-5 text-purple-300" />
                <span className="text-sm text-slate-200">{content.quickNav.items.partsDatabase}</span>
              </a>
              <a href={getLocalizedPath('/keywords/download')} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-400/50 transition-colors">
                <Target className="w-5 h-5 text-amber-300" />
                <span className="text-sm text-slate-200">{content.quickNav.items.jobsMoney}</span>
              </a>
              <a href="#play" className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-400/50 transition-colors">
                <Zap className="w-5 h-5 text-cyan-300" />
                <span className="text-sm text-slate-200">{content.quickNav.items.winterSurvival}</span>
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-400">
              {content.hero.subtitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
