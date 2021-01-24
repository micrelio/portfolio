class miHover extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    @import "/src/app/pages/disenos/hover.css";
  </style>
<section class="cajonHover">
<div class="menuEfecto hover">
  <a id="nav-button" >
    <span></span>
  </a>
</div>

<div class="ojoMira hover">
				<div class="main clearfix">
				<div class="pojoro">&#9679;</div>
			</div>
</div>

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

    <div class="selectoresHover hover">
        <a  class="one"></a>
        <a  class="two"></a>
        <a  class="three"></a>
        <br />
        <a  class="yon"></a>
        <a  class="goo"></a>
        <a  class="rok"></a>
        <br />
        <a  class="x7"></a>
        <a  class="x8"></a>
        <a  class="x9"></a>
    </div>

    <div class="anillosGiratorios hover">
        <div class="ringHover">
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
                    <td><a><div class="aButton shadow rotateX">&nbsp;2D X&nbsp;</div></a></td>
                    <td><a><div class="aButton shadow rotateY">&nbsp;2D Y&nbsp;</div></a></td>
                    <td><a><div class="aButton shadow rotate">&nbsp;3D&nbsp;</div></a></td>
                </tr>
            </table>
        </div>
        <br/>
    </div>

    <div class="rotarRedesSociales hover">
        <a class="social" target="_blank">
            <div class="front">
                <i class="fa fa-facebook"></i>
            </div>
            <div class="back">
                <i class="fa fa-facebook"></i>
            </div>
        </a>

        <a class="social social-github" target="_blank">
            <div class="front">
                <i class="fa fa-github"></i>
            </div>
            <div class="back">
                <i class="fa fa-github"></i>
            </div>
        </a>

        <a class="social social-googleplus" target="_blank">
            <div class="front">
                <i class="fa fa-google-plus"></i>
            </div>
            <div class="back">
                <i class="fa fa-google-plus"></i>
            </div>
        </a>

        <a class="social social-linkedin" target="_blank">
            <div class="front">
                <i class="fa fa-linkedin"></i>
            </div>
            <div class="back">
                <i class="fa fa-linkedin"></i>
            </div>
        </a>
    </div>
 
    <div class="efectoNav hover">
      <hr>
      <ul class="menu">
          <li>
              <a>
                  <span>About</span>
                  <span>
                      <i class="fas fa-address-card" aria-hidden="true"></i>
                  </span>
              </a>
          </li>
          <li>
              <a>
                  <span>Projects</span>
                  <span>
                      <i class="fas fa-tasks" aria-hidden="true"></i>
                  </span>
              </a>
          </li>
      </ul>
      <hr>
      <ul class="menu" data-animation="to-right">
          <li>
              <a>
                  <span>Clients</span>
                  <span>
                      <i class="fas fa-users" aria-hidden="true"></i>
                  </span>
              </a>
          </li>
          <li>
              <a>
                  <span>Contact</span>
                  <span>
                      <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
                  </span>
              </a>
          </li>
      </ul>
      <hr>
    </div>

    <div class="efectoNav2 hover">
        <nav id="nav-1">
            <a class="link-1" >Home</a>
            <a class="link-1" >About</a>
        </nav>
        <nav id="nav-2">
            <a class="link-2" >Home</a>
            <a class="link-2" >About</a>
        </nav>
        <nav id="nav-3">
            <a class="link-3" >Home</a>
            <a class="link-3" >About</a>
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

    <div class="gota hover">
			<div class="drop"></div>
    </div>
    
    <div class="obturadorColores hover">
        <div class="circle">
            <h1>Micro</h1>
        </div>
    </div>

    <div class="helado hover">
        <div class="container">
            <div class="icecream">
                <div class="flavor">
                    <div class="flavours"></div>
                </div>
                <div class="stick"></div>
            </div>
        </div>
    </div>

    <div class="sobreCorrero hover">
        <div class="envelope">
            <input class="envelope__check" type="checkbox"/>
            <div class="envelope__flap envelope__flap--inside"></div>
            <div class="envelope__flap"></div>
            <div class="envelope__letter">
            <div class="letter">
                <div class="letter__content">
                <p>Hey! 👋</p>
                <p>The whole purpose of places like Starbucks is for people with no decision-making ability whatsoever to make six decisions just to buy one cup of coffee. Short, tall, light, dark, caf, decaf, low-fat, non-fat, etc. 😕</p>
                </div>
                <div class="letter__content"></div>
                <div class="letter__content">
                <p>So people who don't know what the hell they're doing or who on earth they are can, for only $2.95, get not just a cup of coffee but an absolutely defining sense of self: Tall. Decaf. Cappuccino. ☕️</p><span class="sign-off">Joe Fox</span>
                </div>
            </div>
            </div>
            <div class="envelope__back"></div>
        </div>
    </div>

    <div class="redondoHover hover">
      <figure class="snip1566"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample19.jpg" alt="sq-sample19" />
        <figcaption><i class="ion-android-star-outline"></i></figcaption>
        <a ></a>
      </figure>
    </div>

    <div class="cargando hover">
        <div id="deadline">
        <svg preserveAspectRatio="none" id="line" viewBox="0 0 581 158" enable-background="new 0 0 581 158">
        <g id="fire">
            <rect id="mask-fire-black" x="511" y="41" width="38" height="34"/>
            <g>
            <defs>
                <rect id="mask_fire" x="511" y="41" width="38" height="34"/>
            </defs>
            <clipPath id="mask-fire_1_">
                <use xlink:href="#mask_fire"  overflow="visible"/>
            </clipPath>
            <g id="group-fire" clip-path="url(#mask-fire_1_)">
                <path id="red-flame" fill="#B71342" d="M528.377,100.291c6.207,0,10.947-3.272,10.834-8.576 c-0.112-5.305-2.934-8.803-8.237-10.383c-5.306-1.581-3.838-7.9-0.79-9.707c-7.337,2.032-7.581,5.891-7.11,8.238 c0.789,3.951,7.56,4.402,5.077,9.48c-2.482,5.079-8.012,1.129-6.319-2.257c-2.843,2.233-4.78,6.681-2.259,9.703 C521.256,98.809,524.175,100.291,528.377,100.291z"/>
                <path id="yellow-flame" opacity="0.71" fill="#F7B523" d="M528.837,100.291c4.197,0,5.108-1.854,5.974-5.417 c0.902-3.724-1.129-6.207-5.305-9.931c-2.396-2.137-1.581-4.176-0.565-6.32c-4.401,1.918-3.384,5.304-2.482,6.658 c1.511,2.267,2.099,2.364,0.42,5.8c-1.679,3.435-5.42,0.764-4.275-1.527c-1.921,1.512-2.373,4.04-1.528,6.563 C522.057,99.051,525.994,100.291,528.837,100.291z"/>
                <path id="white-flame" opacity="0.81" fill="#FFFFFF" d="M529.461,100.291c-2.364,0-4.174-1.322-4.129-3.469 c0.04-2.145,1.117-3.56,3.141-4.198c2.022-0.638,1.463-3.195,0.302-3.925c2.798,0.821,2.89,2.382,2.711,3.332 c-0.301,1.597-2.883,1.779-1.938,3.834c0.912,1.975,3.286,0.938,2.409-0.913c1.086,0.903,1.826,2.701,0.864,3.924 C532.18,99.691,531.064,100.291,529.461,100.291z"/>
            </g>
            </g>
        </g>
        <g id="progress-trail">
            <path fill="#FFFFFF" d="M491.979,83.878c1.215-0.73-0.62-5.404-3.229-11.044c-2.583-5.584-5.034-10.066-7.229-8.878
                                    c-2.854,1.544-0.192,6.286,2.979,11.628C487.667,80.917,490.667,84.667,491.979,83.878z"/>
            <path fill="#FFFFFF" d="M571,76v-5h-23.608c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125
                                    c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333
                                    s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17
                                    c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17c0-2.762-2.238-5-5-5h-3V76H571z"/>
            <path fill="#FFFFFF" d="M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                                    s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"/>
        </g>
        <g>
            <defs>
            <path id="SVGID_1_" d="M484.5,75.584c-3.172-5.342-5.833-10.084-2.979-11.628c2.195-1.188,4.646,3.294,7.229,8.878
                                    c2.609,5.64,4.444,10.313,3.229,11.044C490.667,84.667,487.667,80.917,484.5,75.584z M571,76v-5h-23.608
                                    c0.476-9.951-4.642-13.25-4.642-13.25l-3.125,4c0,0,3.726,2.7,3.625,5.125c-0.071,1.714-2.711,3.18-4.962,4.125H517v5h10v24h-25
                                    v-5.666c0,0,0.839,0,2.839-0.667s6.172-3.667,4.005-6.333s-7.49,0.333-9.656,0.166s-6.479-1.5-8.146,1.917
                                    c-1.551,3.178,0.791,5.25,5.541,6.083l-0.065,4.5H16c-2.761,0-5,2.238-5,5v17c0,2.762,2.239,5,5,5h549c2.762,0,5-2.238,5-5v-17
                                    c0-2.762-2.238-5-5-5h-3V76H571z M535,65.625c1.125,0.625,2.25-1.125,2.25-1.125l11.625-22.375c0,0,0.75-0.875-1.75-2.125
                                    s-3.375,0.25-3.375,0.25s-8.75,21.625-9.875,23.5S533.875,65,535,65.625z"/>
            </defs>
            <clipPath id="SVGID_2_">
            <use xlink:href="#SVGID_1_"  overflow="visible"/>
            </clipPath>
            <rect id="progress-time-fill" x="-100%" y="34" clip-path="url(#SVGID_2_)" fill="#BE002A" width="586" height="103"/>
        </g>
    
        <g id="death-group">
            <path id="death" fill="#BE002A" d="M-46.25,40.416c-5.42-0.281-8.349,3.17-13.25,3.918c-5.716,0.871-10.583-0.918-10.583-0.918
                                            C-67.5,49-65.175,50.6-62.083,52c5.333,2.416,4.083,3.5,2.084,4.5c-16.5,4.833-15.417,27.917-15.417,27.917L-75.5,84.75
                                            c-1,12.25-20.25,18.75-20.25,18.75s39.447,13.471,46.25-4.25c3.583-9.333-1.553-16.869-1.667-22.75
                                            c-0.076-3.871,2.842-8.529,6.084-12.334c3.596-4.22,6.958-10.374,6.958-15.416C-38.125,43.186-39.833,40.75-46.25,40.416z
                                            M-40,51.959c-0.882,3.004-2.779,6.906-4.154,6.537s-0.939-4.32,0.112-7.704c0.82-2.64,2.672-5.96,3.959-5.583
                                            C-39.005,45.523-39.073,48.8-40,51.959z"/>
            <path id="death-arm" fill="#BE002A" d="M-53.375,75.25c0,0,9.375,2.25,11.25,0.25s2.313-2.342,3.375-2.791
                                                c1.083-0.459,4.375-1.75,4.292-4.75c-0.101-3.627,0.271-4.594,1.333-5.043c1.083-0.457,2.75-1.666,2.75-1.666
                                                s0.708-0.291,0.5-0.875s-0.791-2.125-1.583-2.959c-0.792-0.832-2.375-1.874-2.917-1.332c-0.542,0.541-7.875,7.166-7.875,7.166
                                                s-2.667,2.791-3.417,0.125S-49.833,61-49.833,61s-3.417,1.416-3.417,1.541s-1.25,5.834-1.25,5.834l-0.583,5.833L-53.375,75.25z"/>
            <path id="death-tool" fill="#BE002A" d="M-20.996,26.839l-42.819,91.475l1.812,0.848l38.342-81.909c0,0,8.833,2.643,12.412,7.414
                                                    c5,6.668,4.75,14.084,4.75,14.084s4.354-7.732,0.083-17.666C-10,32.75-19.647,28.676-19.647,28.676l0.463-0.988L-20.996,26.839z"/>
        </g>
        <path id="designer-body" fill="#FEFFFE" d="M514.75,100.334c0,0,1.25-16.834-6.75-16.5c-5.501,0.229-5.583,3-10.833,1.666
                                                    c-3.251-0.826-5.084-15.75-0.834-22c4.948-7.277,12.086-9.266,13.334-7.833c2.25,2.583-2,10.833-4.5,14.167
                                                    c-2.5,3.333-1.833,10.416,0.5,9.916s8.026-0.141,10,2.25c3.166,3.834,4.916,17.667,4.916,17.667l0.917,2.5l-4,0.167L514.75,100.334z
                                                    "/>
    
        <circle id="designer-head" fill="#FEFFFE" cx="516.083" cy="53.25" r="6.083"/>
    
        <g id="designer-arm-grop">
            <path id="designer-arm" fill="#FEFFFE" d="M505.875,64.875c0,0,5.875,7.5,13.042,6.791c6.419-0.635,11.833-2.791,13.458-4.041s2-3.5,0.25-3.875
                                                    s-11.375,5.125-16,3.25c-5.963-2.418-8.25-7.625-8.25-7.625l-2,1.125L505.875,64.875z"/>
            <path id="designer-pen" fill="#FEFFFE" d="M525.75,59.084c0,0-0.423-0.262-0.969,0.088c-0.586,0.375-0.547,0.891-0.547,0.891l7.172,8.984l1.261,0.453
                                                    l-0.104-1.328L525.75,59.084z"/>
        </g>
        </svg>   
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

    <div class="slider">
    <!-- Slider -->
    <!-- Slider -->
