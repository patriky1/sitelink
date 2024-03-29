import React from "react";
import { Row, Button } from "react-bootstrap";
import Imggrid from "./imagem_grid/perfil.png";
import Imggrid1 from "./imagem_grid/logo.png";
import "./grid.css";

export function GridPerfil() {
  return (
    <>
      <div fluid className="margemgeral">
        <div className="button2">
        <Row>
          <img className="imagemgrid mt-2" src={Imggrid} alt="..." />
        </Row>
        </div>
        <div className="margeml">
        <Row>
          <p>@patrikybrito </p>
        </Row>
        </div>
        <div className="button1">
        <Button href="https://portfoliobrito.netlify.app" variant="primary" size="lg">
          Portfólio
        </Button>
        </div>
        <div className="button3">
        <Button href="https://www.linkedin.com/in/patriky-brito/" variant="primary" size="lg">
          LinkedIn
        </Button>
        </div>
        <div className="button4">
        <Button href="mailto:patrikybrito@gmail.com" variant="primary" size="lg">
          E-mail
        </Button>
        </div>
        <div className="button5">
        <Button href="https://www.instagram.com/patrikybrito/" variant="primary" size="lg">
          Instagram
        </Button>
        </div>
       <img className="logo" src={Imggrid1} alt="..." />
      </div>
<p className="textofinal"> © all rights reserved, 2024.</p>

    </>
  );
}
