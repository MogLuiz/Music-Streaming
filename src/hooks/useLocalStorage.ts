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

  const setValue = (value: T | ((value: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storagedValue) : value;
      setStoragedValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
};
