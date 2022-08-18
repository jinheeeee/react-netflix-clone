import { useState, useEffect } from "react";
// * hooks를 밑에 파일을 만들때는 use머머머 use를 앞에 붙여서 만들어야 함.
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};