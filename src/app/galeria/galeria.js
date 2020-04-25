class miGaleria extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
                <section class="primera">
    <div class="">
        <div >

        </div>
        
        <button type="button" onclick="cambiar('logos'); reset()"> Todos </button>
        <button type="button" onclick="cambiar('logos'); reset()"> Logos </button>
        <button type="button" onclick="cambiar('publicidad'); reset()"> Publicidad </button>
        <button type="button" onclick="cambiar('posters'); reset()"> Posters </button>
        <button type="button" onclick="cambiar('postales'); reset()"> Postales </button>
        <button type="button" onclick="cambiar('pngs'); reset()"> Pngs </button>
    </div>
    
</section>
<section>
<div id="caja"></div>
</section>

               
                `;
       }
    }
  customElements.define('mi-galeria', miGaleria);
//   <section class="segunda" <!--[ngSwitch]="true"--> >
//   <div <!--*ngSwitchCase=" this.seleccion ==='todos'"--> >

//       <app-repertorio [tipo]="seleccion" [logos]="logos" [publicidad]="publicidad" [posters]="posters" [postales]="postales" [pngs]="pngs"></app-repertorio>
//   </div>
//   <!-- "options === 'd' || options === 'e' || options === 'f'" -->
  
// </section>
//   <div *ngSwitchCase="this.seleccion ==='logos'">
//         <app-logos></app-logos>
//         <!-- <app-slider [res]=0 [count]="0" [tipo]="seleccion" [logos]="logos" [publicidad]="publicidad" [posters]="posters" [postales]="postales" [pngs]="pngs"></app-slider> -->
//     </div>
//     <div *ngSwitchCase="this.seleccion === 'publicidad'">
//         <app-publicidad></app-publicidad>
//     </div>
//     <div *ngSwitchCase="this.seleccion === 'postales'">
//         <app-postales></app-postales>
//     </div>
//     <div *ngSwitchCase="this.seleccion === 'posters'">
//         <app-posters></app-posters>
//     </div>
//     <div *ngSwitchCase="this.seleccion === 'pngs'">
//         <app-pngs></app-pngs>
//     </div>