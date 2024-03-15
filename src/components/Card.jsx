import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export function CardContainer({ sneakers = [] }) {
  //este componente recibe una propiedad 'sneakers' que es un array y se asigna un valor por defecto de un array vacio
  //es un contenedor de productos que utiliza card para representar cada producto individual
  //se reinderiza una seccion con titulo y un contenedor de cajas
  //utilizamos map para iterar sobre el array se 'sneaker' y reinderiza
  //un componente 'card' por cada elemento de array

  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        Latest <span>products</span>
      </h1>
      <div className="box-container ">
        {sneakers?.map((sneaker) => {
          return (
            <Card
              key={sneaker.id}
              name={sneaker.model}
              price={sneaker.price}
              imagen={sneaker.image}
              id={sneaker.id}
              sneaker={sneaker} //pasar el objeto del sneaker
            />
          );
        })}
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
export function Card({ name, price, imagen, id, sneaker }) {
  //este componente recibe 3 propiedades
  //reinderiza una caja box que contiene info de un producto
  const { user } = useUser();
  const [sneakerWishList, setSneakerWishList] = useState(
    JSON.parse(localStorage.getItem(user.id + "wishList")) || []
  );

  useEffect(() => {
    localStorage.setItem(user.id + "wishList", JSON.stringify(sneakerWishList));
  }, [sneakerWishList]);

  return (
    <div className="box">
      <span className="discount">-15%</span>
      <div className="image flex justify-center">
        <img src={"http://localhost:3000/" + imagen} alt="" />
        <div className="icons">
          <a
            className="fas fa-heart"
            onClick={() => {
              setSneakerWishList([...sneakerWishList, sneaker]);
              Swal.fire({
                title: "Message",
                text: "Added to wishList!",
                icon: "success",
              });
            }}
          ></a>

          <Link to={"/products/" + id} className="fas fa-eye"></Link>
        </div>
      </div>
      <div className="content">
        <h3>
          <Link to={"/products/" + id}>{name}</Link>
        </h3>
        <div className="price">
          {" "}
          {price} $US <span>{parseInt(price) + 10}$US</span>
        </div>
      </div>
    </div>
  );
}
