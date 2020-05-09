//import { hello } from './module.js';


class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
     `
    <!--
     <img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" alt="">
     -->  
     <section id="repertorio" class="repertorio">
  </section>
  `;
  }
}
customElements.define('mi-imagenes', miImagenes);
function cargaTodo() {
  // //---Numero de valores que contiene cada objeto
  // console.log(Object.values(imagenes));
  // //---Claves del objeto
  // console.log(Object.keys(imagenes));
  // //---devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
  // console.log(Object.entries(imagenes));
  // //---Si es numerable devuelve true de lo contrario false
  // console.log(Object.prototype.propertyIsEnumerable(imagenes));
  // //---crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
  // console.log(Object.create(imagenes));
  // //---devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.
  // console.log(Object.getOwnPropertyNames(imagenes));
  // //---
  // console.log(Object.entries(imagenes));
  // //--- A pelo
  // console.log(imagenes);
  // //---Entrar en un dato en concreto del objeto
  // console.log(imagenes.Logos);
  // //--------------------------------------------------------------------------------

  // //console.log('objeto vacio', onLine);



//---imagenes en imagenes------------------------
 var llaves = Object.keys(imagenes);
  //---Leemos las claves
 for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = imagenes[tipo];
    var div = document.createElement('div');
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
      var img = document.createElement('img');
      var path = dato[index2];
      img.setAttribute("src", path);
      img.setAttribute("height", "70rem");
      img.setAttribute("class", "imagenPresentacion");
      img.setAttribute("id", tipo);

 document.getElementById(tipo).appendChild(img);
    }
  }


}