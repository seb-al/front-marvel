import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken, token }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return token ? (
    <>
      <div className="container-form2">
        <h6>Vous êtes déjà connecté !</h6>
        <Link to="/">
          <button className="connect_button">Retour à l'accueil</button>
        </Link>
      </div>
    </>
  ) : (
    <form
      className="container-form"
      onSubmit={async (event) => {
        event.preventDefault();
        console.log();
        try {
          const response = await axios.post(
            "https://site--marvel--x89fgb8wnx9j.code.run/signup",
            {
              username: username,
              email: email,
              password: password,
            }
          );
          console.log(response);
          if (response.data.token) {
            handleToken(response.data.token);
            navigate("/");
          }
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
      <div className="form-box">
        <span className="title-box">S'enregistrer</span>
        <div className="form-container">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
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
            value={password}
          />
        </div>
        <div className="button-transform">
          <input className="send-button" type="submit" value="Se connecter" />
        </div>

        <div className="form-section">
          <p>
            Tu as déjà un compte ?
            <Link to="/login"> Connecte-toi par ici !</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Signup;
