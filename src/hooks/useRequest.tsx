import { useState } from "react";
import { UseRequestProps, UseRequestResult } from "../interfaces/Interfaces";

const useRequest = ({ url, method }: UseRequestProps): UseRequestResult => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body?: any, custom?: string): Promise<any> => {
    setLoading(true);

    const response = await fetch(url ?? custom, {
      method,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    setLoading(false);

    if (!response.ok) {
      console.log("Unsuccessful response status:", response.status);
      return Promise.reject(response.statusText);
    } else console.log(response.status);

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Non-JSON response:", response);
      return null;
    }
  };

  return { loading, sendRequest };
};

export default useRequest;
