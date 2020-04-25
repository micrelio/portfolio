var pathi = 'src/images/logos/';
var count = 0;
var res = 0;
var seleccion = 'todos';
var logos = ["src/images/logos/igr.jpg",
    "src/images/logos/igre.png",
    "src/images/logos/john.png",];
var posters = ["src/images/posters/quiromasajista.jpg"];
var publicidad = [ "src/images/publi/igreCampaña2019.jpg",
"src/images/publi/igreAntoniaCampaña2019.jpg",
"src/images/publi/igreCampaña2019B.jpg",
"src/images/publi/unChalecoUnaVida.jpg",];
var postales = ["src/images/postales/postalIgre.jpg",
"src/images/postales/postalIgreCorreo.jpg",];
var pngs = ["src/images/png/antonia.png",
"src/images/png/banderaEuropaDesvanecida.png",
"src/images/png/banderaEsquina.png",
"src/images/png/europaRedondo.png",
"src/images/png/igreNavidad.png",];
// @Input() sum = true;
// inputValue = 0;

function cambiar(id) {
 var i =0;
console.log(logos.length);

for (var indice in logos) {
    console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);
    

    document.getElementById("caja").innerHTML = "<img style='width:100%' src=../../"+ logos[indice]+">";

    
   // document.write("<img src=../../"+ logos[indice]+">")
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



