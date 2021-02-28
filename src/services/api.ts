const API_URL = `https://api.jikan.moe/v3/search/anime?q=`

export function getAnimes(search: string) {
  return fetch(API_URL + `${search}`);
}
