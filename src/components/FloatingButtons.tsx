'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle, X, ClipboardList } from 'lucide-react';
import SurveyModal from './SurveyModal';
import { packageSurveys } from '@/data/surveys';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  // Scroll durumunu takip et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Sayfanın başına git
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Contact formu toggle
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  // Contact form submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setIsContactOpen(false);
  };

  const handleSurveySubmit = (data: Record<string, unknown>) => {
    console.log('Survey submitted:', data);
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        
        {/* Scroll to Top Button - Küçük ve çember şeklinde */}
        <button
          onClick={scrollToTop}
          className="group bg-gradient-to-r from-[#FD8B51] to-[#FFDC7F] hover:from-[#E07B47] hover:to-[#F5D26B] text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          aria-label="Sayfanın başına git"
        >
          <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>

        {/* Contact Button */}
        <button
          onClick={toggleContact}
          className="group bg-gradient-to-r from-[#B3D8A8] to-[#A0D683] hover:from-[#9BC794] hover:to-[#8BC470] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 max-w-xs"
        >
          <MessageCircle size={20} className="flex-shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-xs md:text-sm font-medium whitespace-nowrap">
              Başka birşey mi arıyorsun?
            </span>
          </div>
        </button>

        {/* Test Survey Button */}
        <button
          onClick={() => setIsSurveyOpen(true)}
          className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <ClipboardList size={20} />
          <span className="text-sm font-medium whitespace-nowrap">Test Anketi</span>
        </button>
      </div>

      {/* Survey Modal */}
      <SurveyModal
        survey={packageSurveys[0]} // Spor anketi
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        onSubmit={handleSurveySubmit}
      />

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Bize Yazın! 💬</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Aradığınızı bulamadınız mı? Size yardımcı olalım!
                </p>
              </div>
              <button
                onClick={toggleContact}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Adınızı yazın"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta (Opsiyonel)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="email@örnek.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ne arıyorsunuz? Size nasıl yardımcı olabiliriz?"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={toggleContact}
                  className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-[#FD8B51] to-[#FFDC7F] hover:from-[#E07B47] hover:to-[#F5D26B] text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Gönder 🚀
                </button>
              </div>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center mb-3">
                Hızlı iletişim için:
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+905XXXXXXXXX"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors"
                >
                  Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}