// input: 导航文案与当前语言路径
// output: 顶部导航栏与多端交互入口
// pos: components/Navbar.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const content = useContent();
  const { lang, getLocalizedPath } = useLanguage();

  const navLinks = [
    { href: getLocalizedPath('/keywords'), label: content.navbar.guides },
    { href: '#units', label: content.navbar.mods },
    { href: '#faq', label: content.navbar.faq },
    { href: '/blog.html', label: content.navbar.blog },
    { href: '/about.html', label: content.navbar.about },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-soft backdrop-blur-md border-b border-white/10 h-14 md:h-16">
        <div className="max-w-7xl mx-auto px-3 md:px-4 h-full flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <a href={getLocalizedPath('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <img src="/battle-counter-stickman-logo.png" alt="Battle Counter Stickman Guide" className="h-8 md:h-10 w-auto" />
            <span className="hidden sm:inline font-display text-invert text-sm md:text-base">BCS Guide</span>
          </a>

          {/* Desktop Search Bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#cbbfb0] group-focus-within:text-[#f3c47a] transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full bg-[#2a241e]/70 text-invert placeholder-[#cbbfb0] focus:outline-none focus:border-[#d14d28]/60 focus:ring-1 focus:ring-[#d14d28]/20 text-sm transition-all"
                placeholder={content.navbar.searchPlaceholder}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#f0e4d3] bg-white/5 border border-white/10 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-[#fff7ea] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher - EN only for now */}
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#cbbfb0]">
            <a href="/" className={lang === 'en' ? 'text-[#f3c47a] font-semibold' : 'hover:text-[#fff7ea]'}>EN</a>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://store.steampowered.com/app/2623090/Battle_Simulator_Counter_Stickman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary animate-glow px-4 py-2 rounded-full transition-colors font-semibold text-sm whitespace-nowrap"
          >
            {content.navbar.steam}
          </a>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#f0e4d3] hover:text-[#fff7ea] hover:bg-white/10 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#f0e4d3] hover:text-[#fff7ea] hover:bg-white/10 rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search Drawer */}
      {isSearchOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-ink-soft border-b border-white/10 p-3 md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#cbbfb0]" />
            </div>
            <input
              type="text"
              autoFocus
              className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-lg bg-[#2a241e]/70 text-invert placeholder-[#cbbfb0] focus:outline-none focus:border-[#d14d28] text-base"
              placeholder={content.navbar.searchPlaceholder}
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bottom-0 z-40 bg-[#1f1b16]/95 md:hidden overflow-y-auto">
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#f5efe4] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Language Switcher in Mobile Menu */}
            <div className="flex gap-4 px-4 py-3 border-t border-white/10 mt-3">
              <a href="/" className={lang === 'en' ? 'text-[#f3c47a] font-medium' : 'text-[#cbbfb0]'}>English</a>
            </div>
            <div className="pt-3">
              <a
                href="https://store.steampowered.com/app/2623090/Battle_Simulator_Counter_Stickman/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 btn-primary rounded-lg font-semibold transition-colors"
              >
                {content.navbar.steam}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