<section>
	<div id="ctn-slider" class="ctn-slider">
		<div id="slider" class="slider">
			<section class="section-slider">
				<div class="img-slider slider-one">
					<h1 class="title-slider">
						Creamos Aplicaciones Web
					</h1>
				</div>
			</section>

			<section class="section-slider">
				<div class="img-slider slider-two">
					<h1 class="title-slider">
						Tenemos Los Mejores Servidores
					</h1>
				</div>
			</section>

			<section class="section-slider">
				<div class="img-slider slider-three">
					<h1 class="title-slider">
						Tenemos Las Mejores Ideas
					</h1>
				</div>
			</section>

			<section class="section-slider">
				<div class="img-slider slider-four">
					<h1 class="title-slider">
						Nos Apasiona Ayudar A Los Clientes
					</h1>
				</div>
			</section>

			<section class="section-slider">
				<div class="img-slider slider-five">
					<h1 class="title-slider">
						Planteamos Las Mejores Soluciones
					</h1>
				</div>
			</section>
		</div>

		<!-- Botón de ir a la siguiente sección slider -->
		<div class="move-slider">
			<i id="arrow-down-slider" class="fa fa-chevron-down arrow-down-slider" aria-hidden="true"></i>
		</div>
	</div>
</section>

<section>
	<div id="wallpaper" class="wallpaper"></div>
