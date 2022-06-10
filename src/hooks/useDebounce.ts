import { useEffect, useState } from 'react';

function useDebounce(value: any, delay: number) {
  const [valueInput, setValueInput] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueInput(value);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return valueInput;
}

export default useDebounce;
