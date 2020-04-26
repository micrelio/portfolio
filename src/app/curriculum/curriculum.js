class miCurriculum extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `

                
    <p style="color: white">Curriculum runing</p>

    <button onclick="window.print()">Print this page</button>
               
                `;
       }
    }
  customElements.define('mi-curriculum', miCurriculum);