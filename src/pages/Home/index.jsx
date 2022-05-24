import React from "react";
import background from "../../assets/background.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CaseItem } from "../../components/CaseItem";
import "./styles.scss";

export function Home() {
  return (
    <main class="container">
      <Header />
      <section class="text">
        <h6>
          Imagine,crie,
          <br />
          implemente e <span>evolua</span>
          <p>
            Porque não basta resolver apenas os conflitos do mundo do direito.
          </p>
        </h6>
        <Button title="INICIE SUA JORNADA" />
      </section>
      <img class="img__background" src={background} alt="background" />
      <section class="title">
        <h1>
          Problemas complexos.
          <br /> Soluções <span class="title__line-through"> complexas</span>
          <span class="title__italic"> criativas_</span>
        </h1>
        <p>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
      </section>
      <div class="case__list__container">
        <CaseItem />
      </div>
    </main>
  );
}
