import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { SurveyQuestion } from '@/data/surveys';

interface SurveyQuestionRendererProps {
  question: SurveyQuestion;
}

export default function SurveyQuestionRenderer({ question }: SurveyQuestionRendererProps) {
  const { register, watch, formState: { errors } } = useFormContext();
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
}
