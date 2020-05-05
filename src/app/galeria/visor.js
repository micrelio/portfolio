class miVisor extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
   <!--   <div id="axis" class="one">
      <img class="object van move-right" src="../../assets/images/logos/john.png"/>
      </div>
     -->
     

   <!--  <div id="animacion">
     <img class="novisible" src="../../assets/images/logos/john.png" >
     <img class="visible" src="../../assets/images/logos/igre.png" >
   </div>
-->
 <section  class="principal" >
    <div  class="visor" id="visor" onswiperight="sum()" onswipeleft="res()" ontouchstart="sum()" onclick="sum()">
  
        <!-- -->
         
         
    
    </div>

    <div class="cajonMini">
    <div id="cajonIzquierda" class=""></div>
    <div id="cajonCentral" class=""></div>
     <div id="cajonDerecha" class="point"></div>
 
        
    </div>

 
    
</section>
<button onclick="intervalo()">auto</button>
<button onclick="stop()">stop </button>
<button onclick="reset()">reset </button>
                `;
    // esto arranca automatico 





    const mos = document.querySelector('#imagen');

    // cajonDerecha.getAttribute('class');   
    // element.setAttribute('href', 'index.html');

  }
}
customElements.define('mi-visor', miVisor);
function cambiar(id) {
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
  console.log(event.key);
  switch (event.key) {
    //case  ' ':
    case 'ArrowLeft':
      res();
      break;
    // case  'ArrowLeft':
    //   res();
    //   break;
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
  count = 0;
  total = vista.length;
  //----Leemos el array
  for (let index = 0; index < total; index++) {
    indice = vista[index];
    siguiente = vista[index + 1];


   


    console.log('siguiente2', siguiente)
    // anterior = vista[total - 1];
    //    anterior2 = vista[total - 2];
    console.log(index);
    switch (index) {
      case 0:
        anterior = vista[total - 1];
        anterior2 = vista[total - 2];
        break;
      default:
        anterior = vista[index - 1];
        anterior2 = vista[index - 2];
        break;
    }
    if (indice != vista) {
      //Reseteamos al llegar al ultimo dato del array
      activo = vista;
      count = index;
      index = total;
    }
    //Indice es el dato a renderizar
    console.log('siguiente', siguiente)
    activar(indice, anterior, siguiente);
    activarMiniLaterales()
  }
}
function activar(a, b, c, ) {
  console.log('b2')
  //primero ponemos el contador a cero para empezar por el primer puesto del array
  var path = "../../" + a;
  var pathAnterior = "../../" + b;
  var pathSiguiente = "../../" + c;

  //La img es igual a un elemento que creamos del tipo imagen
   img = document.createElement('img');
   imgA = document.createElement('img');
   imgS = document.createElement('img');


   div = document.createElement('div');
   divA = document.createElement('div');
   divS = document.createElement('div');

  
 




  //-----------------------------------------------
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "imagen");
  img.setAttribute("class", "imagen");

  div.setAttribute("id", "img");
  div.setAttribute("class", "activo");
  //img.setAttribute("class", "object  move-right");
  imgS.setAttribute("src", pathSiguiente);
  imgS.setAttribute("width", "");
  imgS.setAttribute("height", "");
  imgS.setAttribute("id", "imagen");
  imgS.setAttribute("class", "imagen");

  divS.setAttribute("id", "imgS");
  divS.setAttribute("class", "activo");
  //---------------------------------------------- 
  imgA.setAttribute("src", pathAnterior);
  imgA.setAttribute("width", "");
  imgA.setAttribute("height", "");
  imgA.setAttribute("id", "imagen");
  imgA.setAttribute("class", "imagen");

  divA.setAttribute("id", "imgA");
  divA.setAttribute("class", "activo");
  //------------------------------------------------


  // img.setAttribute("margin-left", "-2000");
  //img.setAttribute("class", "object  move-right");
  //En el elemento llamado activo renderizamos la imagen
  console.log('img', imgS)
  document.getElementById("visor").appendChild(divA);
  document.getElementById("imgA").appendChild(imgA);
  document.getElementById("visor").appendChild(div);
  document.getElementById("img").appendChild(img);
  
  document.getElementById("visor").appendChild(divS);
  document.getElementById("imgS").appendChild(imgS);

  var imagenPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", imagenPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniImagen");
  // document.getElementById("cajonImagen").appendChild(img1);
}
function sum() {
  //console.log(i)
  var central;
  var anterior;
  var siguiente;
  if (count >= total - 1) {
    central = vista[0]
    count = 0;
    // cambio(central, anterior, siguiente);
  }
  else {
    count++;
  //  central = vista[count];
 //   anterior = vista[count - 1];
  siguiente = vista[count + 1];
    // var techo = document.getElementById("divCentral");
    //  techo.removeChild(img);
  
    //setTimeout(document.getElementById("divSiguiente2").appendChild(imgS2), 3000000)
    // divAnterior.removeChild(imgA);
    divA.setAttribute("class", "activo object  move-right");
    
    div.setAttribute("class", "activo object  move-right");
    divS.setAttribute("class", "activo object  move-right");

    

    console.log(imgA)
 //   setTimeout(retraso, 3000);
    function retraso() {
      console.log('retraso')
      //  var t = document.getElementById("divAnterior");
      //  t.removeChild(imgA);
      //  divCentral.setAttribute("id", "");

      //  divSiguiente.setAttribute("id", "");
      var  imgX = document.createElement('img');

      var divX = document.createElement('div');
  
       var path = "../../" + siguiente;
console.log('sigiente2', path)
imgX.setAttribute("src", path);
imgX.setAttribute("width", "");
imgX.setAttribute("height", "");
imgX.setAttribute("id", "imagen");
imgX.setAttribute("class", "imagen");

divX.setAttribute("id", "imgX");
divX.setAttribute("class", "activo ");

divX.setAttribute("class", "activo object  move-right");


       document.getElementById("visor").appendChild(divX);
       document.getElementById("imgX").appendChild(imgx);

      // img.setAttribute("class", " ");

      // imgS.setAttribute("class", " ");

    }
    // document.getElementById("divSiguiente").appendChild(imgS);

    // imgS2.setAttribute("class", "object  move-right");

    //cambio(central, anterior, siguiente);
    //  activarMiniLaterales();
  }
}
function res() {
  var central;
  var anterior;
  var siguiente;
  if (count <= 0) {
    central = vista[total - 1]
    count = total - 1;
    cambio(central);
  }
  else {
    count--;
    central = vista[count];
    cambio(central);
  }
}

function cambio(a, b, c) {
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
  //img.setAttribute("class", "object  move-right");
  //img.setAttribute("rigth", "62000rem");
  //img.setAttribute('class', 'object move-right');
  // img.setAttribute("position", "absolute");

  imgS.setAttribute("src", pathSiguiente);
  imgS.setAttribute("width", "");
  imgS.setAttribute("height", "");
  imgS.setAttribute("id", "siguiente");

  imgA.setAttribute("src", pathAnterior);
  imgA.setAttribute("width", "");
  imgA.setAttribute("height", "");
  imgA.setAttribute("id", "anterior");

  // img.setAttribute("margin-left", "-2000");
  document.getElementById("divCentral").replaceChild(img, central);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").replaceChild(img1, miniCentral);
}




function activarMiniLaterales() {
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






function reset() {
  clearInterval(r);
  count = 0;
  var cero = t[0];
  cambio(cero)
}
function stop() {
  clearInterval(r);
}
function intervalo() {
  r = setInterval(() => {
    sum();
  }, 3000);
}









