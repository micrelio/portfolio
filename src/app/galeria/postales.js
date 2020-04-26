class miPostales extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
 <h>EEEEEEEEEEEEEEEEEE</h>
 <section id="postales" class="principal">
        <div class="muestra" >
            <button (click)="res()">-</button>
            <img class="imgG">
            <button (click)="sum()">+</button>
        </div>
               <div>
            <div class="miniatura">
        
                <div >
                       <img class="imgM" (click)="mostrar(postales)">
                </div>
     </div>
        </div>
    </section>
    <button (click)="intervalo()">auto</button>
    <button (click)="reset()">reset conteo</button>
                `;
    cargaPostales()
  }
}
customElements.define('mi-postales', miPostales);
function cargaPostales() {
  for (let i = 0; i < postales.length; i++) {
    var path = "../../" + postales[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "500rem");
    document.getElementById("postales").appendChild(img);
  }
}
