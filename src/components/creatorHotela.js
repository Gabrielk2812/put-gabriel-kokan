import "../styles.css";
import sl1 from "../images/hsplit1.jpg";
import sl2 from "../images/hsplit2.jpg";
import sl3 from "../images/hsplit3.jpg";

export default function CreatorHotela({
  lokacija1,
  cijena1,
  ocjena1,
  lokacija2,
  cijena2,
  ocjena2,
  lokacija3,
  cijena3,
  ocjena3
}) {
  let hotel1 = {
    loc: lokacija1,
    price: cijena1,
    zvjezde: ocjena1
  };
  let hotel2 = {
    loc: lokacija2,
    price: cijena2,
    zvjezde: ocjena2
  };
  let hotel3 = {
    loc: lokacija3,
    price: cijena3,
    zvjezde: ocjena3
  };
  function obavjest() {
    window.alert("Vaša narudđba je primljena");
  }
  return (
    <div className="create">
      <div className="hotelPlace">
        <div className="hotel1">
          <img src={sl1} className="slHotel" />
          Lokacija: {hotel1.loc}
          <br /> Cijena: {hotel1.price}
          <br /> Ocjena: {hotel1.zvjezde} / 5<br />
          <button onClick={obavjest}>NARUČITE</button>
        </div>
        <div className="hotel1">
          <img src={sl2} className="slHotel" />
          Lokacija: {hotel2.loc}
          <br /> Cijena: {hotel2.price}
          <br /> Ocjena: {hotel2.zvjezde} / 5<br />
          <button onClick={obavjest}>NARUČITE</button>
        </div>
        <div className="hotel1">
          <img src={sl3} className="slHotel" />
          Lokacija: {hotel3.loc}
          <br /> Cijena: {hotel3.price}
          <br /> Ocjena: {hotel3.zvjezde} / 5<br />
          <button onClick={obavjest}>NARUČITE</button>
        </div>
      </div>
    </div>
  );
}
