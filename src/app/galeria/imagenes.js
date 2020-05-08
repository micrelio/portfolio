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
  //---Numero de valores que contiene cada objeto
  console.log(Object.values(Local));
  //---Claves del objeto
  console.log(Object.keys(Local));
  //---devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
  console.log(Object.entries(Local));
  //---Si es numerable devuelve true de lo contrario false
  console.log(Object.prototype.propertyIsEnumerable(Local));
  //---crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
  console.log(Object.create(Local));
  //---devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.
  console.log(Object.getOwnPropertyNames(Local));
  //---
  console.log(Object.entries(Local));
  //--- A pelo
  console.log(Local);
  //---Entrar en un dato en concreto del objeto
  console.log(Local.Logos);
  //--------------------------------------------------------------------------------

  //console.log('objeto vacio', onLine);



//---imagenes en local------------------------
  llaves = Object.keys(Local);
  console.log(llaves.length);
  //---Leemos las claves
 for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = Local[tipo];
    console.log(tipo);
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
      img.setAttribute("height", "120rem");
      img.setAttribute("class", "imagenPresentacion");
      img.setAttribute("id", tipo);

 document.getElementById(tipo).appendChild(img);
    }
  }


}