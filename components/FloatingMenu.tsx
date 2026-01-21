// input: 无
// output: 右侧浮动快捷操作按钮组 + 联系表单弹窗
// pos: components/FloatingMenu.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState } from 'react';
import { Book, LayoutGrid, Languages, MessageCircle, X, Send } from 'lucide-react';

const FloatingMenu: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 打开表单时重置状态，避免错误状态持久化
  const openContactForm = () => {
    setSubmitStatus('idle');
    setShowContactForm(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkogypwv', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-8 z-40 hidden xl:flex flex-col gap-4">
        <a href="/keywords/" className="w-12 h-12 bg-[#1f1b16]/80 hover:bg-[#1f1b16] text-[#f0e4d3] hover:text-[#fff7ea] rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <Book className="w-5 h-5" />
          <span className="absolute right-14 bg-[#1f1b16] text-[#fff7ea] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Guide Index
          </span>
        </a>
        <a href="/keywords/" className="w-12 h-12 bg-[#1f1b16]/80 hover:bg-[#1f1b16] text-[#f0e4d3] hover:text-[#fff7ea] rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <LayoutGrid className="w-5 h-5" />
          <span className="absolute right-14 bg-[#1f1b16] text-[#fff7ea] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Categories
          </span>
        </a>
        <button
          onClick={openContactForm}
          className="w-12 h-12 bg-[#1f1b16]/80 hover:bg-[#1f1b16] text-[#f0e4d3] hover:text-[#fff7ea] rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-14 bg-[#1f1b16] text-[#fff7ea] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Contact Us
          </span>
        </button>
        <button className="w-12 h-12 bg-[#1f1b16]/80 hover:bg-[#1f1b16] text-[#f3c47a] hover:text-[#ffd39b] rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <Languages className="w-5 h-5" />
          <span className="absolute right-14 bg-[#1f1b16] text-[#fff7ea] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Translate
          </span>
        </button>
      </div>

      {/* Mobile Floating Contact Button */}
      <button
        onClick={openContactForm}
        className="fixed right-4 bottom-4 z-40 xl:hidden w-14 h-14 bg-[#d14d28] hover:bg-[#b94526] text-[#fff4e5] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1f1b16]/70 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          />

          {/* Modal */}
          <div className="relative panel card-cut border border-[#1f1b16]/20 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-soft hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-ink mb-2">Contact Us</h3>
            <p className="text-soft text-sm mb-6">Have questions or feedback? Send us a message!</p>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#1c7c7b]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#1c7c7b]" />
                </div>
                <p className="text-[#1c7c7b] font-semibold">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-[#1f1b16]/15 rounded-lg text-ink placeholder-[#7a7166] focus:outline-none focus:border-[#d14d28] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-[#1f1b16]/15 rounded-lg text-ink placeholder-[#7a7166] focus:outline-none focus:border-[#d14d28] transition-colors resize-none"
                  />
                </div>
                {submitStatus === 'error' && (
                  <p className="text-[#b44528] text-sm">Failed to send. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 btn-primary disabled:opacity-70 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;
