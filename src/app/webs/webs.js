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
            <p>Creada con WordPress, tema DIVI para la comunidad propia de jugadores Titanium Gamers, creada durante el confinamiernto 2020.</p>
        
    </div>
    
    <div class="tiendaTitanium">
        <div class="imagen">
            <!-- <img src="../../assets/images/imagenesPropias/folletos/bannerTitanium.jpg"> -->
        </div>
        <div class="titulo">
            <a target="blank" href=" https://titaniumgamers.com/">
                <h1>Titanium Gamers</h1>
                <p></p>
            </a>
        </div>
    </div>
</section>
<section class="web">
    <div class="banner">
        <div class="imagen">
            <!-- <img src="../../assets/images/banners/primeros.jpg"> -->
        </div>
        <div class="titulo">
            <a target="blank" href=" http://primeroscoc.com/">
                <h1>Primeros coc</h1>
            </a>
        </div>
    </div>
</section>
<section class="web">
    <div class="banner">
        <div class="imagen">
         <!--   <img src="../../assets/images/banners/primeros.jpg"> -->
       </div>
        <div class="titulo">
            <a target="blank" href="https://guerras-coc-online.000webhostapp.com/">
                <h1>Guerras online</h1>
            </a>
        </div>
    </div>
    <!-- <div class="separador"></div> -->
</section>
         `;
    }
}
customElements.define('mi-webs', miWebs);