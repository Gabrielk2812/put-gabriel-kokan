import "../styles.css";
import CreatorHotela from "./creatorHotela";

export default function Roditelj() {
  return (
    <div className="Roditelj">
      OVO SU PONUĐENI HOTELI
      <CreatorHotela
        lokacija1="Split"
        cijena1={500}
        ocjena1={3}
        lokacija2="Split"
        cijena2={1500}
        ocjena2={5}
        lokacija3="Split"
        cijena3={720}
        ocjena3={4}
      />
    </div>
  );
}
