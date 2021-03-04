import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Anime } from "../types/types";

type Props = {
  anime: Anime;
}

export function Card({ anime }: Props) {
  const { onSelectAnime } = useContext(SearchContext);
  const quantityDescription = anime.episodes ? `Episódios:  ${anime.episodes}` : `Capítulos: ${anime.chapters}`;
  const quantityClassName = anime.episodes ? "fas fa-play" : "fas fa-book";
  return (
    <a className="col mb-4 text-decoration-none" onClick={() => onSelectAnime(anime)} 
    data-toggle="modal" data-target="#exampleModal">
        <div className="card h-100 flex-column">
        <div className="text-center">
          <img src={anime.image_url} className="card-img-top" alt="Imagem" />
        </div>
          <div className="text-center pb-3 mb-3">
            <h5 className="card-title d-flex align-items-center justify-content-center" style={{ minHeight: 100, maxHeight: 110 }}>{anime.title}</h5>
          </div>
        <div className="card-footer" style={{
          position: 'absolute',
          bottom: -5,  width: '100%'}}>
          <p title="Score"><i className="fas fa-star"></i> {anime.score}</p>
          <p className="float-right"><i className={quantityClassName}></i> {quantityDescription} </p>
          </div>
        </div>
      </a>
  );
}