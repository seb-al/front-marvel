import { Link } from "react-router-dom";
import { React } from "react";

const ComicCard = ({ data }) => {
  return (
    <div className="container page-characters">
      {data.results.map((character) => {
        if (
          character.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
          character.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
        ) {
          return (
            <Link key={character._id} to={`/character/${character._id}`}>
              <div className="card-characters">
                <div className="for-cut-characters">
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                </div>
                <div className="characters-title-desc">
                  <h3>{character.name}</h3>
                  <p>{character.description}</p>
                </div>
              </div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ComicCard;
