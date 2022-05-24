import React from "react";
import "./styles.scss";

export function Button({ title }) {
  return (
    <button type="button" class="content__button">
      {title}
    </button>
  );
}
