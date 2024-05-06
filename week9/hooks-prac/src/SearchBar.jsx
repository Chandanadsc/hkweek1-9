import React, { useEffect, useState } from 'react';

 function useDebounce(value,delay){
    const [debouncedValue,setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);

        return ()=>clearTimeout(timerId);
    },[value,delay]);
   return debouncedValue;
 }
const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
    the debounced value is: {debouncedValue}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </div>
  );
};

export default SearchBar;