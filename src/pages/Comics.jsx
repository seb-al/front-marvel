import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pages from "../components/Pages";

const Comics = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/comics?title=${title}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [title, skip]);

  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <>
      <div className="container div-search">
        <input
          className="search-input"
          type="search"
          placeholder="Recherche de comics"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="container page-characters">
        {data.results.map((comic) => {
          if (
            comic.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return (
              <>
                <Link key={comic._id} to={`/comic/${comic._id}`}>
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
              </>
            );
          }
        })}
      </div>
      <div className="container-buttons">
        <Pages skip={skip} setSkip={setSkip} data={data}></Pages>
      </div>
    </>
  );
};

export default Comics;
