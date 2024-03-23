<?php
include ("conexion.php");

$nombre=$_POST['NOMBRE'];
$apellido=$_POST['APELLIDO'];
$celular=$_POST['CELULAR'];
$correo=$_POST['CORREO'];

$sql="INSERT INTO proyetofrozurt (NOMBRE,APELLIDO,CELULAR,CORREO) VALUES ('$nombre','$apellido','$celular','$correo')";

if 
($conexion -> query($sql) === TRUE) {
    echo "Cliente registrado con éxito";
} else {
    echo "Error al registrar cliente: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>