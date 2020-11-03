// function nav() {
//     console.log("77777777777777");
//     $(function () {
//         console.log("8888888888888888888");
//         var pull = $('#pull');
//         menu = $('.desplegable');
//         menuHeight = menu.height();
//         $(pull).on('click', function (e) {
//             console.log("999999999");
//             e.preventDefault();
//             menu.slideToggle();
//         });
//     });
//     $(window).resize(function () {
//         var w = $(window).width();
//         if (w > 320 && menu.is(':hidden')) {
//             menu.removeAttr('style');
//         }
//     });
// }


// //----------------
// // SCRIPT DE desplegable
// function desplegable() {
//     jQuery.fn.animateAuto = function (prop, speed, callback) {
//         var elem, height, width;
//         return this.each(function (i, el) {
//             el = jQuery(el), elem = el.clone().css({ "height": "auto", "width": "auto" }).appendTo("body");
//             height = elem.css("height"),
//                 width = elem.css("width"),
//                 elem.remove();
//             if (prop === "height")
//                 el.animate({ "height": height }, speed, callback);
//             else if (prop === "width")
//                 el.animate({ "width": width }, speed, callback);
//             else if (prop === "both")
//                 el.animate({ "width": width, "height": height }, speed, callback);
//         });
//     }
//     $(window).ready(function () {
//         $('h2').click(function () {
//             if ($(this).next().hasClass('desplegado')) {
//                 $(this).next().removeClass('desplegado').animate({ height: 0 }, 500);
//             } else {
//                 $(this).next().addClass('desplegado').animateAuto("height", 500);
//             }
//         })
//     })
// }





// //----------------
// //sonido menu
// // $(function () {
// //     /**** INICIO ZONA EDITABLE ****/
// //     var sound_mp3 = "http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3";
// //     var sound_ogg = "http://vignette2.wikia.nocookie.net/monchbox/images/0/01/Beep-sound.ogg/revision/latest?cb=20110628200153";
// //     /**** FIN ZONA EDITABLE ****/

// //     $('body').prepend('<audio><source src="' + sound_mp3 + '"></source><source src="' + sound_ogg + '"></source></audio>');
// //     var audio = $("audio")[0];
// //     $("s").mouseenter(function () {
// //         audio.play();
// //     });
// // });


// //----------------------------------------------------------
