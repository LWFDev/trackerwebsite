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
    let errorMessage = 'Unknown error occurred';
    let permissionStatus: GeolocationState['permissionStatus'] = 'unavailable';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
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

  const requestPermission = useCallback(async () => {
    // Check for secure context first
    if (!isSecureContext()) {
      setState(prev => ({
        ...prev,
        error: 'Location requires a secure connection (HTTPS). Please access this page via HTTPS.',
        loading: false,
        permissionStatus: 'unavailable',
      }));
      return;
    }

    // Check for geolocation support
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

    // Skip Permissions API pre-check - let the browser handle it directly
    // This is more reliable across all devices, especially iOS Safari

    const geoOptions: PositionOptions = {
      enableHighAccuracy,
      timeout,
      maximumAge,
    };

    if (watchPosition) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
        geoOptions
      );
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, geoOptions);
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
