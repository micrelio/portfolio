class miCurriculum extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    @import "/src/app/pages/curriculum/curriculum.css";
  </style>
    <section>
    <div class="separador5">
    </div>
    <div class="descripcion">
        <h1>Datos personales</h1>
    </div>
    <div class="separador3">
    </div>
    <section class="datos">
        <div class="datosPersonales">
            <div class="foto">
                <img id="" class="dni" src="/src/assets/images/fotos/dni.png">
        </div>
        <div class="direccion">
            <br>
                <h3><strong>José Antonio López Baena</strong></h3>
                <p>Nacido en julio de 1982 Valencia (España).</p>
                <p><a class="fa fa-map-marker" href="https://goo.gl/maps/9UUDsgCz7YnERqvD6" target="_blank"></a> <a href="https://goo.gl/maps/9UUDsgCz7YnERqvD6" target="_blank">Quart dePoblet 46930 (Valencia).</a></p>
                <p><a class="fa fa-phone" href="tel:+34653251983"></a> <a href="tel:+34653251983">653 25 19 83</a></p>
                <p><i class="fa fa-envelope"></i> info@microdeveloper.es</p>
            </div>
        </div>
    
</section>
<div class="separador5">
</div>
<div class="descripcion">
    <h1>Formación académica</h1>
