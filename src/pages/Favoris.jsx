import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favoris = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);

    const favoritesList = keys
      .filter((key) => key.startsWith("favorite-"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    setData(data);
    setFavorites(favoritesList);
    setIsLoading(false);
    console.log(data);
    console.log(favorites);
  }, []);
  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <>
      <h1 className="container-h h1-fav">
        Ici vous retrouverez vos personnages et comcis <span>favoris</span>.
      </h1>
      <h2 className="h2-fav container-h">Personnages :</h2>
      {favorites.map((data, index) => (
        <Link key={index} to={`/character/${data._id}`}>
          <div className="card-characters container-form">
            <div className="for-cut-characters">
              <img
                src={data.thumbnail.path + "." + data.thumbnail.extension}
                alt={data.name}
              />
            </div>
            <div className="characters-title-desc">
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </Link>
      ))}

      <h2 className="h2-fav container-h">Comics :</h2>
    </>
  );
};
export default Favoris;
