class miFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<footer>
    <div class="separator">
    </div>
     <div class="footer-container">
        <div class="footer-main">
            <div class="footer-columna">
                <h3>Contactar</h3>
                <input type="email" placeholder="Escriba su Correo">
                <input type="submit" value=" Suscribirse">
            </div>
            <div class="footer-columna">
                <h3>Dirección</h3>
                <span class="fa fa-map-marker">
                   <p>Valencia - España</p>
                </span>
                <span class="fa fa-phone">
                    <p>(+34) 653 251 983 </p>
                </span>
                <span class="fa fa-envelope">
                    <p>microa4@gmail.com</p>
                </span>
            </div>
            <div class="footer-columna">
                <h3>Sobre Mí</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repellat autem, error iste
                odio atque eum assumenda rem aliquam, consequatur excepturi reiciendis corrupti velit aperiam?</p>
            </div>
        </div>
    </div>
    <div class="footer-copy-redes">
        <div class="propiedad">
            <div class="socialmedia">
                <a target="blank" class="iconSocial" title="Facebook" href="https://www.facebook.com/micro6"><img style="" src="/src/assets/images/icons/social/facebook.png"></a>
                <a target="blank" class="iconSocial" href="https://twitter.com/Micrelio"><img style="" src="/src/assets/images/icons/social/twitter.png"></a>
                <a target="blank" class="iconSocial" href="https://wa.me/34653251983"><img style="" src="/src/assets/images/icons/social/whatsapp.png"></a>                    <a target="blank" class="iconSocial" href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/"><img style="" src="/src/assets/images/icons/social/linkedin.png"></a>
                <a target="blank" class="iconSocial" href="https://www.instagram.com/micrelio.dev/"><img style="" src="/src/assets/images/icons/social/instagram.png"></a>
                <a target="blank" class="iconSocial" href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA"><img style="" src="/src/assets/images/icons/social/youtube.png"></a>
                <a target="blank" class="iconSocial" href="https://github.com/micrelio"><img style="" src="/src/assets/images/icons/social/github.png"></a>
            </div>
            <div class="footer-copy">
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
