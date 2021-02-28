class miNav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    @import "/src/app/components/nav/nav.css";
  </style>
<section class="social-media">
    <div class="social-links">
        <a class="bx bxl-youtube" href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA/"
            target="_blank"></a>
        <a class="bx bxl-instagram" href="https://www.instagram.com/micrelio.dev/" target="_blank"></a>
        <a class="bx bxl-twitter" href="https://twitter.com/Micrelio/" target="_blank"></a>
        <a class="bx bxl-facebook" href="href=" https://www.facebook.com/micro6/" target="_blank"></a>
        <a class="bx bxl-whatsapp" href="https://wa.me/34653251983/" target="_blank"></a>
        <a class="bx bxl-linkedin" href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/"
            target="_blank"></a>
        <a class="bx bxl-github" href="https://github.com/Micrelio/" target="_blank"></a>
    </div>
</section>
<section class="stick" id="stick">
<div class="nav" id="nav">
  <div class="navbar">
    <div id="foto" class="foto">
      <!--<img src="/src/assets/images/dracula-man.jpg">-->
    </div>
    <div class="logotipo">
    <div id="palabras" class="palabras">
   <span>M</span>
      <span>i</span>
      <span>c</span>
      <span>r</span>
      <span>o</span>
     <!--  <br><small>Micro</small>-->
    </div>
    </div>
    <div class="menu">
      <div id="links" class="links">
        <a class="enlace irInicio" href="#inicio"><span>Inicio</span><span><i class="fas fa-home"
              aria-hidden="true"></i></span></a>
        <a class="enlace irBiografia" href="#biografia"><span>Biografía</span><span><i class="fab fa-leanpub"
              aria-hidden="true"></i></span></a>
        <a class="enlace irWebs" href="#webs"><span>Webs</span><span><i class="fas fa-globe"
              aria-hidden="true"></i></span></a>
        <a class="enlace irGaleria" href="#galeria"><span>Galería</span><span><i class="far fa-images"
              aria-hidden="true"></i></span></a>
        <a class="enlace irCurriculum" href="#curriculum"><span>Currículum</span><span><i class="far fa-id-badge"
              aria-hidden="true"></i></span></a>
        <a class="enlace irContacto" target="_blank" href="/src/app/pages/contacto/contacto.php"><span>Contacto</span><span><i class="far fa-envelope"
              aria-hidden="true"></i></span></a>
        <div class="menuCSS3">
          <ul>
            <li><a href="#" class="enlace"><span>Diseños</span><span><i class="fas fa-mouse"
                    aria-hidden="true"></i></span></a>
              <ul>
                <li>
                <!--
                  <a class="enlace irDisenos" href="#disenos"><span>Diseños</span><span><i class="fas fa-mouse"
                        aria-hidden="true"></i></span></a>
                        -->
                </li>
                <li>
                  <a class="enlace irHover" href="#hover"><span>Hover</span><span><i class="fab fa-suse"
                        aria-hidden="true"></i></span></a>
                </li>
                <li>
                  <a class="enlace irEfectos" href="#efectos"><span>Efectos</span><span><i class="far fa-star"
                        aria-hidden="true"></i></span></a>
                </li>
                <li>
                  <a class="enlace irgaleriaPruebas" href="#galeriaPruebas"><span>Pruebas</span><span><i
                        class="far fa-images" aria-hidden="true"></i></span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="mode" class=" mode">
          <p id="noche" class="noche enlace bx bxs-moon" onclick="modoNoche('dia');"></p>
          <p id="dia" class="dia enlace bx bxs-sun" onclick="modoNoche('noche');"></p>
        </div>
        <div class=" brushEstilos">
          <p id="selecEstilosDesplegar" class="selecEstilosDesplegar enlace bx bxs-brush"></p>
          <p style="display:none;" id="selecEstilosPlegar" class="selecEstilosPlegar enlace bx bxs-brush-alt"></p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="movil">
  <div class="imagenes">
    <div id="foto" class="foto">
      <!--<img src="/src/assets/images/dracula-man.jpg">-->
      <img src="/src/assets/images/transparente.png">
    </div>
    <div class="logotipo">
      <!--          <div class="dos letritas" id="dos" onclick="efectos('dos');">          -->
     <div class="palabras">
        <span>M</span>
        <span>i</span>
        <span>c</span>
        <span>r</span>
        <span>o</span>
         <!--  <br><small>Micro</small>-->
      </div>
      <!--
      <svg>
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
      -->
      <!-- </div>-->
    </div>
    <div class="botones">
      <div class="botonMenu">
        <a id="pull"> <span></span></a>
      </div>
      <!-- <span id="boton1"><img src="/src/assets/images/icons/menu.png" id="pull" href="#" alt="menu"></span> -->
      <!--   <p id="pull" href="#" class="botonMenu bx bx-menu" alt="menu"></p>-->
    </div>
  </div>
  <div style="display:none" class="desplegable nuevo" id="desplegable">
    <a class="enlace" href="#inicio" onclick="seleccionado(); toggleMenu();">Inicio</a>
    <a class="enlace" href="#biografia" onclick="seleccionado();">Biografía</a>
    <a class="enlace" href="#webs" onclick="seleccionado();">Webs</a>
    <a class="enlace" href="#galeria" onclick="seleccionado();">Galería</a>
    <a class="enlace" href="#curriculum" onclick="seleccionado();">Currículum</a>
    <a class="enlace irContacto" target="_blank" href="/src/app/pages/contacto/contacto.php"><span>Contacto</span><span><i class="far fa-envelope"
    <a class="enlace " href="#disenos" onclick="seleccionado();">Diseños</a>
    <a class="enlace " href="#hover" onclick="seleccionado();">Hover</a>
    <a class="enlace " href="#efectos" onclick="seleccionado();">Efectos</a>
    <div class="brushMode">
      <div class="brushEstilos">
        <p onclick="navegar('panelEstilos');" id="selecEstilosDesplegar" class="selecEstilosDesplegar bx bxs-brush">
        </p>
        <p style="display:none;" id="selecEstilosPlegar" class="selecEstilosPlegar bx bxs-brush-alt">
        </p>
      </div>
      <div id="mode" class="mode">
        <p id="noche" class="noche bx bxs-moon" onclick="modoNoche('dia');"></p>
        <p id="dia" class="dia bx bxs-sun" onclick="modoNoche('noche');"></p>
      </div>
    </div>
  </div>
