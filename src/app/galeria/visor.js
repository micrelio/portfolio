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
    <div  class="visor" >
        <button class="botonGalery" onclick="res()">-</button>
        <div id="activo"  >
          <div id="divAnterior"></div>
          <div id="divCentral" <!-- onswiperight="sum()"--> onswipeleft="res()" ontouchstart="sum()" onclick="sum()" ></div>
          <div id="divSiguiente"></div>
        </div>
        <button class="botonGalery" onclick="sum()">+</button>
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
    const mos = document.querySelector('#central');

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

function keyEvent(event){
  console.log(event.key);
  switch (event.key) {
    //case  ' ':
     case 'ArrowLeft':
      res();
      break;
      // case  'ArrowLeft':
      //   res();
      //   break;
      case  ' ':
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

  //Lempos el array
  total = vista.length;
  for (let index = 0; index < total; index++) {
    let indice = vista[index];
    let siguiente = vista[index + 1];
    let anterior;
    console.log(index);

    switch (index) {
      case 0:
        anterior = vista[total - 1];

        break;

      default:
        anterior = vista[index - 1];

        break;
    }
    // 



    // console.log(anterior);
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
function activar(a, b, c) {
  //primero ponemos el contador a cero para empezar por el primer puesto del array


  var path = "../../" + a;
  var pathAnterior = "../../" + b;
  var pathSiguiente = "../../" + c;

  //La img es igual a un elemento que creamos del tipo imagen
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


  // img.setAttribute("margin-left", "-2000");

  //img.setAttribute("class", "object  move-right");

  //En el elemento llamado activo renderizamos la imagen

console.log('img', imgS)
 // document.getElementById("divAnterior").appendChild(imgA);
  document.getElementById("divCentral").appendChild(img);
//  document.getElementById("divSiguiente").appendChild(imgS);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").appendChild(img1);
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
function sum() {
  //console.log(i)
  var central;
  var anterior;
  var siguiente;
  if (count >= total - 1) {
    central = vista[0]
    count = 0;
    cambio(central, anterior, siguiente);
  }
  else {
    count++;
    central = vista[count];
    anterior = vista[count - 1];
    siguiente = vista[count + 1];
    cambio(central, anterior, siguiente);
    //  activarMiniLaterales();
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









