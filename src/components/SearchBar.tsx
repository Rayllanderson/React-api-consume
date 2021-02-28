import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { SearchContext } from "../contexts/SearchContext";
import { FilterBtn } from "./FilterBtn";
import { SearchBtn } from "./SearchBtn";
import { SearchInput } from "./SearchInput";

export function SearchBar() {

  const { handleOnChange, consumeApi, search } = useContext(SearchContext)
  const { searchType } = useContext(FilterContext)

  return (
    <>
      <div className="input-group input-group-lg mb-3 mt-4">
    
        <div className="input-group-prepend">
          <FilterBtn />
        </div>

        <SearchInput search={search} handleOnChange={handleOnChange} searchType={searchType} />
        
        <div className="input-group-append">
          <SearchBtn consumeApi={consumeApi} />
        </div>

      </div>
    </>
  );
}