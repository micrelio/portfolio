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

function navegar(id) {
    var render = id;
    switch (render) {
     case 'inicio':
    document.getElementById("componente").innerHTML = "<mi-inicio></mi-inicio>";
     break;
     case 'webs':
       document.getElementById("componente").innerHTML = "<mi-webs></mi-webs>";
  break;
      case 'galeria':
       //   window.router.init([{
       //     path: "/list",
       //     view: "<mi-galeria><mi-galeria>"
       // },])
  document.getElementById("componente").innerHTML = "<mi-galeria></mi-galeria>";


  
        // location.replace("src/app/galeria/galeria.js");
         break;
         case 'videos':
       document.getElementById("componente").innerHTML = "<mi-videos></mi-videos>";
   break;
       case 'curriculum':
       document.getElementById("componente").innerHTML = "<mi-curriculum></mi-curriculum>";
       break;
       case 'contacto':
         document.getElementById("componente").innerHTML = "<mi-contacto></mi-contacto>";
          break;
     default:
   }
      }