
class miContacto extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
    <p style="color: white">Contacto runing</p>
    <section class="primera">
    <img src="../../images/boat1.jpg">
</section>
               
                `;
       }
    }
  customElements.define('mi-contacto', miContacto);