import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";

export default function Navigacija() {
  return (
    <div className="Navigacija">
      <nav className="navigacijsaTraka">
        <div className="navigacijaContainer">
          <Link to="/" className="put-logo">
            PUT
          </Link>
          <ul className="links">
            <li>
              <Link to="/" className="links-navbar">
                Glavna
              </Link>
            </li>
            <li>
              <Link to="/regije" className="links-navbar">
                Regije
              </Link>
            </li>
            <li>
              <Link to="/narucite" className="links-navbar">
                Naručite
              </Link>
            </li>
            <li>
              <Link to="/galerija" className="links-navbar">
                Galerija
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
