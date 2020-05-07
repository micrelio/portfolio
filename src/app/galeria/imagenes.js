//import { hello } from './module.js';


class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
  <section class="repertorio">
  <p>Logos</p>
  <hr>
  <section class="tipo">
      <div  id="logos" class="fila" >   
</div>
</section>





<!--
<p>Folletos</p>
<hr>
<section  class="tipo">
    <div id="folletos" class="fila" >     
</div>
</section>
  <p>Posters</p>
  <hr>
  <section  class="tipo">
      <div id="posters" class="fila" >
       </div>
  </section>
  <p>Postales</p>
  <hr>
  <section  class="tipo">
      <div id="postales" class="fila" >
               </div>
  </section>
  <p>Pngs</p>
  <hr>
  <section  class="tipo">
      <div id="pngs" class="fila" >
               </div>
  </section>
  -->
</section>
              `;
 }
 
}

customElements.define('mi-imagenes', miImagenes);







function cargaTodo() {

  // Todos.forEach(function (elemento, indice, array) {
  //   console.log(elemento, indice, array);
  //   console.log(Todos[0])
  // });
  //console.log(Todos1)
  

  //---Valores de cada objeto
  console.log(Object.values(Todos1));
  //---Claves del objeto
  console.log(Object.keys(Todos1));
  //---No se
  console.log(Object.entries(Todos1));
  //---Si es numerable devuelve true de lo contrario false
  console.log(Object.prototype.propertyIsEnumerable(Todos1));
  console.log(Object.create(Todos1));
  console.log(Object.getOwnPropertyNames(Todos1));


  
for (let index = 0; index < Todos1; index++) {
const dato = Todos[index];


//   for (let i = 0; i < dato.length; i++) {
//     var path = "../../" + dato[i]; 
//     var img = document.createElement('img');
//     var div = document.createElement('div');

    
    
//     img.setAttribute("src", path);
//     img.setAttribute("width", "");
//     img.setAttribute("height", "100rem");
//     document.getElementById("logos").appendChild(img);
//   }

 }





  // for (let i = 0; i < folletos.length; i++) {
  //   var path = "../../" + folletos[i];
  //   var img = document.createElement('img');
  //   img.setAttribute("src", path);
  //   img.setAttribute("width", "");
  //   img.setAttribute("height", "250rem");
  //       document.getElementById("folletos").appendChild(img);
  // }
  // for (let i = 0; i < posters.length; i++) {
  //   var path = "../../" + posters[i];
  //   var img = document.createElement('img');
  //   img.setAttribute("src", path);
  //   img.setAttribute("width", "");
  //   img.setAttribute("height", "250rem");
  //       document.getElementById("posters").appendChild(img);
  // }
  // for (let i = 0; i < postales.length; i++) {
  //   var path = "../../" + postales[i];
  //   var img = document.createElement('img');
  //   img.setAttribute("src", path);
  //   img.setAttribute("width", "");
  //   img.setAttribute("height", "250rem");
  //   document.getElementById("postales").appendChild(img);
  // }
  // for (let i = 0; i < pngs.length; i++) {
  //   var path = "../../" + pngs[i];
  //   var img = document.createElement('img');
  //   img.setAttribute("src", path);
  //   img.setAttribute("width", "");
  //   img.setAttribute("height", "250rem");
  //   document.getElementById("pngs").appendChild(img);
  // }
}




