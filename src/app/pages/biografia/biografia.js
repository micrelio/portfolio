// import styles from '/src/assets/style/css/styles/componentes/biografia.css';
class miBiografia extends HTMLElement {
  constructor() {
    // this.attachShadow({mode: open});
    // this.shadowRoot.adoptedStyleSheets = [styles];
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    @import "/src/app/pages/biografia/biografia.css";
  </style>
    <section class="biografia" >
    <div class="separador5">
    </div>
    <h1> José Antonio López Baena (Micro)
    </h1>
    <div class="separador3">
    </div>
    <hr>
    <div class="contenido">
        <div class="historia">
            <p>
                Mi vida laboral comenzó en el ámbito eléctrico y electrónico como instalador electricista, con el
                tiempo acabé centrándose en el mantenimiento de sistemas industriales y automatismos o PLC. Tras una
                lesión me vi obligado a reciclar mi rema laboral por lo que decidí empezar con el mundo de la
                informática del que poseía gran afición y conocimientos variados. Comencé a profesionalizarme en
                este sector.
                El primer paso fue cursar el grado superior A.S.I.R. (administración de sistemas informáticos en
                red) en la academia Tobalcaide de Quart de Poblet, en ella estudiamos tanto sistemas informáticos
                como inicio a la programación, al parecer no reforzó mi curriculum lo suficiente como para entrar a
                esta rama laboral ya que todas las ofertas a las que accedía requerían experiencia en el sector.
                El segundo paso fue comenzar un Bootcamp de programación en las instalaciones de Greekshubs situada
                junto al muelle del Grao de Valencia, en junio de 2020, tras esto nos hemos visto inmersos en el
                problema de la pandemia causada por el famoso Coronavirus lo que me imposibilita mucho más la
                incorporación laboral.
                Durante este tiempo he intentado ponerme a la altura de las competencias laborales necesarias para
                unirme a la informática y sobre todo a la programación a la vez que trabajaba.
                El primer paso fue aprender a manejar y familiarizarme con los servidores y host web, lo primero fue
                convertir VPS de OVH en servidor y subir páginas que ya tenía creadas, también he adquirido una
                licencia como desarrollador ilimitada de WordPress:
                El tema DIVI junto al constructor DIVI BUILDER.
                Empecé a crear páginas de muestra en todos los formatos conocidos para poder mostrar mi destreza y
                empecé a usar Git para dar muestra de ello.
                La primera página creada fue como proyecto de fin de grado superior A.S.I.R. para un equipo de
                juegos online, fue desarrollada con HTML, CSS y PHP, el uso del PHP fue elegido por mis
                conocimientos en C++ por lo que fue más fácil adaptarme este lenguaje en ese momento.
                Esta dispone de conexión con el servidor del juego y muestra equipos y guerras en tiempo real, esta
                conexión se crea con la API de Clash o Clans que cede el acceso a la lectura de una hoja JSON la que
                es adaptada y maquetada imitando al juego.
            </p>
        </div>
        <div class="biografiaCurriculum">
            <h3><strong>José (Micro)</strong></h3>
            <img class="posado" src="/src/assets/images/fotos/posandoGafas.jpg" alt="">
          <div class="curriculumMini">  
            <div class="experienciaMini">
              <div class="logoEx">
                <a href="https://ocupacio.quartdepoblet.es/index.php/es/formacio" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/EscudoQuart.png"></a>
              </div>
            <div class="descripcion">
              <p>2020</p>
              <p>Cert. profesionalidad “Operaciones básicas montaje y mantenimiento de instalaciones de energías renovables” (540 h). <a href="https://ocupacio.quartdepoblet.es/index.php/es/formacio" target="_blank">CED Quart de Poblet</a>.</p>
            </div>
          </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="https://geekshubs.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/GeeksHubs.png"></a>
                </div>
                <div class="descripcion">
                    <p>2019</p><br>
                    <p>BootCamp fullstack developer, en <a href="https://geekshubs.com/" target="_blank">GeeksHubs</a> Valencia (Valencia).</p>
                </div>
            </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="https://www.tobalcaide.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/tobalcaide.png"></a>
                </div>
                <div class="descripcion">
                    <p>2018</p><br>
                    <p>Grado superior ASIR (administración de sistemas informáticos en red) <a href="https://www.tobalcaide.com/" target="_blank"> Academia Tobalcaide </a>, Quart de Poblet (Valencia).</p>
                </div>
                            </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/rodrigoBotet.png"></a>
                </div>
                <div class="descripcion">
                    <p>2013-2017</p><br>
                    <p>Curso de inglés: <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank">IES Rodrigo Botet</a>, instituto Manises (Valencia).</p>
                </div>
                            </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/salvadorGadea.png"></a>
                </div>
                <div class="descripcion">
                    <p>2008</p><br>
                    <p>Grado superior de Control y regulación de sistemas autocontrolados: <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"> IES Salvador Gadea</a>, Aldaya (Valencia).</p>
                </div>
                           </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="https://www.coversa.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/cover.png"></a>
                </div>
                <div class="descripcion">
                    <p>2002</p><br>
                    <p> Curso de trabajos en alta tensión en <a href="https://www.coversa.com/" target="_blank"> COVER </a>, Manises (Valencia).</p>
                </div>
                            </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="http://institutofaitanar.edu.gva.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/faitanar.png"></a>
                </div>
                <div class="descripcion">
                    <p>2000</p><br>
                    <p> Grado medio Electricidad: <a href="http://institutofaitanar.edu.gva.es/" target="_blank"> IES Faitanar </a>, Quart de Poblet (Valencia).</p>
                </div>
                            </div>
            <div class="experienciaMini">
                <div class="logoEx">
                    <a href="https://web.iesgonzaloanaya.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/gonzaloAnaya.jpg"></a>
                </div>
                <div class="descripcion">
                    <p>1997</p><br>
                    <p>FP Elelectrónica: <a href="https://web.iesgonzaloanaya.es/" target="_blank">IES Gonzalo Anaya </a>, Xirivella (Valencia).</p>
                </div>
            </div>

          <div class="datosGenerales">
            <div class="infoPersonal">
                <p><strong>Información personal</strong></p>
            </div>
            <div class="tituloNombre">
                <p><strong>Nombre de nacimiento</strong></p>
            </div>
            <div class="nombre">
                <p>José Antonio López Baena (Micro)</p>
            </div>
            <div class="tituloNacimiento">
                <p><strong>Nacimiento</strong></p>
            </div>
            <div class="nacimiento">
                <p>27 de julio de 1982 (38 años) Valencia, España</p>
            </div>
            <div class="tituloResidencia">
                <p><strong>Residencia</strong></p>
            </div>
            <div class="residencia">
                <p>Quart de Poblet</p>
            </div>
            <div class="tituloNacionalidad">
                <p><strong>Nacionalidad</strong></p>
            </div>
            <div class="nacionalidad">
                <p>Española</p>
            </div>
            <div class="tituloReligion">
                <p><strong>Religión</strong></p>
            </div>
            <div class="religion">
                <p>Sin intereses</p>
            </div>
            <div class="tituloPolitica">
                <p><strong>Partido político</strong></p>
            </div>
            <div class="politica">
                <p>IGRE (desde 2018)</p>
            </div>
            <div class="tituloAfiliaciones">
                <p><strong>Afiliaciones</strong></p>
            </div>
            <div class="afiliaciones">
                <p>Sin intereses</p>
            </div>

            <div class="infoProfesional">
                <p><strong>Información profesional</strong></p>
            </div>
            <div class="tituloOcupacion">
                <p><strong>Ocupación</strong></p>
            </div>
            <div class="ocupacion">
                <p>Programador y diseñador web, técnico informático, eléctrico, electrónico, automática industrial y energías renovables.</p>
            </div>
            <div class="tituloSalario">
                <p><strong>Salario</strong></p>
            </div>
            <div class="salario">
                <p>0 euros anuales</p>
            </div>
            <div class="tituloAñosActivo">
              <p><strong>Años activo</strong></p>
            </div>
            <div class="añosActivo">
                <p>desde 1992</p>
            </div>
            <div class="tituloEmpleador">
              <p><strong>Empleador</strong></p>
            </div>
            <div class="empleador">
                <p>-</p>
            </div>
            <div class="tituloFirma">
              <p><strong>Firma</strong></p>
            </div>
            <div class="firma">
                <p>-</p>
            </div>
            <div class="tituloWeb">
              <p><strong>Sitio web</strong></p>
            </div>
            <div class="sitioWeb">
                <p> <a class="visitar" target="blank" href="https://microdeveloper.es/">microdeveloper.es</p>
            </div>
        </div>
    <!--
Distinciones	
Premio Extraordinario de Fin de Carrera (2004)
Firma	Pablo Iglesias Turrión signature.svg
Web
Sitio web	
pabloiglesias.org
-->
        </div><!-- curriculum-->
    </div><!-- biografiaCurriculum-->
    </section>
<div class="separador5">
    </div>
        `;
  }
}
customElements.define("mi-biografia", miBiografia);
