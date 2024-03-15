import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export function Header() {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <header>
        <input type="checkbox" name="" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>

        <a href="#" className="logo">
          JINEFY<span>.</span>
        </a>

        <nav className="navbar">
          <Link to={"/"}>Home</Link>

          <a href="/#about">About</a>

          {isSignedIn && (
            <>
              <Link to={"/products"}>Products</Link>
              <Link to={"/wishList"}>Wishlist</Link>
              <Link to={"/myCart"}>MyCart</Link>
            </>
          )}
          <Link to={"/membership"}>Membership</Link>
        </nav>

        <div className="icons flex flex-row items-center space-x-4">
          <Link to={"/wishList"}>
            <a href="#" className="fas fa-heart"></a>
          </Link>
          <Link to={"/myCart"}>
            <a href="#" className="fas fa-shopping-cart mr-6"></a>
          </Link>

          <SignedOut>
            <SignInButton>
              <a href="#" className="fas fa-user "></a>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="scale-125">
              <UserButton className="h-32"></UserButton>
            </div>
          </SignedIn>
        </div>
      </header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
