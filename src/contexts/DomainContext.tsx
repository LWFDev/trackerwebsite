import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { DomainType, getCurrentDomain, getDomainUrl, buildUrl } from '@/utils/domain';

interface DomainContextType {
  domain: DomainType;
  siteUrl: string;
  buildUrl: (path: string) => string;
}

const DomainContext = createContext<DomainContextType | undefined>(undefined);

export const DomainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [domain, setDomain] = useState<DomainType>(getCurrentDomain());
  const [siteUrl, setSiteUrl] = useState<string>(getDomainUrl());

  useEffect(() => {
    // Detect domain on mount and update if needed
    const detectedDomain = getCurrentDomain();
    setDomain(detectedDomain);
    setSiteUrl(getDomainUrl(detectedDomain));
  }, []);

  const buildDomainUrl = (path: string): string => {
    return buildUrl(path, domain);
  };

  return (
    <DomainContext.Provider value={{ domain, siteUrl, buildUrl: buildDomainUrl }}>
      {children}
    </DomainContext.Provider>
  );
};

export const useDomain = (): DomainContextType => {
  const context = useContext(DomainContext);
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider');
  }
  return context;
};
