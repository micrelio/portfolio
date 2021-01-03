class miCaca extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      
    <div class="filasFiesta">
      <p><strong>Festivos</strong></p>
      <hr>
      <div class= "selecFiesta">
        <img class="festivos" id="festivos" onclick="fecha('reyes');" src="/src/assets/images/icons/estrellaNavidad.png"/>
        <img class="festivos" id="festivos" onclick="fecha('sanValentin');" src="/src/assets/images/icons/corazon.png"/>
        <img class="festivos" id="festivos" onclick="fecha('pascua');" src="/src/assets/images/icons/huevo.png"/> 
        <img class="festivos" id="festivos" onclick="fecha('halloween');" src="/src/assets/images/icons/calabaza.png"/>
        <img class="festivos" id="festivos" onclick="fecha('navidad');" src="/src/assets/images/icons/gorroSanta.png"/> 
      </div>
      <div class= "selecFiesta">
        <img class="festivos" id="festivos" onclick="fecha('inocente');" src="/src/assets/images/icons/inocente.png"/> 
        <img class="festivos" onclick="fecha('anoNuevo');" src="/src/assets/images/icons/champan.png"/> 
      </div>
    </div>
    <div class="filasColores">
      <p><strong>Colores</strong></p>
      <hr>
      <div class="cambioColor">
        <div class="selecColor">
          <p id="color" class="color blanco" onclick="color('blanco');"></p>
          <p id="color" class="color amarillo" onclick="color('amarillo');"></p>
          <p id="color" class="color oro" onclick="color('oro');"></p>
          <p id="color" class="color marron" onclick="color('marron');"></p>
          <p id="color" class="color naranja"  onclick="color('naranja');"></p>
        </div>
        <div class="selecColor">
          <p class="color rojo" onclick="color('rojo');"></p>
          <p id="color" class="color rosa" onclick="color('rosa');"></p>
          <p id="color" class="color morado" onclick="color('morado');"></p>
          <p id="color" class="color azul" onclick="color('azul');"></p>
          <p id="color" class="color verde" onclick="color('verde');"></p>
        </div>
        <div class="selecColor">
          <p id="color" class="color negro" onclick="color('negro');"></p>         
        </div>    
      </div>
    </div>
    <div class="selecModo">
      <p><strong>Modo</strong></p>
      <hr>
      <div class="mode">
        <p id="noche" class="noche bx bxs-moon" onclick="modoNoche('dia');"></p>
        <p id="dia" class="dia bx bxs-sun" onclick="modoNoche('noche');"></p>
      </div> 
    </div>
          `;
    // esto arranca automatico
  }
}
customElements.define("mi-caca", miCaca);
// modificar para routing
function navegar(id) {
  var render = id;
  switch (render) {
    case "botones":
      document.getElementById("componente").innerHTML =
        "<mi-estilo></mi-estilo>";
      break;
  }
}
