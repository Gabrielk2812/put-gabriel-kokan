import "../styles.css";
import Navigacija from "./navbar";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import s1 from "../images/croatia1.jpg";
import s2 from "../images/croatia2.jpg";
import s3 from "../images/croatia3.jpg";
import s4 from "../images/dalmacijabeach.jpg";
import s5 from "../images/gorskaplanine.jpg";
import s6 from "../images/hrvkarta.jpg";
import s7 from "../images/hsplit1.jpg";
import s8 from "../images/hsplit2.jpg";
import s9 from "../images/hsplit3.jpg";
import s10 from "../images/slavonija.jpg";
export default function Galerija() {
  return (
    <div className="Galerija">
      <center>
        <h1>Galerija</h1>
        <img src={s1} className="galerijasl" />
        <img src={s2} className="galerijasl" />
        <img src={s3} className="galerijasl" />
        <img src={s4} className="galerijasl" />
        <img src={s5} className="galerijasl" />
        <img src={s6} className="galerijasl" />
        <img src={s7} className="galerijasl" />
        <img src={s8} className="galerijasl" />
        <img src={s9} className="galerijasl" />
        <img src={s10} className="galerijasl" />
      </center>
    </div>
  );
}
