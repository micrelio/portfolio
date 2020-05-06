class miVisor extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML =
      `
   <!--   <div id="axis" class="one">
      <img class="object van move-left" src="../../assets/images/logos/john.png"/>
      </div>
     -->

     <!--
     onswiperight="sum()" onswipeleft="res()"
     -->

 <section  class="principal" >
    <div  class="visor" id="visor" ontouchcancel="sum()" onclick="sum()">
      <div id="activoA" class="activoA"></div>
      <div id="activo" class="activo"></div>
      <div id="activoS" class="activoS"></div>
    </div>
       
    <div class="cajonMini">
       <div id="cajonIzquierda" class=""></div>
        <div id="cajonCentral" class=""></div>
         <div id="cajonDerecha" class="point"></div>
 
        
    </div>

 
    
</section>
<button onclick="intervalo()">auto</button>
<button onclick="stop()">stop </button>
<button onclick="reset()">reset </button>
                `;
    // esto arranca automatico 
    const mos = document.querySelector('#imagen');

    // cajonDerecha.getAttribute('class');   
    // element.setAttribute('href', 'index.html');

  }
}
customElements.define('mi-visor', miVisor);
function cambiar(id) {
  switch (id) {
    case 'todos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(todos);
      break;
    case 'logos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(logos);
      break;
    case 'folletos':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(folletos);
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(postales);
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(posters);
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      carga(pngs);
      break;
    default:
      document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
      break;
  }
}
function keyEvent(event) {
  console.log(event.key);
  switch (event.key) {
    //case  ' ':
    case 'ArrowLeft':
      res();
      break;
    // case  'ArrowLeft':
    //   res();
    //   break;
    case ' ':
    case 'ArrowRight':
      sum();
      break;
    default:
      // sum();
      break;
  }
}
function carga(e) {
  preVista = e;
  switch (preVista) {
    case todos:
      //Enviamos un solo array
      //creamos vista como variable global
      vista = [].concat.apply([], preVista);
      renderizar(vista)
      //   acaparados.forEach(elemente => renderizar(elemente));
      break;
    case logos:
    case folletos:
    case posters:
    case postales:
    case pngs:
      // Opcion 2 creamos vista como variable global
      vista = preVista;
      renderizar(vista);
      break;
    default:
      break;
  }
  //Idexamos indice
}
function renderizar(vista) {
  count = 0;
  console.log(vista[1])
  // console.log(vista[count])


  total = vista.length;
  //----Leemos el array
  for (index = 0; index < total; index++) {

    indice = vista[index];
    // anterior = vista[total - 1];
    //    anterior2 = vista[total - 2];
    //-----------------------------------------------
  }
  if (indice != vista) {
    //Reseteamos al llegar al ultimo dato del array
    activo = vista;
    // count = index;
    index = total;
  }
  //Indice es el dato a renderizar
  console.log(indice)
  //  div = document.createElement('div');
  // div.setAttribute("id", "como");
  //   div.setAttribute("class", "activo ");
  //   document.getElementById("visor").appendChild(div);

  activar();
  //  activarMiniLaterales()
}
function activar() {
  console.log('count', count)
  // siguiente = vista[index + 1];
  img = document.createElement('img');
  var path = "../../" + vista[count];
  img.setAttribute("src", path);

  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "imagen");
  img.setAttribute("class", "imagen");
  //img1.setAttribute("magin-left", "1000vw");

  console.log('yyy', path)
  //img1.setAttribute("margin-left", '100vw');
  //img1.setAttribute("display", "block");
  console.log(img)
  document.getElementById('activo').appendChild(img);
}
function sum() {
  if(count>=total-1){
count=0;
  }

  if (img != null) {
    count++;
    imgS = document.createElement('img');
    var path = "../../" + vista[count];
    imgS.setAttribute("src", path);
    imgS.setAttribute("width", "");
    imgS.setAttribute("height", "");
    imgS.setAttribute("id", "imagen");
    imgS.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(imgS);


    img.setAttribute("class", "imagen object  move-left");
    setTimeout(function t() {
      //borramos la imagen para crear una en div central y luego mover desde allí
     var techo = document.getElementById("activo");
      techo.removeChild(img); img = null;
    }, 500);
    
    setTimeout(function cx() { imgS.setAttribute("class", "imagen object  move-left"); }, 0);
    setTimeout(function cxv() { 
      console.log('chachacha', activo);

       var techo = document.getElementById("activoS");
      techo.removeChild(imgS);
      imgS.removeAttribute("class");
      imgS.setAttribute("src", path);
      imgS.setAttribute("width", "");
      imgS.setAttribute("height", "");
      imgS.setAttribute("id", "imagen");
      imgS.setAttribute("class", "imagen");
            document.getElementById('activo').appendChild(imgS);
     }, 500);
     }
   
  else if (imgS != null) {

    count++;
    img = document.createElement('img');
   var path = "../../" + vista[count];
    img.setAttribute("src", path);
    img.setAttribute("width", "");
    img.setAttribute("height", "");
    img.setAttribute("id", "imagen");
    img.setAttribute("class", "imagen");
    document.getElementById('activoS').appendChild(img);
        imgS.setAttribute("class", "imagen object  move-left");
    setTimeout(function t() {
         var techo = document.getElementById("activo");
      techo.removeChild(imgS); imgS = null;
    }, 500);
 
    setTimeout(function cx() { img.setAttribute("class", "imagen object  move-left"); }, 0);
     setTimeout(function cxv() { 
    var techo = document.getElementById("activoS");
       techo.removeChild(img);
       img.removeAttribute("class");

      img.setAttribute("src", path);
      img.setAttribute("width", "");
      img.setAttribute("height", "");
      img.setAttribute("id", "imagen");
    img.setAttribute("class", "imagen");
       document.getElementById('activo').appendChild(img);
     }, 500);
    }
}
function res() {
  
  if(count<=0){
    count=total;
      }
    
      if (img != null) {
        count--;
        imgS = document.createElement('img');
        var path = "../../" + vista[count];
        imgS.setAttribute("src", path);
        imgS.setAttribute("width", "");
        imgS.setAttribute("height", "");
        imgS.setAttribute("id", "imagen");
        imgS.setAttribute("class", "imagen");
        document.getElementById('activoA').appendChild(imgS);
    
    
        img.setAttribute("class", "imagen object  move-rigth");
        setTimeout(function t() {
          //borramos la imagen para crear una en div central y luego mover desde allí
         var techo = document.getElementById("activo");
          techo.removeChild(img); img = null;
        }, 500);
        
        setTimeout(function cx() { imgS.setAttribute("class", "imagen object  move-rigth"); }, 0);
        setTimeout(function cxv() { 
          console.log('chachacha', activo);
    
           var techo = document.getElementById("activoA");
          techo.removeChild(imgS);
          imgS.removeAttribute("class");
          imgS.setAttribute("src", path);
          imgS.setAttribute("width", "");
          imgS.setAttribute("height", "");
          imgS.setAttribute("id", "imagen");
          imgS.setAttribute("class", "imagen");
                document.getElementById('activo').appendChild(imgS);
         }, 500);
         }
       
      else if (imgS != null) {
    
        count--;
        img = document.createElement('img');
       var path = "../../" + vista[count];
        img.setAttribute("src", path);
        img.setAttribute("width", "");
        img.setAttribute("height", "");
        img.setAttribute("id", "imagen");
        img.setAttribute("class", "imagen");
        document.getElementById('activoA').appendChild(img);
            imgS.setAttribute("class", "imagen object  move-rigth");
        setTimeout(function t() {
             var techo = document.getElementById("activo");
          techo.removeChild(imgS); imgS = null;
        }, 500);
     
        setTimeout(function cx() { img.setAttribute("class", "imagen object  move-rigth"); }, 0);
         setTimeout(function cxv() { 
        var techo = document.getElementById("activoA");
           techo.removeChild(img);
           img.removeAttribute("class");
    
          img.setAttribute("src", path);
          img.setAttribute("width", "");
          img.setAttribute("height", "");
          img.setAttribute("id", "imagen");
        img.setAttribute("class", "imagen");
           document.getElementById('activo').appendChild(img);
         }, 500);
        }
    }




















