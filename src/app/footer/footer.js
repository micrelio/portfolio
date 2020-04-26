class miFooter extends HTMLElement {
    constructor () {
      super();
       }
       connectedCallback (){
           this.innerHTML =
                `
              <footer>
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
                    <p>244 Av. Los Incas - Peru</p>
                </span>
                <span class="fa fa-phone">
                    <p>(+34) 653 251 983 </p>
                </span></br>
                <span class="fa fa-envelope">
                    <p>microa4@gmail.com</p>
                </span>
            </div>
            <div class="footer-columna">
                <h3>Sobre Mi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur repellat autem, error iste
                    odio atque eum assumenda rem aliquam, consequatur excepturi reiciendis corrupti velit aperiam?</p>
            </div>
        </div>
    </div>
    <div class="footer-copy-redes">
        <div class="main-copy-redes">
            <div class="footer-copy">
                &copy; 2020, Todos los derechos reservados - | Micro |.
            </div>
            <div class="footer-redes">
                <a target="blank" class="fa fa-facebook" title="Facebook"
                    href="https://www.facebook.com/micrelio.dev.3"></a>
                <a target="blank" class="fa fa-twitter" href="https://twitter.com/Micrelio"> </a>
                <a target="blank" class="fa fa-Whatsapp" href="https://wa.me/34653251983 "> </a>
                <a target="blank" class="fa fa-Linkedin"
                    href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/"> </a>
                <a target="blank" class="fa fa-Instagram" href="https://www.instagram.com/micrelio.dev/"> </a>
                <a target="blank" class="fa fa-youtube-play"
                    href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA"> </a>
                <a target="blank" class="fa fa-github" href="https://github.com/micrelio"> </a>
            </div>
        </div>
    </div>
</footer>
                `;
       }
    }
  //  window.customElements.define('mi-menu', miFooter);
  customElements.define('mi-footer', miFooter);

  /*************************/

  /*************************/

class MiBoton extends HTMLElement {
  constructor () {
    super();
    this.addEventListener('click', function(e){
      alert('hola');
    });
  }
}
customElements.define('mi-boton', MiBoton);