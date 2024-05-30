import { useState } from "react";

export const Buscador = ({ListadoState, setListadoState}) => {
    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)
  
    const buscarPeli =(e)=>{
  
      /* crear estado y actualizarlo */
      setBusqueda(e.target.value)
  
      
      /* filtrar para buscar coincidencias */
      let pelis_encontradas = ListadoState.filter(peli=>{
        return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
      })
    
      if(busqueda.length <=1 || pelis_encontradas <=0){
        pelis_encontradas=JSON.parse(localStorage.getItem("pelis"))
        setNoEncontrado(true)
      }else{
        setNoEncontrado(false)
      }
    
      /* actualizar estado del listado principal con lo que logro filtrar */
      setListadoState(pelis_encontradas)
    } 
  
    return (
      <div className="search">
        <h3 className="title">buscador: {busqueda}</h3>
        {
          (noEncontrado===true && busqueda.length >=1) &&(
            <span className="span1">busqueda no encontrada</span>
          )
        }
        <form action="">
          <input type="text" name="busqueda" autoComplete="off" onChange={buscarPeli}/>
          <button>Buscar</button>
        </form>
      </div>
    );
  };
  