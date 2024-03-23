<?php
$servidor = "localhost";
$user     = "id21949740_fabian";
$password = "Fabian2024.";
$namedb   = "id21949740_base1";

$conexion= new mysqli($servidor,$user,$password,$namedb);

if($conexion) {
    echo "Conectado";
}
else {
    echo "Desconectado";
}

?>