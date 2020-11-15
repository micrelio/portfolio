class miPoliticadecookies extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
<section class="primera">
    <h1> Política de Cookies</h1>
    <div>
        <p>
            En cumplimiento con el artículo 22 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la
            información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo
            y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de
            diciembre, de Protección de Datos y garantía de los derechos digitales (LOPDGDD), Jose Antonio Lopez Baena pone
            a disposición de los usuarios la Política de recogida y tratamiento de cookies del sitio Web.
        </p>
        <h2>
            Qué son las Cookies
        </h2>
        <p>
            Una cookie es un fichero que se descarga en tu ordenador al entrar a determinadas páginas web. Las cookies
            permiten a una página web, entre otras cosas, almacenar y recuperar información sobre tus hábitos de navegación
            y —dependiendo de la información que contengan y de la forma en que utilices tu equipo— pueden utilizarse para
            identificarte.
        </p>
        <h2>
            Cookies utilizadas en el sitio Web
        </h2>
        <p>
            A continuación se clasifican las cookies utilizadas por el sitio Web https://titaniumgamers.com:
        </p>
        <h4>
            Según la entidad que las gestiona
        </h4>
        Cookies propias: Son aquellas enviadas y gestionadas directamente por Jose Antonio Lopez Baena.
        <h4>
            Según su finalidad
        </h4>
        <p>
            Cookies técnicas: Son aquellas que permiten a los usuarios registrados navegar a través del sitio Web, del área
            restringida y a utilizar sus diferentes funciones, como por ejemplo, el sistema de comentarios o el buscador.
            Cookies de personalización: Son aquellas que permiten a los usuarios acceder al Servicio con algunas
            características de carácter general predefinidas en función de una serie de criterios establecidos por el
            usuario como, por ejemplo, el idioma o el tipo de navegador a través del cual se conecta a este sitio Web.
            Cookies sociales: Son establecidas por las plataformas de redes sociales para permitir a los usuarios compartir
            contenido con sus amigos y redes.
        </p>
        <h4>
            Según su duración
        </h4>
        <p>
            Cookies de sesión: Son aquellas diseñadas para recabar y almacenar datos mientras el usuario accede al sitio
            Web.
            Cookies persistentes: Son aquellas en las que los datos siguen almacenados en el terminal del usuario y pueden
            ser accedidos y tratados durante un período definido por el responsable de la cookie.
        </p>
        <h2>
            Listado de cookies utilizadas
        </h2>
        <p>
            Este sitio Web puede instalar las siguientes cookies:
        </p>
        <h4>
            Cookies técnicas
        </h4>
        <p>
            hasConsent: Cookie técnica que almacena el consentimiento del usuario. Es persistente y tiene una duración de 1
            año.
        </p>
        <h4>
            Cookies sociales
        </h4>
        <p>
            El sitio Web incluye otras funcionalidades proporcionadas por servicios de terceros y redes sociales para
            mejorar la experiencia de los visitantes. Puedes compartir el contenido en sus redes sociales como «Facebook»,
            «Twitter», «Instagram», «Vimeo» o «YouTube» con los botones incluidos a tal efecto o con las herramientas para
            compartir propias de las redes sociales. Como resultado, estos servicios pueden instalar cookies y utilizarlas
            para rastrear tu actividad online. No tenemos control directo sobre la información recopilada por estas cookies.
        </p>
        <h2>
            Eliminación de cookies
        </h2>
        <p>
            Puedes aceptar, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las
            opciones del navegador, pero parte del sitio no funcionará correctamente o su calidad puede verse afectada.
        </p>
        <p>
            En los siguientes enlaces encontrarás instrucciones para habilitar o deshabilitar las cookies en los navegadores
            más comunes.
        </p>
        <p>
            Firefox http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
            Google Chrome https://support.google.com/chrome/answer/95647?hl=es
            Internet Explorer
            https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie="ie-10"
            Microsoft Edge https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy
            Safari http://support.apple.com/kb/HT1677?viewlocale=es_ES
        </p>
        <h2>
            Tratamiento de Datos Personales
        </h2>
        <p>
            Jose Antonio Lopez Baena es el Responsable del tratamiento de los datos personales del usuario. Puedes consultar
            toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de Política
            de Privacidad.
        </p>
        <h2>
            Contacto
        </h2>
        <p>
            En caso de que tengas cualquier duda acerca de esta Política de Cookies o quieras realizar cualquier comentario
            sobre este sitio Web, puedes enviar un mensaje de correo electrónico a la dirección microa4@gmail.com.
        </p>
    </div>
</section>
    `;
    
    }
  }
  customElements.define("mi-politicadecookies", miPoliticadecookies);