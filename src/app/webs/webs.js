class miWebs extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section class="web">
<h1>Diseños web</h1>
<div class="separador3">
    </div>
    <div class="titaniumGamers">
         <div class="titulo">
            <a target="blank" href=" https://titaniumgamers.com/">
                <h1>Comunidad </h1><h1>Titanium Gamers</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Diseñada con WordPress tema DIVI (adquirida licencia ilimitada de desarrollador), para la comunidad propia de jugadores <a target="blank" href="https://titaniumgamers.com/">Titanium Gamers</a> durante el confinamiento 2020.<br>
                Creada con:<br>
                <i class="fa fa-check-circle verde"></i> WordPress tema DIVI.
            </p>
        </div>
        <div class="visitar">
            <p>
                <a class="visitar" target="blank" href="https://titaniumgamers.com/">Visitar
                <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="tiendaTitanium">
         <div class="titulo">
            <a target="blank" href=" https://tiendasamp.titaniumgamers.com/">
            <h1>Tienda</h1>
            <h1>Titanium Gamers</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>Tienda de donaciones PayPal creada durante el verano 2020 para la comunidad propia de jugadores <a target="blank" href="https://tiendasamp.titaniumgamers.com/">Titanium Gamers</a>.<br>
                Estilos:<br>
                <i class="fa fa-check-circle verde"></i> Bootstrap.<br>
                <i class="fa fa-check-circle verde"></i> Display Grid.<br>
                <i class="fa fa-check-circle verde"></i> Display Flex.<br>
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> Javascript.
            </p>
        </div>
        <div class="visitar">
            <p>
                <a class="visitar" target="blank" href="https://tiendasamp.titaniumgamers.com/">Visitar
                <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="primeroscoc">
         <div class="titulo">
            <a target="blank" href="https://primeroscoc.titaniumgamers.com/">
            <h1>Primeros</h1>
            <h1>Clash of Clans</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Diseñada como proyecto fin de curso ASIR durante el curso 2017-2018, a la comunidad de gamers <a target="blank" href="https://primeroscoc.titaniumgamers.com/">&#xf006;Primeros&#xf006;</a> jugadores de Clash of Clans.<br>
                Esta API sincroniza con el servidor y muestra los datos de los equipos en tiempo real.<br>
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> PHP.
            </p>
        </div>
        <div class="visitar">
            <p>
            <a class="visitar" target="blank" href="https://primeroscoc.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </div>
    <div class="separador5">
    </div>
    <div class="guerrasOnline">
        <div class="titulo">
            <a target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">
                <h1>Guerras on Line</h1>
                <h1>Clash of Clans</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Esta página sincroniza con la <a target="blank" href="https://developer.clashofclans.com/#/"> API Clash of Clans</a>, lee un archivo JSON, descarga los datos y muestra con imágenes imitando la estructura real del juego, con búsqueda y selección de equipos por medio de formulario.<br>
                Datos cedidos por <a target="blank" href="https://supercell.com/en/">Supercell</a>.<br> 
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> PHP.
            </p>
        </div>
        <div class="visitar">
            <p>
            <a class="visitar" target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </div>
</section>
`;
  }
}

customElements.define("mi-webs", miWebs);
