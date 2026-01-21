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
    <section className="relative pt-16 md:pt-28 pb-10 md:pb-24 overflow-hidden section-cut">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/battle-counter-stickman-hero-background.jpg"
          alt="Battle Counter Stickman Gameplay Background"
          className="w-full h-full object-cover opacity-85"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7efe1]/70 via-[#f0e4d0]/80 to-[#e6dac4]"></div>
        <div className="absolute left-6 top-24 w-64 h-64 rounded-full border border-[#1c7c7b]/30 animate-float"></div>
        <div className="absolute right-10 bottom-16 w-72 h-72 rounded-full border border-[#d14d28]/25 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="text-left animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip text-xs uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#d14d28]"></span>
              {content.hero.subtitle}
            </span>

            <h1
              className="mt-4 md:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(120deg, #1f1b16 0%, #d14d28 45%, #1c7c7b 100%)' }}
            >
              {content.hero.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted">
              {content.hero.tagline}
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#play"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 btn-primary rounded-full font-bold transition-colors text-sm md:text-base"
              >
                {content.hero.ctaPrimary}
              </a>
              <a
                href="https://store.steampowered.com/app/2623090/Battle_Simulator_Counter_Stickman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 btn-secondary rounded-full font-bold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <span>{content.hero.ctaSecondary}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="panel panel-strong card-cut rounded-2xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display text-ink">{content.quickNav.title}</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-soft">BCS</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="#units" className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#1f1b16]/10 hover:border-[#1c7c7b]/50 transition-colors">
                <Swords className="w-5 h-5 text-[#d14d28]" />
                <span className="text-sm text-ink">{content.quickNav.items.corrisRivett}</span>
              </a>
              <a href="#wiki" className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#1f1b16]/10 hover:border-[#1c7c7b]/50 transition-colors">
                <Shield className="w-5 h-5 text-[#1c7c7b]" />
                <span className="text-sm text-ink">{content.quickNav.items.partsDatabase}</span>
              </a>
              <a href="#downloads" className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#1f1b16]/10 hover:border-[#1c7c7b]/50 transition-colors">
                <Target className="w-5 h-5 text-[#c08b2a]" />
                <span className="text-sm text-ink">{content.quickNav.items.jobsMoney}</span>
              </a>
              <a href="#play" className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#1f1b16]/10 hover:border-[#1c7c7b]/50 transition-colors">
                <Zap className="w-5 h-5 text-[#4f6b5a]" />
                <span className="text-sm text-ink">{content.quickNav.items.winterSurvival}</span>
              </a>
            </div>
            <div className="mt-6 text-xs text-soft">
              {content.hero.subtitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
