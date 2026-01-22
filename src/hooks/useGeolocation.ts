import { useState, useCallback, useRef } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  heading: number | null;
  error: string | null;
  loading: boolean;
  permissionStatus: 'prompt' | 'granted' | 'denied' | 'unavailable';
}

interface UseGeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  watchPosition?: boolean;
}

// Check if we're in a secure context (required for geolocation)
const isSecureContext = (): boolean => {
  return (
    window.isSecureContext ||
    location.protocol === 'https:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1'
  );
};

// Detect iOS Safari for specific error messaging
const isIOSSafari = (): boolean => {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) && /Safari/.test(ua) && !/CriOS/.test(ua) && !/FxiOS/.test(ua);
};

// Detect iOS Chrome
const isIOSChrome = (): boolean => {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) && /CriOS/.test(ua);
};

// Check permission status using Permissions API
const checkPermissionStatus = async (): Promise<'prompt' | 'granted' | 'denied'> => {
  if ('permissions' in navigator) {
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      return result.state as 'prompt' | 'granted' | 'denied';
    } catch {
      // Permissions API not fully supported (e.g., some Safari versions)
      return 'prompt';
    }
  }
  return 'prompt';
};

export const useGeolocation = (options: UseGeolocationOptions = {}) => {
  const {
    enableHighAccuracy = true,
    timeout = 30000, // 30 seconds for mobile GPS cold start
    maximumAge = 60000, // Cache for 1 minute
    watchPosition = true,
  } = options;

  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    accuracy: null,
    heading: null,
    error: null,
    loading: false, // Start as false - don't auto-request
    permissionStatus: 'prompt',
  });

  const watchIdRef = useRef<number | null>(null);
  const retryCountRef = useRef(0);
  const MAX_RETRIES = 3;

  const handleSuccess = useCallback((position: GeolocationPosition) => {
    retryCountRef.current = 0; // Reset retry count on success
    setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      heading: position.coords.heading,
      error: null,
      loading: false,
      permissionStatus: 'granted',
    });
  }, []);

  const handleError = useCallback((error: GeolocationPositionError) => {
    console.log('Geolocation error:', error.code, error.message);
    let errorMessage = 'Unknown error occurred';
    let permissionStatus: GeolocationState['permissionStatus'] = 'unavailable';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        if (isIOSSafari()) {
          errorMessage = 'Location denied. Go to Settings → Safari → Location to enable.';
        } else if (isIOSChrome()) {
          errorMessage = 'Location denied. Go to Settings → Chrome → Location to enable.';
        } else {
          errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
        }
        permissionStatus = 'denied';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information unavailable. Please check your device settings.';
        break;
      case error.TIMEOUT:
        // Retry on timeout
        if (retryCountRef.current < MAX_RETRIES) {
          retryCountRef.current++;
          console.log(`Geolocation timeout, retrying... (${retryCountRef.current}/${MAX_RETRIES})`);
          return; // Don't update state, will retry automatically via watch
        }
        errorMessage = 'Location request timed out. Please try again.';
        break;
    }

    setState(prev => ({
      ...prev,
      error: errorMessage,
      loading: false,
      permissionStatus,
    }));
  }, []);

  const clearWatch = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  const requestPermission = useCallback(() => {
    // Check for secure context first - synchronous check
    if (!isSecureContext()) {
      setState(prev => ({
        ...prev,
        error: 'Location requires a secure connection (HTTPS). Please access this page via HTTPS.',
        loading: false,
        permissionStatus: 'unavailable',
      }));
      return;
    }

    // Check for geolocation support - synchronous check
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by your browser.',
        loading: false,
        permissionStatus: 'unavailable',
      }));
      return;
    }

    // Clear any existing watch
    clearWatch();

    // Set loading state
    setState(prev => ({ ...prev, loading: true, error: null }));

    const geoOptions: PositionOptions = {
      enableHighAccuracy,
      timeout,
      maximumAge,
    };

    // IMMEDIATELY call geolocation - no async/await - this is critical for iOS Safari
    // The geolocation call MUST happen synchronously in the user gesture chain
    console.log('Requesting geolocation permission...');
    console.log('isSecureContext:', isSecureContext());
    console.log('navigator.geolocation available:', !!navigator.geolocation);
    console.log('watchPosition mode:', watchPosition);
    
    if (watchPosition) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) => {
          console.log('Geolocation success:', pos.coords.latitude, pos.coords.longitude);
          handleSuccess(pos);
        },
        (err) => {
          console.log('Geolocation error callback:', err.code, err.message);
          handleError(err);
        },
        geoOptions
      );
      console.log('watchPosition started, watchId:', watchIdRef.current);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log('Geolocation success:', pos.coords.latitude, pos.coords.longitude);
          handleSuccess(pos);
        },
        (err) => {
          console.log('Geolocation error callback:', err.code, err.message);
          handleError(err);
        },
        geoOptions
      );
      console.log('getCurrentPosition called');
    }
  }, [enableHighAccuracy, timeout, maximumAge, watchPosition, handleSuccess, handleError, clearWatch]);

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    clearWatch();
  }, [clearWatch]);

  return {
    ...state,
    requestPermission,
    cleanup,
  };
};
