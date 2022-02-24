import Contexto from "./Contexto";
import axios from 'axios'
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UseContext(props) {
    const { children } = props;
    const estadoInicial = {
        productos: [],
        carrito :[],
    };
    const [state, dispatch] = useReducer(Reducer, estadoInicial);
    
    const listarProductos = async ()=>{
        const res = await axios.get('https://devrockstore-default-rtdb.firebaseio.com/productos.json');
        dispatch({type: "LISTAR_PRODUCTOS", payload: res.data});
        //console.log(res.data); 
    }
    const agregarCarrito = (id) =>{
        console.log('Agregamos al carrito ' + id);
        dispatch({type: "AGREGAR_CARRITO", payload: id})
    }
    const eliminarCarrito = (id)=>{
        console.log('Eliminar al carrito ' + id);
        dispatch({type: "ELIMINAR_CARRITO", payload: id})
    }
    
  return (
    
        <Contexto.Provider value={{
            productos: state.productos,
            carrito: state.carrito,
            listarProductos,
            agregarCarrito,
            eliminarCarrito,
            }}
        >
            {children}
        </Contexto.Provider>
    
  )
}
