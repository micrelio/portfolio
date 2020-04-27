class miLogos extends HTMLElement {

  constructor() {
    super();


  }
  connectedCallback() {
    this.innerHTML =
      `

        <section  class="principal">
        <div  class="logos" >
            <button onclick="res()">-</button>
            <div id="activo" class="imgG" ></div>
            <button  onclick="sum()">+</button>
        </div>
                <div>
            <div class="miniatura">
                <div id="mini" class="imgM">
                </div>
     </div>
        </div>
    </section>
    
    
    <button onclick="intervalo()">auto</button>
    <button onclick="reset()">reset conteo</button>
                `;

    carga();

  }
}
customElements.define('mi-logos', miLogos);


function cambiar(id) {
  console.log('tenemos', id);
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-imagenes></mi-imagenes>";
      break;
    case 'logos':
     
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'folletos':
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    default:
  }
}



var total = logos.length;


function carga(e) {
 console.log('total',)
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

// function miniaturas(a) {
//   //console.log()

//   var path = "../../" + a;
//   var img = document.createElement('img');
//   img.setAttribute("src", path);

//   document.getElementById("mini").replaceChild(img);
// }

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














