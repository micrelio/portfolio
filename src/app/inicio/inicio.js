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
            <br>
          Bienvenido a mi página web de presentación o portfolio, en ella intentaré mostrar mis competencias y aficiones frente al mundo laboral adquiridas a lo largo de la vida.
          Mi vida laboral comenzó en el ámbito eléctrico y electrónico centrándose en el mantenimiento de sistemas industriales y automatismos o PLC. Tras una lesión me vi obligado a reciclar mi rema laboral por lo que decidí empezar con el mundo de la informática del que poseía gran afición y conocimientos variados. Comencé a profesionalizarme en este sector.
          El primer paso fue cursar el grado superior A.S.I.R. (administración de sistemas informáticos en red) en la academia Tobalcaide de Quart de Poblet, en ella estudiamos tanto sistemas informáticos como inicio a la programación, al parecer no reforzó mi curriculum lo suficiente como para entrar a esta rama laboral ya que todas las ofertas a las que accedía requerían experiencia en el sector.
          El segundo paso fue comenzar un Bootcamp de programación en las instalaciones de Greekshubs situada junto al muelle del Grao de Valencia, en junio de 2020, tras esto nos hemos visto inmersos en el problema de la pandemia causada por el famoso Coronavirus lo que me imposibilita mucho más la incorporación laboral.
          Durante este tiempo he intentado ponerme a la altura de las competencias laborales necesarias para unirme a la informática y sobre todo a la programación a la vez que trabajaba.
          El primer paso fue aprender a manejar y familiarizarme con los servidores y host web, lo primero fue convertir VPS de OVH en servidor y subir paginas que ya tenía creadas, también he adquirido una licencia como desarrollador ilimitada de WordPress:
          El tema DIVI junto al constructor DIVI BUILDER.
          Empecé a crear paginas de muestra en todos los formatos conocidos para poder mostrar mi destreza y empecé a usar Git para dar muestra de ello.
          La primera página creada fue como proyecto de fin de grado superior A.S.I.R. para un equipo de juegos online, fue desarrollada con HTML, CSS y PHP, el uso del PHP fue elegido por mis conocimientos en C++ por lo que fue más fácil adaptarme este lenguaje en ese momento.
          Esta dispone de conexión con el servidor del juego y muestra equipos y guerras en tiempo real, esta conexión se crea con la API de Clash o Clans que cede el acceso a la lectura de una hoja JSON la que es adaptada y maquetada imitando al juego.
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
