import React from "react";
import { Button } from "../../components/Button";
import { CaseItem } from "../../components/CaseItem";
import { Iframe } from "../../components/Iframe";
import { ContatctForm } from "../../components/ContactForm";
import logo from "../../assets/logo.svg";
import "./styles.scss";

export function Home() {
  return (
    <main class="home__container">
      <section class="hero__container">
        <header class="header__container">
          <img src={logo} alt="logo" />
          <nav class="nav__container">
            <a>Cases</a>
            <a>Contato</a>
          </nav>
        </header>
        <div class="text__container">
          <h1>
            Imagine, crie, <br />
            implemente e <span>evolua</span>
          </h1>
          <h4>
            Porque não basta resolver apenas os conflitos do mundo do direito.
          </h4>
          <div class="hero__button">
            <Button children="INICIE SUA JORNADA" />
          </div>
        </div>
      </section>
      <section class="cases__container">
        <div class="cases__text">
          <h1>
            Problemas complexos.
            <br /> Soluções <span class="title__line-through"> complexas</span>
            <span class="title__italic"> criativas_</span>
          </h1>
          <p>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
        </div>
        <div class="cases__container__list">
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
          <CaseItem />
        </div>
      </section>
      <section class="video__container">
        <div class="title__container">
          <h6>Quem são, o que fazem, onde vivem?</h6>
          <text>
            Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS,
            pode ser qualquer outro vídeo da sua escolha, mas queremos dar play.
          </text>
        </div>
        <div class="video__Iframe">
          <Iframe embedId="tgIRmwMvlf4" />
        </div>
      </section>
      
      <section class="contact__container">
        
        <ContatctForm />
        
      </section>
    </main>
  );
}
