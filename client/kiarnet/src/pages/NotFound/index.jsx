import React from "react";
import "./index.scss";
export default function NotFound (){
  return (
    <div className="notfound">
      <div className="notfound__content">
        <div className="notfound__number">404</div>
        <h1 className="notfound__title">Página não encontrada</h1>
        <p className="notfound__message">
          Desculpe, a página que você está procurando não existe.
        </p>
        <a href="/" className="notfound__button">
          Go Home
        </a>
      </div>
      <footer className="notfound__footer">© 2024 KiarNet</footer>
    </div>
  );
};

