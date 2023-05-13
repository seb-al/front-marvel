import { useEffect, useState } from "react";

const ComicCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`favoriteComics-${data._id}`)
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      localStorage.removeItem(`favoriteComics-${data._id}`);
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        `favoriteComics-${data._id}`,
        JSON.stringify(data),
        true
      );
      setIsFavorite(true);
    }
  };

  return (
    <div className="container character-page">
      <div>
        <h1 className="title-character">{data.title}</h1>
        <div className="img-p-character">
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt={data.title}
          />
          <div>
            <p>{data.description}</p>
            <button className="fav-button" onClick={handleFavoriteClick}>
              {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
