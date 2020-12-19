class miNav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section class="stick" id="stick">
  <div class="nav" id="nav">
    <div class="navbar">
      <div class="foto">
        <img src="/src/assets/images/dracula-man.jpg">
      </div>
      <div class="menu">
       
        <div class="nuevo">
          <div class="enlace" type="button" onclick="navegar('inicio');"> Inicio </div>
           <div class="enlace" type="button" onclick="navegar('biografia');"> Biografía </div> 
           <div class="enlace" type="button" onclick="navegar('webs'); "> Webs </div>
           <div class="enlace" type="button" onclick="navegar('galeria');"> Galería </div>
          <div class="enlace" type="button" onclick="navegar('curriculum');"> Currículum </div>
           <div class="enlace" type="button" onclick="navegar('contacto');"> Contacto </div>
        </div>
     <!--
        <div id="nuevo" class="nuevo">
          <div onclick="navegar('inicio') id="inicio" class="nav-link enlace ">Inicio</div>
          <div id="biografia" class="enlace biografia">Biografía</div>
          <div id="webs" class="enlace webs">Webs</div>
          <div id="gal" class="enlace gal">Galería</div>
          <div id="curriculum" class="enlace curriculum">Currículum</div>
          <div id="contacto" class="enlace contacto">Contacto</div>
        </div>
        -->
      </div>
    </div>
  </div>
  <div class="movil">
    <div class="imagenes">
      <div class="foto">
        <img src="/src/assets/images/dracula-man.jpg">
      </div>
      <div class="botones">
        <span id="boton1"><img src="/src/assets/images/icons/menu.png" id="pull" href="#" alt="menu"></span>
      </div>
    </div>
    <div>
    </div>
    <div style="display: none" class="desplegable nuevo" id="desplegable">
    <!--
      <button  onclick="navegar('inicio'); seleccionado();" class="mnav-link">Inicio</button>
      <button onclick="navegar('biografia'); seleccionado();" class="mnav-link">Sobre mí</button>
      <button onclick="navegar('webs'); seleccionado();" class="mnav-link">Webs</button>
      <button onclick="navegar('galeria'); seleccionado();" class="mnav-link">Galery</button>
      <button onclick="navegar('videos'); seleccionado();" class="mnav-link">Videos</button>
      <button onclick="navegar('curriculum'); seleccionado();" class="mnav-link">Curriculum</button>
      <button onclick="navegar('contacto'); seleccionado();" class="mnav-link">Contacto</button>
    -->  
        <div onclick="navegar('inicio'); class="enlace inicio mnav-link">Inicio</div>
        <div id="biografia" class="enlace biografia mnav-link">Biografía</div>
        <div id="webs" class="enlace webs mnav-link">Webs</div>
        <div id="gal" class="enlace gal mnav-link">Galería</div>
        <div id="curriculum" class="enlace curriculum mnav-link">Currículum</div>
        <div id="contacto" class="enlace contacto mnav-link">Contacto</div>
    </div>
  </div>
  <div class="mode">
    <!-- <audio src="../sonidos/ping.mp4" autoplay loop></audio> -->
    <img src="/src/assets/images/buttons/noche.png">
  </div>
</section>
      `;
    // esto arranca automatico
    // var multimedia = document.querySelector("#stick");
    // multimedia.addEventListener("click", function (seleccion) {
    // var h = seleccion.target.id;
    // switch (h) {
    // case "inicio":
    //   seleccionado();
    //   document.getElementById("componente").innerHTML =
    //     "<mi-inicio></mi-inicio>";
    //   break;
    //     case "biografia":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-biografia></mi-biografia>";
    //       break;
    //     case "webs":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-webs></mi-webs>";
    //       break;
    //     case "gal":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-galeria></mi-galeria>";
    //       break;
    //     case "videos":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-videos></mi-videos>";
    //       break;
    //     case "curriculum":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-curriculum></mi-curriculum>";
    //       break;
    //     case "contacto":
    //       seleccionado();
    //       document.getElementById("componente").innerHTML =
    //         "<mi-contacto></mi-contacto>";
    //       break;
    //   }
    // });
  }
}
customElements.define("mi-nav", miNav);
// modificar para routing
function navegar(id) {
  console.log("FUNCION RENDER");
  var render = id;
  switch (render) {
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
  }
}

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
// SCRIPT DE desplegable
function desplegable() {
  jQuery.fn.animateAuto = function (prop, speed, callback) {
    var elem, height, width;
    return this.each(function (i, el) {
      (el = jQuery(el)),
        (elem = el
          .clone()
          .css({ height: "auto", width: "auto" })
          .appendTo("body"));
      (height = elem.css("height")), (width = elem.css("width")), elem.remove();
      if (prop === "height") el.animate({ height: height }, speed, callback);
      else if (prop === "width") el.animate({ width: width }, speed, callback);
      else if (prop === "both")
        el.animate({ width: width, height: height }, speed, callback);
    });
  };
  $(window).ready(function () {
    $("h2").click(function () {
      if ($(this).next().hasClass("desplegado")) {
        $(this).next().removeClass("desplegado").animate({ height: 0 }, 500);
      } else {
        $(this).next().addClass("desplegado").animateAuto("height", 500);
      }
    });
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
