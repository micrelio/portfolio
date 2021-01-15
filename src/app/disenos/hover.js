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
