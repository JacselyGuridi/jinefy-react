import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import Swal from "sweetalert2";

export function Membership() {
  return (
    <section className="about " id="about">
      <aboutUs>
        <div className=" flex flex-1 flex-col items-center justify-center min-h-screen space-y-8">
          <div>
            <div className="w-full py-12 mt-8">
              <img src="images/portada-membership-pink.png"></img>
            </div>
            <h1 className="heading ">
              Become a JINEFY<span> member</span>
            </h1>

            <div className="row">
              <div className="content">
                <p>
                  Discover the true value of a JINEF membership. Your membership
                  gives you access to high-quality products at the best price,
                  complementary services, all under one roof, and exclusive
                  savings at affiliated businesses.
                </p>
                <hr />
              </div>
            </div>
          </div>
          <Benefits />

          <div>
            <div className="row">
              <div className="content">
                <h3>what is JINEFY membership?</h3>
                <p>
                  {" "}
                  JINEFY Membership is access to the very best of JINEFY through
                  any of our apps, exclusive products, and Member-only
                  experiences. JINEFY Members also enjoy free shipping on all
                  orders , 10-day Wear Test, and receipt-less returns. It’s free
                  and easy to join.
                </p>

                <hr />
                <h3 className="py-12">Is JINEFY Membership free?</h3>

                <p>
                  100% yes. Members enjoy all the benefits of JINEFY Membership
                  at no cost, because once you’re in, we got you. Zero money
                  gets you access to all of it.
                </p>
                <Link
                  to={""}
                  className="btn"
                  onClick={() => {
                    Swal.fire({
                      title: "Message",
                      text: "Welcome to JINEFY membership, now you are a member, enyoy all of our benefits",
                      icon: "success",
                    });
                  }}
                >
                  Become a member
                </Link>

                {/* <Link to={""}>
                  <a href="#" className="btn">
                    Become a member
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </aboutUs>
    </section>
  );
}
