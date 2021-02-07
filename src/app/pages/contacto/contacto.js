class miContacto extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/pages/contacto/contacto.css";
    </style>
<section class="primera">
<div class="separador5">
    </div>
<img src="/src/assets/images/constructor2.png">


  
</section>
<section id="contact">
          <div class="content">
            <div id="form">
              <form action="contact_me.php" id="contactForm" method="post">
                <span>Name</span>
                <input type="text" name="name" class="name" placeholder="Enter your name" tabindex=1 />
                <span>Email</span>
                <input type="text" name="email" class="email" placeholder="Enter your email" tabindex=2 />
                <span id="captcha"></span>
                <input type="text" name="captcha" class="captcha" maxlength="4" size="4" placeholder="Enter captcha code" tabindex=3 />
                <span>Message</span>
                <textarea class="message" placeholder="Enter your message" tabindex=4></textarea>
                <input type="submit" name="submit" value="Send e-mail" class="submit" tabindex=5>
              </form>
            </div>
      </section>
`;
  }
}
customElements.define("mi-contacto", miContacto);
function captchaCode() {
  console.log("segunda funcio");

  var Numb1, Numb2, Numb3, Numb4, Code;     
  Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
  Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
  
  Code = Numb1 + Numb2 + Numb3 + Numb4;
  $("#captcha span").remove();
  $("#captcha input").remove();
  $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
}

$(function() {
  console.log("primera funcio");
  captchaCode();
  
  $('#contactForm').submit(function(){
    var captchaVal = $("#code").text();
    var captchaCode = $(".captcha").val();
    if (captchaVal == captchaCode) {
      $(".captcha").css({
        "color" : "#609D29"
      });
    }
    else {
      $(".captcha").css({
        "color" : "#CE3B46"
      });
    }
    
    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;   
    var emailText = $(".email").val();
    if (emailFilter.test(emailText)) {
      $(".email").css({
        "color" : "#609D29"
      });
    }
    else {
      $(".email").css({
        "color" : "#CE3B46"
      });
    }
    
    var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
    var nameText = $(".name").val();
    if (nameFilter.test(nameText)) {
      $(".name").css({
        "color" : "#609D29"
      });
    }
    else {
      $(".name").css({
        "color" : "#CE3B46"
      });
    }
    
    var messageText = $(".message").val().length;
    if (messageText > 20) {
      $(".message").css({
        "color" : "#609D29"
      });
    }
    else {
      $(".message").css({
        "color" : "#CE3B46"
      });
    }
    
    if ((captchaVal !== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText < 20)) {
      $("#form").append("<h2>Message no sent!</h2>"); 
      return false;
    }
    if ((captchaVal == captchaCode) && (emailFilter.test(emailText)) && (nameFilter.test(nameText)) && (messageText > 20)) {
      $("#contactForm").css("display", "none");
      $("#form").append("<h2>Message sent!</h2>");
      return false;
    }
  });       
});


