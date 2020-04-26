class miLogos extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
                <section id="logos" class="">

                <img src="../../images/banners/rocas.jpg">
        
            </section>


               
                `;
       }
    }
  customElements.define('mi-logos', miLogos);




