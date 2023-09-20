import { useState } from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay";
import CardList from "./components/CardList";
import Paginator from "./components/Paginator";
import { PageContext } from "./contexts/PageContext";

function App() {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(false);

  return (
    <div className="container">
      <PageContext.Provider value={{ page, setPage, flag, setFlag }}>
        <CardList />
        <Paginator />
        <CardDisplay />
      </PageContext.Provider>
    </div>
  );
}

export default App;
