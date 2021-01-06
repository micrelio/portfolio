class miNav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
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


<div id="botonesEstilo" class="botonesEstilo">
  <div class="desplazable">
    <div>  
      <p><strong>Reset estilos</strong></p>
      <hr>
      <div class="reset"> 
        <p id="reset" class="reset bx bx-reset" onclick="resetEstilos();"></p>
      </div> 
    </div>
    <br>
    <div class="filasFiesta">
        <p><strong>Festivos</strong></p>
        <hr>
        <div class="selecFiesta">
            <img class="festivos" id="festivos" onclick="fecha('stop');" src="/src/assets/images/icons/stop2.png" />
            <img class="festivos" id="festivos" onclick="fecha('reyes');" src="/src/assets/images/icons/estrellaNavidad.png" />
            <img class="festivos" id="festivos" onclick="fecha('sanValentin');" src="/src/assets/images/icons/corazon.png" />
            <img class="festivos" id="festivos" onclick="fecha('pascua');" src="/src/assets/images/icons/huevo.png" />
            <img class="festivos" id="festivos" onclick="fecha('halloween');" src="/src/assets/images/icons/calabaza.png" />
            </div>
        <div class="selecFiesta">
        <img class="festivos" id="festivos" onclick="fecha('navidad');" src="/src/assets/images/icons/gorroSanta.png" />
        <img class="festivos" id="festivos" onclick="fecha('inocente');" src="/src/assets/images/icons/inocente.png" />
            <img class="festivos" onclick="fecha('anoNuevo');" src="/src/assets/images/icons/champan.png" />
        </div>
    </div>
    <div class="filasColores">
        <p><strong>Color general</strong></p>
        <hr>
        <div class="cambioColor">
            <div class="selecColor">
              <p class="color blanco" onclick="color('blanco');"></p>
              <p class="color amarillo" onclick="color('amarillo');"></p>
              <p class="color oro" onclick="color('oro');"></p>
              <p class="color marron" onclick="color('marron');"></p>
              <p class="color naranja" onclick="color('naranja');"></p>
            </div>
            <div class="selecColor">
              <p class="color rojo" onclick="color('rojo');"></p>
              <p class="color rosa" onclick="color('rosa');"></p>
              <p class="color morado" onclick="color('morado');"></p>
              <p class="color azul" onclick="color('azul');"></p>
              <p class="color verde" onclick="color('verde');"></p>
            </div>
            <div class="selecColor">
              <p class="color gris" onclick="color('gris');"></p>
              <p id="color" class="color negro" onclick="color('negro');"></p>
            </div>
        </div>
    </div>
    <br>
    <div class="filasColores">
        <p><strong>Color menú</strong></p>
        <hr>
        <div class="cambioColor">
          <div class="selecColor">
            <p class="color blanco" onclick="colorMenu('blanco');"></p>
            <p class="color amarillo" onclick="colorMenu('amarillo');"></p>
            <p class="color oro" onclick="colorMenu('oro');"></p>
            <p class="color marron" onclick="colorMenu('marron');"></p>
            <p class="color naranja" onclick="colorMenu('naranja');"></p>
          </div>
          <div class="selecColor">
            <p class="color rojo" onclick="colorMenu('rojo');"></p>
            <p class="color rosa" onclick="colorMenu('rosa');"></p>
            <p class="color morado" onclick="colorMenu('morado');"></p>
            <p class="color azul" onclick="colorMenu('azul');"></p>
            <p class="color verde" onclick="colorMenu('verde');"></p>
          </div>
          <div class="selecColor">
            <p class="color gris" onclick="colorMenu('gris');"></p>
            <p id="color" class="color negro" onclick="colorMenu('negro');"></p>
          </div>
        </div>
    </div>
    <br>
    <div class="opacidad">
      <p><strong>Opacidad menú</strong></p>
      <hr>
      <br>
      <div class="slidecontainer">
        <span class="valBox" id="valBox">0%</span>
        <br>
        <input type="range"  min="0" max="50" value="0" step="10" class="slider" id="myRange" onchange="mostrarValor(this.value)">
      </div>
    </div>
    <br>
    <div class="filasColores">
        <p><strong>Color footer</strong></p>
        <hr>
        <div class="cambioColor">
          <div class="selecColor">
            <p class="color blanco" onclick="colorFooter('blanco');"></p>
            <p class="color amarillo" onclick="colorFooter('amarillo');"></p>
            <p class="color oro" onclick="colorFooter('oro');"></p>
            <p class="color marron" onclick="colorFooter('marron');"></p>
            <p class="color naranja" onclick="colorFooter('naranja');"></p>
          </div>
          <div class="selecColor">
            <p class="color rojo" onclick="colorFooter('rojo');"></p>
            <p class="color rosa" onclick="colorFooter('rosa');"></p>
            <p class="color morado" onclick="colorFooter('morado');"></p>
            <p class="color azul" onclick="colorFooter('azul');"></p>
            <p class="color verde" onclick="colorFooter('verde');"></p>
          </div>
          <div class="selecColor">
            <p class="color gris" onclick="colorFooter('gris');"></p>
            <p id="color" class="color negro" onclick="colorFooter('negro');"></p>
          </div>
        </div>
    </div>
    <br>
    <div class="selecModo">
        <p><strong>Modo</strong></p>
        <hr>
        <div class="mode">
            <p id="noche" class="noche bx bxs-moon" onclick="modoNoche('dia');"></p>
            <p id="dia" class="dia bx bxs-sun" onclick="modoNoche('noche');"></p>
        </div>
    </div>
  </div>  
  </div>


