class miSobreMi extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
    <section class="primera">
        <h1>Presentación</h1>
        <img src="../../assets/images/mountain2.jpg">

        <div>
            
        </div>
    </section>
    
 `;
    }
}
customElements.define('mi-sobreMi', miSobreMi);

