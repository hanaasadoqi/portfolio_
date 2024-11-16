import { useEffect, useRef } from 'react';

// Custom hook to keep track of the previous value of a state
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export {
  usePrevious
}