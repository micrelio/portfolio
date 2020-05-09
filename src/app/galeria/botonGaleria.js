class miBotonera extends HTMLElement {
    constructor() {
      //  puedes poner argumentos
      

      super();
    //myFunction();
    
    }
    connectedCallback() {
      this.innerHTML =
        `
              <section id="botonesGaleria" class="botonesGaleria" >
              <button class="bubbly" id="bubbly"  >Click me!</button>
               </section>
              
                  `;
                  

     // cargaTodo();
  
      //cambiar('todos') //quitar al acabar
  
      // const logosy = document.querySelector('#bLogos');
     //lkfvkd.addEventListener('mousemove', function() {
    
      //   
      // });
     
      cargaBoton() ;
      



      
    //  var bubblyButtons = document.getElementsByClassName("bubbly");

//for (var i = 0; i < bubblyButtons.length; i++) {
  //bubblyButtons[1].addEventListener('click', function() {
 //   console.log('yyyyyyyyyyyyyyyyyyyyyy')
 //     
 //   });
//}


//caca();








    }
  


    
    
 //   animateButton();
  }
  
  customElements.define('mi-botonera', miBotonera);


 
 
  //elemento_que_se_escuchaba.removeEventListener('evento',función_a_anular,booleano);

 
  function cargaBoton() {
    //---imagenes en imagenes------------------------
    var llaves = Object.keys(imagenes);
    //console.log(llaves.length);
    //---Leemos las claves
    for (let index = 0; index < llaves.length; index++) {
      const tipo = llaves[index];
      const dato = imagenes[tipo];
    //  console.log('tipo', tipo);
   //   console.log('dato', dato);
      var boto = document.createElement('button');
      var p = document.createElement('p');
  
      //---CREAMOS UN TEXTO---
      var t = document.createTextNode(tipo);
      p.setAttribute("class", "nombre");
      p.setAttribute("id", "p");
     boto.setAttribute("id", 'boton'+ tipo);
      boto.setAttribute("class", "boton");
      boto.setAttribute("type", "button");

 // console.log(boto);
 // console.log(p);
    document.getElementById("botonesGaleria").appendChild(boto);
     document.getElementById('boton'+tipo).appendChild(p);
      p.appendChild(t);
//---RECOGEMOS LA VARIABLE EN CADA VUELTA
 var seleccion='boton'+ tipo;

      //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
      // for (let index2 = 0; index2 < dato.length; index2++) {
  
      // }
      cambio(seleccion, tipo);
    } 
        }
  

    

  
    function cambio(dato, tipo) {

      document.getElementById(dato).addEventListener('click',function() {
        console.log(tipo);

        });
      };

  var esto = Logos;
  bubbly-button.addEventListener('mousemove', function() {
    console.log(eeeeeeeeeeee);
    });