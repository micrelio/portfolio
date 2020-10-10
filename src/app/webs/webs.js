class miWebs extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section class="web">
    <div class="titanium">
        <div class="titulo">
            <a target="blank" href=" https://titaniumgamers.com/">
            <h1>Comunidad</h1>
            <h1>Titanium Gamers</h1>
            </a>
        </div>
        <div>
            <p>Creada con WordPress tema DIVI (adquirida licencia desarrollador), para la comunidad propia de jugadores Titanium Gamers durante el confinamiento 2020.<br>
            </p>
        </div>
    </div>
    <div class="tiendaTitanium">
        <div class="titulo">
            <a target="blank" href="https://tiendasamp.titaniumgamers.com/">
                <h1>Tienda</h1>
                <h1>Titanium Gamers</h1>
            </a>
        </div>
        <p>Creada con código por medio de una plantilla Bootstrap, para la comunidad de jugadores Titanium Gamers durante el confinamiernto 2020.<br>
        Lenguajes usados:<br>
        <i class="fa fa-check-circle verde"></i> HTML<br>
        <i class="fa fa-check-circle verde"></i> SCS<br>
        <i class="fa fa-check-circle verde"></i> JAVASCRIPT
        </p>
    </div>
    <div class="primeroscoc">
        <div class="titulo">
            <a target="blank" href="https://primeroscoc.titaniumgamers.com/">
                <h1>Primeros</h1>
                <h1>Clash of Clans</h1>
            </a>
        </div>
        <p>
        Diseñada como proyecto fin de curso ASIR durante el curso 2017-2018, a la comunidad de jugadores Primeros para el juego Clash of Clans.<br>
        API que sincroniza con el servidor y muestra los datos de los equipos en tiempo real<br>
        Lenguajes usados:<br>
        
        <i class="fa fa-check-circle verde"></i> HTML<br>
        <i class="fa fa-check-circle verde"></i> SCS<br>
        <i class="fa fa-check-circle verde"></i> PHP
        </p>
        </div>
    <div class="guerrasonline">
        <div class="titulo">
            <a target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">
                <h1>Guerras onLine</h1>
                <h1>Clash of Clans</h1>
            </a>
        </div>
        <p>
        Esta página sincroniza con la API Clash of Clans, lee una hoja JSON, descarga los datos y muestra con imágenes imitando la estructura real del juego, con búsqueda y selección de equipos por medio de formulario.<br>
        Cedida por Supercell.<br> 
        Lenguajes usados:<br>
        <i class="fa fa-check-circle verde"></i> HTML<br>
        <i class="fa fa-check-circle verde"></i> SCS<br>
        <i class="fa fa-check-circle verde"></i> PHP
        </p>
    </div>
</section>


         `;
  }
}
customElements.define("mi-webs", miWebs);
