import { useEffect, useState } from "react";
import axios from "axios";
import Pages from "../components/Pages";
import Character from "./Character";
import CharacterCard from "../components/CharacterCard";

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
      <h1 className="title-page container">Personnages</h1>
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
      <CharacterCard data={data} />
      <div className="container-buttons">
        <Pages skip={skip} setSkip={setSkip} data={data}></Pages>
      </div>
    </>
  );
};

export default Characters;
