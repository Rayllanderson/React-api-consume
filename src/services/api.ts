import axios from "axios";


export async function getAnimes(search: string, searchType: string, limitNumber: number) {
  const API_URL = `https://api.jikan.moe/v3/search/${searchType}?q=${search}&limit=${limitNumber}`;
  return await axios.get(API_URL);
}
