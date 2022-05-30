import "../styles.css";
import Navigacija from "./navbar";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import cr1 from "../images/croatia1.jpg";
import cr2 from "../images/croatia2.jpg";
import cr3 from "../images/croatia3.jpg";
import karta from "../images/hrvkarta.jpg";
import Footer from "./footer";

export default function Glavna() {
  return (
    <div className="Glavna">
      <h1>Glavna</h1>
      <hr />
      <div className="prostor1">
        <img src={cr1} className="image-glavna" />
        <br />
        <div className="block-drzac">
          <div className="block-fly fly1">
            <div className="block-incontent">
              Posjetite najljepše lokacije u našoj Hrvatskoj
              <img src={cr2} className="slika-blok1" />
            </div>
          </div>
          <div className="block-fly fly2">
            <div className="block-incontent">
              ...sve od Sjevernih zlatnih polja
              <img src={cr3} className="slika-blok2" />
            </div>
          </div>
          <div className="block-fly fly3">
            <div className="block-incontent">
              ...do Dalmatinskih srebrnih otoka
              <img src={cr1} className="slika-blok3" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="para-blok">
        <p>
          Hrvatska ima jako daleku povijest obilježenu krvi i znojem. Sjever
          Hrvatske je prekriven ravnicama, starim građevinama, te čistim i
          vedrim rijekama koje razdjeljuju zelene površine. Na putu prema jugu
          nalječemo na Gorsku Hrvatsku - prostor ukopan u Hrvatske planine,
          prekriven maglom i visokom borovinom. Ako idemo još južnije, doći ćemo
          na glavno obilježje Hrvatske, njeno more. Dalmacija i Primorska
          Hrvatska su biser u oku. Sa oko 50 otoka, impresionira svojim
          raznolikim reljefom. U Dalmaciji se može naći sve, od pješčanih plaža
          do starih ruševina te idilskih prostora koje pozivaju sve
          avanturističke duše na istraživanje.
        </p>
      </div>
      <br />
      <div className="para-blok">
        <p>
          Mnogo je za pronaći i za istražiti. Hrvatska je prekrivena raznim
          kulturalnim mjestima. Od tehnološki naprednih gradova, sve do malih
          tiših sela koje pokazuju stari način života. Mnoga povijesna mjesta
          pokazuju raznolikost te nastanak Hrvatske države. Kako je Grčka
          pokrajna postala predstavnik herojstva i samostalnosti? To se sve može
          otkriti kroz dvorce, zidine, i mnoge druge građevine.
        </p>
      </div>
      <hr />
      <br />
      <center>
        <table>
          <tr>
            <th>Dio Hrvatske</th>
            <th>Popularnost</th>
            <th>Cijena</th>
          </tr>
          <tr>
            <td className="daPolje">Dalmacija</td>
            <td className="daPolje">5/5</td>
            <td className="daPolje">2/5</td>
          </tr>
          <tr>
            <td className="slPolje">Slavonija</td>
            <td className="slPolje">3/5</td>
            <td className="slPolje">5/5</td>
          </tr>
          <tr>
            <td className="grPolje">Gorska Hrvatska</td>
            <td className="grPolje">2/5</td>
            <td className="grPolje">4/5</td>
          </tr>
        </table>
      </center>
      <br />
      <div className="para-blok">Karta sa Hrvatskim Regijama</div>
      <br />
      <center>
        <img src={karta} className="karta" />
      </center>
      <br />
      <Footer />
    </div>
  );
}
