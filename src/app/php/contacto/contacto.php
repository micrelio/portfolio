<?php
/**
 * Created by PhpStorm.
 * User: juliomorales
 * Website: http://www.nworldt.net
 * Date: 21/07/16
 * Time: 11:44 PM
 */
// Incluir libreria de recaptcha de Google
require_once "./php/recaptchalib.php";


// tu secret key
$publicKey = "6LcBgVoaAAAAAAEt7-fWXw1MomP4kWSywzYaMii5";
$secret = "6LcBgVoaAAAAAJ2nLbx3BMR7DShc077ZVSLAross";

echo "llega";

$response = null;

// comprueba la clave secreta
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
  
$showMessage = false;


// Envio de Email
if ($response != null && $response->success) {

 

    $showMessage = true;
    // a quien se envia el email
    $to = "info@microdeveloper.es";
    // sujeto del email
    $subject = "Micrelio web";
    // quien envia el correo
    $headers = "From: web@microdeveloper.es" . "\r\n";
    // quito el valor del recaptcha
    unset($_POST["g-recaptcha-response"]);

    $body = '';
    foreach ($_POST as $key => $value) {
        $body .= "{$key}: {$value}\n";
    }
    if (mail($to, $subject, $body, $headers)) {
         // current time
//  echo date('h:i:s') . "\n";

//  // sleep for 10 seconds
//  sleep(10);
 
//  // wake up !
//  echo date('h:i:s') . "\n";
        $error = false;
        // echo "ENVIADO";
        $message = 'Enviado con exito';
    } else {
        echo "ERROR1";
        $error = true;
        $message = 'Error al enviar el email';
    }
} else {

    if ($_POST) {
        echo "ERROR2";

        $showMessage = true;
        $error = true;
        $message = 'Error al enviar el formulario intente de nuevo';
    }
}
?>  


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CodePen - Expanding Contact Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://getbootstrap.com/assets/css/docs.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>




    <?php#  include('./php/configuracion.php');
    ?> 
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="./font-awesome/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="./styles/normalize.min.css">
    <!-- <script type="text/javascript" src="./script.js" ></script> -->


    <link rel="stylesheet" href="./styles/googleApis.css" type="text/css">
    <script type="text/javascript" src="./font-awesome/fontawersome.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <!-- <script src="jquery.min.js"></script> -->
</head>

<body id="body"  >

    <div class="container">


        <!-- partial:index.partial.html -->
        <div class='form-overlay'></div>
        <div class='icon fa fa-pencil' id='form-container'>
            <span class='icon fa fa-close' id='form-close'></span>
            <div id='form-content'>
                <div id='form-head'>
                    <h1 class='pre'>Get in touch</h1>
                    <p class='pre'>Good choice...</p>
                    <h1 class='post'>Thanks!</h1>
                    <p class='post'>I'll be in touch ASAP</p>
                </div>


                <form role="form" action="" method="post" id="formulario" name="formulario" class="formularioContacto">
                    <input class="input name" id="nombre" placeholder="Nombre" type="text" name="Nombre" />
                    <!-- <input type="text"  name="direccion" id="direccion"/><br/>
                    <input type="text"  name="pais" id="pais"/><br/>
                    <input type="text"  name="web-site" id="web-site"/><br/> -->

                    <input class="input email" placeholder="Email" id="email" type="email" name="Email" />
                    <input class="input phone" placeholder="Telefono" id="telefono" type="tel" name="Telefono" />
                    <textarea class="input message" rows="10" cols="40" maxlength="1000" id="comentario" name="comentario" onkeypress="calcular()" onkeyup="calcular()"></textarea><br />
                    <p>Le quedan <span id="contador-char">1000</span> de 1000 caracteres.</p>
                    <br />
                    <br />



                    <!--pueden cambiar el lenguaje con el parametro hl-->
                    <script src='https://www.google.com/recaptcha/api.js?hl=es'></script>
                    <!--El site key de su sitio-->
                    <!-- <input class="input g-recaptcha" data-sitekey="<?php #echo $publicKey; 
                                                                        ?>"placeholder="" id="" type="checkbox" name="" /> -->

                    <div class=" g-recaptcha" data-sitekey="<?php echo $publicKey; ?>"></div>
                    <button type="button" name="enviar" id="enviar" class="canbio">Enviar</button>&nbsp;&nbsp;&nbsp;


                    <!-- <input class='input submit' type='submit' value='Send Message' > -->
                    <!-- <button class='input submit' type="buton" class="fa fa-paper-plane " value='Send Message'></button> -->
                    <input type="reset" value="Borrar Datos" /> &nbsp; &nbsp;

                </form>
            </div>


        </div>
        <div class="">
            <?php
            if ($showMessage) {
                echo !$error ? '<div class="bs-example-bg-classes"><p class="bg-success text-center">' . $message . '</p></div>' : '';
                echo $error ? ' <div class="bs-example-bg-classes"><p class="bg-danger text-center">' . $message . '</p></div>' : '';
            }
            ?> 

        </div>

        <!-- <form role="form" action="" method="post" class="formularioContacto">
        <input class='input name' name='user_name' placeholder='Your name please' id="name" type='text'>
        <input class='input email' name='user_email' placeholder='A contact email' id="email" type='text'>
        <select class='input select' name='subject'>
          <option disabled=''>What shall we talk about?</option>
          <option selected=''>About a new project</option>
          <option>About a job opportunity</option>
          <option>Let's do this over a coffee</option>
        </select>
        <textarea class='input message' placeholder='How can I help?'></textarea> -->

        <!--pueden cambiar el lenguaje con el parametro hl-->
        <!-- <script src='https://www.google.com/recaptcha/api.js?hl=es'></script> -->
        <!--El site key de su sitio-->
        <!-- <div class="g-recaptcha" data-sitekey="<?php #echo $publicKey; 
                                                    ?>"></div>

                    <button type="submit" class="fa fa-paper-plane "></button>

        <input class='input submit' type='submit' value='Send Message'>
      </form> -->

      <script async type="text/javascript" src="./script.js"></script>



        <!-- partial -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        <!-- <script src="jquery.min.js"></script> -->

</body>


</html>