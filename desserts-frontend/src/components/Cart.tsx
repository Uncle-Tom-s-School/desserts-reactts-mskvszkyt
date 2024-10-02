import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../pages/Home";

export type CartItemType = {
  name: string;
  price: number;
};

export type VisibleCartType = {
  item: CartItemType;
  quantity: number;
};

const Cart = () => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
    throw new Error("nincs kontext");
  }
  const { cart } = cartCtx;

  const [visibleCart, setVisibleCart] = useState<VisibleCartType[]>([]);

  useEffect(() => {
    const unique: string[] = [];
    cart.forEach((i) => {
      if (!unique.includes(i.name)) {
        unique.push(i.name);
      }
    });

    let tempCart = [];

    unique.forEach((d) => {
      let counter = 0;
      cart.forEach((c) => {
        if (c.name === d) {
          counter++;
        }
      });
    //   let visibleItem: VisibleCartType = { item: c }; TODO!
    });
  }, [cartCtx]);

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
