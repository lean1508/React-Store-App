import React from "react";
import '../assets/css/Header.css'
import iconoCarrito from "../assets/static/carrito.png"
import iconoVolver from "../assets/static/volver.png"

export default function Header() {
  return (
    <>
      <a href="/cart">
        <img src={iconoCarrito} alt="" className="carritou" />
      </a>
      <a href="/">
        <img src={iconoVolver} alt="" className="volver" />
      </a>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
