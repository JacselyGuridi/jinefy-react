import { useUser } from "@clerk/clerk-react";
import { OnCartCardContainer } from "../components/MyCartCard";
import Swal from "sweetalert2";

export default function MyCart() {
  const { user } = useUser();
  const sneakerOnCart =
    JSON.parse(localStorage.getItem(user.id + "cart")) || [];

  const totalPrice = () => {
    let total = 0;
    sneakerOnCart.forEach((sneaker) => {
      total += sneaker.price;
    });
    return total;
  };

  return (
    <section className="productByid" id="productByid">
      <div>
        <h1 className="heading py-4 my-4 p-12 mt-32 ">
          My Cart<span> List</span>
        </h1>
      </div>
      <div className="container w-full flex flex-row ">
        <OnCartCardContainer sneakers={sneakerOnCart}></OnCartCardContainer>
      </div>
      <div className="grid grid-rows-2 justify-items-end">
        <h3 className="bg-slate-50 border-2  text-center text-3xl w-1/4">
          Total Price: {totalPrice()} $US
        </h3>
        <button
          className="btn fas fa-shopping-cart flex justify-center  bg-green-400 hover:bg-green-600 w-1/4  py-4 uppercase text-white "
          onClick={() => {
            Swal.fire({
              title: "Message",
              text: "Thank you for choosing us, enjoy your purchase!",
              icon: "success",
            }).then(() => {
              localStorage.removeItem(user.id + "cart");
              window.location.reload();
            });
          }}
        ></button>
      </div>
    </section>
  );
}
