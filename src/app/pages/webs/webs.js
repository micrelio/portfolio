class miWebs extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/pages/webs/webs.css";
    </style>
    <style>
      @import "/src/app/pages/webs/aos/aos.css";
    </style>

    <section class="total">
  
    <h1>Diseños web</h1>
    <div class="webs" >
      <div data-aos="fade-up" data-aos-delay="200" id="titaniumGamers" class="titaniumGamers miniWeb">
        <div class="titulo">
          <a target="blank" href=" https://titaniumgamers.com/">
            <h1>Comunidad </h1>
            <h1>Titanium Gamers</h1>
          </a>
        </div>
        <div class="descripcion">
          <p>
            Diseñada con WordPress tema DIVI (adquirida licencia ilimitada de desarrollador), para la comunidad propia
            de jugadores <a target="blank" href="https://titaniumgamers.com/">Titanium Gamers</a> durante el
            confinamiento 2020.</p><br>
          <p>Creada con:</p>
          <ul>
            <li> WordPress tema DIVI.</li>
          </ul>
          <div class="visitar">
            <p>
              <a class="visitar" target="blank" href="https://titaniumgamers.com/">Visitar <i class="fas fa-share"></i></a>
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" id="tiendaTitanium" class="tiendaTitanium miniWeb">
        <div class="titulo">
          <a target="blank" href=" https://tiendasamp.titaniumgamers.com/">
            <h1>Tienda</h1>
            <h1>Titanium Gamers</h1>
          </a>
        </div>
        <div class="descripcion">
          <p>Tienda de donaciones PayPal creada durante el verano 2020 para la comunidad propia de jugadores <a
              target="blank" href="https://tiendasamp.titaniumgamers.com/">Titanium Gamers</a>.</p><br>
          <p>Creada con: </p>
          <ul>
            <li> Bootstrap.</li>
            <li> Display Grid.</li>
            <li> Display Flex.</li>
          </ul>
          <p>Lenguajes: </p>
          <ul>
            <li> HTML.</li>
            <li> CSS.</li>
            <li> Javascript.</li>
          </ul>
          <div class="visitar">
            <p>
              <a class="visitar" target="blank" href="https://tiendasamp.titaniumgamers.com/">Visitar
                <i class="fas fa-share"></i></a>
            </p>
          </div>
        </div>
      </div>

      

      <div data-aos="fade-up" data-aos-delay="200" id="primeroscoc" class="primeroscoc miniWeb">
        <div class="titulo">
          <a target="blank" href="https://primeroscoc.titaniumgamers.com/">
            <h1>Primeros</h1>
            <h1>Clash of Clans</h1>
          </a>
        </div>
        <div class="descripcion">
          <p>
            Diseñada como proyecto fin de curso ASIR durante el curso 2017-2018, a la comunidad de gamers <a
              target="blank" href="https://primeroscoc.titaniumgamers.com/">&#xf006;Primeros&#xf006;</a> jugadores de
            Clash of Clans.<br>
            Esta API sincroniza con el servidor y muestra los datos de los equipos en tiempo real.</p><br>
          <p>Lenguajes:</p>
          <ul>
            <li> HTML.</li>
            <li> CSS.</li>
            <li> PHP.</li>
          </ul>
          <div class="visitar">
            <p>
              <a class="visitar" target="blank" href="https://primeroscoc.titaniumgamers.com/">Visitar
                <i class="fas fa-share"></i></a>
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" id="guerrasOnline" class="guerrasOnline miniWeb">
        <div class="titulo">
          <a target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">
            <h1>Guerras on Line</h1>
            <h1>Clash of Clans</h1>
          </a>
        </div>
        <div class="descripcion">
          <p>
            Esta página sincroniza con la <a target="blank" href="https://developer.clashofclans.com/#/"> API Clash of
              Clans</a>, lee un archivo JSON, descarga los datos y muestra con imágenes imitando la estructura real del
            juego, con búsqueda y selección de equipos por medio de formulario.<br>
            Datos cedidos por <a target="blank" href="https://supercell.com/en/">Supercell</a>.</p><br>
          <p>Lenguajes: </p>
          <ul>
            <li> HTML.</li>
            <li> CSS.</li>
            <li> PHP.</li>
          </ul>

          <div class="visitar">
            <p>
              <a class="visitar" target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">Visitar
                <i class="fas fa-share"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

`;
aos_init();

import('./aos/aos.js');
// Init AOS
function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  






















   // $(document).ready(function () {
    //   $("#titaniumGamers").hide(0);
    //   $("#tiendaTitanium").hide(0);
    //   $("#primeroscoc").hide(0);
    //   $("#guerrasOnline").hide(0);

    //   $("#titaniumGamers").fadeIn(2000);
    //   $("#tiendaTitanium").fadeIn(3000);
    //   $("#primeroscoc").fadeIn(4000);
    //   $("#guerrasOnline").fadeIn(5000);


    //   $(window).scroll(function () {
    //     var windowHeight = $(window).scrollTop();
    //     var titaniumGamers = $("#titaniumGamers").offset();
    //     titaniumGamers = titaniumGamers.top/2;
    //     var tiendaTitanium = $("#tiendaTitanium").offset();
    //     tiendaTitanium = tiendaTitanium.top/2;
    //     var primeroscoc = $("#primeroscoc").offset();
    //     primeroscoc = primeroscoc.top/2;
    //     var guerrasOnline = $("#guerrasOnline").offset();
    //     guerrasOnline = guerrasOnline.top/2;

        // if (windowHeight <= titaniumGamers) {
        //   $("#tiendaTitanium").fadeOut(2000);
        // } else {
        //   $("#tiendaTitanium").fadeIn(2000);
        // }
        // if (windowHeight <= titaniumGamers + tiendaTitanium) {
        //   $("#primeroscoc").fadeOut(2000);
        // } else {
        //   $("#primeroscoc").fadeIn(2000);
        // }
        // if (windowHeight <= titaniumGamers + tiendaTitanium + primeroscoc) {
        //   $("#guerrasOnline").fadeOut(2000);
        // } else {
        //   $("#guerrasOnline").fadeIn(2000);
        // }
        //  });
    // });
  }
}

customElements.define("mi-webs", miWebs);
