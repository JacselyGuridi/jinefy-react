import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer bg-slate-300 w-full">
      <div className="box-container flex justify-center space-x-32">
        <div className="icons flex flex-row space-x-32">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <Link to={"/products"}><a href="#">products</a></Link>
            <a href="#">MemberShip</a>
          </div>

          <div className="box">
            <h3>Social Media</h3>
            <a href="https://www.instagram.com/jly_guridi?igsh=dGVjODl2MXY2ejE3&utm_source=qr">@jly_guridi</a>
            <a href="https://www.instagram.com/wilkaryzambranoo?igsh=NThmM2lhaHNqaXUx">@wilkaryzambranoo</a>
            <a href="https://www.instagram.com/pamelaabreuc?igsh=MW1ieGVuY2RsYnVsbg==">@pamelaabreuc</a>
          </div>

          <div className="box">
            <h3>locations</h3>
            <a href="https://www.google.com/maps/place/Nike+Well+Collective+-+Brickell/@25.8042156,-80.3135891,12z/data=!4m10!1m2!2m1!1snike+miami!3m6!1s0x88d9b71825ef6df7:0x99acde8d23b3e3e0!8m2!3d25.7677508!4d-80.1930238!15sCgpuaWtlIG1pYW1pIgOIAQFaDCIKbmlrZSBtaWFtaZIBEHNwb3J0c3dlYXJfc3RvcmXgAQA!16s%2Fg%2F11t7t0_h10?entry=ttu">Miami, US </a>
            <a href="https://www.google.com/maps/place/Nike+NYC/@40.7597434,-73.9793882,17z/data=!3m2!4b1!5s0x89c258fbfb54cb5d:0x696baacf24d17937!4m6!3m5!1s0x89c259fb1b3bfcfd:0x45693aff492846a5!8m2!3d40.7597394!4d-73.9768133!16s%2Fg%2F11h13bs_nq?entry=ttu">NYC, Us</a>
            <a href="https://www.google.com/maps/place/Nike+Store/@18.4724758,-69.9499565,16z/data=!4m10!1m2!2m1!1sNike+santo+domingo+rd!3m6!1s0x8eaf89e4e4dace69:0x2c0251d76ac87df7!8m2!3d18.4724758!4d-69.9409443!15sChVOaWtlIHNhbnRvIGRvbWluZ28gcmQiA4gBAVoXIhVuaWtlIHNhbnRvIGRvbWluZ28gcmSSAQ5jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11c59r7f0z?entry=ttu">Sto. Dgo. RD</a>
          </div>

          <div className="box">
            <h3>contact us</h3>
            <a>+809-505-0000</a>
            <a >jinefyinfo@hotmail.com </a>
            <a >jinefy@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="credit">
        created by <span>JACSELY GURIDI</span>|all right reserved
      </div>
    </section>
  );
}
