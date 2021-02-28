class miWebs extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/pages/webs/webs.css";
    </style>

    <!--
    <div id="contenido1">
    <h2>Contenido 1</h2>
           <h3>NOTA:</h3>
           <h4>Haz scroll hasta el contenido 2, para poder ver aparecer un elemento, informando que estás haciendo scroll sobre el contenido2.</h4>
  </div>

<div id="aviso"><h2>Estás haciendo scroll sobre el contenido 2</h2></div>		


  <div id="contenido2">

    <h2>Contenido2</h2>
    <p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque, por conjeturas verosímiles, se deja entender que se llamaba Quejana. Pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad. 

  Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los más del año, se daba a leer libros de caballerías, con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda. Y llegó a tanto su curiosidad y desatino en esto, que vendió muchas hanegas de tierra de sembradura para comprar libros de caballerías en que leer, y así, llevó a su casa todos cuantos pudo haber dellos; y de todos, ningunos le parecían tan bien como los que compuso el famoso Feliciano de Silva, porque la claridad de su prosa y aquellas entricadas razones suyas le parecían de perlas, y más cuando llegaba a leer aquellos requiebros y cartas de desafíos, donde en muchas partes hallaba escrito: La razón de la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece, que con razón me quejo de la vuestra fermosura. Y también cuando leía: ...los altos cielos que de vuestra divinidad divinamente con las estrellas os fortifican, y os hacen merecedora del merecimiento que merece la vuestra grandeza. 
</p>
  </div>

-->



  
<div class="webs">
<div class="separador5">
    </div>
<h1>Diseños web</h1>
<div class="separador3">
    </div>
    <section id="titaniumGamers" class="titaniumGamers">
         <div class="titulo">
            <a target="blank" href=" https://titaniumgamers.com/">
                <h1>Comunidad </h1><h1>Titanium Gamers</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Diseñada con WordPress tema DIVI (adquirida licencia ilimitada de desarrollador), para la comunidad propia de jugadores <a target="blank" href="https://titaniumgamers.com/">Titanium Gamers</a> durante el confinamiento 2020.<br>
                Creada con:<br>
                <i class="fa fa-check-circle verde"></i> WordPress tema DIVI.
            </p>
        </div>
        <div class="visitar">
            <p>
                <a class="visitar" target="blank" href="https://titaniumgamers.com/">Visitar
                <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </section>
    <div class="separador5">
    </div>
    <section id="tiendaTitanium" class="tiendaTitanium">
         <div class="titulo">
            <a target="blank" href=" https://tiendasamp.titaniumgamers.com/">
            <h1>Tienda</h1>
            <h1>Titanium Gamers</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>Tienda de donaciones PayPal creada durante el verano 2020 para la comunidad propia de jugadores <a target="blank" href="https://tiendasamp.titaniumgamers.com/">Titanium Gamers</a>.<br>
                Estilos:<br>
                <i class="fa fa-check-circle verde"></i> Bootstrap.<br>
                <i class="fa fa-check-circle verde"></i> Display Grid.<br>
                <i class="fa fa-check-circle verde"></i> Display Flex.<br>
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> Javascript.
            </p>
        </div>
        <div class="visitar">
            <p>
                <a class="visitar" target="blank" href="https://tiendasamp.titaniumgamers.com/">Visitar
                <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </section>
    <div class="separador5">
    </div>
    <section id="primeroscoc" class="primeroscoc">
         <div class="titulo">
            <a target="blank" href="https://primeroscoc.titaniumgamers.com/">
            <h1>Primeros</h1>
            <h1>Clash of Clans</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Diseñada como proyecto fin de curso ASIR durante el curso 2017-2018, a la comunidad de gamers <a target="blank" href="https://primeroscoc.titaniumgamers.com/">&#xf006;Primeros&#xf006;</a> jugadores de Clash of Clans.<br>
                Esta API sincroniza con el servidor y muestra los datos de los equipos en tiempo real.<br>
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> PHP.
            </p>
        </div>
        <div class="visitar">
            <p>
            <a class="visitar" target="blank" href="https://primeroscoc.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </section>
    <div class="separador5">
    </div>
    <section id="guerrasOnline" class="guerrasOnline">
        <div class="titulo">
            <a target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">
                <h1>Guerras on Line</h1>
                <h1>Clash of Clans</h1>
            </a>
        </div>
        <div class="descripcion">
            <p>
                Esta página sincroniza con la <a target="blank" href="https://developer.clashofclans.com/#/"> API Clash of Clans</a>, lee un archivo JSON, descarga los datos y muestra con imágenes imitando la estructura real del juego, con búsqueda y selección de equipos por medio de formulario.<br>
                Datos cedidos por <a target="blank" href="https://supercell.com/en/">Supercell</a>.<br> 
                Lenguajes:<br>
                <i class="fa fa-check-circle verde"></i> HTML.<br>
                <i class="fa fa-check-circle verde"></i> CSS.<br>
                <i class="fa fa-check-circle verde"></i> PHP.
            </p>
        </div>
        <div class="visitar">
            <p>
            <a class="visitar" target="blank" href="https://clashofclansguerrasonline.titaniumgamers.com/">Visitar
            <i class="fas fa-arrow-alt-circle-right"></i></a>
            </p>
        </div>
    </section>
    <div class="separador5">
    </div>
