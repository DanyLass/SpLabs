import React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import "./styles.scss";

export function CaseItem({ title, description }) {
  return (
    <div class="case__item__container">
      <section class="case__title">{title}</section>
      <div class="case__description__container">
        <text class="case__description">{description}</text>
      </div>
      <button type="submit">
        <span>ACESSE</span>
        <img src={ArrowRight} height="24px" width="24px" alt="acesse" />
      </button>
    </div>
  );
}
