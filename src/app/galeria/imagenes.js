//import { hello } from './module.js';


class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
      <!--<link  type="text/css" rel="stylesheet" href='css/'+nombreDocumento+'.css'/>
-->
  <section id="repertorio" class="repertorio">
 

  <!--    
</div>
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + 
":" + d.getMinutes() + ":" + d.getSeconds()
"</h1>"
-->




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

  //---Numero de valores que contiene cada objeto
  console.log(Object.values(Todos1));
  //---Claves del objeto
  console.log(Object.keys(Todos1));
  //---devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
  console.log(Object.entries(Todos1));
  //---Si es numerable devuelve true de lo contrario false
  console.log(Object.prototype.propertyIsEnumerable(Todos1));
  //---crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
  console.log(Object.create(Todos1));
  //---devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.
  console.log(Object.getOwnPropertyNames(Todos1));
  //---
  console.log(Object.entries(Todos1));


  //--- A pelo
  console.log(Todos1);
  //---Entrar en un dato en concreto del objeto
  console.log(Todos1.Logos);



  llaves = Object.keys(Todos1);
  console.log(llaves.length);
  // console.log('pruebas', Todos1.type)
  //---Leemos las claves


  for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = Todos1[tipo];
     console.log(tipo);
     var div = document.createElement('div');
     var h =document.createElement('h');
var hr =document.createElement('hr');



h.setAttribute("class", " ");

 document.getElementById('repertorio').appendChild(h);
      document.getElementById('repertorio').appendChild(hr);
     div.setAttribute("id", tipo);
     div.setAttribute("class", "fila");

     document.getElementById("repertorio").appendChild(div);

   
    
    for (let index2 = 0; index2 < dato.length; index2++) {

     // const path = dato[index2];
      //  console.log(dato);
      //  console.log(dato.length);
      //  console.log(dato);
     // console.log(ww);
     var img = document.createElement('img');
 
      var path = "../../" + dato[index2];

      img.setAttribute("src", path);
      img.setAttribute("height", "120rem");
      img.setAttribute("class", "imagenPresentacion");
      img.setAttribute("id", tipo);
      

      //  console.log(llaves)
     
      document.getElementById(tipo).appendChild(img);




    }




  }





  // for (let index = 0; index < llaves; index++) {
  //   const dato = llaves;
  //   console.log(dato);

  //   for (let i = 0; i < dato.length; i++) {
  //     var path = "../../" + dato[i]; 
  //     var img = document.createElement('img');
  //     var div = document.createElement('div');



  //     img.setAttribute("src", path);
  //     img.setAttribute("width", "");
  //     img.setAttribute("height", "100rem");
  //     document.getElementById("logos").appendChild(img);
  //   }

  // }





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




