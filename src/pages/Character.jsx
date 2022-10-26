import React from "react";
import { useCharacter } from "./hooks/useCharacterId";
import { useParams } from "react-router-dom";
const Character = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { data, loading, error } = useCharacter(+id);

  console.log(data, loading, error, id);

  if (loading) return <div>spinner ...</div>;
  if (error) return <div>semithing wrong ...</div>;
  return (
    <div>
      <img src={data.character.image} width={750} height={750} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>

        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - {episode.episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
