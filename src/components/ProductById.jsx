import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function ProductById() {
  const { sneakerId } = useParams();
  const [sneaker, setSneaker] = useState();
  const [sneakerSize, setSneakerSize] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const { user } = useUser();

  const [sneakerWishList, setSneakerWishList] = useState(
    JSON.parse(localStorage.getItem(user.id + "wishList")) || []
  );

  const [sneakerOnCart, setSneakerOnCart] = useState(
    JSON.parse(localStorage.getItem(user.id + "cart")) || []
  );

  // o unico que tiene que hacer es crear un estado para la wishlist y pasarle el objecto del sneake

  async function getData() {
    const response = await fetch(
      `http://localhost:3000/api/sneakers/${sneakerId}`
    );
    const data = await response.json();
    setSneaker(data);
  }
  async function getDataSize() {
    const response = await fetch(
      "http://localhost:3000/api/sneakers/" + sneakerId + "/sizes"
    );
    const data = await response.json();
    setSneakerSize(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
    getDataSize();
  }, []);

  useEffect(() => {
    localStorage.setItem(user.id + "wishList", JSON.stringify(sneakerWishList));
  }, [sneakerWishList, user.id]);

  useEffect(() => {
    localStorage.setItem(`${user.id}cart`, JSON.stringify(sneakerOnCart));
  }, [sneakerOnCart, user.id]);

  //cada que le des click al boton y que el estado cambia de sneakerwishlist la funcion dentro del useEffect se va a ejecutar
  if (!sneaker) {
    return null;
  }

  return (
    <section className="productByid" id="productByid">
      <div>
        <h1 className="heading py-4 my-4 p-12 mt-32 ">
          Sneaker<span> Details</span>
        </h1>
      </div>
      <div className="container w-full flex flex-row ">
        <div className="grid grid-cols-2 ">
          <div className="image-container bg-slate-50">
            <img src={`http://localhost:3000/${sneaker.image}`} alt="" />
            <div className="content"></div>
          </div>

          <div className=" mx-14 py-14 my-14 p-12  px-4 pl-14">
            <h3 className="text-6xl text-pink-400 py-4 my-4">
              {" "}
              {sneaker.model}
            </h3>
            <h3 className="text-4xl text-gray-600 py-4 my-4">
              {sneaker.price} $US
            </h3>
            {/* Básicamente es validar que el valor que se está pasando es el mismo que ya está puesto 
            Y si es el mismo, quitarlo y dejar el estado vacío */}
            <div className="grid grid-cols-5 gap-4">
              {sneakerSize?.map((size) => {
                return (
                  <div className="flex" key={size.id}>
                    <input
                      name="size"
                      type="checkbox"
                      id={size.id + "-size"}
                      className="peer hidden"
                      onChange={() => {
                        if (selectedSize != size.size) {
                          setSelectedSize(size.size);
                        } else {
                          setSelectedSize(null);
                        }
                      }}
                      checked={selectedSize == size.size}
                    />
                    {/* Para validar si un checkbox está checked, vas a validar
                     que el valor del selectedsize sea igual a su size.id */}
                    <label
                      htmlFor={size.id + "-size"}
                      className="select-none cursor-pointer rounded-lg border-2 w-full justify-center text-center border-pink-700 py-3 px-6 font-bold text-pink-900 transition-colors duration-200 ease-in-out peer-checked:bg-pink-200 peer-checked:text-pink-900 peer-checked:border-pink-200 "
                    >
                      {size.size}
                    </label>
                  </div>
                );
              })}
            </div>

            <button
              className="btn fas fa-shopping-cart flex justify-center align-content: flex-start  bg-green-400  py-4 uppercase text-white w-full"
              onClick={() => {
                if (selectedSize) {
                  sneaker.size = selectedSize;
                  setSneakerOnCart([...sneakerOnCart, sneaker]);
                  Swal.fire({
                    title: "Message",
                    text: "Added to cart!",
                    icon: "success",
                  });
                } else {
                  Swal.fire({
                    title: "Message",
                    text: "select a size!",
                    icon: "info",
                  });
                }
              }}
            ></button>
            <button
              className="btn fas fa-heart flex justify-center align-content: flex-start bg-pink-400  py-4 uppercase text-white w-full"
              onClick={() => {
                setSneakerWishList([...sneakerWishList, sneaker]);
                Swal.fire({
                  title: "Message",
                  text: "Added to wishList!",
                  icon: "success",
                });
              }}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
