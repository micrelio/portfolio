class miMenu extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
                <section class="stick">
        <div class="nav" id="nav">

            <!-- logo -->

            <div class="navbar">
                <div class="foto">
                    <img src="../../images/dracula-man.jpg">
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
                    <img src="../images/dracula-man.jpg">
                </div>
                <div class="botones" >
                    <span  id="boton1" ><img src="../images/icons/menu.png" id="pull" href="#"
                        alt="menu"></span>
                   
                </div>
            </div>
            <div ></div>
            <div style="display: none;" class="desplegable" id="desplegable">
                <button onclick="location.href='inicio.html'" class="mnav-link">Inicio</button>
                <button onclick="location.href='web.html'" class="mnav-link">Webs</button>
                <button onclick="location.href='galeria.html'" class="mnav-link">Galery</button>
                <button onclick="location.href='videos.html'" class="mnav-link">Videos</button>
                <button onclick="location.href='curriculum.html'" class="mnav-link">Curriculum</button>
                <button onclick="location.href='contacto.html'" class="mnav-link">Contacto</button>

            </div>
            
        </div>
        <div class="mode">
           
        <!-- <audio src="../sonidos/ping.mp4" autoplay loop></audio> -->
            <img src="../../images/buttons/noche.png">
            
        </div>
    </section>





    




                `;
       }
    }
  //  window.customElements.define('mi-Menu', minenu);
  customElements.define('mi-menu', miMenu);
 
      window.onload = function() {
          window.router.init([{
              path: "/list",
              view: "<mi-galeria><mi-galeria>"
          }, {
              path: "/edit",
              view: "<h1>Edición</h1>"
          }, {
              path: "/templateA",
              view: "#list"
          }, {
              path: "/templateB",
              view: "#edit"
          }]);
      };
 