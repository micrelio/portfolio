//import { hello } from './module.js';


class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
  <section id="repertorio" class="repertorio">
  </section>
  `;
  }
}
customElements.define('mi-imagenes', miImagenes);
function cargaTodo() {
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
  //---Leemos las claves
 for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = Todos1[tipo];
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
      var path = "../../" + dato[index2];
      img.setAttribute("src", path);
      img.setAttribute("height", "120rem");
      img.setAttribute("class", "imagenPresentacion");
      img.setAttribute("id", tipo);

 document.getElementById(tipo).appendChild(img);
    }
  }
}