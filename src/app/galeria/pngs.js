class miPngs extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML =
        `
<h>EEEEEEEEEEEEEEEEEE</h>
 <section id="pngs" class="principal">
        <div class="muestra" >
            <button (click)="res()">-</button>
            <img class="imgG">
            <button (click)="sum()">+</button>
        </div>
               <div>
            <div class="miniatura">
        
                <div >
                 <img class="imgM" (click)="mostrar(pngs)">
                </div>
     </div>
        </div>
    </section>
    <button (click)="intervalo()">auto</button>
    <button (click)="reset()">reset conteo</button>
                `;
             cargaPngs()
   }
  }
  customElements.define('mi-pngs', miPngs);
  function cargaPngs() {
    for (let i = 0; i < pngs.length; i++) {
      var path = "../../" + pngs[i];
      var img = document.createElement('img');
      img.setAttribute("src", path);
      img.setAttribute("width", "");
      img.setAttribute("height", "500rem");
      document.getElementById("pngs").appendChild(img);
    }
}
