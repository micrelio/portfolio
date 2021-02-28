//---preloader------------------------------------------------------------------------------
$(document).ready(function () {
  console.log("inicio");
  // espera();
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        //   $(this).remove();
      });
  }
});
























function fondoPantalla(fondo) {
  console.log("fondo");
  switch (fondo) {
    case "blanco":
      document.getElementById("body").style = "background-color:#eeeeee";
      break;
    case "negro":
      document.getElementById("html").style =
        "height: 100% ; background-color:#0a0a0a";
      // document.getElementById("modo").href = "";
      break;
    case "movimiento":
      // var imagen = document.getElementById("body");
      // imagen.style.backgroundImage = "url('../../../images/gifs/liquido.gif')";
      // document.getElementById("body").style = " background-attachment: fixed;; background-image:url('/src/assets/images/gifs/liquido.gif');  ";
      // document.body.style.backgroundImage = "url('/src/assets/images/gifs/liquido.gif')";
      // document.getElementById("body").style = "background-repeat: no-repeat";
      // document.getElementById("body").style = "background-size: cover";

      break;
    default:
      // document.getElementById("nav").style = "background-color:white";
      break;
  }
}
function resetEstilos() {
  document.getElementById("nav").style = "background-color:#";
  document.getElementById("footer").style = "background-color:#";
  document.getElementById("color").href =
    "/src/assets/style/sass/styles/colores/style.css";
  modoNoche();
  fecha("stop");
}
function colorMenu(color) {
  console.log("nav");
  switch (color) {
    case "blanco":
      document.getElementById("nav").style = "background-color:#eeeeee";
      break;
    case "amarillo":
      document.getElementById("nav").style = "background-color:#ffff00";
      break;
    case "naranja":
      document.getElementById("nav").style = "background-color:orangered";
      break;
    case "oro":
      document.getElementById("nav").style = "background-color:#eabe3f";
      break;
    case "marron":
      document.getElementById("nav").style = "background-color:#a05000";
      break;
    case "rojo":
      document.getElementById("nav").style = "background-color:#f80000";
      break;
    case "rosa":
      document.getElementById("nav").style = "background-color:#ff0080";
      break;
    case "morado":
      document.getElementById("nav").style = "background-color:#9c27b0";
      break;
    case "azul":
      document.getElementById("nav").style = "background-color:#00c6ee";
      break;
    case "verde":
      document.getElementById("nav").style = "background-color:#008f39";
      break;
    case "gris":
      document.getElementById("nav").style = "background-color:#272727";
      break;
    case "negro":
      document.getElementById("nav").style = "background-color: #0a0a0a";
      break;
    default:
      // document.getElementById("nav").style = "background-color:white";
      break;
  }
}
function colorFooter(color) {
  switch (color) {
    case "blanco":
      document.getElementById("footer").style = "background-color:#eeeeee";
      break;
    case "amarillo":
      document.getElementById("footer").style = "background-color:#ffff00";
      break;
    case "naranja":
      document.getElementById("footer").style = "background-color:orangered";
      break;
    case "oro":
      document.getElementById("footer").style = "background-color:#eabe3f";
      break;
    case "marron":
      document.getElementById("footer").style = "background-color:#a05000";
      break;
    case "rojo":
      document.getElementById("footer").style = "background-color:#f80000";
      break;
    case "rosa":
      document.getElementById("footer").style = "background-color:#ff0080";
      break;
    case "morado":
      document.getElementById("footer").style = "background-color:#9c27b0";
      break;
    case "azul":
      document.getElementById("footer").style = "background-color:#00c6ee";
      break;
    case "verde":
      document.getElementById("footer").style = "background-color:#008f39";
      break;
    case "gris":
      document.getElementById("footer").style = "background-color: #272727";
      break;
    case "negro":
      document.getElementById("footer").style = "background-color: #0a0a0a";
      break;
    default:
      // document.getElementById("footer").style = "background-color:white";
      break;
  }
}
function color(color) {
  switch (color) {
    case "blanco":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/blanco.css";
      break;
    case "amarillo":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/amarillo.css";
      break;
    case "naranja":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/naranja.css";
      break;
    case "oro":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/oro.css";
      break;
    case "marron":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/marron.css";
      break;
    case "rojo":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/rojo.css";
      break;
    case "rosa":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/rosa.css";
      break;
    case "morado":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/morado.css";
      break;
    case "azul":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/azul.css";
      break;
    case "verde":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/verde.css";
      break;
    case "gris":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/gris.css";
      break;
    case "negro":
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/negro.css";
      break;
    default:
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/style.css";
      break;
  }
}






