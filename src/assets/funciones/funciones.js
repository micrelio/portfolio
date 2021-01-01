// var slideIndex = 1;
// showSlides();
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000);
// };
function color(color) {
  switch (color) {
    case "blanco":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/blanco.css";
      break;
    case "amarillo":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/amarillo.css";
      break;
    case "naranja":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/naranja.css";
      break;
    case "oro":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/oro.css";
      break;
      case "marron":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/marron.css";
      break;
    case "rojo":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/rojo.css";
      break;
    case "rosa":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/rosa.css";
      break;
    case "morado":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/morado.css";
      break;
    case "azul":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/azul.css";
      break;
    case "verde":
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/verde.css";
      break;
    default:
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/style.css";
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
  var objFecha = new Date();
  var mes = 1 + objFecha.getMonth();
  var hora = objFecha.getHours();
  var estilo = "";
  //hora = "";
  if (id != undefined) {
    var hora = "";
  }
  if ((hora >= 8 && hora < 20) || id === "dia") {
    estilo = "dia";
  } else if (
    (hora >= 20 && hora < 26) ||
    (hora > 00 && hora < 8) ||
    id === "noche"
  ) {
    estilo = "noche";
  }
  switch (estilo) {
    case "dia":
      document.getElementById("modo").href =
        "/src/assets/style/css/styles/styleDia.css";
      break;
    case "noche":
      document.getElementById("modo").href =
        "/src/assets/style/css/styles/style.css";
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
  switch (id) {
    case undefined:
      if (mes == "1" && dia > "0" && dia < "7") {
        festivo = "reyes";
      } else if (mes == "2" && dia > "0" && dia < "15") {
        festivo = "sanValentin";
      } else if (mes == "12" && dia > "0" && dia < "28") {
        festivo = "navidad";
      } else if (mes == "12" && dia == "28") {
        festivo = "inocente";
      } else if (mes == "12" && dia > "28") {
        festivo = "anoNuevo";
      }
      break;
      case 'stop':
        festivo = "stop";
        break;
      case 'reyes':
        festivo = "reyes";
        break;
        case 'sanValentin':
          festivo = "sanValentin";
        break;
        case 'navidad':
          festivo = "navidad";
        break;
        case 'inocente':
          festivo = "inocente";
        break;
        case 'anoNuevo':
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
    case "dia":
      document.getElementById("modo").href =
        "/src/assets/style/css/styles/styleDia.css";
      break;
    case "noche":
      document.getElementById("modo").href =
        "/src/assets/style/css/styles/style.css";
      break;
    case "reyes":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/festivos/styleReyes.css";
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/amarillo.css";
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
        "/src/assets/style/css/styles/festivos/styleSanValentin.css";
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/rojo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/sanValentin.gif";
      document.getElementById("stop").style = "display:block";
      document.getElementById("imagenFelicitacion").src =
        "/src/assets/images/gifs/felizSanValentin.gif";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("anio").innerHTML = "";
      break;
    case "navidad":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/festivos/styleNavidad.css";
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/rojo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/noelbailando.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ NAVIDAD";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("feliz").style = "color:red;";

      break;
    case "inocente":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/festivos/styleAnoNuevo.css";
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/oro.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/inocente.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ AÑO";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("anio").innerHTML = anio;
      break;
    case "anoNuevo":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/festivos/styleAnoNuevo.css";
      document.getElementById("color").href =
        "/src/assets/style/css/styles/colores/oro.css";
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
