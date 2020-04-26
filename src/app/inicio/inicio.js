class miInicio extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
                <section class="primera">
        <h>Presentacion</h>
             <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
    <section class="primera">
        <h>Webs</h>
        <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
    <section class="primera">
        <h>Inicio</h>
        <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
    <section class="primera">
        <h>Videos</h>
        <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
    <section class="primera">
        <h>Curriculum</h>
        <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
    <section class="primera">
        <h>Contacto</h>
        <div>
            <img src="../../assets/images/mountain2.jpg">
        </div>
    </section>
 `;
    }
}
customElements.define('mi-inicio', miInicio);