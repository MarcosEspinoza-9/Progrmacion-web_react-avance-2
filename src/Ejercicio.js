import React from 'react';
export const Ejercicio = (props) => {
  console.log(props);

  const num_aleatorio = [];


  return (
    <div>
      <h3>Introducir 4 elementos numericos</h3>
      <p>Numero 1: <input type="text" name="numero1"/></p> 
      <p>Numero 2: <input type="text" name="numero2"/></p> 
      <p>Numero 3: <input type="text" name="numero3"/></p> 
      <p>Numero 4: <input type="text" name="numero4"/></p> 
      
      <table>
  <tr>
    <th>suma</th>
    <th>Resta</th>
    <th>multiplicacion</th>
    <th>Divicion</th>
  </tr>
  </table>
    </div>
  );
};
