import React from "react";
import background from "../../assets/background.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CaseItem } from "../../components/CaseItem";
import { Iframe } from "../../components/Iframe";
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
        <div class="case__list__container">
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
        </div>
      </section>
      <section class="video__text">
        <div class="video__title">
          <h6>
            Quem são, o que fazem,onde
            <br />
            vivem?
          </h6>
          <div>
            Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 <br />
            FPS, pode ser qualquer outro vídeo da sua escolha, mas queremos
            <br />
            dar play.
          </div>
        </div>
        <Iframe embedId="tgIRmwMvlf4" />
      </section>
    </main>
  );
}
