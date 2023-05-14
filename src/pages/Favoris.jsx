import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favoris = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [favoritesComics, setFavoritesComics] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);

    const favoritesList = keys
      .filter((key) => key.startsWith("favorite-"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    const favoritesListComic = keys
      .filter((key) => key.startsWith("favoriteComics-"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    setFavoritesComics(favoritesListComic);
    setFavorites(favoritesList);
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <div className="container">
      <h1 className="container-h h1-fav">
        Ici vous retrouverez vos personnages et comcis <span>favoris</span>.
      </h1>
      <h2 className="h2-fav container-h">Personnages :</h2>

      <div className="card-fav container">
        {favorites.map((data) => (
          <Link key={data._id} to={`/character/${data._id}`}>
            <div className="card-characters">
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
      </div>

      <h2 className="h2-fav container-h">Comics :</h2>
      <div className="card-fav container">
        {favoritesComics.map((comic) => {
          return (
            <Link key={comic._id} to={`/comic/${comic._id}`}>
              <div className="card-comics card-fav">
                <div className="for-cut-comics">
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt={comic.title}
                  />
                </div>
                <div className="characters-title-desc">
                  <h3>{comic.title}</h3>
                  <p>{comic.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Favoris;
