import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Card } from "./Card";
import { Anime } from "../types/types";
import { getAnimes } from "../services/api";

type Props = {
  animes : Anime[];
}

export function CardList() {
  const {animes} = useContext(SearchContext)
  return (
    <div className="row row-cols-1 row-cols-md-3 card-deck">
      { animes.map(anime => (
        <Card key={anime.mal_id} anime={anime} />
      ))}
    </div>
  )
}