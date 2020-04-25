
class miContacto extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
    <p style="color: white">Contacto runing</p>


               
                `;
       }
    }
  customElements.define('mi-contacto', miContacto);