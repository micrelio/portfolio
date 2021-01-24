class miPanelestilos extends HTMLElement {
    constructor() {
        //  puedes poner argumentos
        super();
        myFunction();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <style>
            @import "/src/app/components/panelEstilos/panelEstilos.css";
          </style>
            <div id="botonesEstilo" class="botonesEstilo">
        <div class="desplazable">
            <div class="reset">
                <p><strong>Reset estilos</strong></p>
                <hr>
                <div class="resetear">
                    <p id="reset" class="reset bx bx-reset" onclick="resetEstilos();"></p>
                </div>
            </div>
            <br>
            <div class="filasFiesta">
                <p><strong>Festivos</strong></p>
                <hr>
                <div class="selecFiesta">
                    <img class=" detenerFestivos festivos" id="festivos" onclick="fecha('stop');"
                        src="/src/assets/images/icons/stop2.png" />
                    <img class="festivos" id="festivos" onclick="fecha('reyes');"
                        src="/src/assets/images/icons/estrellaNavidad.png" />
                    <img class="festivos" id="festivos" onclick="fecha('sanValentin');"
                        src="/src/assets/images/icons/corazon.png" />
                    <img class="festivos" id="festivos" onclick="fecha('pascua');"
                        src="/src/assets/images/icons/huevo.png" />
                    <img class="festivos" id="festivos" onclick="fecha('halloween');"
                        src="/src/assets/images/icons/calabaza.png" />
                </div>
                <div class="selecFiesta">
                    <img class="festivos" id="festivos" onclick="fecha('navidad');"
                        src="/src/assets/images/icons/gorroSanta.png" />
                    <img class="festivos" id="festivos" onclick="fecha('inocente');"
                        src="/src/assets/images/icons/inocente.png" />
                    <img class="festivos" onclick="fecha('anoNuevo');" src="/src/assets/images/icons/champan.png" />
                </div>
            </div>
            <div class="fondoPantalla">
                <p><strong>fondos</strong></p>
                <hr>
                <div class="selecFondo">
                    <p class="color blanco" onclick="fondoPantalla('blanco');"></p>
                    <p class="color negro" onclick="fondoPantalla('negro');"></p>
                    <p class="color movimiento" onclick="fondoPantalla('movimiento');"></p>
                </div>
            </div>
            <div class="filasColores">
                <p><strong>Color general</strong></p>
                <hr>
                <div class="cambioColor">
                    <div class="selecColor">
                        <p class="color blanco" onclick="color('blanco');"></p>
                        <p class="color amarillo" onclick="color('amarillo');"></p>
                        <p class="color oro" onclick="color('oro');"></p>
                        <p class="color marron" onclick="color('marron');"></p>
                        <p class="color naranja" onclick="color('naranja');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color rojo" onclick="color('rojo');"></p>
                        <p class="color rosa" onclick="color('rosa');"></p>
                        <p class="color morado" onclick="color('morado');"></p>
                        <p class="color azul" onclick="color('azul');"></p>
                        <p class="color verde" onclick="color('verde');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color gris" onclick="color('gris');"></p>
                        <p id="color" class="color negro" onclick="color('negro');"></p>
                    </div>
                </div>
            </div>
            <br>
            <div class="filasColores">
                <p><strong>Color menú</strong></p>
                <hr>
                <div class="cambioColor">
                    <div class="selecColor">
                        <p class="color blanco" onclick="colorMenu('blanco');"></p>
                        <p class="color amarillo" onclick="colorMenu('amarillo');"></p>
                        <p class="color oro" onclick="colorMenu('oro');"></p>
                        <p class="color marron" onclick="colorMenu('marron');"></p>
                        <p class="color naranja" onclick="colorMenu('naranja');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color rojo" onclick="colorMenu('rojo');"></p>
                        <p class="color rosa" onclick="colorMenu('rosa');"></p>
                        <p class="color morado" onclick="colorMenu('morado');"></p>
                        <p class="color azul" onclick="colorMenu('azul');"></p>
                        <p class="color verde" onclick="colorMenu('verde');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color gris" onclick="colorMenu('gris');"></p>
                        <p id="color" class="color negro" onclick="colorMenu('negro');"></p>
                    </div>
                </div>
            </div>
            <br>
            <div class="opacidad">
                <p><strong>Opacidad menú</strong></p>
                <hr>
                <br>
                <div class="slidecontainer">
                    <span class="valBox" id="valBox">0%</span>
                    <br>
                    <input type="range" min="0" max="50" value="0" step="10" class="slider" id="myRange"
                        onchange="mostrarValor(this.value)">
                </div>
            </div>
            <br>
            <div class="filasColores">
                <p><strong>Color footer</strong></p>
                <hr>
                <div class="cambioColor">
                    <div class="selecColor">
                        <p class="color blanco" onclick="colorFooter('blanco');"></p>
                        <p class="color amarillo" onclick="colorFooter('amarillo');"></p>
                        <p class="color oro" onclick="colorFooter('oro');"></p>
                        <p class="color marron" onclick="colorFooter('marron');"></p>
                        <p class="color naranja" onclick="colorFooter('naranja');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color rojo" onclick="colorFooter('rojo');"></p>
                        <p class="color rosa" onclick="colorFooter('rosa');"></p>
                        <p class="color morado" onclick="colorFooter('morado');"></p>
                        <p class="color azul" onclick="colorFooter('azul');"></p>
                        <p class="color verde" onclick="colorFooter('verde');"></p>
                    </div>
                    <div class="selecColor">
                        <p class="color gris" onclick="colorFooter('gris');"></p>
                        <p id="color" class="color negro" onclick="colorFooter('negro');"></p>
                    </div>
                </div>
            </div>
            <br>
            <div class="selecModo">
                <p><strong>Modo</strong></p>
                <hr>
                <div class="mode">
                    <p id="noche" class="noche bx bxs-moon" onclick="modoNoche('dia');"></p>
                    <p id="dia" class="dia bx bxs-sun" onclick="modoNoche('noche');"></p>
                </div>
            </div>
        </div>
    </div>
     `;
    }
}
customElements.define('mi-panelestilos', miPanelestilos);