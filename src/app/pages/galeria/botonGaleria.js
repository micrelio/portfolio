class miBotonera extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    //myFunction();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/pages/galeria/botonGaleria.css";
    </style>
    <section id="menuGaleria" class="menuGaleria" >
        <button class="boton" value="Galeria"  >Todas</button>
    </section>
    `;
    //RECORREMOS LA SECCION ESPERANDO CUALQUIER EVENTO DEL MISMO, THIS ES EL ELEMENTO SOBRE EL QUE SE
    //APLICA EL EVENTO, CON ESTO VEMOS QUE SE HA HECHO CLICK SOBRE UN ELEMENTO DISTINTO DEL PRINCIPAL
    //SI HHAY SUBELEMENTOS NO VA BIEN
    //CON ESTE OCUPAMOS MENOS RAM, YA QUE SOLO CREA UN EVENTO
    var elementos = document.querySelector("#menuGaleria");
    elementos.addEventListener("click", function (e) {
      console.log(e.target.value);
      if (e.target !== this) {
        // Código que se ejecuta al hacer click.
        console.log(e.target.value);
        var valor = e.target.value;
        //  document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
        console.log(valor);
        cargar(valor);
      }
    });
    // cargaTodo();
    setTimeout(function cx() {
      cambio();
    }, 0);
    cargaBoton();
    //cambio();
  }
  //   animateButton();
}
customElements.define("mi-botonera", miBotonera);
//elemento_que_se_escuchaba.removeEventListener('evento',función_a_anular,booleano);
function cargaBoton() {
  //---imagenes en Galeria------------------------
  var llaves = Object.keys(Galeria);
  //console.log(llaves.length);
  //---Leemos las claves
  for (let index = 0; index < llaves.length; index++) {
    tipo = llaves[index];
    //  console.log('tipo', tipo);
    //   console.log('dato', dato);
    var boto = document.createElement("button");
    var p = document.createElement("p");
    //---CREAMOS UN TEXTO---
    var t = document.createTextNode(tipo);
    //  p.setAttribute("class", "nombre");
    //  p.setAttribute("id", "p");
    //  p.setAttribute("value", tipo);
    //---CREAMOS UN BOTON---
    boto.setAttribute("id", "boton" + tipo);
    boto.setAttribute("class", "boton");
    boto.setAttribute("type", "button");
    boto.setAttribute("value", tipo);
    //console.log(boto)
    // console.log(boto);
    // console.log(p);
    //---RENDERIZAMOS TODO
    document.getElementById("menuGaleria").appendChild(boto);
    //   document.getElementById('boton'+tipo).appendChild(p);
    boto.appendChild(t);
  }
}
//---mirar aqui
//    https://abalozz.es/optimiza-el-manejo-de-eventos-del-dom-en-javascript/
//   https://es.stackoverflow.com/questions/98239/c%C3%B3mo-agregar-un-event-listener-para-varios-elementos

//---- OPCION PARA CREAR UNA ALERTA
// var seleccion= 'boton'+ tipo;
//       document.getElementById(seleccion).addEventListener('click',function() {
//         document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//         console.log(seleccion);
//        cambiar(seleccion);
//                });
//------------------------------------------------
//--- OPCION PARA CREAR UNA ALERTA QUE APUNTE A VARIOS ELEMENTOS DE LA MISMA LISTA
// var elementos = document.querySelectorAll('#lista .item-lista');
// elementos.forEach(function(el, i){
//     el.addEventListener('click', function(e){
//         // Código que se ejecuta al hacer click.
//     });
// });
//--------------------------------------------------------
//---RECOGEMOS LA VARIABLE EN CADA VUELTA
// seleccion='boton'+ tipo;
//---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
// for (let index2 = 0; index2 < dato.length; index2++) {
// }
//console.log(tipo)
//console.log(dato)
function cambio() {}
