class MiSaludo extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.innerHTML =    
    `
    <link rel="import" href="/src/app/prueba/sell-button.html">
    <a class="enlace irGaleria" href="/src/app/prueba/sell-button.html"><span>Galería</span><span><i class="far fa-images"
    aria-hidden="true"></i></span></a>



        <h1>eeee</h1>
    `;
    window.location.href ="/src/app/prueba/sell-button.html";
    }
    }
    
    window.customElements.define('mi-saludo', MiSaludo)





// let shadowRoot = this.attachShadow({mode: 'open'});
        // const t = document.querySelector('#sellBtn');
        // const instance = t.content.cloneNode(true);
        // shadowRoot.appendChild(instance);

















// class MiSaludo extends HTMLElement {
//     constructor () {
//       // Obtengo la única etiqueta 'template'
//       const tpl = document.querySelector('template');
//       // Clono su contenido y se crea una instancia del document fragment
//     //   const tplInst = tpl.content.cloneNode(true);
      
//       super(); // invoca el constructor de la clase padre
//       //Se crea un shado dom para las instancias de mi-saludo
//       this.attachShadow({ mode: 'open'});
//       // Y se agrega el template dentro del shadow DOM usando el elemento raíz 'shadowRoot'
//       this.shadowRoot.appendChild(tplInst);




//     var template = document.getElementById('element-details-template').content;
//       const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
//     }
// //     connectedCallback() {
// //         this.innerHTML = `
// //         <mi-saludo></mi-saludo>        `;
// //   }
//   }
  
  // Se registra el custom element para poder ser utilizado declarativamente en el HTML o imperativamente mediante JS
//   customElements.define('mi-saludo', MiSaludo);


// class MiSaludo extends HTMLElement {
//     constructor () {
//       // Obtengo la única etiqueta 'template'
//       const tpl = document.querySelector('template');
//       // Clono su contenido y se crea una instancia del document fragment
//       const tplInst = tpl.content.cloneNode(true);
      
//       super(); // invoca el constructor de la clase padre
//       // Se crea un shado dom para las instancias de mi-saludo
//       this.attachShadow({ mode: 'open'});
//       // Y se agrega el template dentro del shadow DOM usando el elemento raíz 'shadowRoot'
//       this.shadowRoot.appendChild(tplInst);
//     }
//     connectedCallback() {
//          this.innerHTML = `
//          <h1>eeeeeeeeeeeeee</h1>

//         `;
//     }
//   }
  
  
//   // Se registra el custom element para poder ser utilizado declarativamente en el HTML o imperativamente mediante JS
//   customElements.define('Mi-saludo', miSaludo);
  



// customElements.define('element-details',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       var template = document.getElementById('element-details-template')
//         .content;
//       const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
//   }
// })
  


/* <element-details>
  <span slot="element-name">slot</span>
  <span slot="description">Un marcador de posición dentro de un
     componente web que los usuarios pueden rellenar con su propio marcado,
     con el efecto de componer diferentes árboles DOM
     juntos.</span>
  <dl slot="attributes">
    <dt>name</dt>
    <dd>El atributo name del slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description">Un mecanismo para guardar contenido
     en el lado cliente que no se renderiza cuando la página se
     carga sino que posteriormente se puede instanciar en
     tiempo de ejecución usando JavaScript.</span>
</element-details> */




//---------------------------------------------------------

// class MiSaludo extends HTMLElement {
//       constructor () {
//         super();
//       }
      
//       connectedCallback () {
//         let shadowRoot = this.attachShadow({mode: 'open'});
//         const t = document.querySelector('#sellBtn');
//         const instance = t.content.cloneNode(true);
//         shadowRoot.appendChild(instance);
//       }
//     }
    
//     window.customElements.define('mi-saluddo', MiSaludo)


//     <!-- Documento HTML con la plantilla -->
// <template id="sellBtn">
//   <style>
//     :host {
//       --orange: #e67e22;
//       --space: 1.5em;
//     }
//     .btn-container {
//       border: 2px dashed var(--orange);
//       padding: var(--space);
//       text-align: center;
//     }
//     .btn {
//       background-color: var(--orange);
//       border: 0;
//       border-radius: 5px;
//       color: white;
//       padding: var(--space);
//       text-transform: uppercase;
//     }
//   </style>
//   <div class="btn-container">
//     <button class="btn">Comprar Ahora</button>
//   </div>
// </template>