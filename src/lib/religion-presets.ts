import type { SupportedLanguage } from '@/lib/translations';
import type { CustomBiodataField } from '@/store/biodataStore';

export type ReligionPresetId = 'Hindu' | 'Jain' | 'Muslim' | 'Sikh' | 'Christian';
export type ReligiousSymbol = 'none' | 'om' | 'ganesh' | 'radha-krishna' | 'swastik' | 'ik-onkar' | 'khanda' | 'cross' | 'bismillah' | 'crescent-star';

type Localized = Record<SupportedLanguage, string>;
type PresetField = { id: string; label: Localized };

const L = (en: string, hi: string, gu: string, mr: string, ta: string, te: string, bn: string, kn: string, pa: string): Localized => ({ en, hi, gu, mr, ta, te, bn, kn, pa });

const roots = L('Family roots / native place', 'पारिवारिक मूल / मूल स्थान', 'પરિવારનું વતન / મૂળ સ્થળ', 'कुटुंबाचे मूळ / मूळ गाव', 'குடும்ப வேர்கள் / பூர்வீகம்', 'కుటుంబ మూలాలు / స్వస్థలం', 'পারিবারিক শিকড় / আদি নিবাস', 'ಕುಟುಂಬದ ಬೇರುಗಳು / ಮೂಲ ಸ್ಥಳ', 'ਪਰਿਵਾਰਕ ਜੜ੍ਹਾਂ / ਪੁਸ਼ਤੈਨੀ ਥਾਂ');

