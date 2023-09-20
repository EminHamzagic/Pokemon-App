import { useContext } from "react";
import "../css/paginator.css";
import { PageContext } from "../contexts/PageContext";

export default function Paginator() {
  const { setPage, page, setFlag, flag } = useContext(PageContext);
  return (
    <div className="pag_container">
      <button
        onClick={() => {
          if (page > 0) {
            setFlag(!flag);
            setPage(page - 20);
          }
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setFlag(!flag);
          setPage(page + 20);
        }}
      >
        Next
      </button>
    </div>
  );
}
