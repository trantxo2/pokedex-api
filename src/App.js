import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="cardInfo">
            <h1 className="title">Bulbasaur</h1>
            <h2 className="number">#001</h2>
          </div>
          <div className="cardData">
            <div className="types">
              <h3 className="type grassType">Grass</h3>
              <h3 className="type poisonType">Poison</h3>
            </div>
            <div className="about">About</div>
            <div className="specs">
              <div className="weight">
                <h4>6,9 kg</h4>
                <h5>Weight</h5>
              </div>
              <div className="divider"></div>
              <div className="height">
                <img
                  className="specs__image"
                  src="images/Vector.svg"
                  alt=""
                ></img>
                <h4>0,7 m</h4>
                <h5>Height</h5>
              </div>
            </div>
            <div className="description">
              There is a plant seed on its back right from the day this Pokémon
              is born.
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
