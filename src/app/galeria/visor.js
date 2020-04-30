class miVisor extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
 <section  class="principal">
    <div  class="visor" >
        <button class="botonGalery" onclick="res()">-</button>
        <div id="activo" class="divCentral" >
        </div>
        <button class="botonGalery" onclick="sum()">+</button>
    </div>

    <div class="cajonMini">
    <div id="cajonIzquierda" class=""></div>
    <div id="cajonCentral" class=""></div>
     <div id="cajonDerecha" class=""></div>
        
        
    </div>
    
</section>
<button onclick="intervalo()">auto</button>
<button onclick="stop()">stop </button>
<button onclick="reset()">reset </button>
                `;
    // esto arranca automatico 


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
function carga(e) {
  preVista = e;
  console.log('pevista', preVista.length)
  switch (preVista) {
    case todos:
      //Enviamos un solo array
      //creamos vista como variable global
      vista = [].concat.apply([], preVista);
      renderizar()
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;
    case logos:
    case folletos:
    case posters:
    case postales:
    case pngs:
      // Opcion 2 creamos vista como variable global
      vista = preVista;
      renderizar();
      break;
    default:
      break;
  }
  //Idexamos indice
 
}
function renderizar() {
  console.log(vista)
  //Lempos el array
  total = vista.length;

  for (let index = 0; index < total; index++) {
    let indice = vista[index];
 
    if (indice != vista) {
      console.log('array', indice);
      //Reseteamos al llegar al ultimo dato del array
      activo = vista;
      count = index;
      index = total ;
      console.log('dentro')


    }

    //Indice es el dato a renderizar
    activar(indice);
    activarMiniLaterales()
  }

}
function activar(a) {
  //primero ponemos el contador a cero para empezar por el primer puesto del array
  count = 0;
  
  var path = "../../" + a;
  //La img es igual a un elemento que creamos del tipo imagen
  var img = document.createElement('img');
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "muestra");
  //En el elemento llamado activo renderizamos la imagen
  document.getElementById("activo").appendChild(img);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").appendChild(img1);
}

function activarMiniLaterales() {
  //console.log('vista', vista)
  // posicion = a.indexOf('todos');
  // console.log('posicion',posicion)
  console.log('total', total)
  for (let index = 0; index < total; index++) {
   
    //     console.log()
    //     let indice = e[index];
    //     //  activarMini()
    //   }
    //   if () {

    //     var pos = e.indexOf('indice');
    //     console.log('delante', pos);
    //   }
    //  if (indice<index) {
    //     console.log('detraas');
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

function sum() {
  //console.log(i)
  if (count >= total - 1) {
    retorno = vista[0]
    count = 0;
    cambio(retorno);
    
  }
  else {
    count++;
    nuevo = vista[count];
    cambio(nuevo);
    activarMiniLaterales();
  }
}



function cambio(a) {
  console.log(a)
  posicion = vista.indexOf(a);
  console.log('posicion',posicion)
  //console.log('imagen1', document.getElementById('muestra'))
  var path = "../../" + a;
  var img = document.createElement('img');
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "muestra");
  document.getElementById("activo").replaceChild(img, muestra);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").replaceChild(img1, miniCentral);
}

function res() {
  console.log('resta')
  if (count <= 0) {
    retorno = vista[total - 1]
    count = total - 1;
    cambio(retorno);
  }
  else {
    count--;
    nuevo = vista[count];
    console.log(nuevo);

    cambio(nuevo);
  }
}
function reset() {
  clearInterval(r);
  count = 0;
  var cero = t[0];
  cambio(cero)
}
function stop() {
  console.log('stop')
  clearInterval(r);
}
function intervalo() {
  r = setInterval(() => {
    sum();
  }, 3000);
}














