import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Cari from "./components/Cari/Cari";
import Complete from "./components/Complete/Complete";
import Detail from "./components/Detail/Detail";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h1>Lelenime</h1>
        <nav className="nav">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="complete">
            complete
          </Link>
          <Link className="nav-link" to="cari">
            find
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="complete" element={<Complete />}></Route>
        <Route path="cari" element={<Cari />}></Route>
        <Route path="/cari/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
