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

function stilosFiesta(id) {
  console.log(id);
  // $archivo="/src/assets/style/css/styles/navidad.css"
  switch (id) {
    case "stop":
      document.getElementById("stop").style = "display:none";
      document.getElementById("cssArchivo").href = "";
      document.getElementById("adorno").src = "";
      break;
    case "navidad":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleNavidad.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/noelbailando.gif";
      document.getElementById("stop").style = "display:block";
      break;
    case "anoNuevo":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleAnoNuevo.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/brindis.gif";
      document.getElementById("stop").style = "display:block";
      break;
      case "reyes":
      document.getElementById("cssArchivo").href =
        "/src/assets/style/css/styles/styleReyes.css";
      document.getElementById("adorno").src =
        "/src/assets/images/gifs/reyes.gif";
      document.getElementById("stop").style = "display:block";
      break;
    default:
      break;
  }
}
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
  var dia  = objFecha.getDate();
  var mes  = 1 + objFecha.getMonth();
  var anio = objFecha.getFullYear();
var total = dia+""+mes
console.log(total);

  console.log(objFecha);
  console.log(dia);
  console.log(mes);
  console.log(anio);
switch (total) {
  case '2812':
    console.log('total');

    break;
    

  default:
    break;
}




}