</div>
<div class="separador3">
</div>
<section class="datos">
<div class="experiencia">
        <div class="logotipo">
            <a href="https://ocupacio.quartdepoblet.es/index.php/es/formacio"target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/typing.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2021</p><br>
            <p>Curso de mecanografía online nivel avanzado.  <a href="https://www.typing.com/" target="_blank">typing.com</a>.<br>
            <a href="https://www.typing.com/student/verify#147381855-106754366" target="_blank">Verificar</a>.</p>
        </div>
        <div class="titulo">
             <a href="/src/assets/images/titulos/mecanografia.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a> 
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://ocupacio.quartdepoblet.es/index.php/es/formacio"target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/quart.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2020</p><br>
            <p>Cert. profesionalidad “Operaciones básicas montaje y mantenimiento de instalaciones de energías renovables” (540 h).  <a href="https://ocupacio.quartdepoblet.es/index.php/es/formacio"target="_blank">CED Quart de Poblet</a>.</p>
        </div>
        <div class="titulo">
        <!--     <a href="/src/assets/images/titulos/" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a> -->
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://geekshubs.com/"target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/GeeksHubs.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2019</p><br>
            <p>BootCamp fullstack developer, en <a href="https://geekshubs.com/" target="_blank">GeeksHubs</a> Valencia (Valencia).</p>
        </div>
        <div class="titulo">
                <a href="/src/assets/images/titulos/GreeksHubs.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.tobalcaide.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/tobalcaide.png"></a>
        </div>
        <div class="descripcion">
            <p class="año">2018</p><br>
            <p>Grado superior ASIR (administración de sistemas informáticos en red) <a href="https://www.tobalcaide.com/" target="_blank"> Academia Tobalcaide</a>, Quart de Poblet (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="/src/assets/images/titulos/ASIR.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/rodrigoBotet.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2013-2017</p><br>
            <p>Curso de inglés: <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank">IES Rodrigo Botet</a>, instituto Manises (Valencia).</p>
        </div>  
        <div class="titulo">
            <a href="/src/assets/images/titulos/ingles.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/salvadorGadea.jpg"></a>
        </div>
        <div class="descripcion">
            <p  class="año">2008</p><br>
            <p>Grado superior de Control y regulación de sistemas autocontrolados: <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"> IES Salvador Gadea</a>, Aldaya (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="/src/assets/images/titulos/automatismos.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.coversa.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/cover.jpg"></a> 
        </div>
        <div class="descripcion">
            <p class="año">2002</p><br>
            <p> Curso de trabajos en alta tensión en <a href="https://www.coversa.com/" target="_blank"> COVER</a>, Manises (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="/src/assets/images/titulos/Cover.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://institutofaitanar.edu.gva.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/faitanar.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2000</p><br>
            <p> Grado medio Electricidad: <a href="http://institutofaitanar.edu.gva.es/" target="_blank"> IES Faitanar</a>, Quart de Poblet (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="/src/assets/images/titulos/electricidad.jpg" target="_blank"><img alt="" src="/src/assets/images/icons/titulo2.png"></a>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://web.iesgonzaloanaya.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/gonzaloAnaya.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">1997</p><br>
            <p>FP Elelectrónica: <a href="https://web.iesgonzaloanaya.es/" target="_blank">IES Gonzalo Anaya</a>, Xirivella (Valencia).</p>
        </div>
    </div>
</section>
<div class="separador5">
</div>


<div class="descripcion">
    <h1>Experiencia laboral</h1>
</div>
<div class="separador3">
</div>
<section class="datos">
    <div class="experiencia">
        <div class="logotipo">    
            <a href="https://www.titaniumgamers.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/titaniumgamers.png"></a>
        </div>
        <div class="descripcion">
            <p class="año">2020 <a href="https://www.titaniumgamers.com/" target="_blank"><strong>Titanium Gamers</strong></a></p><br>
            <p>Creación de servidor web y servidor de juegos en VPS.<br>
                Adquisición de licencia DIVI de desarrollador.<br>
                Edición de sistemas en juegos.<br>
                Creación de hosting de forma privada.
            </p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.igre.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/IGRE.png"></a>
        </div>
        <div class="descripcion">
            <p class="año">2019 <a href="https://www.igre.es/" target="_blank"><strong>IGRE</strong></a></p><br>
            <p>Community manager, creación de cartelería, publicidad, creación de eventos, estudio y desarrollo de propuestas para campaña medio ambiente y energías renovables 2019.
            Candidatura propuesta como eurodiputado.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href=" https://www.yoigo.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/yoigo.png"></a>
        </div>                                                                                         
        <div class="descripcion">
            <p class="año">2018 <a href=" https://www.yoigo.com/" target="_blank"><strong>Yoigo</strong></a></p><br>
            <p>Teleoperador como atención al cliente.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="/src/assets/images/logoEmpresa/quafis.jpg">
        </div>
        <div class="descripcion">
            <p class="año">2018 <strong>Quafis</strong></p><br>
            <p>Practicas grado superior ASIR, tareas como maquetación con WordPress DIVI, servicio técnico, montaje y puesta a punto de PC, servicio técnico online con TeamViewer.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.alimarket.es/alimentacion/empresa/209431" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/frusa.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2016 <a href="https://www.alimarket.es/alimentacion/empresa/209431" target="_blank"><strong>Frusa Coca Cola</strong></a></p><br>
            <p>Oficial de 1º como técnico eléctrico.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.trolli.es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/trolli.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2015 <a href="https://www.trolli.es/" target="_blank"><strong>Trolli</strong></a></p><br>
            <p>Oficial de 1º como técnico de sistemas industriales, responsable de turno.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://power-electronics.com/es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/power.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2013 <a href="https://power-electronics.com/es/" target="_blank"><strong>Tour Electric&Power Electronics</strong></a></p><br>
            <p>Revisión y mejoras en plantas fotovoltaicas, trabajos en inversores y centros de transformación en Inglaterra.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.cerealtosirofoods.com/es/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/grupoSiro.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2013 <a href="https://www.cerealtosirofoods.com/es/" target="_blank"><strong>Grupo Siro</strong></a></p><br>
            <p>Técnico de sistemas industriales.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="/src/assets/images/logoEmpresa/dafsa.jpg">
        </div>
        <div class="descripcion">
            <p class="año">2009 <strong>Dafsa</strong></p><br>
            <p>Técnico de sistemas industriales.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.diselcom.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/diselcom.jpg"></a>
        </div>
        <div class="descripcion">
            <p class="año">2008 <a href="https://www.diselcom.com/" target="_blank"><strong>Diselcom</strong></a></p><br>
            <p>Montaje de cuadros electrónicos en época de estudios.</p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="/src/assets/images/logoEmpresa/martinezLoriente.jpg">
        </div>
        <div class="descripcion">
            <p class="año">2005 <strong>Martínez Loriente</strong></p><br>
            <p>Ayudante técnico de sistemas.
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href=" https://www.coversa.com/" target="_blank"><img id="" class="corporativo" src="/src/assets/images/logoEmpresa/cover.png"></a>
        </div>
        <div class="descripcion">
            <p class="año">2002 <a href=" https://www.coversa.com/" target="_blank"><strong>Cover</strong></a></p><br>
            <p>Mantenimiento en centros de transformación y subestaciones industriales de alta y media tensión.</p>
         </div>
    </div>
    <div class="separador5">
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="/src/assets/images/logoEmpresa/electricidad.jpg">
        </div>
        <div class="descripcion">
            <p class="año"><strong>Tabajos como electricista</strong></p><br>
            <p>Instalador electricista en diversas empresas y de forma privada.</p>
         </div>
    </div>
 </section>
 <div class="separador5">
</div>
 <div class="descripcion">
    <h1>Datos de interés</h1>
</div>
<div class="separador3">
</div>
<div class="datos">
    <div  class="interes">
	    <p>Facilidad en asimilación y manejo de programas informáticos.</p>
        <p>Diseño de páginas web.</p>
        <p>Disponibilidad geográfica total e inmediata.</p>
        <p>Incorporación inmediata.</p>
        <p>Permiso de conducción.</p>
        <p>Experiencia en reparación de múltiples componentes electrónicos.</p>
    </div>
    </div>
    <div class="separador5">
    </div>
</section>
<button onclick="window.print()">Print this page</button>
                `;
 // $(document).ready(function () {
    //   $("#titaniumGamers").hide(0);
    //   $("#tiendaTitanium").hide(0);
    //   $("#primeroscoc").hide(0);
    //   $("#guerrasOnline").hide(0);

    // $("#titaniumGamers").fadeIn(2000);


    // $(window).scroll(function () {
    //   var windowHeight = $(window).scrollTop();
    //   var titaniumGamers = $("#titaniumGamers").offset();
    //   titaniumGamers = titaniumGamers.top/2;
    //   var tiendaTitanium = $("#tiendaTitanium").offset();
    //   tiendaTitanium = tiendaTitanium.top/2;
    //   var primeroscoc = $("#primeroscoc").offset();
    //   primeroscoc = primeroscoc.top/2;
    //   var guerrasOnline = $("#guerrasOnline").offset();
    //   guerrasOnline = guerrasOnline.top/2;

      // if (windowHeight <= titaniumGamers) {
      //   $("#tiendaTitanium").fadeOut(2000);
      // } else {
      //   $("#tiendaTitanium").fadeIn(2000);
      // }
      // if (windowHeight <= titaniumGamers + tiendaTitanium) {
      //   $("#primeroscoc").fadeOut(2000);
      // } else {
      //   $("#primeroscoc").fadeIn(2000);
      // }
      // if (windowHeight <= titaniumGamers + tiendaTitanium + primeroscoc) {
      //   $("#guerrasOnline").fadeOut(2000);
      // } else {
      //   $("#guerrasOnline").fadeIn(2000);
      // }
    //    });
  // });
}
}
customElements.define("mi-curriculum", miCurriculum);
function mostrarTitulo(titulo) {
  switch (titulo) {
    case "electricidad":
      '<a href="mipagina.html" target="_blank">Abre el enlace en una nueva ventana</a>';
      break;
    case "automatismos":
      //<img src="/src/assets/images/banners/rocas.jpg"></img>
      break;
    default:
      break;
  }
}
