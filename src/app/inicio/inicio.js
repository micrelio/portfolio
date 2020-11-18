class miInicio extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section class="primera">
        <h1>Presentación</h1>
        <div>
            <p>
                Bienvenido a mi página web de presentación o portfolio, en ella intentaré mostrar mis competencias y aficiones frente al mundo laboral adquiridas a lo largo de la vida, en ella se puede encontrar mi curriculum en el detallada tanto mi formación académica con titulación correspondiente como mi experiencia laboral.
                Esta página está creada en vainilla, sin ningún tipo de plugin o complemento para su funcionamiento, es una pagina SPA (simple page Application), sin tiempo de carga, pero con dificultad para su posicionamiento, sus estilos creados en SASS junto a display GRID y display FLEX. En ella intentaré mostrar todo lo aprendido a lo largo de mi vida sobre la programación. Podría estar creada en Angular tal y como la comencé, más rápido y fácil, pero decidí que esta era la mejor forma de mostrar mi capacitación como programador en esta época tan difícil, ya que las ofertas de empleo interesadas me pedían una muestra de capacitación para el teletrabajo.
                Esta WEB además de mi pericia en la programación mostrará mi experiencia o afición a otras ramas informáticas como la edición de imágenes y/o videos que me ha sido necesario adquirir para poder llevar a cabo mis proyectos.
            </p>
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
