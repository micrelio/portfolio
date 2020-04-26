class miImagenes extends HTMLElement {
  constructor() {
    super();
  }
 connectedCallback() {
    this.innerHTML =
  `
  <section id="todas">
  </section>
  <section id="logos">
  <h>Logos</h></br>
  </section>
  <section id="publicidad">
  <h>Publicidad</h>
  </section>
  <section id="posters">
  <h>Posters</h>
  </section>       
  <section id="postales">
  <h>Postales</h>
  </section>  
  <section id="pngs">
  <h>Pngs</h>
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
    img.setAttribute("width", "100");
    img.setAttribute("height", "");
    document.getElementById("logos").appendChild(img);
  }
}

function cargaPublicidad() {
  for (let i = 0; i < publicidad.length; i++) {
        var path = "../../" + publicidad[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "100");
    img.setAttribute("height", "");
    document.getElementById("content").appendChild(img);
    }
}

function cargaPosters() {
  for (let i = 0; i < posters.length; i++) {
    var path = "../../" + posters[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "100");
    img.setAttribute("height", "");
    document.getElementById("posters").appendChild(img);
  }
}

function cargaPostales() {
  for (let i = 0; i < postales.length; i++) {
    var path = "../../" + postales[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "100");
    img.setAttribute("height", "");
    document.getElementById("postales").appendChild(img);
  }
}



function cargaPngs() {
  for (let i = 0; i < pngs.length; i++) {
    var path = "../../" + pngs[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "100");
    img.setAttribute("height", "");
    document.getElementById("pngs").appendChild(img);
  }
}




