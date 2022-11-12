import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import Cart from "./Cart copy";
import { ToastContainer } from "react-toastify";
import Carousel from "./Carousel";
import { useState } from "react";
import CakeDetails from "./CakeDetails";
import Search from "./Search";
import AddCake from "./AddCake";
import Demo from "./demo";
import CartItems from "./CartItems";
import Summary from "./Summary";
import Address from "./Address";
import Checkout from "./Checkout";
import ConfirmOrder from "./ConfirmOrder";
import Ordersummary from "./OrderSummary";
import EditCake from "./EditCake";

function MyRouter() {
  var [isLoggedIn, setIsLoggedIn] = useState(localStorage.token ? true : false);

  function setLogin() {
    setIsLoggedIn(true);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/cake/:cakeid" element={<CakeDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/addcake" element={<AddCake />} />
          <Route path="/editcake" element={<EditCake />} />

          <Route path="/demo" element={<Demo />} />
          <Route path="/cart" element={<CartItems />} />

          <Route path="/checkout" element={<Checkout />}>
            <Route path="/checkout/summary" element={<Summary />} />
            <Route path="/checkout/address" element={<Address />} />
            <Route path="/checkout/confirm" element={<ConfirmOrder />} />
          </Route>
          <Route path="/ordersummary" element={<Ordersummary />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose="1000"></ToastContainer>
    </>
  );
}
export default MyRouter;
