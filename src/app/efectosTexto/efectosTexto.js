class miEfectostexto extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section class="letras">
    <div class="uno" id="uno" onclick="efectos('uno');">
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

    <div class="diez">
        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
        <h1>
            <em>C</em>
            <em class="planet left">O</em>
            <em>S</em>
            <em>M</em>
            <em class="planet right">O</em>
            <em>S</em>
        </h1>
    </div>

    <div class="once">
        <h1 contenteditable data-heading="Micro">Micro</h1>
    </div>

    <div class="doce">
        <div class="word">
	        <span>M</span>
	        <span>I</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
        </div>
    </div>

    <div class="trece">
        <a href="http://www.thismanslife.co.uk" target="_blank">Micro</a>
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


    <div class="g">
        <!-- 
        ALL CREDIT FOR THE SCROLLING TEXT GOES TO Craig Buckler http://www.sitepoint.com/css3-starwars-scrolling-text/ Blame me for the music via embedded video bit
        -->
        <div style="overflow:hidden; position:absolute; left:0; top:0; width:50px; height:25px;">
            <div style="margin-top:-290px;">
                <object width="420" height="315">
                    <param name="movie"
                        value="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2">
                    </param>
                    <param name="allowFullScreen" value="true">
                    </param>
                    <param name="allowscriptaccess" value="always">
                    </param>
                    <embed src="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"
                        type="application/x-shockwave-flash" width="420" height="315" allowscriptaccess="always"
                        allowfullscreen="true"></embed>
                </object>
            </div>
        </div>

        <p id="start">A short time ago in a browser very, very close&hellip;</p>

        <h1>STAR WARS<sub>titles in CSS3</sub></h1>

        <div id="titles">
            <div id="titlecontent">

                <p class="center">EPISODE IV<br />
                    A NEW HOPE FOR CSS3</p>

                <p>It is a period of vendor war.</p>

                <p>This is a demonstration of Star Wars-style scrolling 3D titles in CSS3. It possibly has no
                    practical purpose whatsoever but it looks great and you can impress your friends.</p>

                <p>Before movie-buffs start ranting, I realize Star Wars wasn't the first to use crawling 3D titles,
                    but few of you will remember the Flash Gordon series or the 1936 adaption of HG Wells' "Things
                    to Come".</p>

                <p>Also, by mentioning "Star Wars", everyone will understand what I mean. And I'll receive several
                    thousand more visits.</p>

                <p>The scrolling titles work well in Chrome, Safari and Firefox. Opera doesn't implement 3D
                    transforms yet, but the text will scroll. IE users receive a blank page. A shame, but IE10
                    should support it.</p>

                <p>So how does it work? Well, it's fairly simple. We have an outer absolute DIV (#titles) which is
                    rotated along the X-axis using perspective to give the impression of depth. The same DIV also
                    has an :after psuedo-element which applies a linear gradient so the text appears to fade out.
                </p>

                <p>Inside, we have another absolutely-positioned DIV which contains the text (#titlecontent). The
                    top is set to 100% to ensure it starts off-screen then uses CSS3 animation to move it upward
                    over time. No JavaScript is required.</p>

                <p>You will probably need to adjust the movement amount and timing depending on the quantity of text
                    you want to show. The 3D depth can also be tweaked in the #titles declaration.</p>

                <p>All the code is contained in this single HTML file&hellip;</p>

                <p class="center">View the source, Luke!</p>

                <p>Sorry. Couldn't resist it.</p>

                <p>You're welcome to use this demonstration code in your own sites. Please link back to the original
                    article at:</p>

                <p class="center"><a
                        href="http://www.sitepoint.com/css3-starwars-scrolling-text/">sitepoint.com/<br />css3-starwars-scrolling-text/</a>
                </p>

                <p>and give me a shout on Twitter <a href="https://twitter.com/craigbuckler">@craigbuckler</a>
                    &ndash; I'd love to see how you use and abuse it!</p>

                <p>Finally, Han shot first and the original, unadulterated movies remain the best. Stop fiddling
                    with them, George!</p>
            </div>
        </div>
        <iframe style="visibility:hidden" width="560" height="315" src="https://www.youtube.com/embed/1KAOq7XX2OY"
            frameborder="0" allowfullscreen></iframe>
    </div>




  </section>
    `;
    //---once-----------LETRAS QUE SE MUEVEN
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  }
}


customElements.define("mi-efectostexto", miEfectostexto);

$("#logo-size").change(function () {
  var fontsize = $(this).val() / 10 + "px";
  $("html").css("font-size", fontsize);
});

$("#image-size").change(function () {
  var Width = $(this).val() + "px";
  $("img").css("width", Width);
});

//---i----letras que vibran
$(function () {
  var $jittery = $(".jittery"),
    aText = $jittery.text().split(""),
    letters = "";

  for (var i = 0; i < aText.length; i++) {
    letters += "<span>" + aText[i] + "</span>";
  }

  $jittery.empty().append(letters);

  $.each($("span", $jittery), function (i) {
    $(this).css("animation-delay", "-" + i + "70ms");
  });
});

//---n----------frozen

// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier!
var h1 = document.querySelector("h1");

h1.addEventListener("input", function () {
  this.setAttribute("data-heading", this.innerText);
});


function efectos(id) {
console.log("seleccion de efectos");
    switch (id) {
        case 'uno':
            console.log("seleccion de efectos");

            document.getElementById("uno").style = "animation: blur 0.75s ease-out infinite;";
            break;
    
        default:
            break;
    }
    
}