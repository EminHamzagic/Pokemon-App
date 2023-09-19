import "../css/card.css";
import PkmType from "./PkmType";

export default function Card({ data }) {
  return (
    <div className="card_container">
      <p>No{data.id}</p>
      <img src={data.sprite} />
      <div className="pkm_info">
        <p>{data.name}</p>
        {data.types.map((item, index) => {
          return <PkmType key={index} type={item.type.name} />;
        })}
      </div>
      <div className="pkmBody_info">
        <p>WT: {data.weight}</p>
        <p>HT: {data.height}</p>
      </div>
    </div>
  );
}
