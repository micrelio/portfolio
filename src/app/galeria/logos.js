

class miLogos extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
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
    
   customElements.define('mi-logos', miLogos);

   
   function logos(){
    console.log('hola')
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
  }


