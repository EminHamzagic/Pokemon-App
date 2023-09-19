import { useEffect, useState } from "react";
import "../css/cardList.css";
import Card from "./Card";

export default function CardList() {
  const [pkmInfo, setPkmInfo] = useState([]);

  useEffect(() => {
    setPkmInfo([]);
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")
      .then((data) => data.json())
      .then((pdata) =>
        pdata.results.map((pkm) => {
          fetch(pkm.url)
            .then((response) => response.json())
            .then((data) => {
              setPkmInfo((arr) => [
                ...arr,
                {
                  id: data.id,
                  name: data.name,
                  weight: data.weight,
                  height: data.height,
                  sprite: data.sprites.front_default,
                  types: data.types,
                },
              ]);
            });
        })
      );
  }, []);
  return (
    <div className="cl_container">
      {pkmInfo.map((pkm, index) => {
        return <Card key={index} data={pkm} />;
      })}
    </div>
  );
}