</section>


    <div class="bordeAnimado">
      <div class="demo-1 demo">
                   <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>D</h3>
                <span>2012</span>
                <span>Broccoli, Asparagus, Curry</span>
            </div>
    </div>
    <div class="demo-2 demo">
                   <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>J</h3>
                <span>2012</span>
                <span>Walnut, Pineapple</span>
            </div>
            
    </div>
    <div class="demo-3 demo">
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>B</h3>
                <span>2012</span>
                <span>Marmalade, Honey</span>
            </div>
    </div>
    <div class="demo-4 demo">
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="900" y2="0"/>
                    <line class="left" x1="0" y1="460" x2="0" y2="-920"/>
                    <line class="bottom" x1="300" y1="460" x2="-600" y2="460"/>
                    <line class="right" x1="300" y1="0" x2="300" y2="1380"/>
                </svg>
                <h3>C</h3>
                <span>2012</span>
                <span>Berry, Spinach</span>
            </div>
    </div>
    </div>

    <div class="abecedarioEfecto">
        <div class="abecedarioBloques">
            <ul class="grid">
                <li class="ot-letter-left"><span data-letter="C">C</span></li>
                <li class="ot-letter-top"><span data-letter="J">J</span></li>
                <li class="ot-letter-right"><span data-letter="8">8</span></li>
                <li class="ot-letter-bottom"><span data-letter="A">A</span></li>
                <li class="ot-letter-left"><span data-letter="O">O</span></li>
                <li class="ot-letter-left"><span data-letter="Q">Q</span></li>
                <li class="ot-letter-right"><span data-letter="S">S</span></li>
                <li class="ot-letter-left"><span data-letter="B">B</span></li>
                <li class="ot-letter-top"><span data-letter="L">L</span></li>
                <li class="ot-letter-right"><span data-letter="T">T</span></li>
                <li class="ot-letter-left"><span data-letter="K">K</span></li>
                <li class="ot-letter-top"><span data-letter="S">S</span></li>
                <li class="ot-letter-left"><span data-letter="Z">Z</span></li>
                <li class="ot-letter-top"><span data-letter="3">3</span></li>
                <li class="ot-letter-right"><span data-letter="D">D</span></li>
                <li class="ot-letter-bottom"><span data-letter="I">I</span></li>
                <li class="ot-letter-right"><span data-letter="H">H</span></li>
                <li class="ot-letter-bottom"><span data-letter="Q">Q</span></li>
                <li class="ot-letter-right"><span data-letter="E">E</span></li>
                <li class="ot-letter-left"><span data-letter="A">A</span></li>
                <li class="ot-letter-top"><span data-letter="P">P</span></li>
                <li class="ot-letter-right"><span data-letter="F">F</span></li>
                <li class="ot-letter-left"><span data-letter="S">S</span></li>
                <li class="ot-letter-top"><span data-letter="K">K</span></li>
                <li class="ot-letter-left"><span data-letter="U">U</span></li>
                <li class="ot-letter-top"><span data-letter="L">L</span></li>
                <li class="ot-letter-right"><span data-letter="6">6</span></li>
                <li class="ot-letter-bottom"><span data-letter="R">R</span></li>
                <li class="ot-letter-left"><span data-letter="O">O</span></li>
                <li class="ot-letter-bottom"><span data-letter="V">V</span></li>
                <li class="ot-letter-right"><span data-letter="S">S</span></li>
                <li class="ot-letter-left"><span data-letter="Q">Q</span></li>
                <li class="ot-letter-top"><span data-letter="J">J</span></li>
                <li class="ot-letter-right"><span data-letter="G">G</span></li>
                <li class="ot-letter-left"><span data-letter="R">R</span></li>
            </ul>
        </div>
    </div><!-- /container -->
    
    <div class="store">
    <div class="placeholder"></div>
