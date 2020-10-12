import React from "react";
import "./Checkout.css";
import "./Subtotal.css";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{basket, user}, dispatch] =useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div>
  <h3>Hello, {user?.email}</h3>
          <h1 className="checkout__title">Your shopping basket</h1>
          {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}/>
          ))}
          {/* CheckoutProduct*/}
          {/* CheckoutProduct*/}
          {/* CheckoutProduct*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
