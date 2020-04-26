class miGaleria extends HTMLElement {
  constructor() {
    //  puedes poner argumentos
    super();
    myFunction();
  }
  connectedCallback() {
    this.innerHTML =
      `
            <section id="galeria" class="primera" >
    <div class="">
        <button type="button" onclick="cambiar('todos'), cargaTodas();"> Todos </button>
        <button type="button" onclick="cambiar('logos'), cargaLogos();"> Logos </button>
        <button type="button" onclick="cambiar('folletos'), cargaFolletos();"> Folletos </button>
        <button type="button" onclick="cambiar('posters'), cargaPosters();"> Posters </button>
        <button type="button" onclick="cambiar('postales'), cargaPostales();"> Postales </button>
        <button type="button" onclick="cambiar('pngs'), cargaPngs();"> Pngs </button>
    </div>
 </section>
<section id="content">
<mi-imagenes></mi-imagenes>
</section>
                `;
    cargaTodas();
  }

}
customElements.define('mi-galeria', miGaleria);
function cargaTodas() {
  cargaLogos();
  cargaFolletos();
  cargaPosters();
  cargaPostales();
  cargaPngs();
}
function r() {
  console.log('cara higo')
  var contenedor = document.createElement('div');
  document.body.appendChild(contenedor);
  contenedor.innerHTML = 'Hola chachi';
}
function myFunction() {
  console.log('Hello World');
}
function cambiar(id) {
  //console.log('funcion');
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-imagenes></mi-imagenes>";
      break;
    case 'logos':
      document.getElementById("content").innerHTML = "<mi-logos></mi-logos>";
      break;
    case 'folletos':
      document.getElementById("content").innerHTML = "<mi-folletos></mi-folletos>";
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-postales></mi-postales>";
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-posters></mi-posters>";
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-pngs></mi-pngs>";
      break;
    default:
  }
}
/////funciona
//  function maquetar() {

//    console.log('eeeeee')

