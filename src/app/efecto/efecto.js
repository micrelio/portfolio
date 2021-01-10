class miEfecto extends HTMLElement {
    constructor() {
        //  puedes poner argumentos
        super();
        myFunction();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <h1>cargado efecto</h1>
            <div id='c'>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
          </div>
     `;
    }
}
customElements.define('mi-efecto', miEfecto);