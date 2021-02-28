import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Anime } from "../types/types";

type Props = {
  anime: Anime;
}

export function Card({ anime }: Props) {
  const { onSelectAnime } = useContext(SearchContext);
  return (
    <a className="col mb-4 text-decoration-none" onClick={() => onSelectAnime(anime)} 
    data-toggle="modal" data-target="#exampleModal">
        <div className="card h-100 flex-column">
          <img src={anime.image_url} className="img-thumbnail h-100" alt="Imagem" />
          <div className="text-center p-3">
            <h5 className="card-title">{anime.title}</h5>
          </div>
          <div className="card-footer">
            <p><i className="fas fa-star"></i> {anime.score}</p>
            <p className="float-right"><i className="fas fa-play"></i> Episódios: {anime.episodes} </p>
          </div>
        </div>
      </a>
  );
}