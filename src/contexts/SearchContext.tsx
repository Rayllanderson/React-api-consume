import { createContext, ReactNode, useState } from "react";
import { getAnimes } from "../services/api";
import { Anime } from "../types/types";

interface SearchContextData {
  animes: Anime[],
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
    setSearch(e.target.value)
  }

  function consumeApi() {
    search.length >= 3 ?
      getAnimes(search)
        .then(response => setAnimes(response.data.results))
        .catch(() => alert('Nenhum anime encontrado'))
      : alert('Pesquisa precisa de, no mínimo, 3 caracteres');
    animes.length == 0 && alert('Nenhum anime encontrado')
  }

  return (
    <SearchContext.Provider value={{
      animes,
      handleOnChange,
      consumeApi
    }}>
      {children}
    </SearchContext.Provider>
  )
}