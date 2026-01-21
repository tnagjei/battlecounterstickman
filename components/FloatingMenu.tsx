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
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        <a href="/keywords/" className="w-12 h-12 bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <Book className="w-5 h-5" />
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Guide Index
          </span>
        </a>
        <a href="/keywords/" className="w-12 h-12 bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <LayoutGrid className="w-5 h-5" />
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Categories
          </span>
        </a>
        <button
          onClick={openContactForm}
          className="w-12 h-12 bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Contact Us
          </span>
        </button>
        <button className="w-12 h-12 bg-black/60 hover:bg-black/80 text-rose-300 hover:text-rose-200 rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all hover:scale-110 group relative">
          <Languages className="w-5 h-5" />
          <span className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Translate
          </span>
        </button>
      </div>

      {/* Mobile Floating Contact Button */}
      <button
        onClick={openContactForm}
        className="fixed right-4 bottom-4 z-40 xl:hidden w-14 h-14 bg-rose-500 hover:bg-rose-400 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          />

          {/* Modal */}
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
            <p className="text-slate-400 text-sm mb-6">Have questions or feedback? Send us a message!</p>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-green-400 font-semibold">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-rose-500 hover:bg-rose-400 disabled:bg-slate-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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

