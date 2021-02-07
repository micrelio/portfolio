<?php
  $nombre = $_POST['nombre'];
  echo 'Hola '. $nombre;
?>

<?php
// $nombre = $_POST['nombre'];
// $email = $_POST['email'];
// $mensaje = $_POST['mensaje'];
// $para = 'microa4@gmail.com';
// $titulo = 'ASUNTO DEL MENSAJE';
// $header = 'From: ' . $email;
// $msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
  
// if ($_POST['submit']) {
// if (mail($para, $titulo, $msjCorreo, $header)) {
// echo "<script language='javascript'>
// alert('Mensaje enviado, muchas gracias.');
// window.location.href = 'https://microdeveloper.es';
// </script>";
// } else {
// echo 'Falló el envio';
// }
// }
?>

<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias</bold>
$email_to = "microa4@gmail.com";
$email_subject = "usuario@microdeveloper.es";

// Aquí se deberían validar los datos ingresados por el usuario</bold>
if(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['mensaje']) 
) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "mensaje: " . $_POST['mensaje'] . "\n";



// Ahora se envía el e-mail usando la función mail() de PHP</bold>
$headers = 'From: '/*.$email_from."\r\n"*/.
// 'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}