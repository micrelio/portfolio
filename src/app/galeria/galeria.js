class miGaleria extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    //  cargaBoton();
    //  myFunction();
  }
  connectedCallback() {
    this.innerHTML =
      `
                  <section id="galeria" class="galeria" >
    <div class="">
        <button type="button" onclick="cambiar('todos');"> Todos </button>
        <button id="bLogos" type="button"onclick="cambiar('logos');" > Logos </button>                                       <!-- -->
        <button id="bFolletos" type="button" onclick="cambiar('folletos');"> Folletos </button>
        <button id="bPosters" type="button" onclick="cambiar('posters');"> Posters </button>
        <button id="bPostales" type="button" onclick="cambiar('postales');"> Postales </button>
        <button id="bPngs" type="button" onclick="cambiar('pngs');"> Pngs </button>
        <button id="bPngs" type="button" onclick="cambiar('Google');"> Google </button>

    </div>
 </section>
<section id="content">
<mi-imagenes></mi-imagenes>
<!-- <mi-imagenes></mi-imagenes> -->
</section>
                `;
    cargaBoton()
    cargaTodo();
    //cambiar('todos') //quitar al acabar
    // const logosy = document.querySelector('#bLogos');
    // logosy.addEventListener('mousemove', function() {
    //   
    // });
  }
}
customElements.define('mi-galeria', miGaleria);

function cargaBoton() {
  //---imagenes en imagenes------------------------
  llaves = Object.keys(imagenes);
  console.log(llaves.length);
  //---Leemos las claves
  for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = imagenes[tipo];
    console.log('tipo', tipo);
    console.log('dato', dato);
       var boton = document.createElement('button');
    var hr = document.createElement('hr');
    var h = document.createElement('h');
    //---CREAMOS UN TEXTO---
    var t = document.createTextNode(tipo);
    h.setAttribute("class", "title");
    h.setAttribute("id", "i ");
    div.setAttribute("id", tipo);
    div.setAttribute("class", "fila");
    hr.setAttribute("class", "raya");

    document.getElementById('repertorio').appendChild(h);
    h.appendChild(t);
    document.getElementById('repertorio').appendChild(hr);
    document.getElementById("repertorio").appendChild(div);
    //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
    for (let index2 = 0; index2 < dato.length; index2++) {
      
    }
  }


}














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