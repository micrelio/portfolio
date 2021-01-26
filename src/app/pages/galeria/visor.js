class miVisor extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <style>
      @import "/src/app/pages/galeria/visor.css";
    </style>
 <section id="botoneraMultimedia" class="botoneraMultimedia" >
  <div id="multimediaControl" class="multimediaControl">
    <img id="previous" class="multimediaImagen"  src="/src/assets/images/buttons/multimedia/previous.png">
    <img id="play-" class="multimediaImagen"  src="/src/assets/images/buttons/multimedia/play-.png">
    <img id="pause" class="multimediaImagen" src="/src/assets/images/buttons/multimedia/pause.png">
    <img id="stop" class="multimediaImagen"  src="/src/assets/images/buttons/multimedia/stop.png">
    <img id="play+" class="multimediaImagen"  src="/src/assets/images/buttons/multimedia/play+.png">
    <img id="next" class="multimediaImagen"  src="/src/assets/images/buttons/multimedia/next.png">
  </div>
</section>
<section id="principal" class="principal" >
    <div  class="visor" id="visor" >
      <div id="activoS" class="activoS"></div>
      <div id="activo" class="activo"></div>
      <div id="activoA" class="activoA"></div>
    </div>
    <div class="cajonMini">
       <div id="cajonIzquierda" class=""></div>
       <div id="cajonCentral" class=""></div>
       <div id="cajonDerecha" class="point"></div>
     </div>
</section>
<section id="botoneraMultimedia" class="botoneraMultimedia" >
   <div id="multimediaSound" class="multimediaSound">
    <img id="multimediaImagen" class="multimediaImagen" value="soundOn" src="/src/assets/images/buttons/multimedia/soundOn.png">
    <img id="multimediaImagen" class="multimediaImagen" value="soundOff" src="/src/assets/images/buttons/multimedia/soundOff.png">
  <div>
