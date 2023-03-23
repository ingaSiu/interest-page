import { useEffect, useRef } from 'react';

// hooks, kuris laiko paskutine reiksme

const usePreviousValue = (value: any) => {
  const prevValueRef = useRef<any>();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);
};

export default usePreviousValue;
