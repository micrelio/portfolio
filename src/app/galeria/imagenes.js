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
<p>Folletos</p>
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
function cargaTodo() {
  for (let i = 0; i < logos.length; i++) {
    var path = "../../" + logos[i]; 
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "250rem");
    document.getElementById("logos").appendChild(img);
  }
  for (let i = 0; i < folletos.length; i++) {
    var path = "../../" + folletos[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "250rem");
        document.getElementById("folletos").appendChild(img);
  }
  for (let i = 0; i < posters.length; i++) {
    var path = "../../" + posters[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "250rem");
        document.getElementById("posters").appendChild(img);
  }
  for (let i = 0; i < postales.length; i++) {
    var path = "../../" + postales[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "250rem");
    document.getElementById("postales").appendChild(img);
  }
  for (let i = 0; i < pngs.length; i++) {
    var path = "../../" + pngs[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "250rem");
    document.getElementById("pngs").appendChild(img);
  }
}




