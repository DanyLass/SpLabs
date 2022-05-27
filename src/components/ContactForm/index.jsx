import React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import "./styles.scss";

export function ContatctForm() {
  return (
    <form class="register__container">
      <h4>Não fique parado, fale conosco</h4>
      <div class="form__container">
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Seu email" />
        <div class="form__select">
          <select class="ls__select">
            <option value="1"> Seu segmento </option>
          </select>
        </div>
        <Input type="text" placeholder="Fale um pouco sobre o seu negócio" />
        <div class="form__text">
          <h6 class="check__text">
            <Checkbox />
            Declaro que conheço a Política de Privacidade e <br />
            autorizo a utilização das minhas informações pelo SP Labs
          </h6>
        </div>

        <div class="register__button">
          <Button children="ENVIAR" />
        </div>
      </div>
    </form>
  );
}
