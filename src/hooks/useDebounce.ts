// pasirasyti hooks kuris grazina reiksme su delay

import { useEffect, useState } from 'react';

// visi hooksai prasideda nuo zodzio 'use'

const useDebounce = (value: any, delay?: 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
