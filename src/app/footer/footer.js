class miFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<footer>
  <div class="separator">
  </div>
  <div class="footerContainer">
    <div class="contacto">
      <h3>Contactar</h3>
      <span class="">
        <input type="email" placeholder="Escriba su Correo">
        <input type="submit" value=" Suscribirse">
      </span>
    </div>
    <div class="direccion"> 
      <h3>Dirección</h3>
      <div class="datos">
        <div>
          <p><i class="fa fa-map-marker"></i> Valencia - España</p>
          <p><i class="fa fa-phone"></i> (+34) 653 251 983 </p>
          <p><i class="fa fa-envelope"></i> microa4@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="paginas">
      <h3>Diseños</h3>
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
        <a target="blank" class="iconSocial" title="Facebook" href="https://www.facebook.com/micro6"><img style="" src="/src/assets/images/icons/social/facebook.png"></a>
        <a target="blank" class="iconSocial" href="https://twitter.com/Micrelio"><img style="" src="/src/assets/images/icons/social/twitter.png"></a>
        <a target="blank" class="iconSocial" href="https://wa.me/34653251983"><img style="" src="/src/assets/images/icons/social/whatsapp.png"></a>                    <a target="blank" class="iconSocial" href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/"><img style="" src="/src/assets/images/icons/social/linkedin.png"></a>
        <a target="blank" class="iconSocial" href="https://www.instagram.com/micrelio.dev/"><img style="" src="/src/assets/images/icons/social/instagram.png"></a>
        <a target="blank" class="iconSocial" href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA"><img style="" src="/src/assets/images/icons/social/youtube.png"></a>
        <a target="blank" class="iconSocial" href="https://github.com/micrelio"><img style="" src="/src/assets/images/icons/social/github.png"></a>
      </div>
      <div class="copy">
        &copy; 2020, Todos los derechos reservados - | Micro |.
      </div>
    </div>
  </div>
</footer>
  `;
  }
}
//  window.customElements.define('mi-menu', miFooter);
customElements.define("mi-footer", miFooter);

/*************************/

/*************************/

class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", function (e) {
      alert("hola");
    });
  }
}
customElements.define("mi-boton", MiBoton);
