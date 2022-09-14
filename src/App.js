import { useState } from "react";
import Header from "./components/Layout/Header";
import Watches from "./components/Watches/Watches";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Watches />
      </main>
    </CartProvider>
  );
}

export default App;