</div>
`;

$(document).ready(function() {
    // $('#titaniumGamers').hide(0);
    $('#tiendaTitanium').hide(0);
    $('#primeroscoc').hide(0);
    $('#guerrasOnline').hide(0);
     
     
            $(window).scroll(function(){
                    var windowHeight = $(window).focus();
                    var titaniumGamers = $("#titaniumGamers").offset();
                    var tiendaTitanium = $("#tiendaTitanium").offset();
                    var primeroscoc = $("#primeroscoc").offset();
                    var guerrasOnline = $("#guerrasOnline").offset();

                    if(windowHeight >= titaniumGamers  ){
                        console.log('1');
                            $('#tiendaTitanium').fadeIn(500);
                            // $('#primeroscoc').hide(0);
                            // $('#guerrasOnline').hide(0);
                            }else{
                                console.log('1.1');

                            $('#tiendaTitanium').fadeIn(500);
                            // $('#primeroscoc').hide(0);
                            // $('#guerrasOnline').hide(0);
                        }
                        if(windowHeight >= tiendaTitanium +  tiendaTitanium ){
                            console.log('2');

                            $('#primeroscoc').fadeIn(500);
         
                            }else{
                                console.log('2.2');

                            $('#primeroscoc').fadeIn(500);
                        }
                        if(windowHeight >= primeroscoc  ){
                            console.log('3');

                            $('#guerrasOnline').fadeIn(500);
         
                            }else{
                                console.log('3.3');

                            $('#guerrasOnline').fadeIn(500);
                        }
                        


                    // var windowHeight = $(window).scrollTop();
                    // var contenido2 = $("#contenido2").offset();
                    // contenido2 = contenido2.top;
     
                    //     if(windowHeight >= contenido2  ){
                    //     $('#aviso').fadeIn(500);
     
                    //     }else{
                    //     $('#aviso').fadeOut(500);
                    // }
                           });
                    });




// Navigation active state on scroll
// var nav_sections = $('section');
// var main_nav = $('.nav-menu, #mobile-nav');

// $(window).on('scroll', function() {
//   var cur_pos = $(this).scrollTop() + 300;

//   nav_sections.each(function() {
//     var top = $(this).offset().top,
//       bottom = top + $(this).outerHeight();

//     if (cur_pos >= top && cur_pos <= bottom) {
//       if (cur_pos <= bottom) {
//         main_nav.find('li').removeClass('active');
//       }
//       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
//     }
//     if (cur_pos < 200) {
//       $(".nav-menu ul:first li:first").addClass('active');
//     }
//   });
// });
  }
}

customElements.define("mi-webs", miWebs);
