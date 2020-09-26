class miWebs extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
<section class="web">
    <div class="titanium">
        <div class="titulo">
            <a target="blank" href=" https://titaniumgamers.com/">
                <h1>Titanium Gamers</h1>
            </a>
        </div>
        <p>Creada con WordPress, tema DIVI para la comunidad propia de jugadores Titanium Gamers durante el confinamiernto 2020.</p>
    </div>
    <div class="tiendaTitanium">
        <div class="titulo">
            <a target="blank" href="https://titaniumgamers.com/tienda/samp/">
                <h1>Tienda Titanium Gamers</h1>
            </a>
        </div>
        <p>Creada con código por medio de una plantilla Bootstrap, para la comunidad de jugadores Titanium Gamers durante el confinamiernto 2020.</p>
    </div>
    <div class="primeroscoc">
        <div class="titulo">
            <a target="blank" href="https://titaniumgamers.com/tienda/samp/">
                <h1>Primeros Clash of Clans</h1>
            </a>
        </div>
        <p>Creada con código por medio de una plantilla Bootstrap, para la comunidad de jugadores Titanium Gamers durante el confinamiernto 2020.</p>
    </div>
    <div class="primeroscoc">
        <div class="titulo">
            <a target="blank" href="https://titaniumgamers.com/tienda/samp/">
                <h1>Guerras onLine</h1>
                <h1>Clash of Clans</h1>
            </a>
        </div>
        <p>Creada con código por medio de una plantilla Bootstrap, para la comunidad de jugadores Titanium Gamers durante el confinamiernto 2020.</p>
    </div>
</section>


         `;
    }
}
customElements.define('mi-webs', miWebs);