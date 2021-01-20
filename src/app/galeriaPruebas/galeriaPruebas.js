class miGaleriapruebas extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <style>
      @import "/src/app/galeriaPruebas/galeriaPruebas.css";
    </style>
      <section class="galeriaPruebas">
      <!-- Slider -->
          <div id="ctn-slider" class="ctn-slider">
              <div id="slider" class="slider">
                  <section class="section-slider">
                      <div class="img-slider slider-one">
                          <h1 class="title-slider">
                             Diseños de letras
                          </h1>
                      </div>
                  </section>
      
                  <section class="section-slider">
                      <div class="img-slider slider-two">
                      <section class="letras">
                      <div class="uno letritas" id="uno" onclick="efectos('uno');">
                          ⚠Micro⚠
                      </div>
                      </div>
                  </section>
      
                  <section class="section-slider">
                      <div class="img-slider slider-three">
                      <div class="dos letritas" id="dos" onclick="efectos('dos');">
                      <div class="word">
                          <span>M</span>
                          <span>I</span>
                          <span>C</span>
                          <span>R</span>
                          <span>O</span>
                      </div>       
                  </div>
                      </div>
                  </section>
      
                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="tres letritas" id="tres" onclick="efectos('tres');">
                      <div class="glitch" data-text="Micro">Micro</div>
                  </div>
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="cuatro letritas" id="cuatro" onclick="efectos('cuatro');">
                      <span class="jittery">Micro</span>
                  </div>
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="cinco letritas" id="cinco" onclick="efectos('cinco');">
                      <h1>Micro</h1>
                  </div>
                      </div>
                  </section>
                  
                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="seis letritas" id="seis" onclick="efectos('seis');">
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
                          <!-- Transparent copy of text to keep patterned text selectable -->
                              <use xlink:href="#s-text" class="text--transparent"></use>
                          </svg>
                      </div>
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="siete letritas" id="siete" onclick="efectos('siete');">
                      <h1>Micro</h1>
                  </div>
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-four">
                      <div class="ocho letritas" id="ocho" onclick="efectos('ocho');">
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
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="nueve letritas" id="nueve" onclick="efectos('nueve');">
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
                      </div>
                  </section>

                  <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="diez letritas" id="diez" onclick="efectos('diez');">
                      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
                      <h1>
                          <em>C</em>
                          <em class="planet left">O</em>
                          <em>S</em>
                          <em>M</em>
                          <em class="planet right">O</em>
                      </h1>
                  </div>
                      </div>
                  </section>
    

              <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="once letritas" id="once" onclick="efectos('once');">
                      <h1  data-heading="Micro">Micro</h1>
                  </div>
                      </div>
                  </section>
      

              <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="doce letritas" id="doce" onclick="efectos('doce');">
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
                      </div>
                  </section>
    

              <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="trece letritas" id="trece" onclick="efectos('trece');">
                      <a >Micro</a>
                      <!--<a href="http://www.thismanslife.co.uk" target="_blank">Micro</a>-->
                  </div>
                      </div>
                  </section>
      

              <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="catorce letritas">
                      <div class="test">
                        <p class="small">- Micro -<p/>
                      </div>
                      <svg>
                        <defs>
                            <filter id="squiggly-0">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                          </filter>
                          <filter id="squiggly-1">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                          </filter>
                          
                          <filter id="squiggly-2">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                          </filter>
                          <filter id="squiggly-3">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                          </filter>
                          
                          <filter id="squiggly-4">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                          </filter>
                        </defs> 
                    </svg>
                  </div>
                      </div>
                  </section>
        

              <section class="section-slider">
                      <div class="img-slider slider-five">
                      <div class="fluorescentes letritas">
                      <x-sign>
                      OPEN
                    </x-sign>
                    <x-sign>
                      Come back soon
                    </x-sign>
                    <x-sign>
                      PBR<br>in cans
                    </x-sign>
                    <x-sign>
                      REAL LIVE<br>Hot wings
                    </x-sign>
                    <x-sign>
                      <small>GARDEN PARK</small><br>MOTEL
                    </x-sign>
                    <x-sign>
                      Restrooms
                      <br><small>Yes&mdash;they are bad</small>
                    </x-sign>
                    <x-sign>
                      FREE RADIOS
                    </x-sign>
                    <x-sign>
                      WHO YOU GONNA CALL?
                    </x-sign>
                    <x-sign>
                      Karaoke Inside
                    </x-sign>
                      </div>
                        <div class="k letritas">
                            <div>
                                Micro
                            </div>
                        </div>
                    
                      </div>
                  </section>
          
              <section class="section-slider">
                      <div class="img-slider slider-five">
                          <h1 class="title-slider">
                             Fin
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
      <div class="separator5"></div>
      <section>
          <div id="wallpaper" class="wallpaper"></div>
      </section>
      <div class="separador5"></div>
    `;
    
    //---dos-----------LETRAS QUE SE MUEVEN
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




    //---funcion galeria slider--------------------------
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
        $('#arrow-down-slider').on('click', function() {
        $('html').animate({
          scrollTop: $('#wallpaper').offset().top
        }, 1000);
        });
    
    });
    }
  }
  customElements.define("mi-galeriapruebas", miGaleriapruebas);
  

