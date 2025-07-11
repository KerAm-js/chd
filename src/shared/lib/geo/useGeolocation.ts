import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import { Point } from './types';

export const useGeolocation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [point, setPoint] = useState<Point | null>(null);
  const [cachedAddressTitle, setCachedAddressTitle] = useState('');
  const [cachedLocalityName, setCachedLocalityName] = useState('');

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      info => {
        setPoint({
          lat: info.coords.latitude,
          lon: info.coords.longitude,
        });
        setLoading(false);
      },
      error => {
        setPoint({
          lat: 43.318366,
          lon: 45.692421,
        });
        setError(error.message);
        setLoading(false);
      },
      {
        maximumAge: 300000,
      },
    );
    setLoading(false)
  };

  useEffect(getPosition, []);

  return {
    point,
    loading,
    error,
    cachedAddressTitle,
    setCachedAddressTitle,
    cachedLocalityName,
    setCachedLocalityName,
  };
};
