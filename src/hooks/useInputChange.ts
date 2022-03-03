import {useState} from 'react';

export const useInputChange = <T>() => {
  const [input, setInput] = useState<T>();

  const set = (name: keyof T, value: any) => {
    setInput({...input, [name]: value} as T);
  };

  const setEx = (func: () => T) => {
    const newState = func();
    setInput(newState);
  };

  return {input, set, setEx};
};
