class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
  <section class="repertorio">

  <p>Logos</p>
  <hr>
  <section class="tipo">
      <div  id="logos" class="fila" >   
</div>
</section>


<p>folletos</p>
<hr>
<section  class="tipo">
    <div id="folletos" class="fila" >     
</div>
</section>


  
  <p>Posters</p>
  <hr>
  <section  class="tipo">
      <div id="posters" class="fila" >
       </div>
  </section>

  <p>Postales</p>
  <hr>
  <section  class="tipo">
      <div id="postales" class="fila" >
               </div>
  </section>

  <p>Pngs</p>
  <hr>
  <section  class="tipo">
      <div id="pngs" class="fila" >
               </div>
  </section>
</section>
              `;
  }
}
customElements.define('mi-imagenes', miImagenes);
/////funciona 
function cargaLogos() {
  for (let i = 0; i < logos.length; i++) {
    var path = "../../" + logos[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "100rem");
    img.setAttribute("height", "");
    document.getElementById("logos").appendChild(img);
  }
}

function cargaFolletos() {
  for (let i = 0; i < folletos.length; i++) {
    var path = "../../" + folletos[i];
   
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "50rem");
    img.setAttribute("height", "");
    
    document.getElementById("folletos").appendChild(img);
    console.log(path)
  }
}


function cargaPosters() {
  for (let i = 0; i < posters.length; i++) {
    var path = "../../" + posters[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "50rem");
    img.setAttribute("height", "");
    document.getElementById("posters").appendChild(img);
  }
}

function cargaPostales() {
  for (let i = 0; i < postales.length; i++) {
    var path = "../../" + postales[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "50rem");
    img.setAttribute("height", "");
    document.getElementById("postales").appendChild(img);
  }
}

function cargaPngs() {
  for (let i = 0; i < pngs.length; i++) {
    var path = "../../" + pngs[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "50rem");
    img.setAttribute("height", "");
    document.getElementById("pngs").appendChild(img);
  }
}




