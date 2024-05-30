import { useRef, useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const form = useRef()

  const tituloComponent ="Añadir peliculas";

  const [peliState, setpeliStare]=useState({})

  const {id, titulo, descripcion} =peliState

  const conseguirDatosForm = e =>{

      e.preventDefault();

      let datos = e.target;
      let peli ={
          id: new Date().getTime(),
          titulo: datos.titulo.value,
          descripcion: datos.descripcion.value,
      }

      /* guardar estado */
      setpeliStare(peli);

      /* guardar en lista */
      setListadoState(elements =>{
          return [...elements, peli]
      })
      
      /* guardar en el almacenamiento local */
      GuardarEnStorage("pelis",peli)
      form.current.reset();
    }    

return (
  <div className="add">
    <h3 className="title">{tituloComponent}</h3>
      <strong>
    {(id, titulo, descripcion) && `haz Guardado la pelicula ${titulo}`}
    </strong>
    <form ref={form} onSubmit={conseguirDatosForm}>
      <input type="text" id="titulo" name="titulo" aria-placeholder="Titulo"  placeholder="Titulo"/>
      <textarea id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
      <input type="submit" value="Guardar" />
    </form>
  </div>
);
};
