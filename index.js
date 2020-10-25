const $content = document.querySelector("#content");

function getContent(fragmentId) {
  let partials = {
    home: "<mi-galeria></mi-galeria>",
    about: "This is the about page.",
    contact: "This is the contact page."
  };

  return partials[fragmentId];
}

function setActiveLink(fragmentId) {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
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
    location.hash = "#home";
  }

  const fragmentId = location.hash.replace(/#/g, "");

  $content.innerText = getContent(fragmentId);

  setActiveLink(fragmentId);
}

navigate();

window.addEventListener("hashchange", navigate);
