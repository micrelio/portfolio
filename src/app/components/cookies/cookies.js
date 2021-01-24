
class miCookies extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/components/cookies/cookies.css";
    </style>
  <section>          
    <div id="cajacookies">
      <p>
        Éste sitio web usa cookies, si permanece aquí acepta su uso.
        Puede leer más sobre el uso de cookies en nuestra <a href="#"><e class="privacidad" id="cookies"> Política de Cookies</e></a>.
      </p>
      <button onclick="aceptarCookies()" class="pull-right"><i class="fa fa-times"></i> Aceptar cookies</button>
        </div>
  </section>
    `;
    var multimedia = document.querySelector("#cajacookies");
    multimedia.addEventListener("click", function (seleccion) {
      console.log(seleccion);
      var h = seleccion.target.id;
      // if (seleccion.target !== this) {
      switch (h) {
        case "privacidad":
          console.log("politicadeprivacidad");
          document.getElementById("componente").innerHTML =
            "<mi-politicadeprivacidad></mi-politicadeprivacidad>";
          break;
        case "aviso":
          console.log("aviso");
          document.getElementById("componente").innerHTML =
            "<mi-avisolegal></mi-avisolegal>";
          break;
        case "cookies":
          console.log("cookies");
          document.getElementById("componente").innerHTML =
            "<mi-politicadecookies></mi-politicadecookies>";
          break;
      }
      // }
    });
    /* ésto se ejecuta cuando la web está cargada */
    $(document).ready(function () {
      compruebaAceptaCookies();
    });
    /* ésto comprueba la localStorage si ya tiene la variable guardada */
    function compruebaAceptaCookies() {
      if (localStorage.aceptaCookies == "true") {
        cajacookies.style.display = "none";
      }
    }
  }
}
/* aquí guardamos la variable de que se ha
  aceptado el uso de cookies así no mostraremos
  el mensaje de nuevo */
function aceptarCookies() {
  localStorage.aceptaCookies = "true";
  cajacookies.style.display = "none";
}
customElements.define("mi-cookies", miCookies);
