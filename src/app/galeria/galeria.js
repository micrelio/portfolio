
class miGaleria extends HTMLElement {


  constructor() {

    var logos = ["images/logos/igr.jpg",
      "images/logos/igre.png",
      "/images/logos/john.png",];
    var posters = ["images/posters/quiromasajista.jpg"];
    var publicidad = ["images/publi/igreCampaña2019.jpg",
      "images/publi/igreAntoniaCampaña2019.jpg",
      "images/publi/igreCampaña2019B.jpg",
      "images/publi/unChalecoUnaVida.jpg",];
    var postales = ["images/postales/postalIgre.jpg",
      "images/postales/postalIgreCorreo.jpg",];
    var pngs = ["images/png/antonia.png",
      "images/png/banderaEuropaDesvanecida.png",
      "images/png/banderaEsquina.png",
      "images/png/europaRedondo.png",
      "images/png/igreNavidad.png",];

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
        <button type="button" onclick="cambiar('publicidad');"> Publicidad </button>
        <button type="button" onclick="cambiar('posters');"> Posters </button>
        <button type="button" onclick="cambiar('postales');"> Postales </button>
        <button type="button" onclick="cambiar('pngs');"> Pngs </button>
    </div>
    
</section>
<section id="content">
<mi-imagenes></mi-imagenes>
</section>


               
                `;
                cargaTodas()

    //maquetar();

    // cargaLogos(); 
    // cargaPublicidad()
    // cargaPosters()
    // cargaPostales()
    // cargaPngs()
  }




}

customElements.define('mi-galeria', miGaleria);
function cargaTodas() {
  cargaLogos(); 
  cargaPublicidad()
  cargaPosters()
  cargaPostales()
  cargaPngs()
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
           document.getElementById("content").innerHTML = "<mi-imagenes></mi-imagenes>";
      break;
    case 'publicidad':
      document.getElementById("content").innerHTML = "<mi-galeria></mi-galeria>";
      break;
    case 'postales':
      document.getElementById("content").innerHTML = "<mi-videos></mi-videos>";
      break;
    case 'posters':
      document.getElementById("content").innerHTML = "<mi-curriculum></mi-curriculum>";
      break;
    case 'pngs':
      document.getElementById("content").innerHTML = "<mi-contacto></mi-contacto>";
      break;
    default:
  }
}





/////funciona 
//  function maquetar() {

//    console.log('eeeeee')






//    for (let i = 0; i < logos.length; i++) {
//      console.log(logos.length)
//      console.log(logos[i])
//      var path = "../../" + logos[i];
//      var img = document.createElement('img');
//      img.setAttribute("src", path);
//      img.setAttribute("width", "100");
//      img.setAttribute("height", "");
//      document.getElementById("content").appendChild(img);
//    }
//    console.log('me cago en la puta')


//    for (let i = 0; i < publicidad.length; i++) {
//      console.log(publicidad.length)
//      console.log(publicidad[i])
//      var path = "../../" + publicidad[i];
//      var img = document.createElement('img');
//      img.setAttribute("src", path);
//      img.setAttribute("width", "100");
//      img.setAttribute("height", "");
//      document.getElementById("content").appendChild(img);
//    }
//    console.log('me cago en la puta')

//    for (let i = 0; i < posters.length; i++) {
//      console.log(posters.length)
//      console.log(posters[i])
//      var path = "../../" + posters[i];
//      var img = document.createElement('img');
//      img.setAttribute("src", path);
//      img.setAttribute("width", "100");
//      img.setAttribute("height", "");
//      document.getElementById("content").appendChild(img);
//    }
//    console.log('me cago en la puta')

//    for (let i = 0; i < postales.length; i++) {
//      console.log(postales.length)
//      console.log(postales[i])
//      var path = "../../" + postales[i];
//      var img = document.createElement('img');
//      img.setAttribute("src", path);
//      img.setAttribute("width", "100");
//      img.setAttribute("height", "");
//      document.getElementById("content").appendChild(img);
//    }
//    console.log('me cago en la puta')

//    for (let i = 0; i < pngs.length; i++) {
//      console.log(pngs.length)
//      console.log(pngs[i])
//      var path = "../../" + pngs[i];
//      var img = document.createElement('img');
//      img.setAttribute("src", path);
//      img.setAttribute("width", "100");
//      img.setAttribute("height", "");
//      document.getElementById("content").appendChild(img);
//    }
//    console.log('me cago en la puta')
//  }







 //function cambiar(id) {

//   console.log(id)
//   switch (id) {




//     case 'logos':
//       for (let i = 0; i < logos.length; i++) {
//         console.log(logos.length)
//         console.log(logos[i])
//         var path = "../../" + logos[i];
//         var img = document.createElement('img');
//         img.setAttribute("src", path);
//         img.setAttribute("width", "100");
//         img.setAttribute("height", "");
//         document.getElementById("content").appendChild(img);
//       }
//       console.log('me cago en la puta')
//       break;

//  case 'publicidad':
//       for (let i = 0; i < publicidad.length; i++) {
//         console.log(publicidad.length)
//         console.log(publicidad[i])
//         var path = "../../" + publicidad[i];
//         var img = document.createElement('img');
//         img.setAttribute("src", path);
//         img.setAttribute("width", "100");
//         img.setAttribute("height", "");
//         document.getElementById("content").appendChild(img);
//       }
//       console.log('me cago en la puta')
//       break;

//       case 'posters':
//         for (let i = 0; i < posters.length; i++) {
//           console.log(posters.length)
//           console.log(posters[i])
//           var path = "../../" + posters[i];
//           var img = document.createElement('img');
//           img.setAttribute("src", path);
//           img.setAttribute("width", "100");
//           img.setAttribute("height", "");
//           document.getElementById("content").appendChild(img);
//         }
//         console.log('me cago en la puta')
//         break;
//         case 'postales':
//           for (let i = 0; i < postales.length; i++) {
//             console.log(postales.length)
//             console.log(postales[i])
//             var path = "../../" + postales[i];
//             var img = document.createElement('img');
//             img.setAttribute("src", path);
//             img.setAttribute("width", "100");
//             img.setAttribute("height", "");
//             document.getElementById("content").appendChild(img);
//           }
//           console.log('me cago en la puta')
//           break;

//           case 'pngs':
//             for (let i = 0; i < pngs.length; i++) {
//               console.log(pngs.length)
//               console.log(pngs[i])
//               var path = "../../" + pngs[i];
//               var img = document.createElement('img');
//               img.setAttribute("src", path);
//               img.setAttribute("width", "100");
//               img.setAttribute("height", "");
//               document.getElementById("content").appendChild(img);
//             }
//             console.log('me cago en la puta')
//             break;



//     default:
//       break;
//   }



// }












// function cambiar() {



// var doubles = pngs.map(
//   function(){
//     var path= "../../"+pngs;
//            var img=document.createElement('img'); 
//            img.setAttribute("src",path);
//            img.setAttribute("width","35");
//            img.setAttribute("height","24");
//   }
// );
// console.log()
// }









//   document.body.onload = addElement;
//   function cambiar () { 
//     for (var indice in logos) {
//       console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);
//     // crea un nuevo div 
//     // y añade contenido 
//     var newDiv = document.createElement("div"); 
//     var newContent = document.getElementById("images").innerHTML =  "<img style='width:20%' src=../../"+ logos[indice]+">";
//     newDiv.appendChild(newContent); //añade texto al div creado. 

//     // añade el elemento creado y su contenido al DOM 
//     var currentDiv = document.getElementById("div1"); 
//     document.body.insertBefore(newDiv, currentDiv); 
//   }
// }

// function cambiar(id) {



//  for (let i = 0; i < pngs.length; i++) {
//    const element = pngs[i];
//    console.log( pngs[i])
//   }


// for (var indice in logos) {
//   console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);

//   console.log(logos.length)
//document.getElementById("images").innerHTML = "<div><img style='width:20%' src=../../"+ logos[indice]+">, <img style='width:20%' src=../../"+ logos[indice-1]+">,<img style='width:20%' src=../../"+ logos[indice-2]+"></div>";
// document.getElementById("images").innerHTML =  "<div><img style='width:20%' src=../../"+ logos[indice]+">, <img style='width:20%' src=../../"+ logos[indice-1]+">,<img style='width:20%' src=../../"+ logos[indice-2]+"></div>";

// "<div><img style='width:20%' src=../../"+ logos[indice]+"></div>"



//     console.log(logos[indice]);
// document.createElement(tagName, [options]);
//document.getElementById("images").innerHTML = "<div><img style='width:20%' src=../../"+ logos[indice]+"></div>";
//document.getElementById("images").innerHTML = "<mi-logos></mi-logos>";
//document.getElementById("images").innerHTML = "<mi-curriculum></mi-curriculum>";
//document.write("<img "style="whidth:50rem"+" src=../../"+ logos[indice]+">")
// document.write("<br>")
//   }
//  }





//    <section class="segunda" <!--[ngSwitch]="true"--> >
//    <div <!--*ngSwitchCase=" this.seleccion ==='todos'"--> >

//        <app-repertorio [tipo]="seleccion" [logos]="logos" [publicidad]="publicidad" [posters]="posters" [postales]="postales" [pngs]="pngs"></app-repertorio>
//    </div>
//    <!-- "options === 'd' || options === 'e' || options === 'f'" -->

//  </section>
//    <div *ngSwitchCase="this.seleccion ==='logos'">
//          <app-logos></app-logos>
//          <!-- <app-slider [res]=0 [count]="0" [tipo]="seleccion" [logos]="logos" [publicidad]="publicidad" [posters]="posters" [postales]="postales" [pngs]="pngs"></app-slider> -->
//      </div>
//      <div *ngSwitchCase="this.seleccion === 'publicidad'">
//          <app-publicidad></app-publicidad>
//      </div>
//      <div *ngSwitchCase="this.seleccion === 'postales'">
//          <app-postales></app-postales>
//      </div>
//      <div *ngSwitchCase="this.seleccion === 'posters'">
//          <app-posters></app-posters>
//      </div>
//      <div *ngSwitchCase="this.seleccion === 'pngs'">
//          <app-pngs></app-pngs>
//      </div>






//****************************************//
//********arrays**************************//
