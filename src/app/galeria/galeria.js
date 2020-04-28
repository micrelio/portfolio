class miGaleria extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    myFunction();
  }
  connectedCallback() {
    this.innerHTML =
      `
            <section id="galeria" class="primera" >
    <div class="">
        <button type="button" onclick="cambiar('todos'), cargaTodo();"> Todos </button>
        <button id="bLogos" type="button"onclick="cambiar('logos');" > Logos </button>                                       <!-- -->
        <button id="bFolletos" type="button" onclick="cambiar('folletos');"> Folletos </button>
        <button id="bPosters" type="button" onclick="cambiar('posters');"> Posters </button>
        <button id="bPostales" type="button" onclick="cambiar('postales');"> Postales </button>
        <button id="bPngs" type="button" onclick="cambiar('pngs');"> Pngs </button>
    </div>
 </section>
<section id="content">
<mi-imagenes></mi-imagenes>
<!-- <mi-imagenes></mi-imagenes> -->
</section>
                `;
    cargaTodo();



    // const logosy = document.querySelector('#bLogos');
    // logosy.addEventListener('mousemove', function() {
  
    //   console.log('eeeeeeeee');
    // });
  
  }
}
customElements.define('mi-galeria', miGaleria);
function myFunction() {
  console.log('Hello World');
}





//document.getElementById("bLogos").addEventListener("Click", myFuncti); 
// function myFuncti() {
//  console.log('tttttttttttttttt')
// }



// const buttons = document.querySelectorAll("#select .button")
// for (const button of buttons) {
//   button.addEventListener('click', function(event) {
//     //...
//   })
// }




// const button = document.querySelector('#dataSender');
// button.addEventListener('click', function(event) { 
//   console.log('button clicked');
// });