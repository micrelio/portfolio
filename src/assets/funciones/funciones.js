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
  var total = '02' + "" + '13';
  if (id === "stop") {
    festivo = "stop";
  } else if (total > "0100" && total < "0107") {
    festivo = "reyes";
  } else if (total > "0200" && total < "0215") {
    festivo = "sanValentin";
  } 
  
  
  
  else if (total > "1200" && total < "1228") {
    festivo = "navidad";
  } else if (total === "1228") {
    festivo = "inocente";
  } else if (total > "1228") {
    festivo = "anoNuevo";
  }
  switch (festivo) {
    case "stop":
      document.getElementById("stop").style = "display:none";
      document.getElementById("cssArchivo").href = "";
      document.getElementById("adorno").src = "";
      document.getElementById("anio").innerHTML = "";
      document.getElementById("feliz").innerHTML = "";
      break;
    case "reyes":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleReyes.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/reyes.gif";
      document.getElementById("stop").style = "display:block";
      break;
      case "sanValentin":
        document.getElementById("cssArchivo").href =
          "/src/assets/style/css/styles/styleSanValentin.css";
        document.getElementById("adorno").src =
          "/src/assets/images/gifs/sanValentin.gif";
        document.getElementById("stop").style = "display:block";
        break;




    case "navidad":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleNavidad.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/noelbailando.gif";
      document.getElementById("stop").style = "display:block";
      var feliz = "FELIZ NAVIDAD";
      document.getElementById("feliz").innerHTML = feliz;
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
