class miLogos extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
                <section id="logos" class="">

                <img src="../../images/banners/rocas.jpg">
        
            </section>


               
                `;
       }
    }
  customElements.define('mi-logos', miLogos);





  
function i(id) {
    var i =0;
   
   
   for (var indice in logos) {
       console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);
       
       console.log(logos[indice]);
      // document.createElement(tagName, [options]);
      //document.getElementById("images").innerHTML = "<div><img style='width:20%' src=../../"+ logos[indice]+"></div>";
      document.getElementById("logos").innerHTML = "<div><img style='width:20%' src=../../"+ logos[indice]+"></div>";
      //document.getElementById("images").innerHTML = "<mi-curriculum></mi-curriculum>";
    //  document.write("<img src=../../"+ logos[indice]+">")
    }
   }
   
   function reset(){
       console.log('WWWWWWWWWWWWWWWWWWW');
       count = 0;
   
   }
   
   //timer para que cambie la imagen a la vez que se carga si no carga la foto y despues la cambia, retrasando la aparicion de alguna
   //function cambiar(id) {
       
     //  let h = id;
       //  setTimeout(() => {
    //   time(h);
       // }, 3000);
   //}
   //function time(j){
   //    seleccion = j;
   //    console.log(seleccion);
   //}
   
   
   
   