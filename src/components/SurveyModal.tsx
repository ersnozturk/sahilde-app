'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SurveyQuestion, PackageSurvey } from '@/data/surveys';
import { cn } from '@/lib/utils';

interface SurveyModalProps {
  survey: PackageSurvey;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function SurveyModal({ survey, isOpen, onClose, onSubmit }: SurveyModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, watch, formState: { errors }, setValue, getValues } = useForm();

  const currentQuestion = survey.questions[currentStep];
  const isLastStep = currentStep === survey.questions.length - 1;
  const isFirstStep = currentStep === 0;

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

  const onFormSubmit = (data: any) => {
    onSubmit(data);
    onClose();
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
              <p className="text-red-500 text-sm">Lütfen bir seçenek seçin</p>
            )}
          </div>
        );

      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              const isChecked = Array.isArray(watchedValue) && watchedValue.includes(option);
              
              return (
                <label
                  key={index}
                  className={cn(
                    "flex items-center p-4 border rounded-lg cursor-pointer transition-all hover:bg-gray-50",
                    isChecked ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  )}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={isChecked}
                    onChange={(e) => {
                      const currentValues = getValues(question.id) || [];
                      if (e.target.checked) {
                        setValue(question.id, [...currentValues, option]);
                      } else {
                        setValue(question.id, currentValues.filter((v: string) => v !== option));
                      }
                    }}
                    className="sr-only"
                  />
                  <div className={cn(
                    "w-4 h-4 rounded border-2 mr-3 flex items-center justify-center",
                    isChecked ? "border-blue-500 bg-blue-500" : "border-gray-300"
                  )}>
                    {isChecked && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              );
            })}
            {errors[question.id] && (
              <p className="text-red-500 text-sm">En az bir seçenek seçin</p>
            )}
          </div>
        );

      default:
        return null;
    }
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
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{survey.title}</h2>
                <p className="text-blue-100 mt-1">{survey.description}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-blue-100 mb-2">
                <span>Adım {currentStep + 1} / {survey.questions.length}</span>
                <span>%{Math.round(((currentStep + 1) / survey.questions.length) * 100)}</span>
              </div>
              <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
                <motion.div
                  className="bg-white h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / survey.questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* Question Content */}
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
                    {currentQuestion.question}
                    {currentQuestion.required && <span className="text-red-500 ml-1">*</span>}
                  </h3>
                  {renderQuestion(currentQuestion)}
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
}