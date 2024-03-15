import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <section className="about" id="about">
      <aboutUs>
        <h1 className="heading ">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="video-container">
            <video src="images/about-vid.mp4" loop autoPlay muted></video>
            <h3>Best clothing sellers</h3>
          </div>

          <div className="content">
            <h3>Why choose us?</h3>
            <p>
              {" "}
              JINEFY is a global online fashion and lifestyle retailer committed
              to making the beauty of fashion accessible to everyone. We use
              make-on-demand technology to connect suppliers with our agile
              supply chain, reducing inventory waste and enabling us to deliver
              a variety of affordable products to customers around the world.
            </p>
            <p>
              Our customers are at the heart of our business model, driving our
              growth to a team of nearly 10,000 employees serving more than 150
              countries in less than a decade. Our digital first model meets
              customers where they are most present: on mobile, online and on
              social media.
            </p>

            <Link to={"/learnMore"}>
              <a href="#" className="btn">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </aboutUs>
    </section>
  );
}