</div>
<!-- <audio src="../sonidos/ping.mp4" autoplay loop></audio> -->
</section>
      `;
    //---logotipo---LETRAS QUE SE MUEVEN
    const spans = document.querySelectorAll(".palabras span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
    //---efecto boton menu-------------------------------------------------------------
    // // event
    //---menuEfecto x-------------------------------------------------
    document.querySelector("#pull").addEventListener("click", function () {
      this.classList.toggle("active");
      // document.getElementById("pull").style = "value: 100%";
      console.log(this.classList.value);
      // this.classList.toggle ("value: active"); tarjet
      // document.getElementById("pull").style = "value: 100%";
    });
    // esto arranca automatico
    //mover elemento con el raton
    // Drag.init(document.getElementById("foto"));
    // Drag.init(document.getElementById("palabras"));
    Drag.init(document.getElementById("pull"));
    //probar para mover div
    // var theHandle = document.getElementById("botonesEstilo");
    // var theRoot = document.getElementById("cabecera");
    // Drag.init(theHandle, theRoot);
    // <div id="botonesEstilo" class="botonesEstilo">
    // <div id="cabecera" class="cabecera"></div>
    //</div>
  }
}
//
//
customElements.define("mi-nav", miNav);
// llamar componentes
function navegar(id) {
  var render = id;
  switch (render) {
    case "panelEstilos":
      document.getElementById("panelEstilos").innerHTML =
        "<mi-panelestilos></mi-panelestilos>";
      break;
    default:
      break;
  }
}
//cerrar menu
function seleccionado() {
  menu.slideToggle();
  pull.classList.toggle("active");
  // this.classList.toggle('')
  // this.classList.toggle('false');
  // this.classList.toggle('is-active');
  // document.querySelector( ".menuppal" ).classList.toggle("is_active");
  // event.preventDefault();
}
//funcion transparencia
function mostrarValor(opacidadMenu) {
  console.log(opacidadMenu);
  document.getElementById("valBox").innerHTML = opacidadMenu * 2 + "%";
  switch (opacidadMenu) {
    case "0":
      document.getElementById("stick").style = "opacity:";
      break;
    case "10":
      document.getElementById("stick").style = "opacity:0.9";
      break;
    case "20":
      document.getElementById("stick").style = "opacity:0.8";
      break;
    case "30":
      document.getElementById("stick").style = "opacity:0.7";
      break;
    case "40":
      document.getElementById("stick").style = "opacity:0.6";
      break;
    case "50":
      document.getElementById("stick").style = "opacity:0.5";
      break;
    case "60":
      document.getElementById("stick").style = "opacity:0.4";
      break;
    case "70":
      document.getElementById("stick").style = "opacity:0.3";
      break;
    case "80":
      document.getElementById("stick").style = "opacity:0.2";
      break;
    case "90":
      document.getElementById("stick").style = "opacity:0.1";
      break;
    case "100":
      document.getElementById("stick").style = "opacity:0.0";
      break;
    default:
      document.getElementById("stick").style = "opacity:1";
      break;
  }
  document.getElementById("foto").style = "opacity:";
}
//funcion para cualquier clic en el documento
document.addEventListener("click", function (e) {
  //obtiendo informacion del DOM para
  var clic = e.target.id;
  // console.log("menu", e.target.id);
  switch (clic) {
    // case "mpull":
    //   pull.classList.toggle('is-active');
    // break;
    case "selecEstilosDesplegar":
      document.getElementById("panelEstilos").innerHTML =
        "<mi-panelestilos></mi-panelestilos>";
      // document.getElementById("botonesEstilo").style = "display:block";
      document.getElementById("selecEstilosDesplegar").style = "display:none";
      document.getElementById("selecEstilosPlegar").style = "display:block";
      break;
    case "selecEstilosMenuDesplegar":
      document.getElementById("panelEstilos").innerHTML =
        "<mi-panelestilos></mi-panelestilos>";
      // document.getElementById("botonesEstiloMenu").style = "display:block";
      document.getElementById("selecEstilosMenuDesplegar").style =
        "display:none";
      document.getElementById("selecEstilosMenuPlegar").style = "display:block";
      break;
    default:
      if (document.getElementById("botonesEstilo").contains(e.target)) {
        //alert("Clicked in Box");
        document.getElementById("botonesEstilo").style = "display:block";
      } else {
        //alert("Clicked outside Box");
        document.getElementById("botonesEstilo").style = "display:none";
        document.getElementById("selecEstilosDesplegar").style =
          "display:block";
        document.getElementById("selecEstilosPlegar").style = "display:none";
      }
      // if (document.getElementById("botonesEstiloMenu").contains(e.target)) {
      //   // alert("Clicked in Box");
      //   document.getElementById("botonesEstiloMenu").style = "display:block";
      // } else {
      //   // alert("Clicked outside Box");
      //   document.getElementById("botonesEstiloMenu").style = "display:none";
      //   document.getElementById("selecEstilosMenuDesplegar").style =
      //     "display:block";
      //   document.getElementById("selecEstilosMenuPlegar").style = "display:none";
      // }
      break;
  }
  // if (div.style.display == "block" && clic != div || clic != desplegar) {
  //   div.style.display = "none";
  //  // plegarEstilos();
  // }
  //   },
  //   false
  // );
});
// function nav() {
console.log("1desplegable");
$(function () {
  // console.log("abrir");
  var pull = $("#pull");
  menu = $(".desplegable");
  menuHeight = menu.height();
  $(pull).on("click", function (e) {
    // console.log("cerrar");
    e.preventDefault();
    menu.slideToggle();
  });
});
$(window).resize(function () {
  var w = $(window).width();
  if (w > 320 && menu.is(":hidden")) {
    menu.removeAttr("style");
  }
  // console.log(pull.value);
  var variable = document.getElementById("pull");
  // console.log(variable);

  if (pull.classList.value == "active" && menu.is(":hidden")) {
    console.log("dentro");
    pull.classList.toggle("active");
  }
});
// }
//----------------
//sonido menu
// $(function () {
//     /**** INICIO ZONA EDITABLE ****/
//     var sound_mp3 = "http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3";
//     var sound_ogg = "http://vignette2.wikia.nocookie.net/monchbox/images/0/01/Beep-sound.ogg/revision/latest?cb=20110628200153";
//     /**** FIN ZONA EDITABLE ****/

//     $('body').prepend('<audio><source src="' + sound_mp3 + '"></source><source src="' + sound_ogg + '"></source></audio>');
//     var audio = $("audio")[0];
//     $("s").mouseenter(function () {
//         audio.play();
//     });
// });
//----------------------------------------------------------
