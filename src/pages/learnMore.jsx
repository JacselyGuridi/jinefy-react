import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <section className="about" id="about">
      <aboutUs>
        <div className="flex flex-1 flex-col items-center justify-center min-h-screen space-y-8">
          <div>
            <h1 className="heading py-12 my-12 p-12 mt-32">
              {" "}
              Learn More<span> About Us</span>
            </h1>

            <div className="row">
              <div className="content">
                <h3>Why choose us?</h3>
                <p>
                  {" "}
                  JINEFY is a global online fashion and lifestyle retailer
                  committed to making the beauty of fashion accessible to
                  everyone. We use make-on-demand technology to connect
                  suppliers with our agile supply chain, reducing inventory
                  waste and enabling us to deliver a variety of affordable
                  products to customers around the world.
                </p>
                <p>
                  Our customers are at the heart of our business model, driving
                  our growth to a team of nearly 10,000 employees serving more
                  than 150 countries in less than a decade. Our digital first
                  model meets customers where they are most present: on mobile,
                  online and on social media.
                </p>
                <hr />
                <h3 className="py-12">We have membership</h3>

                <p>
                  Our customers are at the heart of our business model, driving
                  our growth to a team of nearly 10,000 employees serving more
                  than 150 countries in less than a decade. Our digital first
                  model meets customers where they are most present: on mobile,
                  online and on social media.
                </p>

                <Link to={"/membership"}>
                  <a href="#" className="btn">
                    Know More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aboutUs>
    </section>
  );
}
