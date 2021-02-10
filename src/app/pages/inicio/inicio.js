class miInicio extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <style>
  @import "/src/app/pages/inicio/inicio.css";
</style>
    <section class="inicio">
    <div class="separador5">
    </div>
        <h1>Desarrollador</h1>
        <h1>Micro</h1>
        <div>
          <p>
          Bienvenido a mi página web de presentación o portfolio, en ella mostraré mis competencias y aficiones frente al mundo laboral adquiridas a lo largo de la vida, una de las funciones principales es mostrar mi currículum.
          Como se puede observar esta web es SPA (simple page Application), está creada por componentes por lo que no tiene tiempo de carga a la hora de navegar entre sus páginas. su estructura es idéntica a la de Angular, pero su desarrollo es vanilla (totalmente escrita a mano) sin plugin para su funcionamiento.
          Los estilos están creados en SASS, estructurada con técnicas novedosas como display GRID y FLEX, Cada hoja de estilo es independiente y distribuida por componente.
          La navegación se ha tratado de hacer intuitiva para el usuario donde puede distinguir entre las distintas secciones sin ninguna dificultad.
          </p>          
          <ul>
            <li><p><a class="enlace" href="#biografia"><strong>Biografía:</strong></a> Lugar donde describiré mi vida laboral y los caminos seguidos hasta el día de hoy.</p></li>
            <li><p> <a class="enlace" href="#webs"><strong>Webs:</strong></a> Muestra los distintos tipos de páginas webs en diferentes tipos de programación en las que mostraré mis conocimientos en diferentes idiomas o frameworks.</p></li>
            <li><p><a class="enlace" href="#galeria"><strong>Galería:</strong></a> Para la creación de webs y campañas en redes, tuve la necesidad de iniciarme en Photoshop, este apartado mostrará algunas de las imágenes editadas para estos trabajos.</p></li>
            <li><p><a class="enlace" href="#curriculum"><strong>Currículum:</strong></a> En el puedes encontrar tanto mi experiencia profesional y académica como verificar las titulaciones adquiridas.</p></li>
            <li><p><a class="enlace" href="#contacto"><strong>Contacto:</strong></a> Formulario de contacto.</p></li>
          </ul>
       </div>
       <div class="separador5">
    </div>
    </section>
  `;
  }
}
customElements.define("mi-inicio", miInicio);
// boton ir arriba
$(document).ready(function () {
  $(".arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".arriba").slideDown(300);
    } else {
      $(".arriba").slideUp(300);
    }
  });
});
