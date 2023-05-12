import { Link } from "react-router-dom";
import comics from "../assets/img/comics.jpg";
import characters from "../assets/img/characters.jpg";
const Home = () => {
  return (
    <>
      <main className="container">
        <h1>
          Bienvenue dans l'univers de <span>Marvel</span> !
        </h1>
        <h2>
          Nous avons intégré une API pour vous permettre facilement de retrouver
          vos comics ainsi que vos personnages préférés.
        </h2>
        <section>
          <Link to="/comics">
            <div className="card-home">
              <div className="for-cut">
                <img src={comics} alt="comics" />
              </div>
              <div>
                <h3>Retrouvez les comics ici !</h3>
              </div>
            </div>
          </Link>

          <Link to="/characters">
            <div className="card-home">
              <div className="for-cut">
                <img src={characters} alt="characters from marvel" />
              </div>
              <div>
                <h3>Retrouvez les personnages ici !</h3>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};
export default Home;
