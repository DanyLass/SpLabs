import React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import "./styles.scss";
export function CaseItem() {
  return (
    <div class="case__container">
      <section class="case__title">Solução 1</section>
      <text class="case__text">
        Repita comigo: Não vou esquecer de prestar atenção se está tudo
        alinhadinho. Não vou esquecer de prestar atenção se está tudo
        <br /> alinhado. Não vou esquecer de prestar atenção.
      </text>

      <div>
        <button class="case__button">
          ACESSE
          <img src={ArrowRight} height="24px" width="24px" alt="acesse" />
        </button>
      </div>
    </div>
  );
}
