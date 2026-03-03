/**
 * Domain detection and URL building utilities
 * Supports both trackmybusiness.us and trackmybusiness.com
 */

export type DomainType = 'us' | 'com';

/**
 * Detects the current domain from window.location
 */
export const getCurrentDomain = (): DomainType => {
  if (typeof window === 'undefined') return 'us';
  
  const hostname = window.location.hostname;
  
  if (hostname.includes('trackmybusiness.com')) {
    return 'com';
  }
  
  return 'us';
};

/**
 * Gets the full domain URL based on current domain
 */
export const getDomainUrl = (domain?: DomainType): string => {
  const currentDomain = domain || getCurrentDomain();
  
  return currentDomain === 'us' 
    ? 'https://www.trackmybusiness.us'
    : 'https://www.trackmybusiness.com';
};

/**
 * Gets the canonical (primary) domain URL — always .com
 */
export const getCanonicalDomainUrl = (): string => {
  return 'https://www.trackmybusiness.com';
};

/**
 * Builds a full URL with the current domain
 */
export const buildUrl = (path: string, domain?: DomainType): string => {
  const baseUrl = getDomainUrl(domain);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${cleanPath}`;
};

/**
 * Check if current domain is .us
 */
export const isUSDomain = (): boolean => {
  return getCurrentDomain() === 'us';
};

/**
 * Check if current domain is .com
 */
export const isCOMDomain = (): boolean => {
  return getCurrentDomain() === 'com';
};

/**
 * Get current origin (for dynamic URLs)
 */
export const getCurrentOrigin = (): string => {
  if (typeof window === 'undefined') return 'https://www.trackmybusiness.us';
  return window.location.origin;
};