</div>

  <div class="cartas3d">
  <div class="wrapper">
    <div class="container" id="c0">
      <div class="image" id="i0">
              <div class="city">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 300 225" style="enable-background:new 0 0 300 225;" xml:space="preserve">
        <ellipse class="st4" id="sh1" cx="170.5" cy ="124.75" rx="37.5" ry="37.5"/>
        <ellipse id="XMLID_15_" class="st4" cx="170.5" cy="124.75" rx="27.5" ry="27.5"/>
        <polygon id="XMLID_1_" class="st2" points="-0.301,224.5 74.849,149.5 150,224.5 "/>
        <polygon id="XMLID_2_" class="st0" points="108,224.5 74.849,149.5 150,224.5 "/>
        <polygon id="XMLID_4_" class="st2" points="207.256,225.5 253.849,179 300.443,225.5 "/>
        <polygon id="XMLID_3_" class="st0" points="274.403,225.5 253.849,179 300.443,225.5 "/>
        <line id="XMLID_5_" class="st1" x1="179" y1="202" x2="179" y2="226"/>
        <line id="XMLID_6_" class="st1" x1="179" y1="207" x2="190" y2="207"/>
        <line id="XMLID_7_" class="st1" x1="172" y1="214" x2="180" y2="214"/>
        <line id="XMLID_8_" class="st1" x1="190" y1="202" x2="190" y2="207"/>
        <line id="XMLID_9_" class="st1" x1="172" y1="207" x2="172" y2="214"/>
        <circle id="XMLID_10_" class="st3" cx="87.5" cy="98.5" r="1.5"/>
        <circle id="XMLID_11_" class="st3" cx="24.5" cy="68.5" r="2.5"/>
        <circle id="XMLID_12_" class="st3" cx="219.5" cy="18.5" r="1.5"/>
        <circle id="XMLID_13_" class="st3" cx="272.5" cy="03.5" r="2.0"/>
        <circle id="XMLID_14_" class="st3" cx="144.5" cy="12.5" r="1.0"/>
        <circle id="XMLID_10_" class="st3" cx="107.5" cy="328.5" r="1.5"/>
        <circle id="XMLID_11_" class="st3" cx="24.5" cy="58.5" r="2.5"/>
        <circle id="XMLID_12_" class="st3" cx="19.5" cy="128.5" r="1.5"/>
        <circle id="XMLID_13_" class="st3" cx="72.5" cy="113.5" r="2.0"/>
        <circle id="XMLID_14_" class="st3" cx="174.5" cy="92.5" r="1.0"/>
        </svg>
        </div>
      </div>
      <div class="story" id="s0">
        <div class="info">
        <h3>Pyramids</h3>
        <p> Built during a time when Egypt was one of the richest and most powerful civilizations in the world. Their massive scale reflects the unique role that the pharaoh played in ancient Egyptian society.</p>
        </div>
      </div>
    </div>
    <div class="container" id="c1">
      <div class="image" id="i1">
        <div class="city">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 225" style="enable-background:new 0 0 300 225;" xml:space="preserve">
        <ellipse class="st5" id="sh3" cx="150.5" cy ="224.75" rx="77.5" ry="77.5"/>

        <ellipse class="st5" id="sh2" cx="150.5" cy ="224.75" rx="57.5" ry="57.5"/>
        <ellipse id="XMLID_15_" class="st5" cx="150.5" cy="224.75" rx="37.5" ry="37.5"/>

        <path id="XMLID_1_" class="st6" d="M68.955,225H47.93l8.333-53.171c0.213-1.361,1.386-2.364,2.763-2.364h6.202
          c1.464,0,2.68,1.129,2.789,2.588l3.727,49.942C71.865,223.617,70.581,225,68.955,225z"/>
        <polygon id="XMLID_2_" class="st6" points="111.754,225 90.203,225 96.005,169.465 103.051,169.465 "/>
        <path id="XMLID_3_" class="st6" d="M112.233,175.682H50.767c-3.855,0-6.981-3.125-6.981-6.981v-3.182
          c0-3.796,3.033-6.896,6.827-6.979l61.466-1.351c3.914-0.086,7.134,3.064,7.134,6.979v4.533
          C119.214,172.556,116.089,175.682,112.233,175.682z"/>
        <path id="XMLID_4_" class="st6" d="M202.538,225h-15.319c-2.837,0-5.444,0.24-5.005-2.25l8.296-47.01
          c0.352-1.997,2.289-3.468,4.565-3.468h3.721c2.419,0,4.428,1.656,4.608,3.798l3.741,44.52C207.346,222.971,205.225,225,202.538,225z
          "/>
        <polygon id="XMLID_5_" class="st6" points="245.98,225 223.157,225 231.421,172.272 242.045,172.272 "/>
        <polygon id="XMLID_6_" class="st6" points="283.798,225 262.163,225 267.988,169.25 275.061,169.25 "/>
        <path id="XMLID_7_" class="st6" d="M275.011,178.032h-84.307c-4.478,0-8.107-3.63-8.107-8.107v-8.817
          c0-4.669,3.933-8.373,8.593-8.093l84.307,5.064c4.281,0.257,7.621,3.804,7.621,8.093v3.754
          C283.118,174.403,279.489,178.032,275.011,178.032z"/>

        <circle id="XMLID_11_" class="st7" cx="24.5" cy="68.5" r="2.5"/>
        <circle id="XMLID_12_" class="st7" cx="219.5" cy="28.5" r="1.5"/>
        <circle id="XMLID_13_" class="st7" cx="272.5" cy="103.5" r="2.0"/>
        <circle id="XMLID_14_" class="st7" cx="144.5" cy="92.5" r="1.0"/>

        <circle id="XMLID_11_" class="st7" cx="4.5" cy="88.5" r="2.5"/>
        <circle id="XMLID_12_" class="st7" cx="29.5" cy="38.5" r="1.5"/>
        <circle id="XMLID_13_" class="st7" cx="222.5" cy="143.5" r="2.0"/>
        <circle id="XMLID_14_" class="st7" cx="114.5" cy="42.5" r="1.0"/>

        </svg>

        </div>
      </div>
      <div class="story" id="s1">
        <div class="info">
          <h3>Stonehenge</h3>
        <p> Stonehenge is a prehistoric monument in Wiltshire, England. It was constructed in several stages between 3000 and 1500 B.C., spanninng to the Bronze Age.</p>
        </div>
      </div>
    </div>
    <div class="container" id="c2">
      <div class="image" id="i2">
        <div class="city">
        <?xml version="1.0" encoding="utf-8"?>


        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 225" style="enable-background:new 0 0 300 225;" xml:space="preserve">
        <ellipse class="st5" id="sh3" cx="150.5" cy ="224.75" rx="77.5" ry="77.5"/>

        <ellipse class="st5" id="sh2" cx=	"150.5" cy ="224.75" rx="57.5" ry="57.5"/>
        <ellipse id="XMLID_15_" class="st5" cx="150.5" cy="224.75" rx="37.5" ry="37.5"/>
        l:none;stroke:#000000;stroke-miterlimit:10;}
        </style>l:none;stroke:#000000;stroke-miterlimit:10;}
        </style>
        l:none;stroke:#000000;stroke-miterlimit:10;}
        </style>
        <polygon id="XMLID_1_" class="st10" points="69.807,224.719 72.715,209.374 71.974,203.342 120.42,211.753 118.199,217.581 
          115.799,232.384 "/>
        <polygon id="XMLID_2_" class="st10" points="77.295,204.276 79.544,191.37 78.827,186.294 119.809,193.405 118.277,198.349 
          116.264,210.769 "/>
        <polygon id="XMLID_3_" class="st10" points="80.163,186.582 82.413,173.676 81.696,168.6 122.677,175.711 121.146,180.655 
          119.132,193.075 "/>
        <polygon id="XMLID_4_" class="st10" points="83.032,168.888 85.282,155.982 84.565,150.906 125.546,158.017 124.015,162.961 
          122.001,175.381 "/>
        <polygon id="XMLID_5_" class="st10" points="85.901,151.194 88.151,138.288 87.433,133.212 128.415,140.323 126.884,145.267 
          124.87,157.687 "/>
        <polygon id="XMLID_6_" class="st10" points="88.77,133.5 91.019,120.594 90.302,115.518 131.284,122.629 129.752,127.573 
          127.739,139.993 "/>
        <polygon id="XMLID_7_" class="st10" points="91.638,115.806 93.888,102.9 93.171,97.824 134.152,104.935 132.621,109.879 
          130.607,122.299 "/>
        <path id="XMLID_8_" class="st10" d="M127.114,103.327L99.59,98.865l2.466-15.208c0.608-3.75,4.14-6.296,7.89-5.688l13.452,2.181
          c4.022,0.652,6.754,4.441,6.102,8.463L127.114,103.327z"/>
        <line id="XMLID_9_" class="st11" x1="109.946" y1="77.968" x2="84.783" y2="226.86"/>
        <line id="XMLID_10_" class="st11" x1="115.708" y1="79.915" x2="90.545" y2="228.807"/>
        <line id="XMLID_11_" class="st11" x1="120.804" y1="79.728" x2="95.641" y2="228.62"/>
        <line id="XMLID_12_" class="st11" x1="125.739" y1="80.529" x2="100.577" y2="229.421"/>
        <line id="XMLID_13_" class="st11" x1="100.502" y1="98.724" x2="75.339" y2="247.616"/>
        <line id="XMLID_14_" class="st11" x1="128.141" y1="103.205" x2="102.978" y2="252.097"/>
        <circle id="XMLID_11_" class="st7" cx="24.5" cy="68.5" r="2.5"/>
        <circle id="XMLID_12_" class="st7" cx="119.5" cy="28.5" r="1.5"/>
        <circle id="XMLID_13_" class="st7" cx="172.5" cy="103.5" r="2.0"/>
        <circle id="XMLID_14_" class="st7" cx="244.5" cy="92.5" r="1.0"/>
        <circle id="XMLID_11_" class="st7" cx="214.5" cy="18.5" r="2.5"/>
        <circle id="XMLID_12_" class="st7" cx="119.5" cy="38.5" r="1.5"/>
        <circle id="XMLID_13_" class="st7" cx="172.5" cy="203.5" r="2.0"/>
        <circle id="XMLID_14_" class="st7" cx="144.5" cy="12.5" r="1.0"/>

        </svg>

        </div>
      </div>
      <div class="story" id="s2">
        <div class="info">
        <h3>Tower of Pisa</h3>
        <p> The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt</p>

        </div>
      </div>
    </div>

    <div class="page">
    <h4>Hover the card</h4>
    <ul><li> <<< </li>

    <li> >>> </li>
    </ul>
    </div>

  </div>
  </div>



  
