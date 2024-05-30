export const GuardarEnStorage = (clave, datos) => {
    //conseguir los emementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave, datos));
  
    //comprobrar si es un array
    if (Array.isArray(elementos)) {
      //Guardar dentro de array un elemento nuevo
      elementos.push(datos);
    } else {
      //crear un array conla nueva pelicula
      elementos = [datos];
    }
  
    //guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
  
    //Devolver objeto guardado
    return datos;
  };
  