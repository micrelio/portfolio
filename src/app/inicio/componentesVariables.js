

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
        document.getElementById("componente").innerHTML = "<mi-galeria></mi-galeria>";
  
        break;

        case 'videos':
      document.getElementById("componente").innerHTML = "<mi-videos></mi-videos>";

      break;

      case 'curriculum':
      document.getElementById("componente").innerHTML = "<mi-curriculum></mi-curriculum>";

      break;
      case 'contacto':
        document.getElementById("componente").innerHTML = "<mi-contacto></mi-contacto>";
  
        break;
    default:
    //  render='inicio';
      // console.log('default');
      // document.write ("<mi-inicio></mi-inicio>");
      // document.close();

    //  document.getElementById("componente").innerHTML = "<mi-inicio></mi-inicio>";
  
      
  }
   





  // document.getElementById("componente").innerHTML = "<mi-inicio></mi-inicio>";
  //  for (var indice in logos) {
  //      console.log("En el índice '" + indice + "' hay este valor: " + logos[indice]);
       
   
  //      document.getElementById("body").innerHTML = "<mi-inicio></mi-inicio>";
   
       
  //     // document.write("<img src=../../"+ logos[indice]+">")
  //    }
   }