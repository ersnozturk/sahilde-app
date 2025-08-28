'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SurveyQuestion, PackageSurvey, sportEquipmentOptions } from '@/data/surveys';
import { cn } from '@/lib/utils';
import SurveyQuestionRenderer from './SurveyQuestionRenderer';
import SurveySuccessPage from './SurveySuccessPage';

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

  const methods = useForm();
  const { register, handleSubmit, watch, formState: { errors }, reset } = methods;

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
            <SurveySuccessPage
              submittedData={submittedData}
              handleBackToSurvey={handleBackToSurvey}
              handleCloseModal={handleCloseModal}
            />
          ) : (
            <FormProvider {...methods}>
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
                      {currentQuestion && <SurveyQuestionRenderer question={currentQuestion} />}
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
            </FormProvider>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}