class miConoceme extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
    <section class="primera">
        <h1>Presentación</h1>
        <p>
            Mi experiencia laboral comenzó como instalador electricista en distintas empresas, al empezar como ayudante en la electrónica y mantenimiento industrial, tras empezar con este oficio me di cuenta que era necesario mejorar mi formación para este oficio y decidí formarme en automática industrial, con ello comencé una nueva etapa laboral, 
        </p>
            <div>
            
        </div>
    </section>
    
 `;
    }
}
customElements.define('mi-conoceme', miConoceme);

