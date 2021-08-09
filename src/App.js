// import React from "react";
import "./scss/main.scss";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
function App() {
  return (
    <section className="main-section">
      <article className="card">
        <div className="col-1 col">
          <img src={sedans} alt="" />
          <h1>SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button>Learn More</button>
        </div>
        <div className="col-2 col">
          <img src={suvs} alt="" />
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button>Learn More</button>
        </div>
        <div className="col-3 col">
          <img src={luxury} alt="" />
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button>Learn More</button>
        </div>
      </article>
    </section>
  );
}

export default App;
