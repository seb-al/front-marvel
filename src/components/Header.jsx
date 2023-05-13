import logo from "../assets/img/marvel.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import { BiLogOut, BiLogIn } from "react-icons/bi";

const Header = ({ handleToken, token }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="container">
      <div>
        <Link to="/">
          <img src={logo} alt="logo Marvel" />
        </Link>
      </div>

      <nav className="nav-fullscreen">
        <Link className="display-616" to="/comics">
          <p>Comics</p>
        </Link>
        <Link className="display-616" to="/characters">
          <p>Personnages</p>
        </Link>
        {token ? (
          <Link className="display-616" to="/favoris">
            <p className="purple">Favoris</p>
          </Link>
        ) : (
          <Link to="/login">
            <p className="purple display-616">Favoris</p>
          </Link>
        )}

        {token ? (
          <button
            className="disconect_button"
            onClick={() => {
              handleToken(null);
            }}
          >
            <span className="display-fullScreen">
              <BiLogOut className="display-fullscreen" />
            </span>
            <span className="display-616">Se deconnecter</span>
          </button>
        ) : (
          <Link to="/login">
            <button className="connect_button">
              <span className="display-fullScreen">
                <BiLogIn />
              </span>
              <span className="display-616"> Se connecter </span>
            </button>
          </Link>
        )}
      </nav>
      <div className="display-fullScreen">
        <div>
          <nav className=".nav">
            <ul className={isOpen ? "open" : ""}>
              <li>
                <Link className="link-burger" to="/characters">
                  Personnages
                </Link>
              </li>
              <li>
                <Link className="link-burger" to="/comics">
                  Comics
                </Link>
              </li>
              <li>
                <Link className="link-burger purple" to="/favoris">
                  Favoris
                </Link>
              </li>
            </ul>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
