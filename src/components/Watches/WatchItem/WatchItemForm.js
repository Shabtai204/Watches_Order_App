import { useRef, useState } from "react";
import classes from "./WatchItemForm.module.css";
import Input from "../../UI/Input";

const WatchItemForm = (props) => {
  const [amountIsVaild, setAmountIsVaild] = useState(true);
  const amountInputRef = useRef();

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaild(false);
      return;
    }

    console.log("enteredAmountNumber = " + enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsVaild && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default WatchItemForm;
