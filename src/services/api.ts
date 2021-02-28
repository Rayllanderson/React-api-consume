import axios from "axios";

const API_URL = `https://api.jikan.moe/v3/search/anime?q=`
const limit = 10;

export async function getAnimes(search: string) {
  return await axios(API_URL + `${search}&limit=${limit}`);
}
