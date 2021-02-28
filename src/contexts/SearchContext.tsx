import { createContext, ReactNode, useState } from "react";
import { getAnimes } from "../services/api";
import { Anime } from "../types/types";

interface SearchContextData {
  animes: Anime[],
  search: string,
  handleOnChange: (e) => void,
  consumeApi: () => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {

  const [search, setSearch] = useState('');
  const [animes, setAnimes] = useState<Anime[]>([])

  function handleOnChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  function consumeApi() {
    const validSearch: boolean = search.length >= 3;
    if (validSearch) {
      getAnimes(search)
        .then(response => setAnimes(response.data.results))
        .catch(() => alert('Nenhum anime encontrado'))
    } else
      search.length == 0 ? clearCards() : alert('Pesquisa precisa de, no mínimo, 3 caracteres');
  }

  function clearCards() {
    setSearch('');
  }

  return (
    <SearchContext.Provider value={{
      animes,
      search,
      handleOnChange,
      consumeApi
    }}>
      {children}
    </SearchContext.Provider>
  )
}