function activ(a) {
  //primero ponemos el contador a cero para empezar por el primer puesto del array
  var path = "../../" + a;
  //console.log('imagen', imagen)
  //La img es igual a un elemento que creamos del tipo imagen
  var img = document.createElement('img');


  div = document.createElement('div');
  //-----------------------------------------------
  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "imagen");
  img.setAttribute("class", "imagen");

  div.setAttribute("id", count);
  div.setAttribute("class", "activo");
  //img.setAttribute("class", "object  move-right");

  //---------------------------------------------- 

  // img.setAttribute("margin-left", "-2000");
  //img.setAttribute("class", "object  move-right");
  //En el elemento llamado activo renderizamos la imagen
  // document.getElementById("visor").appendChild(divA);
  //  document.getElementById("imgA").appendChild(imgA);
  document.getElementById("visor").appendChild(div);
  document.getElementById(count).appendChild(img);

  //  document.getElementById("visor").appendChild(divS);
  //  document.getElementById("imgS").appendChild(imgS);

  var imagenPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", imagenPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniImagen");
  // document.getElementById("cajonImagen").appendChild(img1);
}

//console.log(imgA)
//   setTimeout(retraso, 3000);
function retraso() {
  console.log('retraso')
  //  var t = document.getElementById("divAnterior");
  //  t.removeChild(imgA);
  //  divCentral.setAttribute("id", "");

  //  divSiguiente.setAttribute("id", "");
  //       var  imgX = document.createElement('img');

  //       var divX = document.createElement('div');

  //        var path = "../../" + siguiente;
  // console.log('sigiente2', path)
  // imgX.setAttribute("src", path);
  // imgX.setAttribute("width", "");
  // imgX.setAttribute("height", "");
  // imgX.setAttribute("id", "imagen");
  // imgX.setAttribute("class", "imagen");

  // divX.setAttribute("id", "imgX");
  // divX.setAttribute("class", "activo ");

  // divX.setAttribute("class", "activo object  move-right");


  //        document.getElementById("visor").appendChild(divX);
  //        document.getElementById("imgX").appendChild(imgx);

  // img.setAttribute("class", " ");

  // imgS.setAttribute("class", " ");

}
// document.getElementById("divSiguiente").appendChild(imgS);

