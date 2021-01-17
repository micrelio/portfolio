class miEfecto extends HTMLElement {
    constructor() {
        //  puedes poner argumentos
        super();
        myFunction();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <style>
      @import "/src/app/efecto/efecto.css";
    </style>
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