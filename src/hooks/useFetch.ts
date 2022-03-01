/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

import api from '../services/api';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await api.get(url, options);
      setData(res.data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
}
