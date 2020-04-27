class miLogos extends HTMLElement {

  constructor() {
    super();


  }
  connectedCallback() {
    this.innerHTML =
      `

        <section  class="principal">
        <div  class="logos" >
            <button onclick="sum()">-</button>
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

    cargaLogos();

  }
}
customElements.define('mi-logos', miLogos);


// buena
//   function cargaLogos() {
//     //console.log('puta madre')
//   for (let i = 0; i < logos.length; i++) {
//     var path = "../../" + logos[i];
//     var img = document.createElement('img');
//     img.setAttribute("src", path);
//      img.setAttribute("width", "");
//      img.setAttribute("height", "500rem");
//     document.getElementById("logos").appendChild(img);

//   }
// }

//var total=0;
var final = logos.length ;
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
    if (count >= final-1) {
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
    count = final;
  }
  else {
    count--;
    nuevo = logos[count];
    //cambio(nuevo);
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
  }, 300000);
}














