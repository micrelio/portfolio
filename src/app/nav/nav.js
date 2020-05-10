class miNav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
<section class="stick">
    <div class="nav" id="nav">
        <div class="navbar">
            <div class="foto">
               <img src="../../assets/images/dracula-man.jpg">
            </div>
            <div class="menu">
                <div class="links">
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('inicio');"> inicio </button> </s>
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('webs'); "> Webs </button></s>
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('galeria');"> galeria </button></s>
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('videos');"> Videos </button></s>
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('curriculum');"> Curriculum </button></s>
                    <s onmouseover>  <button class="nav-link" type="button" onclick="navegar('contacto');"> Contacto </button></s>
                </div>




            </div>
        </div>
    </div>
    

    <div class="movil">
        <div class="imagenes">
            <div class="foto">
                <img src="../../assets/images/dracula-man.jpg">
            </div>
            <div class="botones" >
                <span  id="boton1" ><img src="../../assets/images/icons/menu.png" id="pull" href="#" alt="menu"></span>
            </div>
        </div>
        <div >
        </div>
        <div style="display: none;" class="desplegable" id="desplegable">
            <button  onclick="navegar('inicio');" class="mnav-link">Inicio</button>
            <button  onclick="navegar('webs');" class="mnav-link">Webs</button>
            <button  onclick="navegar('galeria');" class="mnav-link">Galery</button>
            <button  onclick="navegar('videos');" class="mnav-link">Videos</button>
            <button  onclick="navegar('curriculum');" class="mnav-link">Curriculum</button>
            <button  onclick="navegar('contacto');" class="mnav-link">Contacto</button>
        </div>
    </div>
    <div class="mode">
        <!-- <audio src="../sonidos/ping.mp4" autoplay loop></audio> -->
            <img src="../../assets/images/buttons/noche.png">
    </div>
</section>


                `;
    }
}

//  window.customElements.define('mi-Menu', minenu);
customElements.define('mi-nav', miNav);
