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
            <button onclick="sum()">+</button>
        </div>
                <div>
            <div class="miniatura">
                <div id="logos" class="imgM">
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
//     console.log('puta madre')
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
var final=logos.length -1;
function cargaLogos(e) {
  
  var total = logos.length;
  
  for (let index = 0; index < total; index++) {
    let a = logos[index];
   // console.log(logos[index])
    if (a != e) {
      
      activo = e;
      count = index;
      index = total;
    }
    activar(a);

    }    
}
function intervalo() {
  let r = setInterval(() => {
    sum();
  }, 3000);
}
function sum() {
  if (count >= final) {
    reset();
  }
  else {
    count++;
    activo = logos[count];
    console.log(activo)

  }
}
function res() {
  if (count <= 0) {
    count = final;
  }
  else {
    count--;
    activo = logos[count];
  }
}
function reset() {
  console.log('reset')
  count = 0;
}

function activar(a){
  console.log()

  var path = "../../" + a;
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "50");
    document.getElementById("activo").appendChild(img);
}




