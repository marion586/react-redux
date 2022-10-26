import React from "react";
import "./style.css";
import { useCharacters } from "./hooks/useCharacters";

import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, data, loading } = useCharacters();
  console.log(error, loading, data);

  if (loading) return <div>spinner ...</div>;
  if (error) return <div>semithing wrong ...</div>;
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="mon character " />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
