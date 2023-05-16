import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div className="card">
          <div className="cardInfo">
            <h1 className="title">Bulbasaur</h1>
            <h2 className="number">#001</h2>
          </div>
          <div className="cardData">
            <img
              className="pokemonImage"
              src="images/bulbasaur.svg"
              alt=""
            ></img>
            <div className="types">
              <h3 className="type grassType">Grass</h3>
              <h3 className="type poisonType">Poison</h3>
            </div>
            <div className="about">About</div>
            <div className="specs">
              <div className="specs__container">
                <div className="specs__data">
                  <img
                    className="specs__image"
                    src="images/Vector.svg"
                    alt=""
                  ></img>
                  <h4>6,9 kg</h4>
                </div>
                <h5 className="specs__name">Weight</h5>
              </div>
              <div className="divider"></div>
              <div className="specs__container">
                <div className="specs__data">
                  <img
                    className="specs__image"
                    src="images/Height.svg"
                    alt=""
                  ></img>
                  <h4>0,7 m</h4>
                </div>
                <h5 className="specs__name">Height</h5>
              </div>
            </div>
            <div className="description">
              There is a plant seed on its back right from the day this Pokémon
              is born.
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
