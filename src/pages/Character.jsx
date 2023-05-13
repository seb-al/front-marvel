import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [remove, setRemove] = useState(true);
  if (checked === true) {
    localStorage.setItem(
      `favorite-${id}`,
      JSON.stringify(data, data.thumbnail)
    );
  }
  if (remove === false) {
    localStorage.removeItem(`favorite-${id}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <>
      <div className="container character-page">
        <div>
          <h1 className="title-character">{data.name}</h1>
          <div className="img-p-character">
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt={data.name}
            />
            <div>
              <p>{data.description}</p>
              {JSON.parse(localStorage.getItem(`Favoris${id}`)) ? (
                <button
                  className="fav-button"
                  onClick={() => {
                    setRemove(!remove);
                  }}
                  value={remove}
                >
                  Enlever des favoris
                </button>
              ) : (
                <button
                  className="fav-button"
                  onClick={() => {
                    setChecked(!checked);
                  }}
                  value={checked}
                >
                  Ajouter à ses favoris
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <h2 className="container h2-card"> Ils sont apparus dans ces comics :</h2>
      <div className="card-chara-id container">
        {data.comics.map((comic) => {
          if (
            comic.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return (
              <div key={comic._id} className="comics-in-characters">
                <Link to={`/comic/${comic._id}`}>
                  <div className="card-comics">
                    <div className="for-cut-comics">
                      <img
                        src={
                          comic.thumbnail.path + "." + comic.thumbnail.extension
                        }
                        alt={comic.title}
                      />
                    </div>
                    <div className="characters-title-desc">
                      <h3>{comic.title}</h3>
                      <p>{comic.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Character;
