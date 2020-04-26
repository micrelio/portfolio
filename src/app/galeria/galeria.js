class miGaleria extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
               `
            <section id="galeria" class="primera">
    <div class="">
                
        <button type="button" onclick="cambiar('logos'); reset()"> Todos </button>
        <button type="button" onclick="cambiar('logos'); "> Logos </button>
        <button type="button" onclick="cambiar('publicidad'); reset()"> Publicidad </button>
        <button type="button" onclick="cambiar('posters'); reset()"> Posters </button>
        <button type="button" onclick="cambiar('postales'); reset()"> Postales </button>
        <button type="button" onclick="cambiar('pngs'); reset()"> Pngs </button>
    </div>
    
</section>
<section id="content">

</section>

               
                `;
       }
    }
  customElements.define('mi-galeria', miGaleria);




  switch (render) {
    case 'todos':
        document.getElementById("galeria").innerHTML = "<mi-inicio></mi-inicio>";
        break;
    case 'logos':
      document.getElementById("galeria").innerHTML = "<mi-logos></mi-logos>";
      break;
       case 'publicidad':
            document.getElementById("galeria").innerHTML = "<mi-galeria></mi-galeria>";
        break;
        case 'postales':
          console.log('videos')
      document.getElementById("galeria").innerHTML = "<mi-videos></mi-videos>";
      break;
      case 'posters':
      document.getElementById("galeria").innerHTML = "<mi-curriculum></mi-curriculum>";
      break;
      case 'pngs':
        document.getElementById("galeria").innerHTML = "<mi-contacto></mi-contacto>";
          break;
    default:
      }


      

      
     
  
 function cambiar () { 

  
       for (let i = 0; i < pngs.length; i++) {
              var path= "../../"+pngs[i];
      var img=document.createElement('img'); 
      img.setAttribute("src",path);
      img.setAttribute("width","35");
      img.setAttribute("height","24");
      
      document.getElementById("content").appendChild(img);
      }
 }


 
 function reset(){
  console.log('WWWWWWWWWWWWWWWWWWW');
  count = 0;

}


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