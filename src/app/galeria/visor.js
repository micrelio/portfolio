class miVisor extends HTMLElement {

  constructor() {

    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
    <!--
    <button onclick="intervalo()">auto</button>
<button onclick="stop()">stop </button>
<button onclick="reset()">reset </button>
-->

<section id="botoneraMultimedia" class="botoneraMultimedia" >
  <div id="multimediaControl" class="multimediaControl">
    <img id="multimediaImagen" class="multimediaImagen" value="stop" src="../../assets/images/buttons/multimedia/anterior.png">
    <img id="multimediaImagen" class="multimediaImagen" value="play" src="../../assets/images/buttons/multimedia/play.png">
    <img id="multimediaImagen" class="multimediaImagen" value="pause"src="../../assets/images/buttons/multimedia/pause.png">
    <img id="multimediaImagen" class="multimediaImagen" value="stop" src="../../assets/images/buttons/multimedia/stop.png">
    <img id="multimediaImagen" class="multimediaImagen" value="stop" src="../../assets/images/buttons/multimedia/siguiente.png">
  </div>

</section>


<section id="principal" class="principal" >


 


    <div  class="visor" id="visor" >
      <div id="activoA" class="activoA"></div>
      <div id="activo" class="activo"></div>
      <div id="activoS" class="activoS"></div>
    </div>
    <div class="cajonMini">
       <div id="cajonIzquierda" class=""></div>
       <div id="cajonCentral" class=""></div>
       <div id="cajonDerecha" class="point"></div>
     </div>
</section>
<section id="botoneraMultimedia" class="botoneraMultimedia" >
   <div id="multimediaSound" class="multimediaSound">
    <img id="multimediaImagen" class="multimediaImagen" value="stop" src="../../assets/images/buttons/multimedia/soundOn.png">
    <img id="multimediaImagen" class="multimediaImagen" value="play" src="../../assets/images/buttons/multimedia/soundOff.png">
  <div>
</section>


                `;
    // esto arranca automatico 
    //  setInterval(() => {
    //  }, 2000);
    // setInterval( onkeyup="keyEvent(event)",100000);
    const mos = document.querySelector('#imagen');
    // cajonDerecha.getAttribute('class');   
    // element.setAttribute('href', 'index.html');
    //  cambiar(e)
  }
}
timer = 2000;
customElements.define('mi-visor', miVisor);




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


function cargar(preVista) {
  document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
  switch (preVista) {
    case 'Galeria':
      //Enviamos un solo array
      //creamos vista como variable global
      vista = [].concat.apply([], preVista);
      renderizar(vista)
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;

    case 'Logos':
    case 'Folletos':
    case 'Posters':
    case 'Postales':
    case 'Pngs':
    case 'Google':
    case 'Mas':
      // Opcion 2 creamos vista como variable global

      renderizar(preVista);
      break;
    default:
      break;
  }
  //Idexamos indice
}





function renderizar(vista) {
  var count = 0;
  var llaves = Object.keys(Galeria);
  console.log(llaves.length);
  //---Leemos las claves
  console.log(Galeria);


  //renderizar(vista)
  //   acaparados.forEach(elemente => renderizar(elemente));

  for (let indice = 0; indice < llaves.length; indice++) {
    const dato = llaves[indice]
    //  console.log(vista[indice])
    for (let index = 0; index < dato.length; index++) {
      const element = dato[index];
      console.log(element)


    }


    //console.log(vista[indice])
    img = document.createElement('img');
    imgM = document.createElement('img');
    var path = vista[count];


    // img.setAttribute("src", path);
    //   img.setAttribute("id", "img");
    //   img.setAttribute("class", "imagen");
    //   img.setAttribute("onclick", "sum()");
    //   imgM.setAttribute("src", path);
    //   imgM.setAttribute("id", "miniCentral");
    //  document.getElementById('activo').appendChild(img);
    //   document.getElementById('cajonCentral').appendChild(imgM);


    // vista1 = [].concat.apply([], tipo);
    // console.log(vista1)



    //
    //   const element = tipo[indice];
    //   console.log(element)





  }
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

}





































function activar() {
  //activarMiniLaterales();
  // siguiente = vista[index + 1];

  imgMA = document.createElement('img');
  imgMS = document.createElement('img');





}
function sum() {
  if (count >= total - 1) {
    count = 0;
  }
  //---Si existe img
  if (img != null && imgS == null) {
    count++;
    imgS = document.createElement('img');
    var path = vista[count];
    imgS.setAttribute("src", path);
    imgS.setAttribute("id", "imgS");
    imgS.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(imgS);
    img.setAttribute("class", "imagen object  move-left");
    setTimeout(function t() {
      //borramos la imagen para crear una en div central y luego mover desde allí
      var techo = document.getElementById("activo");
      techo.removeChild(img);
    }, 1500);
    setTimeout(function cx() {
      imgS.setAttribute("class", "imagen object  move-left");
    }, 0.5);
    setTimeout(function cxv() {
      if (imgS != null) {
        console.log('imgS', imgS)
        var techo = document.getElementById("activoS");
        techo.removeChild(imgS);
      }
      // imgS.removeAttribute("class");
      imgS = null
      img = document.createElement('img');
      var path = vista[count];
      img.setAttribute("src", path);
      img.setAttribute("id", "img");
      img.setAttribute("class", "imagen");
      img.setAttribute("onclick", "sum()");
      //ontouchcancel="sum()" onclick="sum()"
      document.getElementById('activo').appendChild(img);
    }, 1500);
  }
  else if (imgS != null && img == null) {
    count++;
    img = document.createElement('img');
    var path = vista[count];
    img.setAttribute("src", path);
    img.setAttribute("id", "img");
    img.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(img);
    imgS.setAttribute("class", "imagen object  move-left");
    setTimeout(function t() {
      var techo = document.getElementById("activo");
      techo.removeChild(imgS);
    }, 1500);
    setTimeout(function cx() {
      img.setAttribute("class", "imagen object  move-left");

    }, 0.5);
    setTimeout(function cxv() {
      var techo = document.getElementById("activoS");
      techo.removeChild(img);
      img.removeAttribute("class");
      img.setAttribute("src", path);
      img.setAttribute("id", "img");
      img.setAttribute("class", "imagen");
      img.setAttribute("onclick", "sum()");
      //ontouchcancel="sum()" onclick="sum()"
      document.getElementById('activo').appendChild(img);
    }, 1500);
  }
}
function res() {

  if (count <= 0) {
    count = total;
  }
}
function reset() {

  count = 0;
  if (img != null) {
    var centro = document.getElementById('activo');
    // var centro= document.getElementById('activo');
    centro.removeChild(img);
  }
  var h = document.getElementById('imgS');

  console.log('haber', h)
  if (h != null) {
    var sigiente = document.getElementById('activoS');
    console.log('imgS not null')
    sigiente.removeChild(imgS);
    // sigiente.removeChild(imgS);


  }
  clearInterval(marcha);
  renderizar(vista);
}

function intervalo() {
  marcha = setInterval(() => {
    sum();
  }, timer);
}
function stop() {
  clearInterval(marcha);
}

function activarMiniLaterales() {
  //console.log('vista', vista)
  // posicion = a.indexOf('todos');


  for (let indice = 0; indice < total; indice++) {
    dato = vista[indice];
    //  console.log('visat', vista)
    //  console.log('dato', dato)
    //      if (indice<count) {
    var path = vista[indice];
    var imgMA = document.createElement('img');
    imgMA.setAttribute("src", path);
    imgMA.setAttribute("height", "5");
    imgMA.setAttribute("id", "miniIzquierda");
    document.getElementById("cajonIzquierda").appendChild(imgMA);

    var imgMS = document.createElement('img');
    imgMS.setAttribute("src", path);
    imgMS.setAttribute("height", "5");
    imgMS.setAttribute("id", "miniDerecha");
    document.getElementById("cajonDerecha").appendChild(imgMS);
    //    }
    //  activarMini()
  }
  // if (d) {
  //    var pos = e.indexOf('indice');
  //  }
}

































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
//       var techo = document.getElementById("activo");
//       techo.removeChild(img);
//    }, 1500);
//     setTimeout(function cx() {
//       imgS.setAttribute("class", "imagen object  move-left");
//     }, 0.5);
//     setTimeout(function cxv() {
//         if (imgS != null) {
//         console.log('imgS', imgS)
//         var techo = document.getElementById("activoS");
//         techo.removeChild(imgS);
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
//       var techo = document.getElementById("activo");
//       techo.removeChild(imgS);
//     }, 1500);
//     setTimeout(function cx() {
//       img.setAttribute("class", "imagen object  move-left");

//     }, 0.5);
//     setTimeout(function cxv() {
//       var techo = document.getElementById("activoS");
//       techo.removeChild(img);
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
