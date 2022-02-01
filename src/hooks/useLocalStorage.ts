import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [storagedValue, setStoragedValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
};
