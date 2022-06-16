import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
