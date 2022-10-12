import React from 'react';

export const TercerComponente = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Comunicaciones entre componente del APP al TercerComponente</h1>
      <ul>
        <li>Nombre: {props.nombre}</li>
        <li>apellido: {props.apellido}</li>
        <li>altura: {props.ficha.altura}</li>
        <li>peso: {props.ficha.peso}</li>
        <li>Edad: {props.ficha.edad}</li>
      </ul>
    </div>
  );
};
