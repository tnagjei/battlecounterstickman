// input: i18n 页脚文案与当前语言路径
// output: 带互链图标的站点页脚内容
// pos: components/Footer.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { useContent, useLanguage } from '../src/contexts/LanguageContext';

const Footer: React.FC = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const content = useContent();
    const { getLocalizedPath, lang } = useLanguage();

    const copyrightText = content.footer.copyright.replace('{year}', new Date().getFullYear().toString());

    return (
        <footer className="bg-[#1f1b16] border-t border-white/10 mt-12">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Internal Navigation */}
                <div className="text-center">
                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-[#d9cdbc] text-sm">
                        <a href="/about" className="hover:text-[#fff7ea] transition-colors">{content.footer.about}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href="/blog" className="hover:text-[#fff7ea] transition-colors">{content.footer.blog}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href="/help" className="hover:text-[#fff7ea] transition-colors">{content.footer.help}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href="#faq" className="hover:text-[#fff7ea] transition-colors">{content.footer.faq}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href={getLocalizedPath("/keywords")} className="hover:text-[#fff7ea] transition-colors">{content.footer.topics}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href="/privacy" className="hover:text-[#fff7ea] transition-colors">{content.footer.privacy}</a>
                        <span className="text-[#6f6458]">•</span>
                        <a href="/terms" className="hover:text-[#fff7ea] transition-colors">{content.footer.terms}</a>
                    </div>
                </div>



                {/* Contact */}
                <div className="mt-6 flex justify-center items-center gap-2 text-[#cbbfb0] text-sm">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:tangjei414@gmail.com"
                        className="hover:text-[#fff7ea] transition-colors">
                        tangjei414@gmail.com
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-6 text-center">
                    <p className="text-[#9b8f82] text-xs">
                        {copyrightText}
                    </p>
                </div>
            </div>

            {/* Privacy Policy Modal/Accordion */}
            {showPrivacy && (
                <div id="privacy" className="border-t border-white/10 bg-[#1f1b16]/90">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-[#fff7ea]">Privacy Policy</h2>
                            <button onClick={() => setShowPrivacy(false)} className="text-[#cbbfb0] hover:text-[#fff7ea]">
                                <ChevronDown className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                        <div className="space-y-4 text-[#e4d7c5] text-sm leading-relaxed">
                            <p><strong>Last updated:</strong> January 2026</p>
                            <p>Battle Counter Stickman Fan Site ("we", "our", or "us") respects your privacy. This policy explains how we handle information when you visit our website.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Information We Collect</h3>
                            <p>We use standard web analytics to understand how visitors use our site. This may include anonymous data such as pages visited, time spent on site, and referring websites. We do not collect personal information unless you voluntarily provide it.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Cookies</h3>
                            <p>We may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Third-Party Services</h3>
                            <p>Our site may contain links to third-party websites and embedded content (such as YouTube videos). These services have their own privacy policies.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Contact</h3>
                            <p>If you have questions about this privacy policy, please contact us at tangjei414@gmail.com.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Terms of Service Modal/Accordion */}
            {showTerms && (
                <div id="terms" className="border-t border-white/10 bg-[#1f1b16]/90">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-[#fff7ea]">Terms of Service</h2>
                            <button onClick={() => setShowTerms(false)} className="text-[#cbbfb0] hover:text-[#fff7ea]">
                                <ChevronDown className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                        <div className="space-y-4 text-[#e4d7c5] text-sm leading-relaxed">
                            <p><strong>Last updated:</strong> January 2026</p>
                            <p>By using Battle Counter Stickman Guide, you agree to the following terms.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Use of Content</h3>
                            <p>All content on this wiki is provided for informational purposes only. We strive for accuracy but make no guarantees. Game content, images, and trademarks belong to their respective owners.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">User Conduct</h3>
                            <p>Users agree not to misuse the website, attempt to gain unauthorized access, or use the site for any unlawful purpose.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Disclaimer</h3>
                            <p>This wiki is a fan-made resource and is not affiliated with, endorsed by, or connected to the developers of Battle Counter Stickman. All game content belongs to their respective owners.</p>
                            <h3 className="text-base font-semibold text-[#fff7ea] mt-4">Changes</h3>
                            <p>We may update these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
