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





// function miniaturas(a) {
//   //console.log()

//   var path = "../../" + a;
//   var img = document.createElement('img');
//   img.setAttribute("src", path);

//   document.getElementById("mini").replaceChild(img);
// }
