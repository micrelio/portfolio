const $content = document.querySelector("#componente");

function getContent(fragmentId) {
  console.log(fragmentId);
  let partials = {
    inicio: "<mi-inicio></mi-inicio>",
    biografia: "<mi-biografia></mi-biografia>",
    webs: "<mi-webs></mi-webs>",
    galeria: "<mi-galeria><mi-galeria>",
    curriculum: "<mi-curriculum></mi-curriculum>",
    contacto: "<mi-contacto></mi-contacto>",
    avisolegal: "<mi-avisolegal></mi-avisolegal>",
    politicadeprivacidad: "<mi-politicadeprivacidad></mi-politicadeprivacidad>",
    politicadecookies: "<mi-politicadecookies></mi-politicadecookies>",
    disenos: "<mi-disenos></mi-disenos>",
    hover: "<mi-hover></mi-hover>",
    efectos: "<mi-efectos></mi-efectos>",
    galeriaPruebas: "<mi-galeriapruebas></mi-galeriapruebas>",
    //  pruebas: window.location.href ="/src/app/prueba/sell-button.html"

    };
  return partials[fragmentId];
}

function setActiveLink(fragmentId) {
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    let linkRef = link.getAttribute("href").replace(/#/g, "");
    if (linkRef === fragmentId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function navigate() {
  if (!location.hash) {
    location.hash = "#inicio";
  }

  const fragmentId = location.hash.replace(/#/g, "");

  $content.innerHTML = getContent(fragmentId);

  setActiveLink(fragmentId);
}

navigate();

window.addEventListener("hashchange", navigate);
