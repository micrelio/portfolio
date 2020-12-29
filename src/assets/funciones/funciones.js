// var slideIndex = 1;
// showSlides();

// function showSlides() {

//     console.log('KKKKKK');
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
  var total = mes + "" + dia;
  if (id === "stop") {
    festivo = "stop";
  } else if ((total > "0100" && total < "0107") || id == "reyes") {
    festivo = "reyes";
  } else if ((total > "0200" && total < "0215") || id == "sanValentin") {
    festivo = "sanValentin";
  } else if ((total > "1200" && total < "1228") || id == "navidad") {
    festivo = "navidad";
  } else if (total === "1228" || id == "inocente") {
    festivo = "inocente";
  } else if (total > "1228" || id == "anoNuevo") {
    festivo = "anoNuevo";
  }
  // festivo='navidad'
  switch (festivo) {
    case "stop":
      document.getElementById("stop").style = "display:none";
      document.getElementById("cssArchivo").href = "";
      document.getElementById("adorno").src = "";
      document.getElementById("anio").innerHTML = "";
      document.getElementById("feliz").innerHTML = "";
      document.getElementById("imagenFelicitacion").src = "";
      break;
    case "reyes":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleReyes.css";
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
        "/src/assets/style/css/styles/styleSanValentin.css";
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
        "/src/assets/style/css/styles/styleNavidad.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/noelbailando.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ NAVIDAD";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("feliz").style = "color:red; font-size:10rem;";

      document.getElementById("anio").innerHTML = anio;
      break;
    case "inocente":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleAnoNuevo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/inocente.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ AÑO";
      document.getElementById("feliz").innerHTML = feliz;
      document.getElementById("anio").innerHTML = anio;
      break;
    case "anoNuevo":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleAnoNuevo.css";
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
      document.getElementById("adorno").src = "";
      document.getElementById("anio").innerHTML = "";
      document.getElementById("feliz").innerHTML = "";
      break;
  }
}
