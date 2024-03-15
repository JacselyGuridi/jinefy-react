import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function WishlistCardContainer({ sneakers = [] }) {
  return (
    <div className="box-container ">
      {sneakers?.map((sneaker, index) => {
        console.log(sneaker);
        return (
          <WishlistCard
            key={sneaker.id}
            name={sneaker.model}
            price={sneaker.price}
            imagen={sneaker.image}
            id={index}
            sneakerId={sneaker.id}
          />
        );
      })}
    </div>
  );
}

function WishlistCard({ name, price, imagen, id, sneakerId }) {
  const { user } = useUser();
  const [sneakerWishList, setSneakerWishList] = useState(
    JSON.parse(localStorage.getItem(user.id + "wishList")) || []
  );

  return (
    <section>
      <div className="grid grid-cols-4 border-2 bg-slate-50  rounded-lg  ">
        <div className=" bg-slate-50 ">
          <img src={"http://localhost:3000/" + imagen} alt="" />
          <div className="content"></div>
        </div>

        <div className="  py-14 p-12  px-4 pl-14">
          <h3 className="text-4xl text-pink-400 py-4 my-4">{name}</h3>
          <h3 className="text-3xl text-gray-600 py-4 my-4">{price} $US</h3>
        </div>
        <div></div>
        <div className="  py-14  p-12  px-4 grid grid-rows-4  ">
          <div></div>
          <Link
            to={"/products/" + sneakerId}
            className="btn fas fa-eye flex justify-center align-content: flex-end  bg-pink-400 hover:bg-pink-600 w-1/2  py-4 uppercase text-white "
          ></Link>

          <button
            className="btn fas fa-trash flex justify-center align-content: flex-end bg-gray-500 hover:bg-gray-600 w-1/2  py-4 uppercase text-white "
            onClick={() => {
              DeleteWish(id);
              Swal.fire({
                title: "Message",
                text: "Wish deleted",
                icon: "success",
              }).then(() => {
                window.location.reload();
              });
            }}
          ></button>
        </div>
      </div>
    </section>
  );

  function DeleteWish(index) {
    const newWishlist = [...sneakerWishList];
    newWishlist.splice(index, 1);
    setSneakerWishList(newWishlist);
    console.log(newWishlist);
    localStorage.setItem(`${user.id}wishList`, JSON.stringify(newWishlist));
  }
}
