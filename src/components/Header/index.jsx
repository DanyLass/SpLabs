import React from "react";
import logo from "../../assets/logo.svg";

import "./styles.scss";

export function Header() {
  return (
    <main class="header">
      <div class="header__logo">
        <img class="img__logo" src={logo} alt="splabs" />
        <nav class="header__menu">
          <a>Cases</a>
          <a>Contato</a>
        </nav>
      </div>
    </main>
  );
}
