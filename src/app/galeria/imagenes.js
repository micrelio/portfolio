
class miImagenes extends HTMLElement {


    constructor() {
  
      var logos = ["images/logos/igr.jpg",
      "images/logos/igre.png",
      "/images/logos/john.png",];
  var posters = ["images/posters/quiromasajista.jpg"];
  var publicidad = [ "images/publi/igreCampaña2019.jpg",
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
     
      
    }
  
   
  
  
   
    
    connectedCallback() {
      

      this.innerHTML =
        `
        
  <section id="todas">
  <img src="../../images/banners/rocas.jpg">
  </section>
  <section id="todas">
  <img src="../../images/banners/rocas.jpg">
  </section>
  
                 
                  `;
    }
  
   
    
  
    
  }
  
  customElements.define('mi-imagenes', miImagenes);
  
  
  
  function myFunction() {
    console.log('Hello World');
  }
  
    
  
  
  /////funciona 
   function maquetar() {
  
     console.log('eeeeee')
  
  
  
  
  
  
     for (let i = 0; i < logos.length; i++) {
       console.log(logos.length)
       console.log(logos[i])
       var path = "../../" + logos[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("todas").appendChild(img);
     }
     console.log('me cago en la puta')
    
  
     for (let i = 0; i < publicidad.length; i++) {
       console.log(publicidad.length)
       console.log(publicidad[i])
       var path = "../../" + publicidad[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("todas").appendChild(img);
     }
     console.log('me cago en la puta')
  
     for (let i = 0; i < posters.length; i++) {
       console.log(posters.length)
       console.log(posters[i])
       var path = "../../" + posters[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("todas").appendChild(img);
     }
     console.log('me cago en la puta')
  
     for (let i = 0; i < postales.length; i++) {
       console.log(postales.length)
       console.log(postales[i])
       var path = "../../" + postales[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("todas").appendChild(img);
     }
     console.log('me cago en la puta')
  
     for (let i = 0; i < pngs.length; i++) {
       console.log(pngs.length)
       console.log(pngs[i])
       var path = "../../" + pngs[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("todas").appendChild(img);
     }
     console.log('me cago en la puta')
   }
  
  
  
  
  