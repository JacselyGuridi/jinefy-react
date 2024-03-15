import { useEffect } from "react";
import { WishlistCardContainer } from "../components/WishlistCard";
import { useUser } from "@clerk/clerk-react";

export default function WhishList() {
  const { user } = useUser();
  const sneakerWishList =
    JSON.parse(localStorage.getItem(user.id + "wishList")) || [];

  useEffect(() => {
    localStorage.setItem(user.id + "wishList", JSON.stringify(sneakerWishList));
  }, [user.id]);

  return (
    <section className="productByid" id="productByid">
      <div>
        <h1 className="heading py-4 my-4 p-12 mt-32 ">
          Sneaker<span> WishList</span>
        </h1>
      </div>
      <div className="container w-full flex flex-row ">
        <WishlistCardContainer
          sneakers={sneakerWishList}
        ></WishlistCardContainer>
      </div>
    </section>
  );
}
