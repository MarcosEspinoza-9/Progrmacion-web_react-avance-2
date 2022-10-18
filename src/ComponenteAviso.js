import React ,{useEffect} from 'react'

export const ComponenteAviso = ()=>{

useEffect(()=>{
alert("el componente aviso se a cargado")
return (()=>{
alert("El componente aviso a sido demostrado")

})
},[])
return(
<div>
  <h1>Este es el componente aviso</h1>
  <button onClick={e=>{alert("Saludos desde aqui")}}> Mostrar Saludo </button>
</div>

}