function modoNoche(id) {
  //   getDate(): devuelve el día del mes (1 a 31).
  // getDay(): devuelve el número del día de la semana: desde 0 (domingo) hasta 6 (sábado).
  // getFullYear(): cuatro dígitos del año.
  // getHours(): hora en formato 24h (0 a 23).
  // getMilliseconds(): milisegundos de la fecha especificada (0 a 999).
  // getMinutes(): devuelve los minutos (0 a 59).
  // getMonth(): devuelve el número del mes: desde 0 (enero) hasta 11 (diciembre).
  // getSeconds(): devuelve el número de segundos (0 a 59).
  // toLocaleDateString(): devuelve una cadena con la fecha completa, en formato de fecha local.
  // toLocaleTimeString(): devuelve una cadena con la hora completa, en formato de hora local.

  console.log(id);
  var objFecha = new Date();
  var mes = 1 + objFecha.getMonth();
  var hora = objFecha.getHours();
  var estilo = "";
  //hora = "";
  if (id != undefined) {
    var hora = "";
  }
  console.log(hora);
  if ((hora >= 8 && hora < 20) || id == "noche") {
    console.log("modo dia");
    estilo = "dia";
  } else if (
    (hora >= 20 && hora < 26) ||
    (hora >= 00 && hora < 8) ||
    id == "dia"
  ) {
    estilo = "noche";
  }
  switch (estilo) {
    case "dia":
      console.log("dia");
      console.log("final", estilo);

     document.getElementById("dia").classList.add("efectoModoNoche");
  
     
        setTimeout(function () {
          document.getElementById("dia").classList.remove("efectoModoNoche");
          document.getElementById("noche").style = "display:block";
          document.getElementById("dia").style = "display:none;";
          document.getElementById("modo").href = "/src/assets/style/sass/styles/styleDia.css";        
        }, 1000); // 1000ms = 3s
      // function mostrarAviso() {
      //   alert("Han pasado los tres segundos");
      // }

     
      break;


    case "noche":
      document.getElementById("noche").classList.add("efectoModoNoche");

      setTimeout(function () {
        document.getElementById("noche").classList.remove("efectoModoNoche");

      document.getElementById("dia").style = "display:block";
      document.getElementById("noche").style = "display:none";
      document.getElementById("modo").href = "";
    }, 2000); // 1000ms = 3s

      break;
    default:
      break;
  }
}
function fecha(id) {
  document.getElementById("stop").style = "display:none";
  document.getElementById("cssArchivo").href = "";
  document.getElementById("adorno").src = "";
  document.getElementById("anio").innerHTML = "";
  document.getElementById("feliz").innerHTML = "";
  document.getElementById("imagenFelicitacion").src = "";
  document.getElementById("feliz").style = "color:#; font-size:#;";
  //   getDate(): devuelve el día del mes (1 a 31).
  // getDay(): devuelve el número del día de la semana: desde 0 (domingo) hasta 6 (sábado).
  // getFullYear(): cuatro dígitos del año.
  // getHours(): hora en formato 24h (0 a 23).
  // getMilliseconds(): milisegundos de la fecha especificada (0 a 999).
  // getMinutes(): devuelve los minutos (0 a 59).
  // getMonth(): devuelve el número del mes: desde 0 (enero) hasta 11 (diciembre).
  // getSeconds(): devuelve el número de segundos (0 a 59).
  // toLocaleDateString(): devuelve una cadena con la fecha completa, en formato de fecha local.
  // toLocaleTimeString(): devuelve una cadena con la hora completa, en formato de hora local.
  var objFecha = new Date();
  var dia = objFecha.getDate();
  var mes = 1 + objFecha.getMonth();
  var anio = objFecha.getFullYear();
  var festivo = "";
  // var total = mes + "" + dia;
  // if (id != undefined) {
  //    festivo = "";
  // }
  //mes = "4";
  switch (id) {
    case undefined:
      if (mes == "1" && dia > "0" && dia < "7") {
        festivo = "reyes";
      } else if (mes == "2" && dia > "0" && dia < "15") {
        festivo = "sanValentin";
      } else if ((mes == "3" && dia > "15") || (mes == "4" && dia < "15")) {
        festivo = "pascua";
      } else if (mes == "10" && dia > "15") {
        festivo = "halloween";
      } else if (mes == "12" && dia > "0" && dia < "28") {
        festivo = "navidad";
      } else if (mes == "12" && dia == "28") {
        festivo = "inocente";
      } else if (mes == "12" && dia > "28") {
        festivo = "anoNuevo";
      }
      break;
    case "stop":
      festivo = "stop";
      break;
    case "reyes":
      festivo = "reyes";
      break;
    case "sanValentin":
      festivo = "sanValentin";
      break;
    case "pascua":
      festivo = "pascua";
      break;
    case "halloween":
      festivo = "halloween";
      break;
    case "navidad":
      festivo = "navidad";
      break;
    case "inocente":
      festivo = "inocente";
      break;
    case "anoNuevo":
      festivo = "anoNuevo";
      break;
    default:
      break;
  }
  switch (festivo) {
    case "stop":
      document.getElementById("stop").style = "display:none";
      document.getElementById("cssArchivo").href = "";
      document.getElementById("color").href = "";
      document.getElementById("adorno").src = "";
      document.getElementById("anio").innerHTML = "";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("imagenFelicitacion").src = "";
      break;
    case "halloween":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleHalloween.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/naranja.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/calabaza2.gif";
      document.getElementById("stop").style = "display:block";
      document.getElementById("imagenFelicitacion").src =
        "/src/assets/images/gifs/felizHalloween2.gif";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("anio").innerHTML = "";
      break;
    case "reyes":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleReyes.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/amarillo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/reyes.gif";
      document.getElementById("stop").style = "display:block";
      document.getElementById("imagenFelicitacion").src =
        "/src/assets/images/gifs/estrellaNavidad.gif";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("anio").innerHTML = "";
      break;
    case "sanValentin":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleSanValentin.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/rosa.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/sanValentin.gif";
      document.getElementById("stop").style = "display:block";
      document.getElementById("imagenFelicitacion").src =
        "/src/assets/images/gifs/felizSanValentin.gif";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("anio").innerHTML = "";
      break;
    case "pascua":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/stylePascua.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/rojo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/pascua.gif";
      document.getElementById("stop").style = "display:block";
      document.getElementById("imagenFelicitacion").src =
        "/src/assets/images/gifs/felicesPascuas.gif";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("anio").innerHTML = "";
      break;
    case "navidad":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleNavidad.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/rojo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/noelbailando.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ NAVIDAD";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("feliz").style = "color:red;";
      break;
    case "inocente":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleAnoNuevo.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/blanco.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/inocente.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ AÑO";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("anio").innerHTML = anio;
      break;
    case "anoNuevo":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/sass/styles/festivos/styleAnoNuevo.css";
      document.getElementById("color").href =
        "/src/assets/style/sass/styles/colores/oro.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/brindis.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ AÑO";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("anio").innerHTML = anio;
      break;
    default:
      document.getElementById("stop").style = "display:none";
      document.getElementById("cssArchivo").href = "";
      document.getElementById("color").href = "";
      document.getElementById("adorno").src = "";
      document.getElementById("anio").innerHTML = "";
      document.getElementById("feliz").innerHTML = "";
      break;
  }
}
