import { useEffect, useRef } from 'react';

type UsePreviousFn = {
  <T>(value: T, initializeWithValue: true): T;
  <T>(value: T, initializeWithValue?: false): T | undefined;
};

export const usePreviousValue: UsePreviousFn = <T>(
  value: T,
  initializeWithValue = false,
): T | undefined => {
  const initialRefValue = initializeWithValue ? value : undefined;

  const previousValue = useRef<T | undefined>(initialRefValue);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
}
