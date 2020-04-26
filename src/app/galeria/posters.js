class miPosters extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
 <h>EEEEEEEEEEEEEEEEEE</h>
 <section id="posters" class="principal">
        <div class="muestra" >
            <button (click)="res()">-</button>
            <img class="imgG">
            <button (click)="sum()">+</button>
        </div>
   <div>
            <div class="miniatura">
         <div >
          <img class="imgM" (click)="mostrar(posters)">
                </div>
     </div>
        </div>
    </section>
    <button (click)="intervalo()">auto</button>
    <button (click)="reset()">reset conteo</button>
                `;
cargaPosters()
  }
}
customElements.define('mi-posters', miPosters);
function cargaPosters() {
  for (let i = 0; i < posters.length; i++) {
    var path = "../../" + posters[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "500rem");
    document.getElementById("posters").appendChild(img);
  }
}
