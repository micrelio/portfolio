class miGaleria extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    myFunction();
  }
  connectedCallback() {
    this.innerHTML = `
            <style>
      @import "/src/app/pages/galeria/galeria.css";
    </style>
<mi-botonera></mi-botonera>
<div class="separador5">
    </div>
<section  class="galeria" >

</section>
<section id="content">
  <mi-imagenes></mi-imagenes> 
  <div class="separador5">
    </div>
</section>
     `;
    cargaTodo();
    // todasImagenes();
    //cambiar('todos') //quitar al acabar
    // const logosy = document.querySelector('#bLogos');
    // logosy.addEventListener('mousemove', function() {
    //
    // });
  }
}
customElements.define("mi-galeria", miGaleria);
function myFunction() {
  console.log("salchipapa");
}
// <div class="">
// <button type="button" onclick="cambiar('todos');"> Todos </button>
// <button id="bLogos" type="button"onclick="cambiar('logos');" > Logos </button>                                       <!-- -->
// <button id="bFolletos" type="button" onclick="cambiar('folletos');"> Folletos </button>
// <button id="bPosters" type="button" onclick="cambiar('posters');"> Posters </button>
// <button id="bPostales" type="button" onclick="cambiar('postales');"> Postales </button>
// <button id="bPngs" type="button" onclick="cambiar('pngs');"> Pngs </button>
// </div>
//document.getElementById("bLogos").addEventListener("Click", myFuncti);
// function myFuncti() {
//
// }
// const buttons = document.querySelectorAll("#select .button")
// for (const button of buttons) {
//   button.addEventListener('click', function(event) {
//     //...
//   })
// }
// const button = document.querySelector('#dataSender');
// button.addEventListener('click', function(event) {
// });
