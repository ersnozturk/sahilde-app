import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SurveySuccessPageProps {
  submittedData: Record<string, unknown> | null;
  handleBackToSurvey: () => void;
  handleCloseModal: () => void;
}

export default function SurveySuccessPage({ submittedData, handleBackToSurvey, handleCloseModal }: SurveySuccessPageProps) {
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
        Verdiğiniz cevaplar doğrultusunda size en uygun önerileri hazırlıyoruz. <br />
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
}
