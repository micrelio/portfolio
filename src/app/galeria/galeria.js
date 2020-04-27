class miGaleria extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    myFunction();
  }
  connectedCallback() {
    this.innerHTML =
      `
            <section id="galeria" class="primera" >
    <div class="">
        <button type="button" onclick="cambiar('todos'), cargaTodo();"> Todos </button>
        <button type="button" onclick="cambiar('logos');"> Logos </button>
        <button type="button" onclick="cambiar('folletos');"> Folletos </button>
        <button type="button" onclick="cambiar('posters');"> Posters </button>
        <button type="button" onclick="cambiar('postales');"> Postales </button>
        <button type="button" onclick="cambiar('pngs');"> Pngs </button>
    </div>
 </section>
<section id="content">
<mi-logos></mi-logos>
<!-- <mi-imagenes></mi-imagenes> -->
</section>
                `;
    cargaTodo();
  
  }
}
customElements.define('mi-galeria', miGaleria);
function myFunction() {
  console.log('Hello World');
}
function cambiar(id) {
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-imagenes></mi-imagenes>";
      break;
    case 'logos':
      console.log('logogogogog')
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'folletos':
      document.getElementById("content").innerHTML = "<mi-folletos></mi-folletos>";
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-postales></mi-postales>";
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-posters></mi-posters>";
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-pngs></mi-pngs>";
      break;
    default:
  }
}


var total = logos.length;



function cargaLogos(e) {
  // //console.log('total', total)
   for (let index = 0; index < total; index++) {
     let indice = logos[index];
     //console.log('index', logos[index])
     if (indice != e) {
 
       activo = e;
       count = index;
       index = total;
     }
     activar(indice);
    // miniaturas(indice);
   }
 }

function activar(a) {

  count = 0;
  var path = "../../" + a;
  var img = document.createElement('img');
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "500rem");
  img.setAttribute("id", "kk");
  //console.log(img)
  document.getElementById("activo").appendChild(img);



  var img2 = document.createElement('img');
  img2.setAttribute("src", path);
  img2.setAttribute("width", "");
  img2.setAttribute("height", "50rem");
  img2.setAttribute("id", "min");
  document.getElementById("mini").appendChild(img2);
  //document.getElementById("activo").appendChild(img);

}

function cambio(a, b) {
  //console.log('imagen1', document.getElementById('kk'))
  var path = "../../" + a;
  var img = document.createElement('img');
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "500rem");
  img.setAttribute("id", "kk");
  //console.log('imagen2', img)
  document.getElementById("activo").replaceChild(img, kk);

  var img2 = document.createElement('img');
  img2.setAttribute("src", path);
  img2.setAttribute("width", "");
  img2.setAttribute("height", "50rem");
  img2.setAttribute("id", "min");
  document.getElementById("mini").replaceChild(img2, min);

}

function sum() {
    if (count >= total-1) {
   retorno =logos[0]
    count = 0;
    cambio(retorno);
  }
  else {
    count++;
    nuevo = logos[count];
    cambio(nuevo);
  }
}

function res() {
  console.log('resta')
  if (count <= 0) {
    retorno =logos[total-1]
    count = total-1;
    cambio(retorno);
  }
  else {
    count--;
  nuevo = logos[count];
  console.log(nuevo);

    cambio(nuevo);
  }
}



function reset() {
  //console.log('reset')
  count = 0;
  //console.log(count)
}

function intervalo() {
  let r = setInterval(() => {
    sum();
  }, 3000);
}














