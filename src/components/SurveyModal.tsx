'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SurveyQuestion, PackageSurvey, sportEquipmentOptions } from '@/data/surveys';
import { cn } from '@/lib/utils';

interface SurveyModalProps {
  survey: PackageSurvey;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, unknown>) => void;
}

export default function SurveyModal({ survey, isOpen, onClose, onSubmit }: SurveyModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dynamicSurvey, setDynamicSurvey] = useState<PackageSurvey>(survey);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, unknown> | null>(null);

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  // Spor türü değişikliklerini izle
  const watchedSportType = watch('sport-type');

  // Spor türü değiştiğinde ekipman seçeneklerini güncelle
  useEffect(() => {
    if (survey.packageId === 'spor' && watchedSportType && sportEquipmentOptions[watchedSportType]) {
      const updatedSurvey = { ...survey };
      const equipmentQuestionIndex = updatedSurvey.questions.findIndex(q => q.id === 'sport-equipment');
      
      if (equipmentQuestionIndex !== -1) {
        updatedSurvey.questions[equipmentQuestionIndex] = {
          ...updatedSurvey.questions[equipmentQuestionIndex],
          question: `${watchedSportType} için hangi ekipmanları almak istiyorsunuz?`,
          options: sportEquipmentOptions[watchedSportType]
        };
        setDynamicSurvey(updatedSurvey);
      }
    }
  }, [watchedSportType, survey]);

  // Anket değiştiğinde dynamic survey'i sıfırla
  useEffect(() => {
    setDynamicSurvey(survey);
  }, [survey]);

  const currentQuestion = dynamicSurvey.questions[currentStep];
  const isLastStep = currentStep === dynamicSurvey.questions.length - 1;
  const isFirstStep = currentStep === 0;

  // ESC tuşu için klavye event listener'ı ekle
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  const nextStep = () => {
    if (!isLastStep) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const onFormSubmit = (data: Record<string, unknown>) => {
    // Anket verilerini sakla ve başarı sayfasını göster
    setSubmittedData(data);
    setShowSuccessPage(true);
    
    // onSubmit callback'ini çağır (şu anlık boş)
    onSubmit(data);
  };

  const handleCloseModal = () => {
    setDynamicSurvey(survey);
    setCurrentStep(0);
    setShowSuccessPage(false);
    setSubmittedData(null);
    reset();
    onClose();
  };

  const handleBackToSurvey = () => {
    setShowSuccessPage(false);
    setSubmittedData(null);
  };

  const renderQuestion = (question: SurveyQuestion) => {
    const watchedValue = watch(question.id);

    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-2">
            <input
              {...register(question.id, { required: question.required })}
              type="text"
              placeholder={question.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {errors[question.id] && (
              <p className="text-red-500 text-sm">Bu alan zorunludur</p>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div className="space-y-2">
            <textarea
              {...register(question.id, { required: question.required })}
              placeholder={question.placeholder}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            {errors[question.id] && (
              <p className="text-red-500 text-sm">Bu alan zorunludur</p>
            )}
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={cn(
                  "flex items-center p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50",
                  watchedValue === option ? "border-blue-500 bg-blue-50" : "border-gray-200"
                )}
              >
                <input
                  {...register(question.id, { required: question.required })}
                  type="radio"
                  value={option}
                  className="sr-only"
                />
                <div className={cn(
                  "w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center",
                  watchedValue === option ? "border-blue-500" : "border-gray-300"
                )}>
                  {watchedValue === option && (
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
            {errors[question.id] && (
              <p className="text-red-500 text-sm">Bu alan zorunludur</p>
            )}
          </div>
        );

      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label
                key={index}
                className={cn(
                  "flex items-center p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50",
                  watchedValue?.includes(option) ? "border-blue-500 bg-blue-50" : "border-gray-200"
                )}
              >
                <input
                  {...register(question.id)}
                  type="checkbox"
                  value={option}
                  className="sr-only"
                />
                <div className={cn(
                  "w-4 h-4 rounded border-2 mr-3 flex items-center justify-center",
                  watchedValue?.includes(option) ? "border-blue-500 bg-blue-500" : "border-gray-300"
                )}>
                  {watchedValue?.includes(option) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
            {errors[question.id] && (
              <p className="text-red-500 text-sm">Bu alan zorunludur</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Anket sonuç sayfası render fonksiyonu
  const renderSuccessPage = () => {
    const getSportEquipment = () => {
      if (submittedData?.['sport-equipment'] && Array.isArray(submittedData['sport-equipment'])) {
        return submittedData['sport-equipment'].filter((item: string) => item !== 'Hiçbirini istemiyorum');
      }
      return [];
    };

    const selectedEquipment = getSportEquipment();

    return (
      <div className="p-8 text-center">
        {/* Başarı ikonu */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Başlık */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Anketiniz Başarıyla Gönderildi! 🎉
        </h3>

        <p className="text-gray-600 mb-8">
          Verdiğiniz cevaplar doğrultusunda size en uygun önerileri hazırlıyoruz. 
          <br />
          <strong>En kısa sürede size ulaşacağız!</strong>
        </p>

        {/* Anket özeti */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
          <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Anket Özetiniz</h4>
          
          <div className="space-y-3">
            {Boolean(submittedData?.['sport-type']) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Spor Türü:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.['sport-type'])}</span>
              </div>
            )}

            {selectedEquipment.length > 0 && (
              <div>
                <span className="text-gray-600 block mb-2">Seçilen Ekipmanlar:</span>
                <div className="space-y-1">
                  {selectedEquipment.map((equipment: string, index: number) => (
                    <div key={index} className="text-sm text-gray-700 ml-4">
                      • {equipment}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Boolean(submittedData?.intensity) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Spor Yoğunluğu:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.intensity)}</span>
              </div>
            )}

            {Boolean(submittedData?.['nutrition-goal']) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Beslenme Hedefi:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.['nutrition-goal'])}</span>
              </div>
            )}

            {/* Diğer anket türleri için dinamik içerik */}
            {Boolean(submittedData?.['study-duration']) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Çalışma Süresi:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.['study-duration'])}</span>
              </div>
            )}

            {Boolean(submittedData?.['group-size']) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Grup Büyüklüğü:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.['group-size'])}</span>
              </div>
            )}

            {Boolean(submittedData?.['hunger-level']) && (
              <div className="flex justify-between">
                <span className="text-gray-600">Açlık Seviyesi:</span>
                <span className="font-medium text-gray-800">{String(submittedData?.['hunger-level'])}</span>
              </div>
            )}
          </div>
        </div>

        {/* İletişim bilgisi */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">📞 İletişim</h4>
          <p className="text-blue-700 text-sm">
            Acil durumlar için WhatsApp: <strong>+90 5XX XXX XX XX</strong>
            <br />
            E-posta: <strong>info@sahilde.com</strong>
          </p>
        </div>

        {/* Butonlar */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleBackToSurvey}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ChevronLeft size={16} />
            <span>Anketi Düzenle</span>
          </Button>
          
          <Button
            onClick={handleCloseModal}
            className="bg-green-500 hover:bg-green-600 flex items-center space-x-2"
          >
            <span>Paketleri Görüntüle</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className={`${showSuccessPage ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white p-6`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {showSuccessPage ? 'Gönderim Başarılı!' : dynamicSurvey.title}
                </h2>
                <p className="text-blue-100 mt-1">
                  {showSuccessPage 
                    ? 'Size özel önerilerimizi hazırlıyoruz' 
                    : dynamicSurvey.description
                  }
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Progress Bar - sadece anket sırasında göster */}
            {!showSuccessPage && (
              <div className="mt-6">
                <div className="flex justify-between text-sm text-blue-100 mb-2">
                  <span>Adım {currentStep + 1} / {dynamicSurvey.questions.length}</span>
                  <span>%{Math.round(((currentStep + 1) / dynamicSurvey.questions.length) * 100)}</span>
                </div>
                <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / dynamicSurvey.questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          {showSuccessPage ? (
            renderSuccessPage()
          ) : (
            <form onSubmit={handleSubmit(onFormSubmit)} className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {currentQuestion?.question}
                      {currentQuestion?.required && <span className="text-red-500 ml-1">*</span>}
                    </h3>
                    {currentQuestion && renderQuestion(currentQuestion)}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  onClick={prevStep}
                  disabled={isFirstStep}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft size={16} />
                  <span>Önceki</span>
                </Button>

                {isLastStep ? (
                  <Button
                    type="submit"
                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600"
                  >
                    <Send size={16} />
                    <span>Gönder</span>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center space-x-2"
                  >
                    <span>Sonraki</span>
                    <ChevronRight size={16} />
                  </Button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}