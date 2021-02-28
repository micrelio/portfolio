class miFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/components/footer/footer.css";
    </style>
<footer id="footer" class="footer" >
  <div class="separator">
  </div>
  <div  class="footerContainer">
    <div class="contacto">
      <h2>Contactar</h2>
      <span class="">
        <input type="email" placeholder="Escriba su Correo">
        <input type="submit" value=" Suscribirse">
      </span>
    </div>
    <div class="direccion"> 
      <h2>Dirección</h2>
      <div class="datos">
        <div>        
          <p><a href="https://goo.gl/maps/9UUDsgCz7YnERqvD6" target="_blank"><i class="fa fa-map-marker"></i>  Valencia - España</a></p> 
          <p><a href="https://wa.me/34653251983/"><i class="fa fa-whatsapp"></i> (+34) 653 251 983</a> </p>
          <p><a href="tel:+34653251983"><i class="fa fa-phone"></i> (+34) 653 251 983</a> </p>
          <p><i class="fa fa-envelope"></i> info@microdeveloper.es</p>
        </div>
      </div>
    </div>
    <div class="paginas">
      <h2>Diseños</h2>
      <span class="diseños">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repellat autem, error iste
          odio atque eum assumenda rem aliquam, consequatur excepturi reiciendis corrupti velit aperiam?</p>
        </div>
      </span>
    </div>
  </div>
  <div class="redes">
    <div class="propiedad">
      <div class="socialmedia">
        <a target="blank" class="iconSocial" href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA" target="_blank"><img style="" src="/src/assets/images/icons/social/youtube.png"></a>
        <a target="blank" class="iconSocial" href="https://www.instagram.com/micrelio.dev/" target="_blank"><img style="" src="/src/assets/images/icons/social/instagram.png"></a>
        <a target="blank" class="iconSocial" href="https://twitter.com/Micrelio" target="_blank"><img style="" src="/src/assets/images/icons/social/twitter.png"></a>
        <a target="blank" class="iconSocial" title="Facebook" href="https://www.facebook.com/micro6" target="_blank"><img style="" src="/src/assets/images/icons/social/facebook.png"></a>
        <a target="blank" class="iconSocial" href="https://wa.me/34653251983/" target="_blank"><img style="" src="/src/assets/images/icons/social/whatsapp.png"></a>                    
        <a target="blank" class="iconSocial" href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/" target="_blank"><img style="" src="/src/assets/images/icons/social/linkedin.png"></a>
        <a target="blank" class="iconSocial" href="https://github.com/micrelio" target="_blank"><img style="" src="/src/assets/images/icons/social/github.png"></a>
      </div>
      <div class="copy">
        &copy; 2020, Todos los derechos reservados - | Micro |
      </div>
      <div class="politicas" id="politicas">
        <a href="#politicadeprivacidad"><p class="privacidad" id="privacidad"> Política de privacidad</p></a>
        <a href="#avisolegal"><p class="privacidad" id="aviso"> Aviso Legal</p></a>
        <a href="#politicadecookies"><p class="privacidad" id="cookies"> Política de Cookies</p></a>
        <p><a href="#avisolegal"><e class="privacidad" id="aviso"> Aviso Legal</e></a></p>

      </div>
    </div>
  </div>
</footer>
  `;
    // var multimedia = document.querySelector("#politicas");
    // multimedia.addEventListener("click", function (seleccion) {
    //   console.log(seleccion);
    //   var h = seleccion.target.id;
    //   console.log("h es", h);
    //   // if (seleccion.target !== this) {
    //   switch (h) {
    //     case "privacidad":
    //       console.log("politicadeprivacidad");
    //       document.getElementById("componente").innerHTML =
    //         "<mi-politicadeprivacidad></mi-politicadeprivacidad>";
    //       break;
    //     case "aviso":
    //       console.log("aviso");
    //       document.getElementById("componente").innerHTML =
    //         "<mi-avisolegal></mi-avisolegal>";
    //       break;
    //     case "cookies":
    //       console.log("cookies");
    //       document.getElementById("componente").innerHTML =
    //         "<mi-politicadecookies></mi-politicadecookies>";
    //       break;
    //   }
    //   // }
    // });
  }
}
//  window.customElements.define('mi-menu', miFooter);
customElements.define("mi-footer", miFooter);
/*************************\
        funciones
/*************************/
// class MiBoton extends HTMLElement {
//   constructor() {
//     super();
//     this.addEventListener("click", function (e) {
//       alert("hola");
//     });
//   }
// }
// customElements.define("mi-boton", MiBoton);
