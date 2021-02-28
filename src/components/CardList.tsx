import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Card } from "./Card";
import { Loading } from "./Loading";

export function CardList() {
  const { animes, isLoading } = useContext(SearchContext)
  return (
    <div>
      <Loading loading={isLoading} />
      <div className="row row-cols-1 row-cols-md-3 card-deck">
        {animes.map(anime => (
          <Card key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}