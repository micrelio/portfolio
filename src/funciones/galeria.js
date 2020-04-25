var pathi = 'src/images/logos/';
var count = 0;
var res = 0;
var seleccion = 'todos';
var logos = ["src/images/logos/igr.jpg",
    "assets/images/logos/igre.png",
    "assets/images/logos/john.png",];
var posters = ["assets/images/posters/quiromasajista.jpg"];
var publicidad = [ "assets/images/publi/igreCampaña2019.jpg",
"assets/images/publi/igreAntoniaCampaña2019.jpg",
"assets/images/publi/igreCampaña2019B.jpg",
"assets/images/publi/unChalecoUnaVida.jpg",];
var postales = ["assets/images/postales/postalIgre.jpg",
"assets/images/postales/postalIgreCorreo.jpg",];
var pngs = ["assets/images/png/antonia.png",
"assets/images/png/banderaEuropaDesvanecida.png",
"assets/images/png/banderaEsquina.png",
"assets/images/png/europaRedondo.png",
"assets/images/png/igreNavidad.png",];
// @Input() sum = true;
// inputValue = 0;

function cambiar(id) {
 var i =0;
console.log(logos.length);

for (var indice in logos) {
    console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);
    
    
    document.write("<img src=../../"+ logos[indice]+">")
  }
      
  
//imag = logos;
//for (i;i<=logos.length;i++) {
  // console.log(i)
//imag[i] = i.toString()+'.jpg';
//document.write('<img src="'+imag[i]+'">')
//document.write("<br>");
//}
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



