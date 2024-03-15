import { AboutUs } from "./pages/aboutus";
import { Link } from "react-router-dom";

function Home() {
  //reinderiza el header, cardContainer, con datos de 'sneakers'
  //autenticacion e interfaz de usuario, incio y cierre se sesion
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen space-y-8">
      <section className="home w-full border-y-4 border-pink-200" id="home">
        <div className="content">
          <h3>Trend and difference</h3>
          <span>YOU ARE WHAT YOU WEAR</span>
          <p
            className="text-black
          "
          >
            Sneakers convey a small but useful piece of information about those
            who wear them. Sneakers serve a practical purpose and also serve as
            non-verbal cues with symbolic messages. With our tennis we represent
            the work of how we are ourselves. Our lifestyle, motivation,
            identity, personality
          </p>
          <Link to={"/products"}>
            <a href="#" className="btn">
              Shop now
            </a>
          </Link>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}

export default Home;
