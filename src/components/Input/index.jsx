import React from "react";
import "./styles.scss";

export function Input(props) {
  return (
    <div class="input__container">
      <input {...props} />
    </div>
  );
}
