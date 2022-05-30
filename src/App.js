import "./styles.css";
import Navigacija from "./components/navbar";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Regije from "./components/regije";
import Narucite from "./components/narucite";
import Galerija from "./components/galerija";
import Glavna from "./components/glavna";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigacija />
        <Routes>
          <Route path="/" element={<Glavna />} />
          <Route path="/regije" element={<Regije />} />
          <Route path="/narucite" element={<Narucite />} />
          <Route path="/galerija" element={<Galerija />} />
        </Routes>
      </Router>
    </div>
  );
}
