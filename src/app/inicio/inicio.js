class miInicio extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section class="inicio">
        <h1>Presentación</h1>
        <div>
          <p>
          Bienvenido a mi página web de presentación o portfolio, en ella mostraré mis competencias y aficiones frente al mundo laboral adquiridas a lo largo de la vida, una de las funciones principales es mostrar mi currículum.
          Como se puede observar esta web es SPA (simple page Application), está creada por componentes por lo que no tiene tiempo de carga a la hora de navegar entre sus páginas. su estructura es idéntica a la de Angular, pero su desarrollo es vanilla (totalmente escrita a mano) sin plugin para su funcionamiento.
          Los estilos están creados en SASS, estructurada con técnicas novedosas como display GRID y FLEX, Cada hoja de estilo es exclusiva para cada componente para facilitar su edición.
          La navegación se ha tratado de hacer intuitiva para el usuario donde puede distinguir entre las distintas secciones sin ninguna dificultad.
          </p>          
          <ul>
            <li><p><a href="#" onclick="navegar('biografia');" class="enlace"><strong>Biografía:</strong></a> Lugar donde describiré mi vida laboral y los caminos seguidos hasta el día de hoy.</p></li>
            <li><p><a href="#" onclick="navegar('webs');" class="enlace"><strong>Webs:</strong></a> Muestra los distintos tipos de páginas webs en diferentes tipos de programación en las que mostraré mis conocimientos en diferentes idiomas o frameworks.</p></li>
            <li><p><a href="#" onclick="navegar('galeria');" class="enlace"><strong>Galería:</strong></a> Para la creación de webs y campañas en redes, tuve la necesidad de iniciarme en Photoshop, este apartado mostrará algunas de las imágenes editadas para estos trabajos.</p></li>
            <li><p><a href="#" onclick="navegar('curriculum');" class="enlace"><strong>Currículum:</strong></a> En el puedes encontrar tanto mi experiencia profesional y académica como verificar las titulaciones adquiridas.</p></li>
            <li><p><a href="#" onclick="navegar('contacto');" class="enlace"><strong>Contacto:</strong></a> Formulario de contacto.</p></li>
          </ul>



                       
      
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
