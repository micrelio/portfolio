// console.log('funcionando');

// haremos que cuando el formulario se envie la pagina no se refresque
$("#jrcForm").submit(function(event) {
	event.preventDefault(); //esta funcion almacena todos los datos sin refrescar el sitio web
	enviar();
});
function enviar(){
	var datos = $("#jrcForm").serialize(); //toma todos los datos "name" y los lleva a un arreglo
	$.ajax({
		type: "post",
		url:"formulario.php",
		data: datos,
		success: function(texto){
			if(texto=="exito"){
				correcto();
			}else{
			phperror(texto);
		   }
		}
	})
}
function correcto(){
	$("#mensajeExito").removeClass('alert-jrc');
	$("#mensajeError").addClass('alert-jrc');
}
function phperror(texto){
	$("#mensajeError").removeClass('alert-jrc');
	$("#mensajeError").html(texto);
}