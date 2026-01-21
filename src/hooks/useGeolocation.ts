import { useState, useEffect, useCallback } from 'react';

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

export const useGeolocation = (options: UseGeolocationOptions = {}) => {
  const {
    enableHighAccuracy = true,
    timeout = 10000,
    maximumAge = 0,
    watchPosition = true,
  } = options;

  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    accuracy: null,
    heading: null,
    error: null,
    loading: true,
    permissionStatus: 'prompt',
  });

  const handleSuccess = useCallback((position: GeolocationPosition) => {
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
        errorMessage = 'Location permission denied. Please enable location access.';
        permissionStatus = 'denied';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information unavailable.';
        break;
      case error.TIMEOUT:
        errorMessage = 'Location request timed out.';
        break;
    }

    setState(prev => ({
      ...prev,
      error: errorMessage,
      loading: false,
      permissionStatus,
    }));
  }, []);

  const requestPermission = useCallback(() => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by your browser.',
        loading: false,
        permissionStatus: 'unavailable',
      }));
      return;
    }

    const geoOptions: PositionOptions = {
      enableHighAccuracy,
      timeout,
      maximumAge,
    };

    if (watchPosition) {
      const watchId = navigator.geolocation.watchPosition(
        handleSuccess,
        handleError,
        geoOptions
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, geoOptions);
    }
  }, [enableHighAccuracy, timeout, maximumAge, watchPosition, handleSuccess, handleError]);

  useEffect(() => {
    const cleanup = requestPermission();
    return () => {
      if (cleanup) cleanup();
    };
  }, [requestPermission]);

  return {
    ...state,
    requestPermission,
  };
};
