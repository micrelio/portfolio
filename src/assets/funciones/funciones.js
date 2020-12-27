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
    default:
      break;
  }
}