export const RELIGION_PRESETS: Record<ReligionPresetId, { symbol: ReligiousSymbol; fields: PresetField[] }> = {
  Hindu: {
    symbol: 'ganesh',
    fields: [
      { id: 'religion-hindu-kuldevi', label: L('Kuldevi / Kuldevta (optional)', 'कुलदेवी / कुलदेवता (वैकल्पिक)', 'કુળદેવી / કુળદેવતા (વૈકલ્પિક)', 'कुलदेवी / कुलदैवत (पर्यायी)', 'குலதேவி / குலதெய்வம் (விருப்பம்)', 'కులదేవి / కులదైవం (ఐచ్ఛికం)', 'কুলদেবী / কুলদেবতা (ঐচ্ছিক)', 'ಕುಲದೇವಿ / ಕುಲದೈವತ (ಐಚ್ಛಿಕ)', 'ਕੁਲਦੇਵੀ / ਕੁਲਦੇਵਤਾ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-hindu-devak', label: L('Devak / family tradition (optional)', 'देवक / पारिवारिक परंपरा (वैकल्पिक)', 'દેવક / પરિવારની પરંપરા (વૈકલ્પિક)', 'देवक / कुटुंब परंपरा (पर्यायी)', 'தேவக் / குடும்ப மரபு (விருப்பம்)', 'దేవక్ / కుటుంబ సంప్రదాయం (ఐచ్ఛికం)', 'দেবক / পারিবারিক রীতি (ঐচ্ছিক)', 'ದೇವಕ / ಕುಟುಂಬ ಸಂಪ್ರದಾಯ (ಐಚ್ಛಿಕ)', 'ਦੇਵਕ / ਪਰਿਵਾਰਕ ਰੀਤ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-hindu-mosal', label: L('Mosal / maternal family details (optional)', 'मोसाल / ननिहाल विवरण (वैकल्पिक)', 'મોસાળ / મામેરા પરિવારની વિગતો (વૈકલ્પિક)', 'माहेर / मातुल कुटुंब तपशील (पर्यायी)', 'தாய்வழி குடும்ப விவரம் (விருப்பம்)', 'మాతృకుటుంబ వివరాలు (ఐచ్ఛికం)', 'মাতৃকুলের তথ্য (ঐচ্ছিক)', 'ತಾಯಿಯ ಕುಟುಂಬದ ವಿವರಗಳು (ಐಚ್ಛಿಕ)', 'ਮੋਸਾਲ / ਨਾਨਕੇ ਪਰਿਵਾਰ ਦੇ ਵੇਰਵੇ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-hindu-gotra', label: L('Gotra', 'गोत्र', 'ગોત્ર', 'गोत्र', 'கோத்திரம்', 'గోత్రం', 'গোত্র', 'ಗೋತ್ರ', 'ਗੋਤ੍ਰ') },
      { id: 'religion-hindu-native-place', label: roots },
    ],
  },
  Jain: {
    symbol: 'swastik',
    fields: [
      { id: 'religion-jain-gotra', label: L('Gotra (optional)', 'गोत्र (वैकल्पिक)', 'ગોત્ર (વૈકલ્પિક)', 'गोत्र (पर्यायी)', 'கோத்திரம் (விருப்பம்)', 'గోత్రం (ఐచ్ఛికం)', 'গোত্র (ঐচ্ছিক)', 'ಗೋತ್ರ (ಐಚ್ಛಿಕ)', 'ਗੋਤ੍ਰ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-jain-tradition', label: L('Family / community tradition (optional)', 'पारिवारिक / सामुदायिक परंपरा (वैकल्पिक)', 'પરિવાર / સમુદાયની પરંપરા (વૈકલ્પિક)', 'कुटुंब / समुदाय परंपरा (पर्यायी)', 'குடும்ப / சமூக மரபு (விருப்பம்)', 'కుటుంబ / సమాజ సంప్రదాయం (ఐచ్ఛికం)', 'পারিবারিক / সম্প্রদায়ের রীতি (ঐচ্ছিক)', 'ಕುಟುಂಬ / ಸಮುದಾಯ ಸಂಪ್ರದಾಯ (ಐಚ್ಛಿಕ)', 'ਪਰਿਵਾਰਕ / ਭਾਈਚਾਰਕ ਰੀਤ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-jain-native-place', label: roots },
    ],
  },
  Muslim: {
    symbol: 'bismillah',
    fields: [
      { id: 'religion-muslim-maslak', label: L('Maslak / tradition (optional)', 'मसलक / परंपरा (वैकल्पिक)', 'મસલક / પરંપરા (વૈકલ્પિક)', 'मसलक / परंपरा (पर्यायी)', 'மஸ்லக் / மரபு (விருப்பம்)', 'మస్లక్ / సంప్రదాయం (ఐచ్ఛికం)', 'মাসলাক / রীতি (ঐচ্ছিক)', 'ಮಸ್ಲಕ್ / ಸಂಪ್ರದಾಯ (ಐಚ್ಛಿಕ)', 'ਮਸਲਕ / ਰੀਤ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-muslim-family-origin', label: L('Family origin / native place', 'पारिवारिक मूल / मूल स्थान', 'પરિવારનું મૂળ / વતન', 'कुटुंबाचे मूळ / मूळ गाव', 'குடும்ப பூர்வீகம் / பூர்வீகம்', 'కుటుంబ మూలం / స్వస్థలం', 'পারিবারিক উৎস / আদি নিবাস', 'ಕುಟುಂಬದ ಮೂಲ / ಮೂಲ ಸ್ಥಳ', 'ਪਰਿਵਾਰਕ ਮੂਲ / ਪੁਸ਼ਤੈਨੀ ਥਾਂ') },
    ],
  },
  Sikh: {
    symbol: 'khanda',
    fields: [
      { id: 'religion-sikh-tradition', label: L('Family / Sikh tradition (optional)', 'पारिवारिक / सिख परंपरा (वैकल्पिक)', 'પરિવાર / શીખ પરંપરા (વૈકલ્પિક)', 'कुटुंब / शीख परंपरा (पर्यायी)', 'குடும்ப / சீக்கிய மரபு (விருப்பம்)', 'కుటుంబ / సిక్కు సంప్రదాయం (ఐచ్ఛికం)', 'পারিবারিক / শিখ রীতি (ঐচ্ছিক)', 'ಕುಟುಂಬ / ಸಿಖ್ ಸಂಪ್ರದಾಯ (ಐಚ್ಛಿಕ)', 'ਪਰਿਵਾਰਕ / ਸਿੱਖ ਰੀਤ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-sikh-native-place', label: roots },
    ],
  },
  Christian: {
    symbol: 'cross',
    fields: [
      { id: 'religion-christian-denomination', label: L('Denomination / church tradition (optional)', 'सम्प्रदाय / चर्च परंपरा (वैकल्पिक)', 'ડિનોમિનેશન / ચર્ચ પરંપરા (વૈકલ્પિક)', 'पंथ / चर्च परंपरा (पर्यायी)', 'பிரிவு / தேவாலய மரபு (விருப்பம்)', 'డినామినేషన్ / చర్చి సంప్రదాయం (ఐచ్ఛికం)', 'সম্প্রদায় / চার্চ রীতি (ঐচ্ছিক)', 'ಪಂಥ / ಚರ್ಚ್ ಸಂಪ್ರದಾಯ (ಐಚ್ಛಿಕ)', 'ਡਿਨੋਮੀਨੇਸ਼ਨ / ਚਰਚ ਰੀਤ (ਵਿਕਲਪਿਕ)') },
      { id: 'religion-christian-native-place', label: roots },
    ],
  },
};

export function getReligionPreset(religion: string | undefined): ReligionPresetId | null {
  return religion && religion in RELIGION_PRESETS ? religion as ReligionPresetId : null;
}

export function createReligionPresetFields(religion: ReligionPresetId, language: SupportedLanguage): CustomBiodataField[] {
  return RELIGION_PRESETS[religion].fields.map((field) => ({ id: field.id, label: field.label[language] ?? field.label.en, value: '' }));
}

export function religionPresetFieldIds(religion: ReligionPresetId): string[] {
  return RELIGION_PRESETS[religion].fields.map((field) => field.id);
}
