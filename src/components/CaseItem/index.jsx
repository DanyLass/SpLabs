import React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import "./styles.scss";

export function CaseItem() {
  return (
    <div class="case__item__container">
      <section class="case__title">Solução 1</section>
      <div class="case__description__container">
        <text class="case__description">
          Repita comigo: Não vou esquecer de prestar atenção se está tudo
          alinhadinho. Não vou esquecer de prestar atenção se está tudo
          alinhado. Não vou esquecer de prestar atenção.
        </text>
      </div>
      <div>
        <button class="case__button">
          ACESSE
          <img src={ArrowRight} height="24px" width="24px" alt="acesse" />
        </button>
      </div>
    </div>
  );
}
