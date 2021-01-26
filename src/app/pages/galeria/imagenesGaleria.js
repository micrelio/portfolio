//import { hello } from './module.js';
class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <style>
      @import "/src/app/pages/galeria/imagenesGaleria.css";
    </style>
    <!--
     <img src="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg" alt="">
     -->  
     <section class="miniaturas">
     <div id="repertorio" class="repertorio">
        
     </div>
  </section>
  `;
  }
}
customElements.define("mi-imagenes", miImagenes);
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
  var llaves = Object.keys(Galeria);
  console.log(llaves);
  todas = [];
  //---Leemos las claves
  for (let index = 0; index < llaves.length; index++) {
    const tipo = llaves[index];
    const dato = Galeria[tipo];
    var div = document.createElement("div");
    var hr = document.createElement("hr");
    var titulo = document.createElement("h3");
    titulo.addEventListener("click", function () {
      console.log(tipo);
      cargar(tipo);
    });
    //---CREAMOS UN TEXTO---
    var t = document.createTextNode(tipo);
    titulo.setAttribute("class", "title");
    titulo.setAttribute("id", "i");
    titulo.setAttribute("value", tipo);
    div.setAttribute("id", tipo);
    div.setAttribute("class", "fila");
    hr.setAttribute("class", "raya");
    document.getElementById("repertorio").appendChild(titulo);
    titulo.appendChild(t);
    document.getElementById("repertorio").appendChild(hr);
    document.getElementById("repertorio").appendChild(div);
    //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
    for (let index2 = 0; index2 < dato.length; index2++) {
      var img = document.createElement("img");
      var path = dato[index2];
      img.addEventListener("click", function () {
        console.log(tipo, index);
        cargarimagen(tipo, index2);
      });
      img.setAttribute("src", path);
      img.setAttribute("height", "70rem");
      img.setAttribute("class", "imagenPresentacion");
      img.setAttribute("id", tipo);
      document.getElementById(tipo).appendChild(img);
      todas.push(path);
    }
  }
  tipo = "Todas";
  var tituloT = document.createElement("h3");
  var hrT = document.createElement("hr");
  var t = document.createTextNode(tipo);
  tituloT.setAttribute("class", "title");
  tituloT.setAttribute("id", "i");
  tituloT.setAttribute("value", tipo);
  tituloT.addEventListener("click", function () {
    cargar(tipo);
  });
  tituloT.appendChild(t);
  document.getElementById("repertorio").appendChild(tituloT);
  hrT.setAttribute("class", "raya");
  document.getElementById("repertorio").appendChild(hrT);
  for (let index3 = 0; index3 < todas.length; index3++) {
    const all = todas[index3];
    console.log(all);
    var divT = document.createElement("div");
    divT.setAttribute("id", tipo);
    divT.setAttribute("class", "fila");
    var imgT = document.createElement("img");
    var path = todas[index3];
    imgT.addEventListener("click", function () {
      cargarImgGaleria(todas, index3);
    });
    imgT.setAttribute("src", path);
    imgT.setAttribute("height", "70rem");
    imgT.setAttribute("class", "imagenPresentacion");
    imgT.setAttribute("id", tipo);
    document.getElementById("repertorio").appendChild(divT);
    document.getElementById(tipo).appendChild(imgT);
  }
}
