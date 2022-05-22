import React from "react";
import background from "../../assets/background.png";
import "./styles.scss";

export function Home() {
  return (
    <div class="container">
      <div class="header__container">
        <img class="img__header" src={background} alt="" />
      </div>
    </div>
  );
}
