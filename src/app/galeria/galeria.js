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
        <button type="button" onclick="cambiar('todos'), cargaTodo();"> Todos </button>
        <button type="button" onclick="cambiar('logos');"> Logos </button>
        <button type="button" onclick="cambiar('folletos');"> Folletos </button>
        <button type="button" onclick="cambiar('posters');"> Posters </button>
        <button type="button" onclick="cambiar('postales');"> Postales </button>
        <button type="button" onclick="cambiar('pngs');"> Pngs </button>
    </div>
 </section>
<section id="content">
<mi-logos></mi-logos>
<!-- <mi-imagenes></mi-imagenes> -->
</section>
                `;
    cargaTodo();
  
  }
}
customElements.define('mi-galeria', miGaleria);
function myFunction() {
  console.log('Hello World');
}
function cambiar(id) {
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-imagenes></mi-imagenes>";
      break;
    case 'logos':
      console.log('logogogogog')
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
function f() {
  for (let i = 0; i < logos.length; i++) {
    var path = "../../" + logos[i];
    var img = document.createElement('img');
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "500rem");
    document.getElementById("logos").appendChild(img);
  }
}