</section>
             `;
    // esto arranca automatico
    var multimedia = document.querySelector("#multimediaControl");
    multimedia.addEventListener("click", function (e) {
      //  console.log(e)
      var h = e.target.id;
      //       console.log(h)
      if (e.target !== this) {
        switch (h) {
          case "previous":
            res();
            break;
          case "play-":
            intervalo(h);
            break;
          case "play+":
            intervalo(h);
            break;
          case "pause":
            pause();
            break;
          case "stop":
            stop();
            console.log(h);
            break;
          case "next":
            sum();
            break;
        }
      }
    });
  }
}
//var vista ='Galeria';
timer = 2000;
customElements.define("mi-visor", miVisor);

//---COMIENZO----------------------------
//--cargar imagen desde barra menu---
function cargar(preVista) {
  if (typeof marcha !== "undefined") {
    clearInterval(marcha);
  }
  count = 0;
  console.log(preVista);
  document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
  switch (preVista) {
    case "Todas":
      //Enviamos un solo array
      //creamos vista como variable global
      // console.log(todas[1])
      vista = todas;
      // vista = [].concat.apply([], tipo);
      console.log(vista);
      //count = 0;
      seleccionar();
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;
    // case 'Logos':
    // case 'Folletos':
    // case 'Posters':
    // case 'Postales':
    // case 'Pngs':
    // case 'Google':
    // case 'Mas':
    //     // Opcion 2 creamos vista como variable global
    //     vista = preVista;
    //     //count = 0;
    //     seleccionar();
    //     break;
    default:
      // Opcion 2 creamos vista como variable global
      vista = Galeria[preVista];
      console.log(vista);
      //count = 0;
      seleccionar();
      break;
  }
  //Idexamos indice
}
//---carga al pinchar imagen---
function cargarimagen(vistaimagen, posicion) {
  console.log("chupaaaaaaaaaaaaaaaaaaaaaaa");
  // if (typeof marcha !== "undefined") {
  //     clearInterval(marcha);
  // }
  vista = Galeria[vistaimagen];
  document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
  console.log(vistaimagen);
  count = posicion;
  console.log(count);
  var long = Galeria[vistaimagen].length;
  var render = Galeria[vistaimagen][count];
  // var siguiente = Galeria[vistaimagen][count + 1];
  console.log(long);
  console.log("cuenta", count);
  if (count >= long - 1) {
    console.log("PPPPPPPPPPPPPPPPPPP");
    var siguiente = Galeria[vistaimagen][0];
    var anterior = Galeria[vistaimagen][count - 1];
    count = long;
  } else if (count == 0) {
    console.log("menos");
    var siguiente = Galeria[vistaimagen][count + 1];
    var anterior = Galeria[vistaimagen][long - 1];
    count--;
  } else {
    var siguiente = Galeria[vistaimagen][count + 1];
    var anterior = Galeria[vistaimagen][count - 1];
    count++;
  }
  console.log(long);
  console.log(render);
  console.log(siguiente);
  console.log(anterior);
  img = document.createElement("img");
  imgS = document.createElement("img");
  imgA = document.createElement("img");
  imgS.setAttribute("src", siguiente);
  imgS.setAttribute("id", "imgS");
  imgS.setAttribute("class", "imagen");
  img.setAttribute("src", render);
  img.setAttribute("id", "img");
  img.setAttribute("class", "imagen");
  imgS.setAttribute("src", siguiente);
  imgS.setAttribute("id", "imgS");
  imgS.setAttribute("class", "imagen");
  imgA.setAttribute("src", anterior);
  imgA.setAttribute("id", "imgA");
  imgA.setAttribute("class", "imagen");
  //  document.getElementById('activoS').appendChild(imgS);
  console.log("hola");
  console.log(img);
  console.log(long);
  if (count >= long) {
    console.log("pppuuuuummmm");
    count = 0;
  }
  // if (count <= 0) {
  //     console.log('mennnnnn')
  //     count = long ;
  // }
  document.getElementById("activo").appendChild(img);
  document.getElementById("activoS").appendChild(imgS);
  document.getElementById("activoA").appendChild(imgA);
  //  count++;
}
//COMENTADO PERO NO RECUERDO SI ESTÁ FUNCIONANDO O YA TIENE CAMBIO
//----------------------------------------------------------------

//--pinchando imagen galeria
// function cargarImgGaleria(vistaT, imagen) {
//     console.log('tititititititittitiititttiititititi')
//     console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
//     vista = vistaT;
//     console.log('vista', vista)
//     document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//     console.log(vistaT.length)
//     count = imagen;
//     console.log(count)
//     var longitud = vistaT.length;
//     var render = vistaT[count];
//     var siguiente = vistaT[count + 1];
//     var anterior = vistaT[longitud - 1];
//     console.log(longitud)
//     console.log(render)
//     console.log(siguiente)
//     console.log(anterior)
//     img = document.createElement('img');
//     imgS = document.createElement('img');
//     imgA = document.createElement('img');

//     imgS.setAttribute("src", siguiente);
//     imgS.setAttribute("id", "imgS");
//     imgS.setAttribute("class", "imagen");
//     img.setAttribute("src", render);
//     img.setAttribute("id", "img");
//     img.setAttribute("class", "imagen");
//     imgS.setAttribute("src", siguiente);
//     imgS.setAttribute("id", "imgS");
//     imgS.setAttribute("class", "imagen");
//     imgA.setAttribute("src", anterior);
//     imgA.setAttribute("id", "imgA");
//     imgA.setAttribute("class", "imagen");
//     //  document.getElementById('activoS').appendChild(imgS);
//     console.log('hola')
//     console.log(img);

//     console.log(longitud)
//     if (count >= longitud) {
//         console.log('eeee')
//         count = 0;
//     }
//     document.getElementById('activo').appendChild(img);
//     document.getElementById('activoS').appendChild(imgS);
//     document.getElementById('activoA').appendChild(imgA);
//     count++;
// }
//----- SELECCIONADO DESDE MENÚ SECUNDARIO
function seleccionar() {
  console.log("SUPERññññññññññññññññññññññññññññññññññññññññññññññññ");
  // console.log(img)
  var longitud = vista.length;
  var render = vista[count];
  var siguiente = vista[count + 1];
  var anterior = vista[longitud - 1];
  img = document.createElement("img");
  imgS = document.createElement("img");
  imgA = document.createElement("img");
  imgS.setAttribute("src", siguiente);
  imgS.setAttribute("id", "imgS");
  imgS.setAttribute("class", "imagen");
  img.setAttribute("src", render);
  img.setAttribute("id", "img");
  img.setAttribute("class", "imagen");
  imgS.setAttribute("src", siguiente);
  imgS.setAttribute("id", "imgS");
  imgS.setAttribute("class", "imagen");
  imgA.setAttribute("src", anterior);
  imgA.setAttribute("id", "imgA");
  imgA.setAttribute("class", "imagen");
  //  document.getElementById('activoS').appendChild(imgS);
  // console.log('hola')
  // console.log(img);
  console.log(longitud);
  if (count >= longitud) {
    console.log("lannnnnn");
    count = 0;
  }
  // console.log(longitud)
  // if (longitud <= 0) {
  //      console.log('low')
  //     count = 0;
  // }
  document.getElementById("activo").appendChild(img);
  document.getElementById("activoS").appendChild(imgS);
  document.getElementById("activoA").appendChild(imgA);
  count++;
  //  }
  // console.log('oododododo')
  // vista1 = [].concat.apply([], tipo);
  // console.log(vista1)
  //
  //   const element = tipo[indice];
  //   console.log(element)
  // activar();
  //  activarMiniLaterales()
  // console.log('PUNTO DE CONTROL 1')
  // total = vista.length;
  // //----Leemos el array
  // for (index = 0; index < total; index++) {
  //   indice = vista[index];
  // }
  // if (indice != vista) {
  //   //Reseteamos al llegar al ultimo dato del array
  //   activo = vista;
  //   index = total;
  // }
  // console.log('PUNTO DE CONTROL 2')
  //Galeria.forEach(elemente => console.log(Galeria));
  // for (let indice = 0; indice < render.length; indice++) {
  //   const dato = render[indice];
  //  console.log(dato);
  //  renderizar(dato)
  //   }
}
function sum() {
  if (vista.length != 1) {
    console.log("sisisisisisisisi");
  }
  setTimeout(() => {
    img.setAttribute("class", "imagen object  move-rigth");
    imgS.setAttribute("class", "imagen object  move-rigth");
    imgA.setAttribute("class", "imagen object  move-rigth");
  }, 1);
  setTimeout(function t() {
    var eliminar = document.getElementById("activoA");
    eliminar.removeChild(imgA);
    imgA = img;
    var eliminar1 = document.getElementById("activo");
    eliminar1.removeChild(img);
    imgA.setAttribute("id", "imgA");
    imgA.setAttribute("class", "imagen");
    document.getElementById("activoA").appendChild(imgA);
    img = imgS;
    var eliminar1 = document.getElementById("activoS");
    eliminar1.removeChild(imgS);
    img.setAttribute("id", "img");
    img.setAttribute("class", "imagen");
    document.getElementById("activo").appendChild(img);
    count++;
    longitud = vista.length;
    console.log(longitud);
    if (count >= longitud) {
      // console.log('pppuuuuummmm')
      count = 0;
      console.log("pppuuuuummmm", longitud);
    }
    var prox = vista[count];
    // console.log(prox)
    imgS = document.createElement("img");
    imgS.setAttribute("src", prox);
    imgS.setAttribute("id", "imgS");
    imgS.setAttribute("class", "imagen");
    document.getElementById("activoS").appendChild(imgS);
  }, 500);
}
function res() {
  setTimeout(() => {
    img.setAttribute("class", "imagen object  move-left");
    imgS.setAttribute("class", "imagen object  move-left");
    imgA.setAttribute("class", "imagen object  move-left");
  }, 1);
  setTimeout(function t() {
    var eliminar = document.getElementById("activoS");
    eliminar.removeChild(imgS);
    imgS = img;
    var eliminar1 = document.getElementById("activo");
    eliminar1.removeChild(img);
    imgS.setAttribute("id", "imgA");
    imgS.setAttribute("class", "imagen");
    document.getElementById("activoS").appendChild(imgS);
    img = imgA;
    var eliminar1 = document.getElementById("activoA");
    eliminar1.removeChild(imgA);
    img.setAttribute("id", "img");
    img.setAttribute("class", "imagen");
    document.getElementById("activo").appendChild(img);
    count++;
    longitud = vista.length;
    if (count >= longitud) {
      // console.log('pppuuuuummmm')
      count = 0;
    }
    //         console.log(longitud)
    // if (count <= 0) {
    //      console.log('menos')
    //     count = 0;
    // }
    var prox = vista[count];
    // console.log(prox)
    imgA = document.createElement("img");
    imgA.setAttribute("src", prox);
    imgA.setAttribute("id", "imgA");
    imgA.setAttribute("class", "imagen");
    document.getElementById("activoA").appendChild(imgA);
  }, 500);
}
function intervalo(h) {
  if (typeof marcha !== "undefined") {
    clearInterval(marcha);
  }
  setTimeout(() => {
    console.log("alerta");
    // window.alert("Tiempo de visualizacion excedido, Si quieres continuar viendo imagenes pulsa Aceptar.");
    // window.alert("Excedido el tiempo de visualizacion, se paró la secuencia de imagenes.<br>Para continuar pulse: <img id="multimediaImagen" class="multimediaImagen" value="soundOff" src="/src/assets/images/buttons/multimedia/soundOff.png">");
    //   clearInterval(marcha);
  }, 120000);
  marcha = setInterval(() => {
    // console.log(target.value)
    // console.log(h)
    switch (h) {
      case "play+":
        sum();
        break;
      case "play-":
        res();
        break;
      default:
        break;
    }
    // if (direccion==='next') {
    //   sum();
    // } else if (direccion==='previous') {
    //   res();
    // }
    // sum();
  }, timer);
}
function pause() {
  // console.log('pause')
  clearInterval(marcha);
}
function stop() {
  clearInterval(marcha);
  var eliminar1 = document.getElementById("activo");
  eliminar1.removeChild(img);
  var eliminar2 = document.getElementById("activoA");
  eliminar2.removeChild(imgA);
  var eliminar3 = document.getElementById("activoS");
  eliminar3.removeChild(imgS);
  count = 0;
  // console.log('pause')
  seleccionar();
}
// function activar() {
//   //activarMiniLaterales();
//   // siguiente = vista[index + 1];
//   imgMA = document.createElement('img');
//   imgMS = document.createElement('img');
// }
// function sum() {
//   if (count >= total - 1) {
//     count = 0;
//   }
//   //---Si existe img
//   if (img != null && imgS == null) {
//     count++;
//     imgS = document.createElement('img');
//     var path = vista[count];
//     imgS.setAttribute("src", path);
//     imgS.setAttribute("id", "imgS");
//     imgS.setAttribute("class", "imagen");
//     document.getElementById('activoS').appendChild(imgS);
//     img.setAttribute("class", "imagen object  move-left");
//     setTimeout(function t() {
//       //borramos la imagen para crear una en div central y luego mover desde allí
//       var eliminar = document.getElementById("activo");
//       eliminar.removeChild(img);
//     }, 1500);
//     setTimeout(function cx() {
//       imgS.setAttribute("class", "imagen object  move-left");
//     }, 0.5);
//     setTimeout(function cxv() {
//       if (imgS != null) {
//         console.log('imgS', imgS)
//         var eliminar = document.getElementById("activoS");
//         eliminar.removeChild(imgS);
//       }
//       // imgS.removeAttribute("class");
//       imgS = null
//       img = document.createElement('img');
//       var path = vista[count];
//       img.setAttribute("src", path);
//       img.setAttribute("id", "img");
//       img.setAttribute("class", "imagen");
//       img.setAttribute("onclick", "sum()");
//       //ontouchcancel="sum()" onclick="sum()"
//       document.getElementById('activo').appendChild(img);
//     }, 1500);
//   }
//   else if (imgS != null && img == null) {
//     count++;
//     img = document.createElement('img');
//     var path = vista[count];
//     img.setAttribute("src", path);
//     img.setAttribute("id", "img");
//     img.setAttribute("class", "imagen");
//     document.getElementById('activoS').appendChild(img);
//     imgS.setAttribute("class", "imagen object  move-left");
//     setTimeout(function t() {
//       var eliminar = document.getElementById("activo");
//       eliminar.removeChild(imgS);
//     }, 1500);
//     setTimeout(function cx() {
//       img.setAttribute("class", "imagen object  move-left");
//     }, 0.5);
//     setTimeout(function cxv() {
//       var eliminar = document.getElementById("activoS");
//       eliminar.removeChild(img);
//       img.removeAttribute("class");
//       img.setAttribute("src", path);
//       img.setAttribute("id", "img");
//       img.setAttribute("class", "imagen");
//       img.setAttribute("onclick", "sum()");
//       //ontouchcancel="sum()" onclick="sum()"
//       document.getElementById('activo').appendChild(img);
//     }, 1500);
//   }
// }
// function res() {
//   if (count <= 0) {
//     count = total;
//   }
// }
// function reset() {
//   count = 0;
//   if (img != null) {
//     var centro = document.getElementById('activo');
//     // var centro= document.getElementById('activo');
//     centro.removeChild(img);
//   }
//   var h = document.getElementById('imgS');
//   console.log('haber', h)
//   if (h != null) {
//     var sigiente = document.getElementById('activoS');
//     console.log('imgS not null')
//     sigiente.removeChild(imgS);
//     // sigiente.removeChild(imgS);
//   }
//   clearInterval(marcha);
//   renderizar(vista);
// }
// function activarMiniLaterales() {
//   //console.log('vista', vista)
//   // posicion = a.indexOf('todos');
//   for (let indice = 0; indice < total; indice++) {
//     dato = vista[indice];
//     //  console.log('visat', vista)
//     //  console.log('dato', dato)
//     //      if (indice<count) {
//     var path = vista[indice];
//     var imgMA = document.createElement('img');
//     imgMA.setAttribute("src", path);
//     imgMA.setAttribute("height", "5");
//     imgMA.setAttribute("id", "miniIzquierda");
//     document.getElementById("cajonIzquierda").appendChild(imgMA);
//     var imgMS = document.createElement('img');
//     imgMS.setAttribute("src", path);
//     imgMS.setAttribute("height", "5");
//     imgMS.setAttribute("id", "miniDerecha");
//     document.getElementById("cajonDerecha").appendChild(imgMS);
//     //    }
//     //  activarMini()
//   }
//   // if (d) {
//   //    var pos = e.indexOf('indice');
//   //  }
// }
//---VIEJO----------------------------------------
// timer=2000;
// total = 0;
// count = 0;
// marcha = ' ';
// imgS = null;
// activoS = ' ';
// customElements.define('mi-visor', miVisor);
// function cambiar(id) {
//     console.log(id)
//   count = 0;
//   switch (id) {
//     case 'todos':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(todos);
//       break;
//     case 'logos':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(logos);
//       break;
//     case 'folletos':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(folletos);
//       break;
//     case 'postales':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(postales);
//       break;
//     case 'posters':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(posters);
//       break;
//     case 'pngs':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(pngs);
//       break;
//       case 'Google':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(Google);
//       break;
//       case 'Mas':
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       carga(todos);
//       break;
//     default:
//       document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//       break;
//   }
// }
// function keyEvent(event) {
//   switch (event.key) {
//     case 'ArrowLeft':
//       res();
//       break;
//        case ' ':
//     case 'ArrowRight':
//       sum();
//       break;
//     default:
//       // sum();
//       break;
//   }
// }
// function carga(e) {
//   preVista = e;
//   switch (preVista) {
//     case todos:
//       //Enviamos un solo array
//       //creamos vista como variable global
//       vista = [].concat.apply([], preVista);
//       renderizar(vista)
//       //   acaparados.forEach(elemente => renderizar(elemente));
//       break;
//     case logos:
//     case folletos:
//     case posters:
//     case postales:
//     case pngs:
//     case Google:
//       // Opcion 2 creamos vista como variable global
//       vista = preVista;
//       renderizar(vista);
//       break;
//     default:
//       break;
//   }
//   //Idexamos indice
// }
// function renderizar(vista) {
//   total = vista.length;
//   //----Leemos el array
//   for (index = 0; index < total; index++) {
//     indice = vista[index];
//   }
//   if (indice != vista) {
//     //Reseteamos al llegar al ultimo dato del array
//     activo = vista;
//     index = total;
//   }
//   activar();
//   //  activarMiniLaterales()
// }
// function activar() {
//   activarMiniLaterales();
//   // siguiente = vista[index + 1];
//   img = document.createElement('img');
//   imgM = document.createElement('img');
//   imgMA = document.createElement('img');
//   imgMS = document.createElement('img');
//   var path =  vista[count];
//   img.setAttribute("src", path);
//   img.setAttribute("id", "img");
//   img.setAttribute("class", "imagen");
//   img.setAttribute("onclick", "sum()");
//   imgM.setAttribute("src", path);
//   imgM.setAttribute("id", "miniCentral");
//   document.getElementById('activo').appendChild(img);
//   document.getElementById('cajonCentral').appendChild(imgM);
// }
// function sum() {
//   if (count >= total - 1) {
//     count = 0;
//   }
//   //---Si existe img
//   if (img != null && imgS == null) {
//     count++;
//     imgS = document.createElement('img');
//     var path =  vista[count];
//     imgS.setAttribute("src", path);
//     imgS.setAttribute("id", "imgS");
//     imgS.setAttribute("class", "imagen");
//     document.getElementById('activoS').appendChild(imgS);
//     img.setAttribute("class", "imagen object  move-left");
//     setTimeout(function t() {
//       //borramos la imagen para crear una en div central y luego mover desde allí
//       var eliminar = document.getElementById("activo");
//       eliminar.removeChild(img);
//    }, 1500);
//     setTimeout(function cx() {
//       imgS.setAttribute("class", "imagen object  move-left");
//     }, 0.5);
//     setTimeout(function cxv() {
//         if (imgS != null) {
//         console.log('imgS', imgS)
//         var eliminar = document.getElementById("activoS");
//         eliminar.removeChild(imgS);
//       }
//       // imgS.removeAttribute("class");
//       imgS = null
//       img = document.createElement('img');
//       var path =  vista[count];
//       img.setAttribute("src", path);
//       img.setAttribute("id", "img");
//       img.setAttribute("class", "imagen");
//       img.setAttribute("onclick", "sum()");
//       //ontouchcancel="sum()" onclick="sum()"
//       document.getElementById('activo').appendChild(img);
//     }, 1500);
//   }
//   else if (imgS != null && img == null) {
//    count++;
//     img = document.createElement('img');
//     var path =  vista[count];
//     img.setAttribute("src", path);
//     img.setAttribute("id", "img");
//     img.setAttribute("class", "imagen");
//     document.getElementById('activoS').appendChild(img);
//     imgS.setAttribute("class", "imagen object  move-left");
//     setTimeout(function t() {
//       var eliminar = document.getElementById("activo");
//       eliminar.removeChild(imgS);
//     }, 1500);
//     setTimeout(function cx() {
//       img.setAttribute("class", "imagen object  move-left");
//     }, 0.5);
//     setTimeout(function cxv() {
//       var eliminar = document.getElementById("activoS");
//       eliminar.removeChild(img);
//       img.removeAttribute("class");
//       img.setAttribute("src", path);
//       img.setAttribute("id", "img");
//       img.setAttribute("class", "imagen");
//       img.setAttribute("onclick", "sum()");
//       //ontouchcancel="sum()" onclick="sum()"
//       document.getElementById('activo').appendChild(img);
//     }, 1500);
//   }
// }
// function res() {
//   if (count <= 0) {
//     count = total;
//   }
// }
// function reset() {
//   count = 0;
//    if (img != null) {
//     var centro = document.getElementById('activo');
//     // var centro= document.getElementById('activo');
//     centro.removeChild(img);
//   }
//   var h = document.getElementById('imgS');
//   console.log('haber', h)
//   if (h != null) {
//     var sigiente = document.getElementById('activoS');
//     console.log('imgS not null')
//     sigiente.removeChild(imgS);
//     // sigiente.removeChild(imgS);
//   }
//   clearInterval(marcha);
//   renderizar(vista);
// }
// function intervalo() {
//   marcha = setInterval(() => {
//     sum();
//   }, timer);
// }
// function stop() {
//   clearInterval(marcha);
// }
// function activarMiniLaterales() {
//   //console.log('vista', vista)
//   // posicion = a.indexOf('todos');
//   for (let indice = 0; indice < total; indice++) {
//     dato = vista[indice];
//     //  console.log('visat', vista)
//     //  console.log('dato', dato)
//     //      if (indice<count) {
//     var path =  vista[indice];
//     var imgMA = document.createElement('img');
//     imgMA.setAttribute("src", path);
//     imgMA.setAttribute("height", "5");
//     imgMA.setAttribute("id", "miniIzquierda");
//     document.getElementById("cajonIzquierda").appendChild(imgMA);
//     var imgMS = document.createElement('img');
//     imgMS.setAttribute("src", path);
//     imgMS.setAttribute("height", "5");
//     imgMS.setAttribute("id", "miniDerecha");
//     document.getElementById("cajonDerecha").appendChild(imgMS);
//     //    }
//     //  activarMini()
//   }
//   // if (d) {
//   //    var pos = e.indexOf('indice');
//   //  }
// }
