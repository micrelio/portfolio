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
            <p>Diseñada con WordPress tema DIVI (adquirida licencia desarrollador), para la comunidad propia de jugadores <a target="blank" href="https://titaniumgamers.com/">Titanium Gamers</a> durante el confinamiento 2020.<br>
            Creada con:<br>
            <i class="fa fa-check-circle verde"></i> WORDPRESS tema DIVI.<br><br>
            <a class="visitar" target="blank" href="https://titaniumgamers.com/">Visitar
                <i class="fas fa-arrow-alt-circle-right"></i></a>
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
        <p>Tienda de donaciones PayPal creada durante el verano 2020 para la comunidad propia de jugadores <a target="blank" href="https://tiendasamp.titaniumgamers.com/">Titanium Gamers</a>.<br>
        Estilos usados:<br>
        <i class="fa fa-check-circle verde"></i> Bootstrap.<br>
        <i class="fa fa-check-circle verde"></i> Display Grid.<br>
        <i class="fa fa-check-circle verde"></i> Display Flex.<br>
        Lenguajes usados:<br>
            <i class="fa fa-check-circle verde"></i> HTML.<br>
            <i class="fa fa-check-circle verde"></i> CSS.<br>
            <i class="fa fa-check-circle verde"></i> Javascript.<br><br>
            <a class="visitar" target="blank" href="https://tiendasamp.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
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
            Diseñada como proyecto fin de curso ASIR durante el curso 2017-2018, a la comunidad de gamers <a target="blank" href="https://primeroscoc.titaniumgamers.com/">&#xf006;Primeros&#xf006;</a> jugadores de Clash of Clans.<br>
            Esta API sincroniza con el servidor y muestra los datos de los equipos en tiempo real.<br>
            Lenguajes usados:<br>
            <i class="fa fa-check-circle verde"></i> HTML.<br>
            <i class="fa fa-check-circle verde"></i> CSS.<br>
            <i class="fa fa-check-circle verde"></i> PHP.<br><br>
            <a  class="visitar" target="blank" href="https://primeroscoc.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
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
            Esta página sincroniza con la <a target="blank" href="https://developer.clashofclans.com/#/"> API Clash of Clans</a>, lee un archivo JSON, descarga los datos y muestra con imágenes imitando la estructura real del juego, con búsqueda y selección de equipos por medio de formulario.<br>
            Datos cedidos por <a target="blank" href="https://supercell.com/en/">Supercell</a>.<br> 
            Lenguajes usados:<br>
            <i class="fa fa-check-circle verde"></i> HTML.<br>
            <i class="fa fa-check-circle verde"></i> CSS.<br>
            <i class="fa fa-check-circle verde"></i> PHP.<br><br>
            <a class="visitar" target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
        </p>
    </div>
</section>
`;
  }
}
customElements.define("mi-webs", miWebs);
