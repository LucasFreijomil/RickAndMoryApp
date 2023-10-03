import Cards from "./components/CardContainer/Cards.jsx";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "lucasfreijomil@gmail.com";
  const PASSWORD = "Rick2023";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const { pathname } = useLocation();

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const randomOnSearch = () => {
    const randomId = Math.floor(Math.random() * (826 - 1) + 1);

    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} randomOnSearch={randomOnSearch} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
