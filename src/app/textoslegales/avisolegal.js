class miAvisolegal extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
<section class="primera">
    <h1> Aviso Legal</h1>
    
    <div>
  
    </div>
</section>
    `;
    
    }
  }
  customElements.define("mi-avisolegal", miAvisolegal);