class miCurriculum extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<div class="descripcion">
    <h1>Datos personales</h1>
</div>
<section class="datos">
    <div class="datosPersonales">
        <div class="foto">
            <img id="" class="dni" src="../../assets/images/fotos/dni.jpg">
        </div>
        <div class="direccion">
            <h>José Antonio López Baena</h>
            <p>
                Nacido el 27 de julio de 1982 en Valencia (España).
            </p>
            <p>
                Quart dePoblet 46930 (Valencia).
            </p>
            <p>
                653 25 19 83
            </p>
            <p>
                microa4@gmail.com
            </p>
        </div>
    </div>
</section>
<div class="descripcion">
    <h1>Formación académica</h1>
</div>
<section class="datos">
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://geekshubs.com/"target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/GeeksHubs.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2019</p>
            <p>BootCamp fullstack developer, en <a href="https://geekshubs.com/" target="_blank">GeeksHubs</a> Valencia (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="../../assets/images/titulos/GreeksHubs.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.tobalcaide.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/tobalcaide.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2018</p>
            <p>Grado superior ASIR (administración de sistemas informáticos en red) <a href="https://www.tobalcaide.com/" target="_blank"> Academia Tobalcaide </a>, Quart de Poblet (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="../../assets/images/titulos/ASIR.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/rodrigoBotet.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2013-2017</p>
            <p>Curso de inglés: <a href="http://mestreacasa.gva.es/web/iesrodrigobotet" target="_blank">IES Rodrigo Botet</a>, instituto Manises (Valencia).</p>
        </div>  
        <div class="titulo">
            <a href="../../assets/images/titulos/ingles.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/salvadorGadea.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2008</p>
            <p>Grado superior de Control y regulación de sistemas autocontrolados: <a href="http://iessalvadorgadea.edu.gva.es/web/" target="_blank"> IES Salvador Gadea</a>, Aldaya (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="../../assets/images/titulos/automatismos.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.coversa.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/cover.jpg"></a> 
        </div>
        <div class="descripcion">
            <p>2002</p>
            <p> Curso de trabajos en alta tensión en <a href="https://www.coversa.com/" target="_blank"> COVER </a>, Manises (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="../../assets/images/titulos/Cover.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://institutofaitanar.edu.gva.es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/faitanar.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2000</p>
            <p> Grado medio Electricidad: <a href="http://institutofaitanar.edu.gva.es/" target="_blank"> IES Faitanar </a>, Quart de Poblet (Valencia).</p>
        </div>
        <div class="titulo">
            <a href="../../assets/images/titulos/electricidad.jpg" target="_blank"><img alt="" src="../../assets/images/icons/titulo.png"></a>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://web.iesgonzaloanaya.es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/gonzaloAnaya.jpg"></a>
        </div>
        <div class="descripcion">
            <p>1997</p>
            <p>FP Elelectrónica: <a href="https://web.iesgonzaloanaya.es/" target="_blank">IES Gonzalo Anaya </a>, Xirivella (Valencia).</p>
        </div>
    </div>
</section>
<div class="descripcion">
    <h1>Experiencia laboral</h1>
</div>
<section class="datos">
    <div class="experiencia">
        <div class="logotipo">    
            <a href="https://www.hostingmicro.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/yoigo.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2020 <a href="https://www.hostingmicro.com/" target="_blank">HostingMicro.com</a></p>
            <p>  Creación de servidor para WordPress en VPS, adquisición de licencia DIVI comienzo en creación y alquiler de hosting de forma privada.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.igre.es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/IGRE.png"></a>
        </div>
        <div class="descripcion">
            <p>2019 <a href="https://www.igre.es/" target="_blank">IGRE</a></p>
            <p>Community manager, creación de cartelería, publicidad, creación de eventos, estudio y desarrollo de propuestas para campaña medio ambiente y energías renovables 2019.
            Candidatura propuesta como eurodiputado.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href=" https://www.yoigo.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/yoigo.jpg"></a>
        </div>                                                                                         
        <div class="descripcion">
            <p>2018 <a href=" https://www.yoigo.com/" target="_blank">Yoigo</a></p>
            <p>Teleoperador como atención al cliente.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="../../assets/images/logoEmpresa/quafis.jpg">
        </div>
        <div class="descripcion">
            <p>2018 Quafis</p>
            <p>Practicas grado superior ASIR, tareas como maquetación con WordPress DIVI, servicio técnico, montaje y puesta a punto de PC, servicio técnico online con TeamViewer.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.alimarket.es/alimentacion/empresa/209431" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/frusa.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2016 <a href="https://www.alimarket.es/alimentacion/empresa/209431" target="_blank">Frusa Coca Cola</a></p>
            <p>Técnico de sistemas industriales.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.trolli.es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/trolli.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2015 <a href="https://www.trolli.es/" target="_blank">Trolli</a></p>
            <p>Técnico de sistemas industriales, responsable de turno.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://power-electronics.com/es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/power.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2013 <a href="https://power-electronics.com/es/" target="_blank">Tour Electric & Power Electronics</a></p>
            <p>Revisión y mejoras en plantas fotovoltaicas, trabajos en inversores y centros de transformación en Inglaterra.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="https://www.cerealtosirofoods.com/es/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/grupoSiro.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2013 <a href="https://www.cerealtosirofoods.com/es/" target="_blank">Grupo Siro</a></p>
            <p>Técnico de sistemas industriales.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="../../assets/images/logoEmpresa/dafsa.jpg">
        </div>
        <div class="descripcion">
            <p>2009 Dafsa</p>
            <p>Técnico de sistemas industriales, responsable de turno.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href="http://www.diselcom.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/diselcom.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2008 <a href="http://www.diselcom.com/" target="_blank">Diselcom</a></p>
            <p>Montaje de cuadros electrónicos en época de estudios.</p>
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="../../assets/images/logoEmpresa/martinezLoriente.jpg">
        </div>
        <div class="descripcion">
            <p>2005 Martínez Loriente</p>
            <p>Ayudante técnico de sistemas.
        </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <a href=" https://www.coversa.com/" target="_blank"><img id="" class="corporativo" src="../../assets/images/logoEmpresa/cover.jpg"></a>
        </div>
        <div class="descripcion">
            <p>2002 <a href=" https://www.coversa.com/" target="_blank">Cover</a></p>
            <p>Mantenimiento en centros de transformación y subestaciones industriales de alta y media tensión.</p>
         </div>
    </div>
    <div class="experiencia">
        <div class="logotipo">
            <img id="" class="corporativo" src="../../assets/images/logoEmpresa/electricidad.jpg">
        </div>
        <div class="descripcion">
            <p>Tabajos como electricista</p>
            <p>Instalador electricista en diversas empresas y de forma privada.</p>
         </div>
    </div>
 </section>
 <div class="descripcion">
    <h1>Datos de interés</h1>
</div>
<section class="datos">
    <div  class="interes">
	    <p>Facilidad en asimilación y manejo de programas informáticos.</p>
        <p>Diseño de páginas web.</p>
        <p>Disponibilidad geográfica total e inmediata.</p>
        <p>Incorporación inmediata.</p>
        <p>Permiso de conducción.</p>
        <p>Experiencia en reparación de múltiples componentes electrónicos.</p>
    </div>
</section>
<button onclick="window.print()">Print this page</button>
                `;
  }
}
customElements.define("mi-curriculum", miCurriculum);
function mostrarTitulo(titulo) {
  switch (titulo) {
    case "electricidad":
      '<a href="mipagina.html" target="_blank">Abre el enlace en una nueva ventana</a>';
      break;
    case "automatismos":
      //<img src="../../assets/images/banners/rocas.jpg"></img>
      break;
    default:
      break;
  }
}
