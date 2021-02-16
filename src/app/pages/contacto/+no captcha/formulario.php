<?php 
	$nombre = "";
	$email = "";
	$asunto = "";
	$mensaje = "";
	$cuerpo = "";
	$error = '';
	if (empty($_POST['nombre'])) {
		$error = 'Ingresa un nombre </br>';
	}else{
		$nombre = $_POST['nombre'];
		$nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
		$nombre = trim($nombre);
		if($nombre==''){
			$error.='Nombre esta vacio </br>';
		}
	}
	//VALIDANDO EMAIL
		if (empty($_POST['email'])) {
		$error .= 'Ingresa un E-mail </br>';
	}else{
		$email = $_POST['email'];
		if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
			$error .='Ingresa un E-mail verdadero </br>';
		}else{
			$email = filter_var($email,FILTER_SANITIZE_EMAIL);
		}
	}
	//VALIDANDO ASUNTO
	if (empty($_POST['asunto'])) {
		$error .= 'Ingresa el asunto </br>';
	}else{
		$asunto = $_POST['asunto'];
		$asunto = filter_var($asunto, FILTER_SANITIZE_STRING);
	}
	//VALIDANDO MENSAJE
	if (empty($_POST['mensaje'])) {
		$error .= 'Ingresa un mensaje </br>';
	}else{
		$mensaje = $_POST['mensaje'];
		$mensaje = filter_var($mensaje, FILTER_SANITIZE_STRING);
		$mensaje = trim($mensaje);
		if($mensaje==''){
			$error.='Mensaje esta vacio </br>';
		}
	}
//CUERPO DEL MENSAJE
$cuerpo .= "Nombre: ";
$cuerpo .= $nombre;
$cuerpo .= "\n";
 
$cuerpo .= "Email: ";
$cuerpo .= $email;
$cuerpo .= "\n";

$cuerpo .= "Asunto: ";
$cuerpo .= $asunto;
$cuerpo .= "\n";
 
$cuerpo .= "Mensaje: ";
$cuerpo .= $mensaje;
$cuerpo .= "\n";

	//DIRECCION
	$enviarA = 'info@microdeveloper.es';
	$asunto = 'Nuevo mensaje de mi sitio web';

	//ENVIAR CORREO

	if ($error == '') {
		$success = mail($enviarA,$asunto,$cuerpo,'de: '.$email);
		echo'exito';
	}else{
		echo $error;
	}
 ?>