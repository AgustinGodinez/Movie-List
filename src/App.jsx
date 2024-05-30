import { useState } from 'react'
import './App.css'
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';

function App() {
  const [ListadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Lista de Peliculas</h1>
      </header>

      {/* Barra de navegacion */}
      <nav className="nav">
        <h1>Aqui puede poner las peliculas que hallas visto y cual fue tu opinión</h1>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">
        {/* Aqui va el listado de las peliculas */}
        <Listado ListadoState={ListadoState} setListadoState={setListadoState} ></Listado>
      </section>

      {/* Barra lateral  */}

      <aside className="lateral">
        <Buscador ListadoState={ListadoState} setListadoState={setListadoState}></Buscador>
        <Crear setListadoState={setListadoState}></Crear>
      </aside>
    </div>
  );
}

export default App;
