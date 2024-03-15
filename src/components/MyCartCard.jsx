import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function OnCartCardContainer({ sneakers = [] }) {
  return (
    <div className="box-container ">
      {sneakers?.map((sneaker, index) => {
        return (
          <OnCartCard
            key={sneaker.id}
            name={sneaker.model}
            price={sneaker.price}
            imagen={sneaker.image}
            id={index}
            size={sneaker.size}
            sneakerId={sneaker.id}
          />
        );
      })}
    </div>
  );
}

export function OnCartCard({ name, price, imagen, id, size, sneakerId }) {
  const { user } = useUser();
  const [sneakerOnCart, setSneakerOnCart] = useState(
    JSON.parse(localStorage.getItem(user.id + "cart")) || []
  );

  return (
    <section>
      <div className="grid grid-cols-4 border-2 bg-slate-50  rounded-lg  hover:-translate-y-6">
        <div className="">
          <img src={"http://localhost:3000/" + imagen} alt="" />
          <div className="content"></div>
        </div>

        <div className=" flex flex-col mt-14 py-14  p-12  px-4 pl-14">
          <h3 className="text-4xl text-pink-400 py-2 my-2">{name}</h3>
          <h3 className="text-3xl text-gray-600 py-1 my-1">{price} $US</h3>
          <h3 className="text-3xl text-gray-600 py-1 my-1">size # {size}</h3>
        </div>
        <div>{""}</div>

        <div className=" py-14  p-12  px-4 grid grid-rows-4 justify-items-center">
          <div>{""}</div>
          <Link
            to={"/products/" + sneakerId}
            className="btn fas fa-eye flex justify-center align-content: flex-end  bg-pink-400 hover:bg-pink-600 w-1/2  py-4 uppercase text-white "
          ></Link>

          <button
            className="btn fas fa-trash flex justify-center align-content: flex-start bg-gray-500 hover:bg-gray-600 w-1/2  py-4 uppercase text-white "
            onClick={() => {
              DeleteItem(id);
              Swal.fire({
                title: "Message",
                text: "item deleted",
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

  function DeleteItem(index) {
    const newCartList = [...sneakerOnCart];
    newCartList.splice(index, 1);
    setSneakerOnCart(newCartList);
    localStorage.setItem(user.id + "cart", JSON.stringify(newCartList));
  }
}
