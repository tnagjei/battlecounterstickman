// input: 站点内容组件
// output: 首页整体布局
// pos: App.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React from 'react';
import { LanguageProvider } from './src/contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameInfoTable from './components/GameInfoTable';
import WhatIs from './components/WhatIs';
import Features from './components/Features';
import Videos from './components/Videos';
import WikiPreview from './components/WikiPreview';
import UnitShowcase from './components/UnitShowcase';
import Downloads from './components/Downloads';
import PlayUnblocked from './components/PlayUnblocked';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-ink">
        <Navbar />

        <main>
          {/* Section 1: Hero */}
          <Hero />
          {/* Section 1.5: Game Info Table */}
          <GameInfoTable />
          {/* Section 2: What is Battle Counter Stickman? */}
          <WhatIs />
          {/* Section 3: Video Guides */}
          <Videos />
          {/* Section 4: Game Features & Updates */}
          <Features />
          {/* Section 5: Unit Database & Strategy Cards */}
          <WikiPreview />
          {/* Section 6: Unit Showcase Grid */}
          <UnitShowcase />

          {/* Section 7: Downloads */}
          <Downloads />

          {/* Section 8: Play Unblocked (iframe) */}
          <PlayUnblocked />
          {/* Section 9: FAQ */}
          <FAQ />
        </main>

        <FloatingMenu />

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
