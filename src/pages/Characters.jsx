import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/characters?name=${name}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [name]);

  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <>
      <div className="container div-search">
        <input
          className="search-input"
          type="search"
          placeholder="Recherche de personnage"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="container page-characters">
        {data.results.map((character) => {
          if (
            character.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
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
      </div>{" "}
    </>
  );
};

export default Characters;
