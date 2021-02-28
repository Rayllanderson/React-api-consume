import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { SearchContext } from "../contexts/SearchContext";

export function SearchBar() {

  const{handleOnChange, consumeApi, search} = useContext(SearchContext)
  const {searchType} = useContext(FilterContext)

  return (
    <div className="input-group input-group-lg mb-3 mt-5">
      <input type="text" className="rounded-md py-1 px-3 form-control" 
      onChange={handleOnChange} 
        value={search} placeholder={`Busque um ${searchType}...`}/>
      <div className="input-group-append">
        <button type="button" className="btn btn-p btn-search" 
        onClick={consumeApi}> &nbsp; <i className="fa fa-search"></i> &nbsp;</button>
      </div>
    </div>
  );
}