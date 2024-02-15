import { useCallback, useEffect, useState } from "react";
import { UseFetchResult, UseRequestProps } from "../interfaces/Interfaces";

const useFetch = ({ url, method }: UseRequestProps): UseFetchResult => {
  const [fetchRequest, setFetchRequest] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onFetch = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Response Failed");
      }

      const data = await response.json();
      setFetchRequest(data);
    } catch (err) {
      setError(new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    onFetch();
  }, [onFetch]);

  useEffect(() => {
    return () => {
      setFetchRequest(null);
      setError(null);
      setLoading(false);
    };
  }, []);

  return { fetchRequest, error, loading };
};

export default useFetch;
