import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../pages/Home";

export type CartItemType = {
  name: string;
  price: number;
};

const Cart = () => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
    throw new Error("nincs kontext");
  }
  const {cart} = cartCtx;
  return (
    <aside className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.map((c) => (
        <CartItem {...c} />
      ))}
    </aside>
  );
};

export default Cart;
