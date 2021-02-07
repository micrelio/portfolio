<?php
echo "kakakakakakakakak";
// Revisa si los campos están vacíos
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['captcha'])   ||
   // empty($_POST['phone']) 		||
   empty($_POST['message'])	)
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
// $phone = $_POST['phone'];
$message = $_POST['message'];
	
// Crea el mensaje que va a enviar
$to = 'microa4@gmail.com'; //Añada su dirección de correo electrónico entre el '' reemplazando suNombre@suDominio.com - Aquí es donde el formulario enviará un mensaje. Puede ser @gmail.com
$email_subject = "formulario web enviado por:  $name";
$email_body = "Ha recibido un nuevo mensaje de su formulario de contacto del sitio web.\n\n"."Aquí están los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "From: microa4@gmail.com\n";// Esta es la dirección de correo electrónico de la que se generará el mensaje. DEBE TENER EL DOMINIO DONDE ESTA ALOJADA LA WEB
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>