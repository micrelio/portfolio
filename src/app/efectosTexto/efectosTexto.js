class miEfectostexto extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
<section class="letras">
    <div class="uno">
        ⚠ Micro ⚠
    </div>

    <div class="dos">
        <div class='moveText'>
            <div class='moveTextIn'>
                <p>
                    Hello
                </p>
                <ul>
                    <li>world !</li>
                    <li>Micro !</li>
                    <li>users !</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tres">
        <div class="glitch" data-text="Micro">Micro</div>
    </div>

    <div class="cuatro">
        <span class="jittery">Micro</span>
    </div>

    <div class="cinco">
        <h1>Micro</h1>
    </div>

    <div class="seis">
    <svg viewBox="0 0 800 300">
        <!-- Clippath  with text -->
        <clippath id="cp-text">
            <text text-anchor="middle" x="50%" y="70%"  class="colorines" >
                Micro
            </text>
        </clippath>
        <!-- Group for shadow -->
        <g clip-path="url(#cp-text)" class="shadow">
            <rect class="anim-shape anim-shape--shadow"></rect>
        </g>
        <!-- Group with clippath for text-->
        <g clip-path="url(#cp-text)" class="colortext">
            <!-- Animated shapes inside text -->
            <rect width="100%" height="100%" class="anim-shape"></rect>
            <rect width="80%" height="100%" class="anim-shape"></rect>
            <rect width="60%" height="100%" class="anim-shape"></rect>
            <rect width="40%" height="100%" class="anim-shape"></rect>
            <rect width="20%" height="100%" class="anim-shape"></rect>
        </g>
        <!-- Transparent copy of text to keep
   patterned text selectable -->
        <use xlink:href="#s-text" class="text--transparent"></use>
    </svg>
</div>

    
    <div class="siete">
        <h1>Micro</h1>
    </div>

    <div class="ocho">
        <svg>
            <!-- Symbol -->
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text--line">
                    Micro
                </text>
            </symbol>
            <!-- Duplicate symbols -->
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
        </svg>
    </div>

    <div class="nueve">
        <svg>
        <symbol id="s-text">
            <text>
                Elastic
            </text>
        </symbol>
            <g class="g-ants">
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
                <use xlink:href="#s-text" class="text-copy"></use>
            </g>   
        </svg>
    </div>













    <div class="a">
        <h1 contenteditable data-heading="Micro">Micro9</h1>
    </div>





    <div class="k">
    <div>
        Micro
    </div>
</div>

<div class="xxl">
<p><a href="#efectosTexto">RED</a></p>
        <p><a href="#efectosTexto">BLUE</a></p>
        <p><a href="#efectosTexto">Yellow</a></p>
</div>
  </section>
    `;
    }
  }
  customElements.define("mi-efectostexto", miEfectostexto);
 
$('#logo-size').change(function () {                    
    var fontsize = $(this).val()/10 + "px";
    $('html').css("font-size", fontsize );
  });
  
  $('#image-size').change(function () {                    
    var Width = $(this).val() + "px";
    $('img').css("width", Width );
  });



  //---i----letras que vibran
  $(function(){
    var $jittery = $('.jittery'),
        aText    = $jittery.text().split(''),
        letters = '';
    
    for(var i = 0; i < aText.length; i++){
      letters += '<span>'+aText[i]+'</span>';
    }
    
    $jittery.empty().append(letters);
    
    $.each($('span', $jittery), function(i){
      $(this).css('animation-delay', '-'+i+'70ms');
    });
  });


  //---M-----------LETRAS QUE SE MUEVEN
  const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});



//---n----------frozen

// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});