import {useEffect, useContext} from 'react'
import '../assets/css/Home.css'
import Item from '../components/Item'
import Contexto from '../context/Contexto'

export default function Home() {
  const {productos, listarProductos} = useContext(Contexto);
  useEffect(()=>{
    listarProductos()
  },[]);

  
  
  return (
      <>
    <div className="container">
      <div className="wraper">
        <div className="home">
          {productos.map((item)=>(
              <Item {...item} key={item.id}></Item>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
