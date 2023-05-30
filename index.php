<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include "conexion.php";
    $Conexion = new Conexion();
    $con = $Conexion->conectar();
    $query = "SELECT id, producto, precio FROM t_articulos";
    $result = mysqli_query($con,$query);
    $item = [];
    while ($ver = mysqli_fetch_assoc($result)){
        $item[] = $ver;
    };

    $data = json_encode($item);
    echo $data;
?>