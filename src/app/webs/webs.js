class miWebs extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
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