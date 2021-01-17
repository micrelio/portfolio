class miContacto extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/contacto/contacto.css";
    </style>
<section class="primera">
<div class="separador5">
    </div>
<img src="/src/assets/images/constructor2.png">


  <div id="after_submit"></div>
<form id="contact_form" action="/src/app/contacto/contacto.php" method="POST" enctype="multipart/form-data">
  <div class="row">
    <label class="required" for="name">Your name:</label><br />
    <input id="name" class="input" name="cf_name" type="text" value="" size="30" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">Your email:</label><br />
    <input id="email" class="input" name="cf_email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Your message:</label><br />
    <textarea id="message" class="input" name="cf_message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    
    <input id="submit_button" type="submit" value="Send" />
    <input id="reset_button" type="reset" value="Clear" />
</form>
<div class="separador5">
    </div>
</section>
`;
  }
}
customElements.define("mi-contacto", miContacto);
