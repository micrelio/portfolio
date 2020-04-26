class miLogos extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
 <h>EEEEEEEEEEEEEEEEEE</h>
<section id="logos" class="principal">
        <div class="muestra" >
            <button (click)="res()">-</button>
            <img class="imgG">
            <button (click)="sum()">+</button>
        </div>
               <div>
            <div class="miniatura">
                        <div >
                  <img class="imgM" (click)="mostrar(logo)" >
                </div>
    </div>
        </div>
    </section>
    <button (click)="intervalo()">auto</button>
    <button (click)="reset()">reset conteo</button>
                `;
    cargaLogos()
  }
}
customElements.define('mi-logos', miLogos);
function cargaLogos() {
  console.log('puta madre')
  for (let i = 0; i < logos.length; i++) {
    var path = "../../" + logos[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "500rem");
    document.getElementById("logos").appendChild(img);
  }
}
function mostrar(e) {
  // this.activo = e;
  // this.count=e;
  for (let index = 0; index < this.total; index++) {
    // const element = array[index];
    let a = this.DatosService.logos[index];
    // console.log(this.DatosService.logos[index])
    // console.log(index)
    if (a != e) {
      console.log(index)
      this.activo = e;
      this.count = index;
      index = this.total;
      // return;
    }
    // console.log(e)
  }
  // console.log(this.count)
}
function intervalo() {
  let r = setInterval(() => {
    this.sum();
  }, 3000);
}
function sum() {
  console.log(this.count)
  // console.log(this.count)
  // console.log(final)
  if (this.count >= this.final) {
    this.reset();
    // this.count=0;
  }
  else {
    this.count++;
    this.activo = this.DatosService.logos[this.count];
  }
}
function res() {
  // console.log(this.final)
  console.log(this.count)
  // console.log(final)
  if (this.count <= 0) {
    // this.reset();
    this.count = this.final;
  }
  else {
    // console.log(this.tipo);
    this.count--;
    this.activo = this.DatosService.logos[this.count];
    // this.total + 1;
  }
}
// reset() {
//   this.count = 0;
// }
// izquierda(){
//   for (let index = this.count; index < array.length; index++) {
//     const element = array[index];
//     this.count
//   }
// }
function reset() {
  console.log('reset')
  this.count = 0;
}

