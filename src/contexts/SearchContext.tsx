import { createContext, ReactNode, useContext, useState } from "react";
import { getAnimes } from "../services/api";
import { Anime } from "../types/types";
import { FilterContext } from "./FilterContext";

interface SearchContextData {
  animes: Anime[],
  search: string,
  selectedAnime: Anime,
  isLoading: boolean,
  handleOnChange: (e) => void,
  consumeApi: () => void,
  onSelectAnime: (anime: Anime) => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {

  const [search, setSearch] = useState('');
  const [animes, setAnimes] = useState<Anime[]>([])
  const [selectedAnime, setSelectedAnime] = useState<Anime>();
  const { limitNumber, searchType } = useContext(FilterContext);
  const [isLoading, setLoading] = useState(false);

  function handleOnChange(e) {
    setSearch(e.target.value)
  }

  function consumeApi() {
    const validSearch: boolean = search.length >= 3;
    if (validSearch) {
      setLoading(true);
      getAnimes(search, searchType, limitNumber)
        .then(response => {
          const data = response.data.results;
          data.length != 0 ? setAnimes(data) : alert('Nenhum anime encontrado');
          setLoading(false);
        })
        .catch(() => alert('Nenhum anime encontrado'))
    } else {
      if (search.length == 0)
        clearCards();
      else
        alert('Pesquisa precisa de, no mínimo, 3 caracteres');
    }
  }

  function clearCards() {
    setSearch('');
    setAnimes([]);
    setLoading(false);
  }

  function onSelectAnime(anime: Anime) {
    setSelectedAnime(anime);
  }

  return (
    <SearchContext.Provider value={{
      animes,
      search,
      selectedAnime,
      isLoading,
      handleOnChange,
      consumeApi,
      onSelectAnime
    }}>
      {children}
    </SearchContext.Provider>
  )
}