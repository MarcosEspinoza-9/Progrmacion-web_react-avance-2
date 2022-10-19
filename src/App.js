import React from 'react';
import './style.css';
import {PrimerComponente} from './PrimerComponente.js';
import {SegundoComponente} from './SegundoComponente.js';
import {TercerComponente} from './TercerComponente.js';
import {CuartoComponente} from './CuartoComponente.js';
import {MiEfecto} from './MiEfecto.js';

export default function App() {
// se creo una variable donde contiene datos 
  const Fichamedica = {
    edad: 25,
    altura: 166,
    peso: 80,
    tiposangre: "o+"
  }

  return (
    <div> 
      
      <h1>Marcos Espinoza Chagolla</h1>
      <p>Mi primer Practica</p>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <TercerComponente nombre= "Marcos" apellido= "Espinoza" ficha={Fichamedica} ></TercerComponente>
    <CuartoComponente></CuartoComponente>
    <MiEfecto></MiEfecto>
      
    </div>
  );
}

export default App;