import { useState } from "react";
import CartItem from "./CartItem";

export type CartItemType = {
    name: string
    price : number
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([{name:"Alma", price: 2}]);
    
  return (
    <aside className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.map(c => <CartItem {...c}/>)}
    </aside>
  );
};

export default Cart;
