/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ ListadoState, setListadoState }) => {
    const [editar, setEditar] = useState(0);

    const conseguirPeliculas = () => {
      let peliculas = JSON.parse(localStorage.getItem("pelis"));
      setListadoState(peliculas);
  
      return peliculas;
    };
  
    const borrar = (id) => {
      /* conseguir peliculas almacenadas */
      let pelis_almacenadas = conseguirPeliculas();
  
      /* filtar esas peliculas */
      let nuevo_array_pelis = pelis_almacenadas.filter(
        (peli) => peli.id !== parseInt(id)
      );
  
      /* actualizar estado de listado */
      setListadoState(nuevo_array_pelis);
  
      /* actualizar datos en el localStorage */
      localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
    };
  
    useEffect(() => {
      conseguirPeliculas();
    }, []);
  
    return (
      <>
        {ListadoState != null ? (
          ListadoState.map((peli) => {
            return (
              <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="descripcion">{peli.descripcion}</p>
                <button className="edit" onClick={() => setEditar(peli.id)}>
                  Editar
                </button>
                <button className="delete" onClick={() => borrar(peli.id)}>
                  Borrar
                </button>
                {editar === peli.id &&(
                <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}></Editar>
                )}
              </article>
            );
          })
        ) : (
          <h2>no hay peliculas</h2>
        )}
      </>
    );
  };
  