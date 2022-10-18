import React from 'react';

function unClick() {
  alert('Diste un click');
}

function dobleClick() {
  alert('Diste undoble click');
}

function entrarClick() {
  alert('entraste a una zona prohibida XXX');
}

function salirClick() {
  alert('saliste de una zona prohibida');
}

function foco() {
  console.log('atencion');
}
function evento(e) {
  console.log(e.target.value);
}

export const CuartoComponente = () => {
  return (
    <div>
      <h1> Evento</h1>
      <button onClick={unClick}>clik here</button>
      <button ondobleClick={dobleClick}>doble click here</button>
      <div id="area" onMouseEnter={entrarClick} onMouseEnter={salirClick}></div>
      <p>
        <input
          type="text"
          onBlur={}
          onFocus={foco}
          onChangue={evento}
          placeholder="eventos"
        ></input>
      </p>
    </div>
  );
};
