import "../styles.css";
import Navigacija from "./navbar";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import slika1 from "../images/dalmacijabeach.jpg";
import slika2 from "../images/gorskaplanine.jpg";
import slika3 from "../images/slavonija.jpg";
import Footer from "./footer";

export default function Regije() {
  return (
    <div className="Regije">
      <h1>Regije</h1>
      <hr />
      <div className="para-blok">
        <p>
          Kao što smo već rekli Hrvatska se sastoji od tri glavne regije:
          Dalmacija, Gorska Hrvatska i Slavonija. Pa hajdemo ih proći i
          opisati...
        </p>
      </div>
      <hr />
      <div className="para-blok">
        <p>
          Dalmacija jedan je od najstarijih regionalnih pojmova u Hrvatskoj.
          Prvi se put spominje osme godine prije Krista kad ju je osnovao rimski
          car August kao naziv za područje između Promine i Cetine koje je
          nastanjivalo ilirsko pleme Dalmata, odnosno kao sinonim za dio
          Ilirika, kako su širi prostor postojbine raznih ilirskih plemena
          nazivali Rimljani.
          <br />
          Iako se prostorni opseg Dalmacije u prošlosti znatno mijenjao i
          obuhvaćao i susjedne države Bosnu i Hercegovinu, Crnu Goru i Albaniju,
          taj se pojam održao od antičkog doba do danas jedino u dijelu
          Hrvatske. Dapače, na sjeverozapadu se još u srednjem vijeku proširio
          na dijelove jugoistočne antičke i ranosrednjovjekovne Liburnije. Do
          kraja I. svjetskog rata funkcionirala je Dalmacija kao posebna
          pokrajina u Austro-Ugarskoj Monarhiji i tada je uključivala na
          sjeverozapadu Rapsku otočnu skupinu, a na jugoistoku prostor Boke
          kotorske i Budve sve do Spiča
        </p>
      </div>
      <center>
        <img src={slika1} />
      </center>
      <hr />
      <div className="para-blok">
        <p>
          Gorski kotar nalazi se u zapadnome dijelu Hrvatske. Na sjeveru doseže
          prostore do državne granice sa Slovenijom, a na jugu graniči sa
          zavičajnim područjem Likom. Granica između Gorskog kotara i Like je
          dolina oko grada Ogulina. Pokaži Gorski kotar na zemljovidu. Lika je
          gorska regija okružena planinama: Velebit na jugu, Velika Kapela na
          zapadu, Mala Kapela na sjeveru te Lička Plješivica na istoku. Područje
          je Like planinska zaravan. Zaravan je ravnica (ravni dio reljefa) na
          određenoj nadmorskoj visini.
        </p>
      </div>
      <center>
        <img src={slika2} />
      </center>
      <hr />
      <div className="para-blok">
        <p>
          Od velike vode ostale su samo školjčice u plodnim ravnicama slavonskih
          polja. Ali zato su tri velike rijeke, Sava, Drava i Dunav, zagrlile
          taj kraj i čovjek je znao da će u izobilju prirode tu imati dragi dom.
          Davno nestalo Panonsko more ipak je ostavilo jedan svoj slani izvor u
          Bizovcu. Temperatura vode od čak 96 °C jedinstvena je pojava u Europi.
          To izazovno prirodno okruženje voljelo je plemstvo koje je nekada tu
          gradilo dvorce te uživalo u lovu, ribolovu i vrhunskom vinu koje se
          pilo i na europskim dvorovima i kraljevskim krunidbama. Poznati su
          vinski podrumi Iloka, Kutjeva i Belja. Danas možete i sami uživati u
          svim tim čarima prošlih vremena. Na putovima Panonskog mora otkrijte
          lijepe pjesme toga kraja uz zvuke tamburice, a mnogobrojne folklorne
          svečanosti prikazat će vesele povorke okićenih muškaraca i djevojaka u
          živopisnim nošnjama, muškarci nose šokačke šešire, a djevojke zlatne
          dukate. Grad Vinkovci – grad s najduljim kontinuitetom života u
          Europi.
        </p>
      </div>
      <center>
        <img src={slika3} />
      </center>
      <Footer />
    </div>
  );
}
