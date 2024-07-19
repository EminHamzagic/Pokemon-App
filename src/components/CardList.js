import { useContext, useEffect, useState } from "react";
import "../css/cardList.css";
import Card from "./Card";
import bblSort from "../functions/sorting";
import { PageContext } from "../contexts/PageContext";

export default function CardList() {
  const [pkmInfo, setPkmInfo] = useState([]);
  // const [flag, setFlag] = useState(false);
  // const [flag, setFlag] = useState(false);
  const [isFirst, setIsFirst] = useState(1);

  const { page, flag, setFlag } = useContext(PageContext);

  useEffect(() => {
    setPkmInfo([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
      .then((response) => response.json())
      .then((pdata) => {
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
        });
      });
  }, [page]);

  useEffect(() => {
    if (pkmInfo.length === 20 && flag === false) {
      setFlag(!flag);
      setPkmInfo(() => {
        var arr = [...pkmInfo];
        bblSort(arr);
        return arr;
      });
    }
  }, [pkmInfo, page]);

  // useEffect(() => {
  //   setFlag(!flag);
  // }, [page]);

  return (
    <div className="cl_container">
      {pkmInfo.map((pkm, index) => {
        return <Card key={index} data={pkm} />;
      })}
    </div>
  );
}
