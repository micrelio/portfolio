class miCurriculum extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
<section>

  <div>
    <h>José Antonio López Baena</h>
    <p>Nacido el 27 de julio de 1982 en Valencia (España).<p>
    <p>Quart dePoblet 46930 (Valencia).<p>
    <p>Email:microa4@gmail.com<p>
  </div>

  <div>
    <h>Formación académica</h>

    <p>2019
    BootCamp fullstack developer, en Greekshubs Valencia (Valencia).</p>

    <p>2018
    Grado superior ASIR (administración de sistemas informáticos en red) academia Tobalcaide, Quart de Poblet (Valencia).</p>

    <p>2013-2017
    Curso de inglés, instituto Rodrigo Botet, instituto Manises (Valencia).</p>

    <p>2008 
    Grado superior de Control y regulación de sistemas autocontrolados, instituto Salvador Gadea, Aldaya (Valencia).</p>

    <p>2002 
    Curso de trabajos en alta tensión en COVER, Manises (Valencia).</p>

    <p>2000 
    Grado medio: Electricidad en Aldaya (Valencia).</p>

    <p>1997
    FP 1electrónica, instituto Gonzalo Anaya, Xirivella (Valencia).</p>
  </div>
  
  <div>
    <h>Experiencia laboral</h>
    <p>09-2018
    Yoigo: Tele operador como atención al cliente.
    </p>

    <p>03-2018/06-2018
    Quafis: Practicas grado superior ASIR, tareas como maquetación con WordPress DIVI, servicio técnico, montaje y puesta a punto de PC, servicio técnico online con TeamViewer.
    </p>

    <p>12-2015/09-2016 
    Frusa Coca Cola: Técnico de sistemas industriales.
    https://www.alimarket.es/alimentacion/empresa/209431
    </p>

    <p>01-2014/11-2015
    Trolli: Técnico de sistemas industriales, responsable de turno.
    https://www.trolli.es/
    </p>

    <p>06-2013/09-2013
    Tour Electric: Revisión y mejoras en plantas fotovoltaicas, trabajos en inversores y centros de transformación en Inglaterra.
    </p>

    <p>01-2010/01-2013
    Grupo Siro: Técnico de sistemas industriales.
    https://www.cerealtosirofoods.com/es/
    </p>

    <p>09-2008/11-2009
    Dafsa: Técnico de sistemas industriales, responsable de turno.
    www.dafsa.es
    </p>

    <p>06-2006/08-2008
    Diselcom: Montaje de cuadros electrónicos en época de estudios.
    http://www.diselcom.com/
    </p>

    <p>04-2003/09-2005
    Martínez Loriente: Ayudante técnico de sistemas.
    http://www.delisano.es/es/
    </p>

    <p>11-2002/03-2003
    Electrovalencia: Instalaciones eléctricas.
    </p>

    <p>03-2002/9-2002
    Cover: Mantenimiento en centros de transformación y subestaciones industriales de alta y media tensión.
    https://www.coversa.com/
    </p>

    <p>09-2000/01-2002
    Elecbel: Montaje de instalaciones eléctricas en cámaras frigoríficas.
    http://www.elecbel.com/
    </p>
  </div>
  
  <div>
    <h>Datos de interés:</h>
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
customElements.define('mi-curriculum', miCurriculum);