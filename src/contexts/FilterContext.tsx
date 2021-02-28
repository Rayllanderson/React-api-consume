import { createContext, ReactNode, useState } from "react";

interface FilterContextData {
  limitNumber: number;
  searchType: string;
  handleLimitChange: (e) => void;
  handleSelectChange: (e) => void;
  resetFilter: () => void;
}

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextData);

export function FilterProvider({ children }: FilterProviderProps, ref) {

  const [limitNumber, setLimitNumber] = useState(9)
  const [searchType, setSearchType] = useState('anime');

  function handleLimitChange(e) {
    setLimitNumber(e.target.value)
  }
  function handleSelectChange(e) {
    setSearchType(e.target.value);
  }

  function resetFilter() {
    setLimitNumber(9);
    setSearchType('anime');
  }

  return (
    <FilterContext.Provider value={{
      limitNumber,
      searchType,
      handleLimitChange,
      handleSelectChange,
      resetFilter
    }}>
      {children}
    </FilterContext.Provider>
  )
}