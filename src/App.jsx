import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Products from "./pages/products";
import { SignIn, useAuth } from "@clerk/clerk-react";
import { ProductById } from "./components/ProductById";
import WishList from "./pages/wishList";
import MyCart from "./pages/myCart";
import LearnMore from "./pages/learnMore";
import { Header } from "./components/Layout";
import { Membership } from "./pages/membership";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const { isSignedIn } = useAuth();

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />

          {isSignedIn && (
            <>
              <Route path="/products" element={<Products />} />
              <Route path="/products/:sneakerId" element={<ProductById />} />
              <Route path="/wishList" element={<WishList />} />
              <Route path="/myCart" element={<MyCart />} />
            </>
          )}
          <Route path="/membership" element={<Membership />} />
          <Route path="/learnMore" element={<LearnMore />} />
        </Route>
        <Route path="*" element={isSignedIn ? <>404</> : <SignIn></SignIn>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
