/* eslint-disable react/prop-types */
export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const titulo_componente = "Editar Pelicula";

  const guardar = (e, id) => {
    e.preventDefault();

    /* conseguir target del evento */
    let target = e.target;

    /* buscar el indice del objeto de la pelicula a actualizar */
    let pelis_amacenadas = conseguirPeliculas();
    let indice = pelis_amacenadas.findIndex((peli) => peli.id === id);

    /* crear objeto con ese id de ese indice, con titulo y descripcion del formulario */
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    /* actualizar el elemento con ese indice */
    pelis_amacenadas[indice] = peli_actualizada;

    /* guardar el nuevo array de objetos con el localStorage */
    localStorage.setItem("pelis", JSON.stringify(pelis_amacenadas));

    /* guardar el nuevo array de objetos con los estados */
    setListadoState(pelis_amacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardar(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo"
          defaultValue={peli.titulo}
        ></input>
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion"
        ></textarea>
        <input type="submit" className="editar" value="Actualizar"></input>
      </form>
    </div>
  );
};
