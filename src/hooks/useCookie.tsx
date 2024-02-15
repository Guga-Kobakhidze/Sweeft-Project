import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

const useCookie = (
  key: string,
  fallback: string
): [string, Dispatch<SetStateAction<string>>] => {
  const storedValue = Cookies.get(key);
  let parsedValue;

  try {
    parsedValue = JSON.parse(storedValue || "");
  } catch (error) {
    console.error(`Error parsing JSON for cookie key '${key}':`, error);
    parsedValue = fallback;
  }

  const [value, setValue] = useState<string>(parsedValue);

  useEffect(() => {
    Cookies.set(key, JSON.stringify(value), { expires: 7 });
  }, [key, value]);

  return [value, setValue];
};

export default useCookie;
