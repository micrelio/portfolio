class miFolletos extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
      <h>EEEEEEEEEEEEEEEEEE</h>
      <section id="folletos" class="principal">
      <div class="muestra" >
          <button (click)="res()">-</button>
          <img class="imgG" >
          <button (click)="sum()">+</button>
      </div>
   <div>
          <div class="miniatura">
                    <div>
                  <img class="imgM" (click)="mostrar(folletos)">
              </div>
  </div>
      </div>
  </section>
  
  <button (click)="intervalo()">auto</button>
  <button (click)="reset()">reset conteo</button>
              `;
    cargaFolletos()
  }
}
customElements.define('mi-folletos', miFolletos);




function cargaFolletos() {
  for (let i = 0; i < folletos.length; i++) {
    var path = "../../" + folletos[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "500rem");
    document.getElementById("folletos").appendChild(img);
  }
}
