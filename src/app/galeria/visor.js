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
        <div id="cajonDerecha" class=""></div>
        <div id="cajonCentral" class=""></div>
        <div id="cajonIzquierda" class=""></div>
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
  total = preVista.length;
  switch (preVista) {
    case todos:
      vista = [].concat.apply([], preVista);
      console.log('todos', vista);
      renderizar(vista)
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;
    case logos:
    case folletos:
    case posters:
    case postales:
    case pngs:
      vista = preVista;
      renderizar(vista);
      break;
    default:
      break;
  }
}
function renderizar(e) {
  console.log('llega a render', e)
  for (let index = 0; index < total; index++) {
    let indice = e[index];

    if (indice != e) {
      activo = e;
      count = index;
      index = total - 1;
      console.log('dentro')
    }
    console.log('vista', vista)
    console.log('indice', indice)
    activar(indice, vista);

  }
}
function activar(a, b) {
  count = 0;
  var path = "../../" + a;
  var img = document.createElement('img');
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "muestra");
  document.getElementById("activo").appendChild(img);
  
   var centralPath = "../../" + a;
   var img1 = document.createElement('img');
     img1.setAttribute("src", centralPath);
     img1.setAttribute("width", "");
     img1.setAttribute("height", "");
     img1.setAttribute("id", "miniCentral");
     document.getElementById("cajonCentral").appendChild(img1);
 


  for (let i = 0; i < b.length; i++) {
    var miniPath = "../../" + b[i];
    var img2 = document.createElement('img');
    img2.setAttribute("src", miniPath);
    img2.setAttribute("width", "");
    img2.setAttribute("height", "5");
    img2.setAttribute("id", "miniDerecha");
    document.getElementById("cajonDerecha").appendChild(img2);
   
    var img3 = document.createElement('img');
    img3.setAttribute("src", miniPath);
    img3.setAttribute("width", "");
    img3.setAttribute("height", "5");
    img3.setAttribute("id", "miniIzquierda");
    document.getElementById("cajonIzquierda").appendChild(img3);
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
  }
}



function cambio(a) {
  console.log(a)
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














