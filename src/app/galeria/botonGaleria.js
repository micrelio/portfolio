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
               </section>
              
                  `;
                  

     // cargaTodo();
   
     setTimeout(function cx() {
      cambio();

    }, 0);

      cargaBoton() ;
      //cambio();
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
       tipo = llaves[index];
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



//---mirar aqui
//   https://es.stackoverflow.com/questions/98239/c%C3%B3mo-agregar-un-event-listener-para-varios-elementos      
      var seleccion= 'boton'+ tipo;
      document.getElementById(seleccion).addEventListener('click',function() {
        document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
        console.log(seleccion);
       cambiar(seleccion);
               });
//---RECOGEMOS LA VARIABLE EN CADA VUELTA
 // seleccion='boton'+ tipo;

      //---LEEMOS EL ARRAY DENTRO DE CADA CLAVE---
      // for (let index2 = 0; index2 < dato.length; index2++) {
  
      // }
   
//console.log(tipo)

    } 
    //console.log(this.tipo)
        }
  

        
console.log(dato)
  
    function cambio() {
 //console.log(seleccion)
//  document.getElementById(seleccion).addEventListener('click',function() {
//         document.getElementById("content").innerHTML = "<mi-visor></mi-visor>";
//         console.log('tipo')
//        cambiar(e);
       

//         });
      };

  