class miHover extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section>
    <div class="discoVinilo hover">
        <div class="case">
            <div class="overlay"></div>
            <img class="cover" src="http://cssdeck.com/uploads/media/items/7/7WMLytU.png"/>
            <div class="slotwrapper">
                <div class="slot"></div>
            </div>
            <div class="vinyl"></div>
        </div>
    </div>

    <div class="anillosGiratorios hover">
        <div>
            <span></span><span></span>
        </div>
    </div>

    <div class="bandera hover">
        <div class="flag">
            <div class="red"></div>
            <div class="white"></div>
            <div class="black"></div>
        </div>
        <p>FLAG OF EGYPT</p>
    </div>

    <div class="rotacion3d hover">
        <br/>
        <div class="content">
            <table align="center">
                <tr>
                    <td><a href="css/main.css"><div class="aButton shadow rotateX">&nbsp;2D X axis&nbsp;</div></a></td>
                    <td><a href="css/main.css"><div class="aButton shadow rotateY">&nbsp;2D Y axis&nbsp;</div></a></td>
                    <td><a href="css/main.css"><div class="aButton shadow rotate">&nbsp;3D 360deg&nbsp;</div></a></td>
                </tr>
            </table>
        </div>
        <br/>
    </div>

    <div class="logoAnimado hover">
        <a href="http://www.netnibbl.es/" class="logo">
            <div class="logo-roundel">
                <span class="logo-site-name">NetNibbl.es</span>
                <span class="left-n">n</span>
                <span class="right-n">n</span>
            </div>
        </a>
    </div>

    <div class="rotarRedesSociales hover">
        <a class="social" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-facebook"></i>
        </div>
        <div class="back">
        <i class="fa fa-facebook"></i>
        </div>
        </a>

        <a class="social social-twitter" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-twitter"></i>
        </div>
        <div class="back">
        <i class="fa fa-twitter"></i>
        </div>
        </a>

        <a class="social social-github" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-github"></i>
        </div>
        <div class="back">
        <i class="fa fa-github"></i>
        </div>
        </a>

        <a class="social social-pinterest" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-pinterest"></i>
        </div>
        <div class="back">
        <i class="fa fa-pinterest"></i>
        </div>
        </a>

        <a class="social social-googleplus" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-google-plus"></i>
        </div>
        <div class="back">
        <i class="fa fa-google-plus"></i>
        </div>
        </a>

        <a class="social social-skype" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-skype"></i>
        </div>
        <div class="back">
        <i class="fa fa-skype"></i>
        </div>
        </a>

        <a class="social social-linkedin" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-linkedin"></i>
        </div>
        <div class="back">
        <i class="fa fa-linkedin"></i>
        </div>
        </a>

        <a class="social social-skype" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-skype"></i>
        </div>
        <div class="back">
        <i class="fa fa-skype"></i>
        </div>
        </a>

        <a class="social social-dribbble" href="https://webbb.be" target="_blank">
        <div class="front">
        <i class="fa fa-dribbble"></i>
        </div>
        <div class="back">
        <i class="fa fa-dribbble"></i>
        </div>
        </a>
    </div>
 
    <div class="efectoNav hover">
        <nav id="nav-1">
        <a class="link-1" href="#">Home</a>
        <a class="link-1" href="#">About</a>
        <a class="link-1" href="#">Contact</a>
        <a class="link-1" href="#">Shop</a>
    </nav>
    
    <nav id="nav-2">
        <a class="link-2" href="#">Home</a>
        <a class="link-2" href="#">About</a>
        <a class="link-2" href="#">Contact</a>
        <a class="link-2" href="#">Shop</a>
    </nav>
    
    <nav id="nav-3">
        <a class="link-3" href="#">Home</a>
        <a class="link-3" href="#">About</a>
        <a class="link-3" href="#">Contact</a>
        <a class="link-3" href="#">Shop</a>
    </nav>
    </div>



    <div class="logoExcentrico hover">
        <div class="wrapper">
            <div class="cssdeck"></div>
        </div>
    </div>

    <div class="diagonalSlide hover">
        <div class="a1">
            <div class="b1">
                <div class="c1"></div>
            </div>
        </div>
    </div>

    <div class="entradaLateral hover">
        <div class="container clearfix">
            <div class="outer">
                <div class="box">
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                    <p>GIVE ME A RAISE DAMNIT</p>
                </div><!--END:box-->
            </div><!--END: outer-->
        </div><!--END: container-->
    </div>

</section>
    `;
  }
}
customElements.define("mi-hover", miHover);
