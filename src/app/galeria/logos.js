
class miImagenes extends HTMLElement {

    constructor() {
       
     super();
    
      
    }
  
   
  
  
   
    
    connectedCallback() {
      

      this.innerHTML =
        `
        <section id="logos" class="" onclick="cambiar('todos')">

        <img src="../../images/banners/rocas.jpg">

    </section>
    <section id="logos" class="">

   
    

</section>
                  `;
    }
  
   
    
  
    
  }
  
  customElements.define('mi-imagenes', miImagenes);
  
  
  
  function myFunction() {
    console.log('Hello World');
  }
  
    
  
  
  /////funciona 
   function logos() {
  
     console.log('eeeeee')
  
  
  
  
  
  
     for (let i = 0; i < logos.length; i++) {
       console.log(logos.length)
       console.log(logos[i])
       var path = "../../" + logos[i];
       var img = document.createElement('img');
       img.setAttribute("src", path);
       img.setAttribute("width", "100");
       img.setAttribute("height", "");
       document.getElementById("logos").appendChild(img);
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
       document.getElementById("publicidad").appendChild(img);
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
       document.getElementById("posters").appendChild(img);
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
       document.getElementById("postales").appendChild(img);
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
       document.getElementById("pngs").appendChild(img);
     }
     console.log('me cago en la puta')
   }
  
  
  
  
  