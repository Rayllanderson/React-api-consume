const API_URL = `https://api.jikan.moe/v3/search/anime?q=`
import axios from "axios";

export function getAnimes(search: string) {
  return axios(API_URL + search);
}
