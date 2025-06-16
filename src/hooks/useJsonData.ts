import { useState, useEffect } from 'react';

export function useJsonData<T>(dataPath: string): T | null {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/src/data/${dataPath}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${dataPath}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error(`Error loading ${dataPath}:`, err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataPath]);

  return data;
}