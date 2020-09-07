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
    <section>
    <div id="cajacookies">
    <p>
      Éste sitio web usa cookies, si permanece aquí acepta su uso.
      Puede leer más sobre el uso de cookies en nuestra <a
        href="https://titaniumgamers.com/index.php/mas-informacion-sobre-las-cookies/" target="_blank" >política de privacidad</a>.
      <button onclick="aceptarCookies()" class="pull-right"><i class="fa fa-times"></i> Aceptar y cerrar éste
        mensaje</button>
    </p>
  </div>
  </section>
   
 `;
   /* ésto se ejecuta cuando la web está cargada */

 $(document).ready(function () {
    console.log('GILLLLLL')
  compruebaAceptaCookies();
});

 /* ésto comprueba la localStorage si ya tiene la variable guardada */
 function compruebaAceptaCookies() {
    console.log('compruebaAceptaCookies')

    if (localStorage.aceptaCookies == 'true') {
      cajacookies.style.display = 'none';
    }
  }

  



  /* aquí guardamos la variable de que se ha
  aceptado el uso de cookies así no mostraremos
  el mensaje de nuevo */
  function aceptarCookies() {
    console.log('aceptarCookies')
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}

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