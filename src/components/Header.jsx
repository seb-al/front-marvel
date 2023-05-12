import logo from "../assets/img/marvel.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header className="container">
      <div>
        <Link to="/">
          <img src={logo} alt="logo Marvel" />
        </Link>
      </div>

      <nav>
        <Link to="/comics">
          <p>Comics</p>
        </Link>
        <Link to="/characters">
          <p>Peronnages</p>
        </Link>
        {token ? (
          <Link to="/favoris">
            <p className="purple">Favoris</p>
          </Link>
        ) : (
          <Link to="/login">
            <p className="purple">Favoris</p>
          </Link>
        )}

        {token ? (
          <button
            className="disconect_button"
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <Link to="/login">
            <button className="connect_button">Se connecter</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
