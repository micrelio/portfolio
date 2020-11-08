
// ENLACE
// https://www.templatemonster.com/help/es/how-create-contact-form-html.html


// Ahora vamos a trabajar con el fichero contact.php que realmente recogerá los datos de los campos, creará un mensaje y enviarálo a su dirección de correo electrónico. Puede descargar el fichero contact.php. En este tutorial vamos a revisar el código del fichero con los comentarios a las secciones más importantes.
<?php 
// Asignar los datos enviados desde los campos del formulario de contacto (cf_name, cf_email, cf_message) a los variables php ($cf_message, $field_email, $field_message)
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];
//$mail_to contendrá la dirección de correo electrónico del propietario del sitio. Se puede especificar varios correos electrónicos, separándolos con comas (por ejemplo, mail-one@template-help.com, mail-two@template-help.com)

$mail_to = 'test@test-mail.com';
// Tema/Asunto del mensaje de correo electrónico que recibe

$subject = 'Message from a site visitor ' . $field_name;
// Organizar el mensaje

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;
// Crear las cabeceras del mensaje

$headers = "From: $cf_email\r\n";
$headers .= "Reply-To: $cf_email\r\n";
// Definir la función mail() y asignarla al variable $mail_status, que se utiliza para comprobar si el mensaje de correo ha sido enviado o no.

$mail_status = mail($mail_to, $subject, $body_message, $headers);
// Si la fucnión mail() se ejecuta con éxito, entonces utilice el código:

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		// Print a message
 		alert('Thank you for the message. We will contact you shortly.');
		// Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
 		window.location = 'contact_page.html';
 	</script>
<?php
}
// Si la fucnión mail() no trabaja, entonces utilice el código:

else { ?>
	<script language="javascript" type="text/javascript">
// 		// Print a message
		alert('Message failed. Please, send an email to gordon@template-help.com');
// 		// Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
		window.location = 'contact_page.html';
	</script>
<?php
}?>
// También Usted puede descargar los ficheros compilados compiled contact_form.html y contact.php en el paquete