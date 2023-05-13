import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ handleToken, token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return token ? (
    <div className="container-form2">
      <h6>Vous êtes déjà connecté !</h6>
      <Link to="/">
        <button className="connect_button">Retour à l'accueil</button>
      </Link>
    </div>
  ) : (
    <>
      <div>
        <form
          className="container-form"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://site--marvel--x89fgb8wnx9j.code.run/login",
                {
                  email: email,
                  password: password,
                }
              );
              if (response.data.token) {
                handleToken(response.data.token);
                navigate("/favoris");
              }
              // console.log(response.data);
            } catch (error) {
              console.log(error.message);
              console.log(error.response.data);
            }
          }}
        >
          <div className="form-box">
            <span className="title-box">Connectez-vous</span>
            <div className="form-container">
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
              <input
                type="password"
                placeholder="Mot de passse"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="button-transform">
              <input
                className="send-button"
                type="submit"
                value="Se connecter"
              />
            </div>

            <div className="form-section">
              <p>
                Vous n'avez pas de compte ?
                <Link to="/signup"> Créer un compte</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
