class miBiografia extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section class="biografia">
        <h1>José Antonio López Baena</h1>
        <div class="fotoDni">        
          <img src="/src/assets/images/fotos/dniDibujo.jpg" alt="">
        </div>
        <div>
          <p>
            Mi vida laboral comenzó en el ámbito eléctrico y electrónico como instalador electricista, con el tiempo acabé centrándose en el mantenimiento de sistemas industriales y automatismos o PLC. Tras una lesión me vi obligado a reciclar mi rema laboral por lo que decidí empezar con el mundo de la informática del que poseía gran afición y conocimientos variados. Comencé a profesionalizarme en este sector.
            El primer paso fue cursar el grado superior A.S.I.R. (administración de sistemas informáticos en red) en la academia Tobalcaide de Quart de Poblet, en ella estudiamos tanto sistemas informáticos como inicio a la programación, al parecer no reforzó mi curriculum lo suficiente como para entrar a esta rama laboral ya que todas las ofertas a las que accedía requerían experiencia en el sector.
            El segundo paso fue comenzar un Bootcamp de programación en las instalaciones de Greekshubs situada junto al muelle del Grao de Valencia, en junio de 2020, tras esto nos hemos visto inmersos en el problema de la pandemia causada por el famoso Coronavirus lo que me imposibilita mucho más la incorporación laboral.
            Durante este tiempo he intentado ponerme a la altura de las competencias laborales necesarias para unirme a la informática y sobre todo a la programación a la vez que trabajaba.
            El primer paso fue aprender a manejar y familiarizarme con los servidores y host web, lo primero fue convertir VPS de OVH en servidor y subir páginas que ya tenía creadas, también he adquirido una licencia como desarrollador ilimitada de WordPress:
            El tema DIVI junto al constructor DIVI BUILDER.
            Empecé a crear páginas de muestra en todos los formatos conocidos para poder mostrar mi destreza y empecé a usar Git para dar muestra de ello.
            La primera página creada fue como proyecto de fin de grado superior A.S.I.R. para un equipo de juegos online, fue desarrollada con HTML, CSS y PHP, el uso del PHP fue elegido por mis conocimientos en C++ por lo que fue más fácil adaptarme este lenguaje en ese momento.
            Esta dispone de conexión con el servidor del juego y muestra equipos y guerras en tiempo real, esta conexión se crea con la API de Clash o Clans que cede el acceso a la lectura de una hoja JSON la que es adaptada y maquetada imitando al juego.
          </p>
        </div>
    </section>
     `;
  }
}
customElements.define("mi-biografia", miBiografia);
