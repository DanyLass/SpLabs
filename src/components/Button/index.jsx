import React from "react";
import "./styles.scss";

export function Button({ children }) {
  return (
    <button type="button" class="content__button">
      {children}
    </button>
  );
}
