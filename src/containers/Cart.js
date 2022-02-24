import {useContext} from "react";
import CartItem from "../components/CartItem";
import '../assets/css/Cart.css'
import Contexto from "../context/Contexto";

export default function Cart() {
  const { carrito, eliminarCarrito } = useContext(Contexto)
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
            {carrito.map((item, i)=>(
              <CartItem {...item} 
              key={i} 
              eliminarCarrito={eliminarCarrito}
              ></CartItem>
          ))}
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