<section class="stick" id="stick">
    <div class="nav" id="nav" >
        <div class="navbar">
            <div id="foto" class="foto" >
                <img src="/src/assets/images/dracula-man.jpg">
            </div>
            <div class="menu">
                <div id="links" class="links">
                    <div class="enlace irInicio" onclick="navegar('inicio');"><p> Inicio </p></div>
                    <div class="enlace irBiografia" onclick="navegar('biografia');"><p> Biografía </p></div>
                    <div class="enlace irWebs" onclick="navegar('webs'); "><p> Webs </p></div>
                    <div class="enlace irGaleria" onclick="navegar('galeria');"><p> Galería </p></div>
                    <div class="enlace irCurriculum" onclick="navegar('curriculum');"><p> Currículum </p></div>
                    <div class="enlace irContacto" onclick="navegar('contacto');"><p> Contacto </p></div>
                    <div class=" mode">
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
                <img src="/src/assets/images/dracula-man.jpg">
            </div>
            <div class="botones">
                <!-- <span id="boton1"><img src="/src/assets/images/icons/menu.png" id="pull" href="#" alt="menu"></span> -->
                <span id="boton1">
                    <p id="pull" href="#" class="botonMenu bx bx-menu"></p>
                </span>

            </div>
        </div>
        <div>
        </div>
        <div style="display: none" class="desplegable nuevo" id="desplegable">
            <div onclick="navegar('inicio'); seleccionado();" class="enlace">Inicio</div>
            <div onclick="navegar('biografia'); seleccionado();" class="enlace">Biografía</div>
            <div onclick="navegar('webs'); seleccionado();" class="enlace">Webs</div>
            <div onclick="navegar('galeria'); seleccionado();" class="enlace">Galeria</div>
            <div onclick="navegar('curriculum'); seleccionado();" class="enlace">Curriculum</div>
            <div onclick="navegar('contacto'); seleccionado();" class="enlace">Contacto</div>
            <div class="mode">
              <p id="selecEstilosDesplegar" class="selecEstilosDesplegar bx bxs-brush"></p>
              <p style="display:none;" id="selecEstilosPlegar" class="selecEstilosPlegar bx bxs-brush"></p>
              <p id="noche" class="noche bx bxs-moon" onclick="modoNoche('dia');"></p>
              <p id="dia" class="dia bx bxs-sun" onclick="modoNoche('noche');"></p>
            </div>
        </div>
    </div>
    <!-- <audio src="../sonidos/ping.mp4" autoplay loop></audio> -->
</section>
      `;
    // esto arranca automatico
    //mover elemento con el raton
    Drag.init (document.getElementById ("foto"));
    
    //probar para mover div
    // var theHandle = document.getElementById("botonesEstilo");
    // var theRoot = document.getElementById("cabecera");
    // Drag.init(theHandle, theRoot); 
    // <div id="botonesEstilo" class="botonesEstilo">
    // <div id="cabecera" class="cabecera"></div>
    //</div>
  }
}

customElements.define("mi-nav", miNav);
// modificar para routing
function navegar(id) {
  var render = id;
  switch (render) {
    case "botones":
      document.getElementById("componente").innerHTML =
        "<mi-estilo></mi-estilo>";
      break;
    case "inicio":
      document.getElementById("componente").innerHTML =
        "<mi-inicio></mi-inicio>";
      break;
    case "biografia":
      document.getElementById("componente").innerHTML =
        "<mi-biografia></mi-biografia>";
      break;
    case "webs":
      document.getElementById("componente").innerHTML = "<mi-webs></mi-webs>";
      break;
    case "galeria":
      document.getElementById("componente").innerHTML =
        "<mi-galeria><mi-galeria>";
      // window.router.init([
      //   {
      // path: "/list",
      // view: "<mi-galeria><mi-galeria>",
      //   },
      // ]);
      // document.getElementById("componente").innerHTML =
      //   "<mi-galeria></mi-galeria>";
      // location.replace("src/app/galeria/galeria.js");
      break;
    case "videos":
      document.getElementById("componente").innerHTML =
        "<mi-videos></mi-videos>";
      break;
    case "curriculum":
      document.getElementById("componente").innerHTML =
        "<mi-curriculum></mi-curriculum>";
      break;
    case "contacto":
      document.getElementById("componente").innerHTML =
        "<mi-contacto></mi-contacto>";
      break;
    default:
      break;
  }
}

//funcion transparencia
function mostrarValor(opacidadMenu) {
  console.log(opacidadMenu);
  document.getElementById("valBox").innerHTML = opacidadMenu*2 + "%";
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
  switch (clic) {
    case "selecEstilosDesplegar":
      document.getElementById("botonesEstilo").style = "display:block";
      document.getElementById("selecEstilosDesplegar").style = "display:none";
      document.getElementById("selecEstilosPlegar").style = "display:block";
      break;
    case "selecEstilosMenuDesplegar":
      document.getElementById("botonesEstiloMenu").style = "display:block";
      document.getElementById("selecEstilosMenuDesplegar").style =
        "display:none";
      document.getElementById("selecEstilosMenuPlegar").style = "display:block";
      break;

    default:
      if (document.getElementById("botonesEstilo").contains(e.target)) {
        // alert("Clicked in Box");
        document.getElementById("botonesEstilo").style = "display:block";
      } else {
        // alert("Clicked outside Box");
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
function seleccionado() {
  menu.slideToggle();
}
function nav() {
  $(function () {
    var pull = $("#pull");
    menu = $(".desplegable");
    menuHeight = menu.height();
    $(pull).on("click", function (e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });
}
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
