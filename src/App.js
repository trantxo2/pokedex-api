import "./index.css";
import "./App.css";
import { Card } from "./Card";

const pokemon = {
  id: "001",
  name: "Bulbasaur",
  height: 4.3,
  weight: 6.5,
  types: ["grass", "poison"],
  src: "https://...",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus.",
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Card />
      </body>
    </div>
  );
}

export default App;
