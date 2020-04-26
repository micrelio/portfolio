  function navegar(id) {
   var render = id;
   console.log(render);
  switch (render) {
    case 'inicio':
      console.log('no');
   document.getElementById("componente").innerHTML = "<mi-inicio></mi-inicio>";
    break;
    case 'webs':
      document.getElementById("componente").innerHTML = "<mi-webs></mi-webs>";
 break;
     case 'galeria':
      //   window.router.init([{
      //     path: "/list",
      //     view: "<mi-galeria><mi-galeria>"
      // },])
 document.getElementById("componente").innerHTML = "<mi-galeria></mi-galeria>";
       // location.replace("src/app/galeria/galeria.js");
        break;
        case 'videos':
          console.log('videos')
      document.getElementById("componente").innerHTML = "<mi-videos></mi-videos>";
  break;
      case 'curriculum':
      document.getElementById("componente").innerHTML = "<mi-curriculum></mi-curriculum>";
      break;
      case 'contacto':
        document.getElementById("componente").innerHTML = "<mi-contacto></mi-contacto>";
         break;
    default:
  }
     }