import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("userToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("userToken");
    }
  };
  return (
    <Router>
      <Header
        handleToken={handleToken}
        token={token}
        setSearch={setSearch}
        search={search}
      />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login handleToken={handleToken} token={token} />}
          />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} token={token} />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
