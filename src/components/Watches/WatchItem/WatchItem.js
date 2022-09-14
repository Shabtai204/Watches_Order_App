import { useContext } from "react";
import classes from "./WatchItem.module.css";
import WatchItemForm from "./WatchItemForm";
import CartContext from "../../../store/cart-context";

const WatchItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}$`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log("amount = " + amount);
  };

  return (
    <li className={classes.watch}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <WatchItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default WatchItem;
