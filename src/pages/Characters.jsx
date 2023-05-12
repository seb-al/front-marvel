import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pages from "../components/Pages";

const Characters = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/characters?name=${name}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [name, skip]);

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
      <div className="container-buttons">
        <Pages skip={skip} setSkip={setSkip} data={data}></Pages>
      </div>
    </>
  );
};

export default Characters;
