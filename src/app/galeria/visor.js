class miVisor extends HTMLElement {

  constructor() {

    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
      <button onclick="intervalo()">auto</button>
<button onclick="stop()">stop </button>
<button onclick="reset()">reset </button>

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

                `;
    // esto arranca automatico 
    //  setInterval(() => {
    //  }, 2000);
    // setInterval( onkeyup="keyEvent(event)",100000);
    const mos = document.querySelector('#imagen');
    // cajonDerecha.getAttribute('class');   
    // element.setAttribute('href', 'index.html');
  }
}
timer=2000;
total = 0;
count = 0;
marcha = ' ';
imgS = null;
activoS = ' ';
customElements.define('mi-visor', miVisor);
function cambiar(id) {
  count = 0;
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(todos);
      break;
    case 'logos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(logos);
      break;
    case 'folletos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(folletos);
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(postales);
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(posters);
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(pngs);
      break;
    default:
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      break;
  }
}
function keyEvent(event) {
  switch (event.key) {
    case 'ArrowLeft':
      res();
      break;
       case ' ':
    case 'ArrowRight':
      sum();
      break;
    default:
      // sum();
      break;
  }
}
function carga(e) {
  preVista = e;
  switch (preVista) {
    case todos:
      //Enviamos un solo array
      //creamos vista como variable global
      vista = [].concat.apply([], preVista);
      renderizar(vista)
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;
    case logos:
    case folletos:
    case posters:
    case postales:
    case pngs:
      // Opcion 2 creamos vista como variable global
      vista = preVista;
      renderizar(vista);
      break;
    default:
      break;
  }
  //Idexamos indice
}
function renderizar(vista) {
  total = vista.length;
  //----Leemos el array
  for (index = 0; index < total; index++) {
    indice = vista[index];
  }
  if (indice != vista) {
    //Reseteamos al llegar al ultimo dato del array
    activo = vista;
    index = total;
  }
  activar();
  //  activarMiniLaterales()
}
function activar() {
  activarMiniLaterales();
  // siguiente = vista[index + 1];
  img = document.createElement('img');
  imgM = document.createElement('img');
  imgMA = document.createElement('img');
  imgMS = document.createElement('img');

  var path = "../../" + vista[count];
  img.setAttribute("src", path);
  img.setAttribute("id", "img");
  img.setAttribute("class", "imagen");
  img.setAttribute("onclick", "sum()");

  imgM.setAttribute("src", path);
  imgM.setAttribute("id", "miniCentral");

  document.getElementById('activo').appendChild(img);
  document.getElementById('cajonCentral').appendChild(imgM);
}
function sum() {
  if (count >= total - 1) {
    count = 0;
  }
  //---Si existe img
  if (img != null && imgS == null) {
    count++;
    imgS = document.createElement('img');
    var path = "../../" + vista[count];
    imgS.setAttribute("src", path);
    imgS.setAttribute("id", "imgS");
    imgS.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(imgS);
    img.setAttribute("class", "imagen object  move-left");

    setTimeout(function t() {
      //borramos la imagen para crear una en div central y luego mover desde allí
      var techo = document.getElementById("activo");
      techo.removeChild(img);
     
    }, 1000);

    setTimeout(function cx() {
      imgS.setAttribute("class", "imagen object  move-left");
    }, 0.0000005);

    setTimeout(function cxv() {
        if (imgS != null) {
        console.log('imgS', imgS)
        var techo = document.getElementById("activoS");
        techo.removeChild(imgS);
      }
      // imgS.removeAttribute("class");
      imgS = null
      img = document.createElement('img');
      var path = "../../" + vista[count];
      img.setAttribute("src", path);
      img.setAttribute("id", "img");
      img.setAttribute("class", "imagen");
      img.setAttribute("onclick", "sum()");
      //ontouchcancel="sum()" onclick="sum()"
      document.getElementById('activo').appendChild(img);
    }, 1000);
  }

  else if (imgS != null && img == null) {

    count++;
    img = document.createElement('img');
    var path = "../../" + vista[count];
    img.setAttribute("src", path);
    img.setAttribute("id", "img");
    img.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(img);
    imgS.setAttribute("class", "imagen object  move-left");


    setTimeout(function t() {
      var techo = document.getElementById("activo");
      techo.removeChild(imgS);
    }, 1000);

    setTimeout(function cx() {
      img.setAttribute("class", "imagen object  move-left");

    }, 0);
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
    }, 1000);
  }
}
function res() {

  if (count <= 0) {
    count = total;
  }
}
function reset() {
  //console.log(document.getElementById('activoS'))

  
  count = 0;

  //console.log(centro)
  // console.log('imgS', imgS)
  // console.log('img', img)

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
    var path = "../../" + vista[indice];
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



















function activ(a) {
  //primero ponemos el contador a cero para empezar por el primer puesto del array
  var path = "../../" + a;
  //console.log('imagen', imagen)
  //La img es igual a un elemento que creamos del tipo imagen
  var img = document.createElement('img');
  div = document.createElement('div');
  //-----------------------------------------------
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "imagen");
  img.setAttribute("class", "imagen");
  div.setAttribute("id", count);
  div.setAttribute("class", "activo");
  //img.setAttribute("class", "object  move-right");
  //---------------------------------------------- 
  // img.setAttribute("margin-left", "-2000");
  //img.setAttribute("class", "object  move-right");
  //En el elemento llamado activo renderizamos la imagen
  // document.getElementById("visor").appendChild(divA);
  //  document.getElementById("imgA").appendChild(imgA);
  document.getElementById("visor").appendChild(div);
  document.getElementById(count).appendChild(img);
  //  document.getElementById("visor").appendChild(divS);
  //  document.getElementById("imgS").appendChild(imgS);
  var imagenPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", imagenPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniImagen");
  // document.getElementById("cajonImagen").appendChild(img1);
}
//console.log(imgA)
//   setTimeout(retraso, 1000);
function retraso() {
  console.log('retraso')
  //  var t = document.getElementById("divAnterior");
  //  t.removeChild(imgA);
  //  divCentral.setAttribute("id", "");
  //  divSiguiente.setAttribute("id", "");
  //       var  imgX = document.createElement('img');
  //       var divX = document.createElement('div');
  //        var path = "../../" + siguiente;
  // console.log('sigiente2', path)
  // imgX.setAttribute("src", path);
  // imgX.setAttribute("width", "");
  // imgX.setAttribute("height", "");
  // imgX.setAttribute("id", "imagen");
  // imgX.setAttribute("class", "imagen");
  // divX.setAttribute("id", "imgX");
  // divX.setAttribute("class", "activo ");
  // divX.setAttribute("class", "activo object  move-right");
  //        document.getElementById("visor").appendChild(divX);
  //        document.getElementById("imgX").appendChild(imgx);
  // img.setAttribute("class", " ");
  // imgS.setAttribute("class", " ");
}
// document.getElementById("divSiguiente").appendChild(imgS);
// imgS2.setAttribute("class", "object  move-right");
//cambio(central, anterior, siguiente);
//  activarMiniLaterales();
function cambi(a, b, c) {
  posicion = vista.indexOf(a);
  console.log(posicion)
  //console.log('imagen1', document.getElementById('central'))
  var path = "../../" + a;
  var pathAnterior = "../../" + b;
  var pathSiguiente = "../../" + c;

  var img = document.createElement('img');
  var imgA = document.createElement('img');
  var imgS = document.createElement('img');

  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "central");

  imgS.setAttribute("src", pathSiguiente);
  imgS.setAttribute("width", "");
  imgS.setAttribute("height", "");
  imgS.setAttribute("id", "siguiente");

  imgA.setAttribute("src", pathAnterior);
  imgA.setAttribute("width", "");
  imgA.setAttribute("height", "");
  imgA.setAttribute("id", "anterior");

  document.getElementById("divCentral").replaceChild(img, central);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").replaceChild(img1, miniCentral);
}
function activarMiniLateralesvvv() {
  //console.log('vista', vista)
  // posicion = a.indexOf('todos');

  for (let index = 0; index < total; index++) {
    //     let indice = e[index];
    //     //  activarMini()
    //   }
    //   if () {

    //     var pos = e.indexOf('indice');
    //   }
    //  if (indice<index) {
    //    // var pos = frutas.indexOf('Banana');
    //   }

    //   var miniPath = "../../" + b[i];
    //   var img2 = document.createElement('img');
    //   img2.setAttribute("src", miniPath);
    //   img2.setAttribute("width", "");
    //   img2.setAttribute("height", "5");
    //   img2.setAttribute("id", "miniDerecha");
    //   document.getElementById("cajonDerecha").appendChild(img2);


    //   var img3 = document.createElement('img');
    //   img3.setAttribute("src", miniPath);
    //   img3.setAttribute("width", "");
    //   img3.setAttribute("height", "5");
    //   img3.setAttribute("id", "miniIzquierda");
    //   document.getElementById("cajonIzquierda").appendChild(img3);
  }
}