</section>
    `;
    //---slider---------------------------------------------------
    $(document).ready(function() {
      // Guardar el contenedor principal
      let containerSlider = $('#slider');
    
      // Guardar las secciones del slider
      let sectionSlider = containerSlider.find('.section-slider');
    
      // Guardar numero de secciones
      let sectionLength = sectionSlider.length;
    
      // Crear un contenedor interno
      containerSlider.wrapInner('<div class=" slider-inner" />');
      let containerInner = $('.slider-inner');
    
      // Definir el ancho del contenedor interno
      containerInner.css({
        'width': 100 * sectionLength + '%'
      });
    
      sectionSlider.css({
        'width': 100 / sectionLength + '%'
      });
    
      // Crear botones para avanzar y retroceder
      containerSlider.after('<i id="prev" class="fa fa-chevron-left arrows prev" aria-hidden="true"></i>');
      containerSlider.after('<i id="next" class="fa fa-chevron-right arrows next" aria-hidden="true"></i>');
    
      // Guardar los botones en variables
      let prev = $('#prev');
      let next = $('#next');
    
      // Envolver los botones
      next.add(prev).wrapAll('<div class="slider-nav" />');
    
      /*
        Crear la función para navegar entre los slides
      */
    
      // Indice para moverse entre los slides
      let i = 0;
    
      // Escribir la función para moverse
      function moveSlider() {
        if (i == 0) {
          containerInner.css({
            'left': 0 + '%'
          });
        } 
        else if (i > 0) {
          containerInner.css({
            'left': '-' + 100 * i + '%'
          });
        }
      }
    
      // Validación para moverse a la siguiente imágen
      next.on('click', function moveNextSlider() {
        if (i < sectionLength - 1) {
          i++;
          moveSlider();
        }
      });
    
      // Validación para moverse a la anterior imágen
      prev.on('click', function movePrevSlider() {
        if (i > 0) {
          i--;
          moveSlider();
        }
      });
    
      // Ejecuta el slider automáticamente
      let autoSlider = setInterval(function moveAutoSlider() {
        // Si el menú esta de color negro o el slider tiene la clase stop-slider no sigue el slider en automático
        if ($('#slider').hasClass('stop-slider')) {
          clearInterval(autoSlider);
        }
    
        // En caso de que este posicionado en la 1ra imágen del slider se ejecuta automáticamente cada 5 segundos
        else if (i < sectionLength -1) {
          moveSlider(i++);
        }
      }, 5000);
    
      // Validación para cuando le den click al botón de la hamburguesa, los links del menu, al logo del menú, las flechas del slider y la flecha de la siguiente sección
      // Le agregue al slider la clase stop-slider así cuando se cumpla la condicional de la función moverAutomaticamenteSlider
      $('#arrow-down-slider, .arrows').on('click', function() {
        $('#slider').addClass('stop-slider');
      });
    
      // Validación para que cuando el scroll este en una posicón distinta a arriba osea a 0px el slider se detenga y deje de ser automático
      $(window).on('load scroll resize', function() {
        if ($(this).scrollTop() > 0) {
          $('#slider').addClass('stop-slider');
        }
      });
    
      // Si pasamos el cursor por el slider aparecen las flechas de lo contrario se ocultan
      $('#ctn-slider').hover(function() {
        $('.arrows').fadeToggle();
      });
    
      // Validacion para que con el gesto de dezlizar se pasen las imgs del slider
      let interactiveElements = $('#arrow-down-slider, .arrows');
      let active = 1;
      let tolerance = 100;
      
      function swipeScreen() {
        $('#slider').on('mousedown touchstart', function(e) {
          $(this).addClass('stop-slider');
          let touch = e.originalEvent.touches;
          let start = touch ? touch[0].pageX : e.pageX;
          let difference;
    
          $(this).on('mousemove touchmove', function(e) {
            let contact = e.originalEvent.touches;
            end = contact ? contact[0].pageX : e.pageX;
            difference = end-start;
          });
    
          // On touch end
          $(this).on('mouseup touchend', function(e) {
            e.preventDefault();
    
            // Swipe right
            if (active < sectionLength && difference < -tolerance) {
              next.trigger('click');
              active += 1;
            }
    
            // Swipe left
            if (active > 1 && difference > tolerance) {
              prev.trigger('click');
              active -= 1;
            }
    
            $(this).off('mousemove touchmove');
          });
        });
      }
    
      swipeScreen();
    
      // Prevent swipe on interactive elements
      interactiveElements.on('touchstart touchend touchup', function(e) {
        e.stopPropagation();
      });
      
      // Eventos de teclado
      // Flecha derecha = 39
      // Flecha izquierda = 37
      // trigger es encadenar eventos, que un evento dispare otro
      $(document).on('keydown', function(e) {
        switch (e.which) {
          case 39:
          next.trigger('click');
          break;
          case 37:
          prev.trigger('click');	
          break;
        }
      });
      
      // Validación para que cuando le de click a la flecha del slider lo lleve a la siguiente sección osea servicios, contacto, quiénes somos y soporte
      // $('#arrow-down-slider').on('click', function() {
      //   $('html').animate({
      //     scrollTop: $('#wallpaper').offset().top
      //   }, 1000);
      // });
    
    });


    

    //---menuEfecto-------------------------------------------------
    document.querySelector("#nav-button").addEventListener("click", function () {
      this.classList.toggle("active");
    });
    
    //---estore-------------------------------------------------------
    
    var options = {
        // imgSrc1:"//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBanana.jpg",
        // imgSrc2:"//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBananaInverted.jpg",

        // imgSrc1:"//sm.ign.com/t/ign_latam/screenshot/default/goku-susanoo_7by3.1200.jpg",
        // imgSrc2:"//pm1.narvii.com/6826/87a646ab2c50879c39ad37acec84e8f03e80c9b3v2_hq.jpg",
        imgSrc1:"//i.pinimg.com/474x/a7/9f/a3/a79fa32e4eafc944b1ea2eb5ad798bdc.jpg",
        imgSrc2:"//i.pinimg.com/originals/f9/1c/18/f91c18596c24c68386c790c50e79e953.jpg",
        // imgSrc1:"//pm1.narvii.com/7002/8550132419d8266a03e87e6e27fc7d7996495252r1-750-500v2_128.jpg",
        // imgSrc2:"//pm1.narvii.com/7067/0eebd566b87bd2b0cbaddeb894b6907c5c9c3c51r1-640-800v2_128.jpg",
        containerName : "placeholder",
        columns:16,
        margin:3      }
      
      
      function VenetianBlinds(defaults)
      {
        var cols = defaults.columns;
        var margin = defaults.margin;
        var img1 = defaults.imgSrc1;
        var img2 = defaults.imgSrc2;
        var placeholder = document.getElementsByClassName(defaults.containerName)[0];
        var directionX, directionY;
        
        var column, blind, blindImg;
        var bgImg, rot;
        var colL;
        var colW = (placeholder.offsetWidth / cols) - margin;
        for (var i=0; i < cols; i++)
          {
            colL = ((colW + margin) * i);
            
            column = document.createElement('div');
            column.className = "column";
            column.style.width = colW + "px";
            column.style.left = colL + "px";
            placeholder.appendChild(column); 
            
            for (var j=0; j<4; j++)
              {
                blind = document.createElement('div');
                blind.className = "blind";
                blind.style.width = colW + "px";
                blindImg = document.createElement('div');
                blindImg.className = "blindImg";
                
                switch (j){
                   case 0:
                      TweenMax.set(blind, {rotationY: "0"});
                      bgImg = img1;
                      break;
                  case 1:
                      TweenMax.set(blind, {rotationY: "90"});
                      bgImg = img2;
                      break;
                   case 2: 
                        TweenMax.set(blind, {rotationY: "180"});
                        bgImg = img1;
                        break;              
                    case 3:
                        TweenMax.set(blind, {rotationY: "270"});
                        bgImg = img2;
                        break;
                }
                blindImg.style.width = placeholder.offsetWidth + "px";
                blindImg.style.backgroundImage = "url("+bgImg+")";
                blindImg.style.left = -colL + "px";
      
                column.appendChild(blind);
                blind.appendChild(blindImg);
                
                TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
              }
            
            TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
            
             column.addEventListener("mouseenter", function(event){
                  var elem = event.currentTarget;
                  var rotY = elem._gsTransform.rotationY;
               
                  if(directionX > 0){
                    TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
                  }else{
                    TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
                  }
            })
          }
            document.addEventListener('mousemove', function (event) {
            directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
          });
      }
      
      VenetianBlinds(options);



    
    
  }
}

customElements.define("mi-hover", miHover);

//---cargando---------------------------------------------------------------------
// Init
var $ = jQuery;
var animationTime = 20,
    days = 7;
 
$(document).ready(function(){

    // timer arguments: 
    //   #1 - time of animation in mileseconds, 
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

    var deadlineAnimation = function () {
        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1.5s'});
        },0);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1s'});
        },4000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.7s'});
        },8000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.3s'});
        },12000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.2s'});
        },15000);
    };

    function timer(totalTime, deadline) {
        var time = totalTime * 1000;
        var dayDuration = time / deadline;
        var actualDay = deadline;

        var timer = setInterval(countTime, dayDuration);

        function countTime() {
            --actualDay;
            $('.deadline-days .day').text(actualDay);

            if (actualDay == 0) {
                clearInterval(timer);
                $('.deadline-days .day').text(deadline);
            }
        }
    }

    var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
        $el.html(html);
    }

    deadlineText();

    deadlineAnimation();
    timer(animationTime, days);

    setInterval(function(){
        timer(animationTime, days);
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

});


//---letrasCirculos---------------------------------------

/*

  Shape Shifter
  =============
  A canvas experiment by Kenneth Cachia
  http://www.kennethcachia.com

  Updated code
  ------------
  https://github.com/kennethcachia/Shape-Shifter 

*/


var S = {
    init: function () {
      var action = window.location.href,
          i = action.indexOf('?a=');
  
      S.Drawing.init('.canvas');
      document.body.classList.add('body--ready');
  
      if (i !== -1) {
        S.UI.simulate(decodeURI(action).substring(i + 3));
      } else {
        S.UI.simulate('Shape|Shifter|Type|to start|#rectangle|#countdown 3||');
      }
  
      S.Drawing.loop(function () {
        S.Shape.render();
      });
    }
  };
  
  
  S.Drawing = (function () {
    var canvas,
        context,
        renderFn
        requestFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function(callback) {
                         window.setTimeout(callback, 1000 / 60);
                       };
  
    return {
      init: function (el) {
        canvas = document.querySelector(el);
        context = canvas.getContext('2d');
        this.adjustCanvas();
  
        window.addEventListener('resize', function (e) {
          S.Drawing.adjustCanvas();
        });
      },
  
      loop: function (fn) {
        renderFn = !renderFn ? fn : renderFn;
        this.clearFrame();
        renderFn();
        requestFrame.call(window, this.loop.bind(this));
      },
  
      adjustCanvas: function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
  
      clearFrame: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      },
  
      getArea: function () {
        return { w: canvas.width, h: canvas.height };
      },
  
      drawCircle: function (p, c) {
        context.fillStyle = c.render();
        context.beginPath();
        context.arc(p.x, p.y, p.z, 0, 2 * Math.PI, true);
        context.closePath();
        context.fill();
      }
    }
  }());
  
  
  S.UI = (function () {
    var input = document.querySelector('.ui-input'),
        ui = document.querySelector('.ui'),
        help = document.querySelector('.help'),
        commands = document.querySelector('.commands'),
        overlay = document.querySelector('.overlay'),
        canvas = document.querySelector('.canvas'),
        interval,
        isTouch = false, //('ontouchstart' in window || navigator.msMaxTouchPoints),
        currentAction,
        resizeTimer,
        time,
        maxShapeSize = 30,
        firstAction = true,
        sequence = [],
        cmd = '#';
  
    function formatTime(date) {
      var h = date.getHours(),
          m = date.getMinutes(),
      m = m < 10 ? '0' + m : m;
      return h + ':' + m;
    }
  
    function getValue(value) {
      return value && value.split(' ')[1];
    }
  
    function getAction(value) {
      value = value && value.split(' ')[0];
      return value && value[0] === cmd && value.substring(1);
    }
  
    function timedAction(fn, delay, max, reverse) {
      clearInterval(interval);
      currentAction = reverse ? max : 1;
      fn(currentAction);
  
      if (!max || (!reverse && currentAction < max) || (reverse && currentAction > 0)) {
        interval = setInterval(function () {
          currentAction = reverse ? currentAction - 1 : currentAction + 1;
          fn(currentAction);
  
          if ((!reverse && max && currentAction === max) || (reverse && currentAction === 0)) {
            clearInterval(interval);
          }
        }, delay);
      }
    }
  
    function reset(destroy) {
      clearInterval(interval);
      sequence = [];
      time = null;
      destroy && S.Shape.switchShape(S.ShapeBuilder.letter(''));
    }
  
    function performAction(value) {
      var action,
          value,
          current;
  
      overlay.classList.remove('overlay--visible');
      sequence = typeof(value) === 'object' ? value : sequence.concat(value.split('|'));
      input.value = '';
      checkInputWidth();
  
      timedAction(function (index) {
        current = sequence.shift();
        action = getAction(current);
        value = getValue(current);
  
        switch (action) {
          case 'countdown':
            value = parseInt(value) || 10;
            value = value > 0 ? value : 10;
  
            timedAction(function (index) {
              if (index === 0) {
                if (sequence.length === 0) {
                  S.Shape.switchShape(S.ShapeBuilder.letter(''));
                } else {
                  performAction(sequence);
                }
              } else {
                S.Shape.switchShape(S.ShapeBuilder.letter(index), true);
              }
            }, 1000, value, true);
            break;
  
          case 'rectangle':
            value = value && value.split('x');
            value = (value && value.length === 2) ? value : [maxShapeSize, maxShapeSize / 2];
  
            S.Shape.switchShape(S.ShapeBuilder.rectangle(Math.min(maxShapeSize, parseInt(value[0])), Math.min(maxShapeSize, parseInt(value[1]))));
            break;
  
          case 'circle':
            value = parseInt(value) || maxShapeSize;
            value = Math.min(value, maxShapeSize);
            S.Shape.switchShape(S.ShapeBuilder.circle(value));
            break;
  
          case 'time':
            var t = formatTime(new Date());
  
            if (sequence.length > 0) {
              S.Shape.switchShape(S.ShapeBuilder.letter(t));
            } else {
              timedAction(function () {
                t = formatTime(new Date());
                if (t !== time) {
                  time = t;
                  S.Shape.switchShape(S.ShapeBuilder.letter(time));
                }
              }, 1000);
            }
            break;
  
          default:
            S.Shape.switchShape(S.ShapeBuilder.letter(current[0] === cmd ? 'What?' : current));
        }
      }, 2000, sequence.length);
    }
  
    function checkInputWidth(e) {
      if (input.value.length > 18) {
        ui.classList.add('ui--wide');
      } else {
        ui.classList.remove('ui--wide');
      }
  
      if (firstAction && input.value.length > 0) {
        ui.classList.add('ui--enter');
      } else {
        ui.classList.remove('ui--enter');
      }
    }
  
    function bindEvents() {
      document.body.addEventListener('keydown', function (e) {
        input.focus();
  
        if (e.keyCode === 13) {
          firstAction = false;
          reset();
          performAction(input.value);
        }
      });
  
      input.addEventListener('input', checkInputWidth);
      input.addEventListener('change', checkInputWidth);
      input.addEventListener('focus', checkInputWidth);
  
      help.addEventListener('click', function (e) {
        overlay.classList.toggle('overlay--visible');
        overlay.classList.contains('overlay--visible') && reset(true);
      });
  
      commands.addEventListener('click', function (e) {
        var el,
            info,
            demo,
            tab,
            active,
            url;
  
        if (e.target.classList.contains('commands-item')) {
          el = e.target;
        } else {
          el = e.target.parentNode.classList.contains('commands-item') ? e.target.parentNode : e.target.parentNode.parentNode;
        }
  
        info = el && el.querySelector('.commands-item-info');
        demo = el && info.getAttribute('data-demo');
        url = el && info.getAttribute('data-url');
  
        if (info) {
          overlay.classList.remove('overlay--visible');
  
          if (demo) {
            input.value = demo;
  
            if (isTouch) {
              reset();
              performAction(input.value);
            } else {
              input.focus();
            }
          } else if (url) {
            //window.location = url;
          }
        }
      });
  
      canvas.addEventListener('click', function (e) {
        overlay.classList.remove('overlay--visible');
      });
    }
  
    function init() {
      bindEvents();
      input.focus();
      isTouch && document.body.classList.add('touch');
    }
  
    // Init
    init();
  
    return {
      simulate: function (action) {
        performAction(action);
      }
    }
  }());
  
  
  S.UI.Tabs = (function () {
    var tabs = document.querySelector('.tabs'),
        labels = document.querySelector('.tabs-labels'),
        triggers = document.querySelectorAll('.tabs-label'),
        panels = document.querySelectorAll('.tabs-panel');
  
    function activate(i) {
      triggers[i].classList.add('tabs-label--active');
      panels[i].classList.add('tabs-panel--active');
    }
  
    function bindEvents() {
      labels.addEventListener('click', function (e) {
        var el = e.target,
            index;
  
        if (el.classList.contains('tabs-label')) {
          for (var t = 0; t < triggers.length; t++) {
            triggers[t].classList.remove('tabs-label--active');
            panels[t].classList.remove('tabs-panel--active');
  
            if (el === triggers[t]) {
              index = t;
            }
          }
  
          activate(index);
        }
      });
    }
  
    function init() {
      activate(0);
      bindEvents();
    }
  
    // Init
    init();
  }());
  
  
  S.Point = function (args) {
    this.x = args.x;
    this.y = args.y;
    this.z = args.z;
    this.a = args.a;
    this.h = args.h;
  };
  
  
  S.Color = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  
  S.Color.prototype = {
    render: function () {
      return 'rgba(' + this.r + ',' +  + this.g + ',' + this.b + ',' + this.a + ')';
    }
  };
  
  
  S.Dot = function (x, y) {
    this.p = new S.Point({
      x: x,
      y: y,
      z: 5,
      a: 1,
      h: 0
    });
  
    this.e = 0.07;
    this.s = true;
  
    this.c = new S.Color(255, 255, 255, this.p.a);
  
    this.t = this.clone();
    this.q = [];
  };
  
  S.Dot.prototype = {
    clone: function () {
      return new S.Point({
        x: this.x,
        y: this.y,
        z: this.z,
        a: this.a,
        h: this.h
      });
    },
  
    _draw: function () {
      this.c.a = this.p.a;
      S.Drawing.drawCircle(this.p, this.c);
    },
  
    _moveTowards: function (n) {
      var details = this.distanceTo(n, true),
          dx = details[0],
          dy = details[1],
          d = details[2],
          e = this.e * d;
  
      if (this.p.h === -1) {
        this.p.x = n.x;
        this.p.y = n.y;
        return true;
      }
  
      if (d > 1) {
        this.p.x -= ((dx / d) * e);
        this.p.y -= ((dy / d) * e);
      } else {
        if (this.p.h > 0) {
          this.p.h--;
        } else {
          return true;
        }
      }
  
      return false;
    },
  
    _update: function () {
      if (this._moveTowards(this.t)) {
        var p = this.q.shift();
  
        if (p) {
          this.t.x = p.x || this.p.x;
          this.t.y = p.y || this.p.y;
          this.t.z = p.z || this.p.z;
          this.t.a = p.a || this.p.a;
          this.p.h = p.h || 0;
        } else {
          if (this.s) {
            this.p.x -= Math.sin(Math.random() * 3.142);
            this.p.y -= Math.sin(Math.random() * 3.142);
          } else {
            this.move(new S.Point({
              x: this.p.x + (Math.random() * 50) - 25,
              y: this.p.y + (Math.random() * 50) - 25,
            }));
          }
        }
      }
  
      d = this.p.a - this.t.a;
      this.p.a = Math.max(0.1, this.p.a - (d * 0.05));
      d = this.p.z - this.t.z;
      this.p.z = Math.max(1, this.p.z - (d * 0.05));
    },
  
    distanceTo: function (n, details) {
      var dx = this.p.x - n.x,
          dy = this.p.y - n.y,
          d = Math.sqrt(dx * dx + dy * dy);
  
      return details ? [dx, dy, d] : d;
    },
  
    move: function (p, avoidStatic) {
      if (!avoidStatic || (avoidStatic && this.distanceTo(p) > 1)) {
        this.q.push(p);
      }
    },
  
    render: function () {
      this._update();
      this._draw();
    }
  }
  
  
  S.ShapeBuilder = (function () {
    var gap = 13,
        shapeCanvas = document.createElement('canvas'),
        shapeContext = shapeCanvas.getContext('2d'),
        fontSize = 500,
        fontFamily = 'Avenir, Helvetica Neue, Helvetica, Arial, sans-serif';
  
    function fit() {
      shapeCanvas.width = Math.floor(window.innerWidth / gap) * gap;
      shapeCanvas.height = Math.floor(window.innerHeight / gap) * gap;
      shapeContext.fillStyle = 'red';
      shapeContext.textBaseline = 'middle';
      shapeContext.textAlign = 'center';
    }
  
    function processCanvas() {
      var pixels = shapeContext.getImageData(0, 0, shapeCanvas.width, shapeCanvas.height).data;
          dots = [],
          pixels,
          x = 0,
          y = 0,
          fx = shapeCanvas.width,
          fy = shapeCanvas.height,
          w = 0,
          h = 0;
  
      for (var p = 0; p < pixels.length; p += (4 * gap)) {
        if (pixels[p + 3] > 0) {
          dots.push(new S.Point({
            x: x,
            y: y
          }));
  
          w = x > w ? x : w;
          h = y > h ? y : h;
          fx = x < fx ? x : fx;
          fy = y < fy ? y : fy;
        }
  
        x += gap;
  
        if (x >= shapeCanvas.width) {
          x = 0;
          y += gap;
          p += gap * 4 * shapeCanvas.width;
        }
      }
  
      return { dots: dots, w: w + fx, h: h + fy };
    }
  
    function setFontSize(s) {
      shapeContext.font = 'bold ' + s + 'px ' + fontFamily;
    }
  
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  
    function init() {
      fit();
      window.addEventListener('resize', fit);
    }
  
    // Init
    init();
  
    return {
      imageFile: function (url, callback) {
        var image = new Image(),
            a = S.Drawing.getArea();
  
        image.onload = function () {
          shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
          shapeContext.drawImage(this, 0, 0, a.h * 0.6, a.h * 0.6);
          callback(processCanvas());
        };
  
        image.onerror = function () {
          callback(S.ShapeBuilder.letter('What?'));
        }
  
        image.src = url;
      },
  
      circle: function (d) {
        var r = Math.max(0, d) / 2;
        shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
        shapeContext.beginPath();
        shapeContext.arc(r * gap, r * gap, r * gap, 0, 2 * Math.PI, false);
        shapeContext.fill();
        shapeContext.closePath();
  
        return processCanvas();
      },
  
      letter: function (l) {
        var s = 0;
  
        setFontSize(fontSize);
        s = Math.min(fontSize,
                    (shapeCanvas.width / shapeContext.measureText(l).width) * 0.8 * fontSize, 
                    (shapeCanvas.height / fontSize) * (isNumber(l) ? 1 : 0.45) * fontSize);
        setFontSize(s);
  
        shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
        shapeContext.fillText(l, shapeCanvas.width / 2, shapeCanvas.height / 2);
  
        return processCanvas();
      },
  
      rectangle: function (w, h) {
        var dots = [],
            width = gap * w,
            height = gap * h;
  
        for (var y = 0; y < height; y += gap) {
          for (var x = 0; x < width; x += gap) {
            dots.push(new S.Point({
              x: x,
              y: y,
            }));
          }
        }
  
        return { dots: dots, w: width, h: height };
      }
    };
  }());
  
  
  S.Shape = (function () {
    var dots = [],
        width = 0,
        height = 0,
        cx = 0,
        cy = 0;
  
    function compensate() {
      var a = S.Drawing.getArea();
  
      cx = a.w / 2 - width / 2;
      cy = a.h / 2 - height / 2;
    }
  
    return {
      shuffleIdle: function () {
        var a = S.Drawing.getArea();
  
        for (var d = 0; d < dots.length; d++) {
          if (!dots[d].s) {
            dots[d].move({
              x: Math.random() * a.w,
              y: Math.random() * a.h
            });
          }
        }
      },
  
      switchShape: function (n, fast) {
        var size,
            a = S.Drawing.getArea();
  
        width = n.w;
        height = n.h;
  
        compensate();
  
        if (n.dots.length > dots.length) {
          size = n.dots.length - dots.length;
          for (var d = 1; d <= size; d++) {
            dots.push(new S.Dot(a.w / 2, a.h / 2));
          }
        }
  
        var d = 0,
            i = 0;
  
        while (n.dots.length > 0) {
          i = Math.floor(Math.random() * n.dots.length);
          dots[d].e = fast ? 0.25 : (dots[d].s ? 0.14 : 0.11);
  
          if (dots[d].s) {
            dots[d].move(new S.Point({
              z: Math.random() * 20 + 10,
              a: Math.random(),
              h: 18
            }));
          } else {
            dots[d].move(new S.Point({
              z: Math.random() * 5 + 5,
              h: fast ? 18 : 30
            }));
          }
  
          dots[d].s = true;
          dots[d].move(new S.Point({
            x: n.dots[i].x + cx,
            y: n.dots[i].y + cy,
            a: 1,
            z: 5,
            h: 0
          }));
  
          n.dots = n.dots.slice(0, i).concat(n.dots.slice(i + 1));
          d++;
        }
  
        for (var i = d; i < dots.length; i++) {
          if (dots[i].s) {
            dots[i].move(new S.Point({
              z: Math.random() * 20 + 10,
              a: Math.random(),
              h: 20
            }));
  
            dots[i].s = false;
            dots[i].e = 0.04;
            dots[i].move(new S.Point({ 
              x: Math.random() * a.w,
              y: Math.random() * a.h,
              a: 0.3, //.4
              z: Math.random() * 4,
              h: 0
            }));
          }
        }
      },
  
      render: function () {
        for (var d = 0; d < dots.length; d++) {
          dots[d].render();
        }
      }
    }
  }());
  
  
  S.init();
  