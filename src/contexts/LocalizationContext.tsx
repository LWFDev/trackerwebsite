import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'US' | 'UK';

interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const usToUkTransformations: Record<string, string> = {
  // Common -ize to -ise endings
  'organize': 'organise',
  'organized': 'organised',
  'organizing': 'organising',
  'organization': 'organisation',
  'organizations': 'organisations',
  'customize': 'customise',
  'customized': 'customised',
  'customizing': 'customising',
  'customization': 'customisation',
  'realize': 'realise',
  'realized': 'realised',
  'realizing': 'realising',
  'realization': 'realisation',
  'optimize': 'optimise',
  'optimized': 'optimised',
  'optimizing': 'optimising',
  'optimization': 'optimisation',
  'digitize': 'digitise',
  'digitized': 'digitised',
  'digitizing': 'digitising',
  'digitization': 'digitisation',
  'analyze': 'analyse',
  'analyzed': 'analysed',
  'analyzing': 'analysing',
  'analysis': 'analysis', // Same in both
  'centralize': 'centralise',
  'centralized': 'centralised',
  'centralizing': 'centralising',
  'centralization': 'centralisation',
  'specialize': 'specialise',
  'specialized': 'specialised',
  'specializing': 'specialising',
  'specialization': 'specialisation',
  
  // -or to -our endings
  'color': 'colour',
  'colors': 'colours',
  'colored': 'coloured',
  'coloring': 'colouring',
  'favor': 'favour',
  'favors': 'favours',
  'favored': 'favoured',
  'favoring': 'favouring',
  'honor': 'honour',
  'honors': 'honours',
  'honored': 'honoured',
  'honoring': 'honouring',
  'behavior': 'behaviour',
  'behaviors': 'behaviours',
  
  // -er to -re endings
  'center': 'centre',
  'centers': 'centres',
  'centered': 'centred',
  'centering': 'centring',
  'theater': 'theatre',
  'theaters': 'theatres',
  'fiber': 'fibre',
  'fibers': 'fibres',
  
  // -se to -ce endings
  'defense': 'defence',
  'defenses': 'defences',
  'license': 'licence', // as noun
  'offense': 'offence',
  'offenses': 'offences',
  
  // Other common differences
  'mom': 'mum',
  'moms': 'mums',
  'airplane': 'aeroplane',
  'airplanes': 'aeroplanes',
  'elevator': 'lift',
  'elevators': 'lifts',
  'apartment': 'flat',
  'apartments': 'flats',
  'trash': 'rubbish',
  'garbage': 'rubbish',
  'sidewalk': 'pavement',
  'sidewalks': 'pavements',
  'vacation': 'holiday',
  'vacations': 'holidays',
  'fall': 'autumn', // season
  'cookie': 'biscuit',
  'cookies': 'biscuits',
  'candy': 'sweets',
  'candies': 'sweets',
  'truck': 'lorry',
  'trucks': 'lorries',
  'flashlight': 'torch',
  'flashlights': 'torches',
  'pants': 'trousers',
  'sneakers': 'trainers',
  'soccer': 'football',
  'math': 'maths',
  'movie': 'film',
  'movies': 'films',
  'store': 'shop',
  'stores': 'shops',
  'gas': 'petrol',
  'gasoline': 'petrol',
  'cell phone': 'mobile phone',
  'cell phones': 'mobile phones',
  'cellphone': 'mobile',
  'cellphones': 'mobiles',
  'diaper': 'nappy',
  'diapers': 'nappies',
  'check': 'cheque', // bank check
  'checks': 'cheques',
  'french fries': 'chips',
  'fries': 'chips',
  'chips': 'crisps', // potato chips
  'zucchini': 'courgette',
  'eggplant': 'aubergine',
  'arugula': 'rocket',
  'cilantro': 'coriander',
};

const transformText = (text: string, locale: Locale): string => {
  if (locale === 'US') return text;
  
  let transformedText = text;
  
  // Apply word-by-word transformations
  Object.entries(usToUkTransformations).forEach(([usWord, ukWord]) => {
    // Create regex patterns for different cases
    const patterns = [
      new RegExp(`\\b${usWord}\\b`, 'gi'), // Word boundaries, case insensitive
      new RegExp(`\\b${usWord.charAt(0).toUpperCase() + usWord.slice(1)}\\b`, 'g'), // Capitalized
      new RegExp(`\\b${usWord.toUpperCase()}\\b`, 'g'), // All caps
    ];
    
    patterns.forEach((pattern, index) => {
      if (index === 0) {
        // Case insensitive - preserve original case
        transformedText = transformedText.replace(pattern, (match) => {
          if (match === match.toLowerCase()) return ukWord;
          if (match === match.toUpperCase()) return ukWord.toUpperCase();
          if (match.charAt(0) === match.charAt(0).toUpperCase()) {
            return ukWord.charAt(0).toUpperCase() + ukWord.slice(1);
          }
          return ukWord;
        });
      }
    });
  });
  
  return transformedText;
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('US');

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'US' || savedLocale === 'UK')) {
      setLocaleState(savedLocale);
    } else {
      // Try to detect from browser locale
      const browserLocale = navigator.language;
      if (browserLocale.startsWith('en-GB') || browserLocale.startsWith('en-AU') || browserLocale.startsWith('en-NZ')) {
        setLocaleState('UK');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (text: string) => transformText(text, locale);

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
