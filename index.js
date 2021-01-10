const $content = document.querySelector("#content");

function getContent(fragmentId) {
  let partials = {
    inicio: "<mi-inicio></mi-inicio>",
    biografia: "<mi-biografia></mi-biografia>",
    webs: "<mi-webs></mi-webs>",
    galeria: "<mi-galeria><mi-galeria>",
    curriculum: "<mi-curriculum></mi-curriculum>",
    contacto: "<mi-contacto></mi-contacto>"
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
