class miCookies extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
  <section>          
    <div id="cajacookies">
      <p>
        Éste sitio web usa cookies, si permanece aquí acepta su uso.
        Puede leer más sobre el uso de cookies en nuestra <a
        href="https://titaniumgamers.com/index.php/mas-informacion-sobre-las-cookies/" target="_blank" >política de privacidad</a>.
      </p>
      <button onclick="aceptarCookies()" class="pull-right"><i class="fa fa-times"></i> Aceptar cookies</button>
      
  </div>
  </section>
   
 `;
   /* ésto se ejecuta cuando la web está cargada */

 $(document).ready(function () {
  compruebaAceptaCookies();
});

 /* ésto comprueba la localStorage si ya tiene la variable guardada */
 function compruebaAceptaCookies() {
    if (localStorage.aceptaCookies == 'true') {
      cajacookies.style.display = 'none';
    }
  }

  



 

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
customElements.define('mi-cookies', miCookies);