// imgS2.setAttribute("class", "object  move-right");

//cambio(central, anterior, siguiente);
//  activarMiniLaterales();


// function res() {
//   var central;
//   var anterior;
//   var siguiente;
//   if (count <= 0) {
//     central = vista[total - 1]
//     count = total - 1;
//     cambio(central);
//   }
//   else {
//     count--;
//     central = vista[count];
//     cambio(central);
//   }
// }

function cambi(a, b, c) {
  posicion = vista.indexOf(a);
  console.log(posicion)
  //console.log('imagen1', document.getElementById('central'))
  var path = "../../" + a;
  var pathAnterior = "../../" + b;
  var pathSiguiente = "../../" + c;

  var img = document.createElement('img');
  var imgA = document.createElement('img');
  var imgS = document.createElement('img');

  img.setAttribute("src", path);
  img.setAttribute("width", "");
  img.setAttribute("height", "");
  img.setAttribute("id", "central");
  //img.setAttribute("class", "object  move-right");
  //img.setAttribute("rigth", "62000rem");
  //img.setAttribute('class', 'object move-right');
  // img.setAttribute("position", "absolute");

  imgS.setAttribute("src", pathSiguiente);
  imgS.setAttribute("width", "");
  imgS.setAttribute("height", "");
  imgS.setAttribute("id", "siguiente");

  imgA.setAttribute("src", pathAnterior);
  imgA.setAttribute("width", "");
  imgA.setAttribute("height", "");
  imgA.setAttribute("id", "anterior");

  // img.setAttribute("margin-left", "-2000");
  document.getElementById("divCentral").replaceChild(img, central);

  var centralPath = "../../" + a;
  var img1 = document.createElement('img');
  img1.setAttribute("src", centralPath);
  img1.setAttribute("width", "");
  img1.setAttribute("height", "");
  img1.setAttribute("id", "miniCentral");
  document.getElementById("cajonCentral").replaceChild(img1, miniCentral);
}




function activarMiniLaterales() {
  //console.log('vista', vista)
  // posicion = a.indexOf('todos');

  for (let index = 0; index < total; index++) {
    //     let indice = e[index];
    //     //  activarMini()
    //   }
    //   if () {

    //     var pos = e.indexOf('indice');
    //   }
    //  if (indice<index) {
    //    // var pos = frutas.indexOf('Banana');
    //   }

    //   var miniPath = "../../" + b[i];
    //   var img2 = document.createElement('img');
    //   img2.setAttribute("src", miniPath);
    //   img2.setAttribute("width", "");
    //   img2.setAttribute("height", "5");
    //   img2.setAttribute("id", "miniDerecha");
    //   document.getElementById("cajonDerecha").appendChild(img2);


    //   var img3 = document.createElement('img');
    //   img3.setAttribute("src", miniPath);
    //   img3.setAttribute("width", "");
    //   img3.setAttribute("height", "5");
    //   img3.setAttribute("id", "miniIzquierda");
    //   document.getElementById("cajonIzquierda").appendChild(img3);
  }
}






function reset() {
  clearInterval(r);
  count = 0;
  var cero = t[0];
  cambio(cero)
}
function stop() {
  clearInterval(r);
}
function intervalo() {
  r = setInterval(() => {
    sum();
  }, 3000);
}









