import { Fragment } from "react";
import watchImg from "../../assets/watchHeader.webp";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactWatches</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={watchImg} alt="watch header" />
      </div>
    </Fragment>
  );
};

export default Header;
