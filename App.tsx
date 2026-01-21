// input: 站点内容组件
// output: 首页整体布局
// pos: App.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { LanguageProvider } from './src/contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Features from './components/Features';
import WikiPreview from './components/WikiPreview';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-slate-100">
        <Navbar />

        <main>
          {/* Section 1: Hero */}
          <Hero />
          {/* Section 2: What is Battle Counter Stickman? */}
          <WhatIs />
          {/* Section 3: Game Features & Updates */}
          <Features />
          {/* Section 4: Unit Database & Strategy */}
          <WikiPreview />
          {/* Section 5: FAQ */}
          <FAQ />
        </main>

        <FloatingMenu />

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
