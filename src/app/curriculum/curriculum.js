class miCurriculum extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
    <p style="color: white">Curriculum runing</p>


               
                `;
       }
    }
  customElements.define('mi-curriculum', miCurriculum);