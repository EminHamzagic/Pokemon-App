import "./App.css";
import CardDisplay from "./components/CardDisplay";
import CardList from "./components/CardList";
import Paginator from "./components/Paginator";

function App() {
  return (
    <div className="container">
      <CardList />
      <Paginator />
      <CardDisplay />
    </div>
  );
}

export default App;
