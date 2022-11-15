<?php

    require_once("./test.php");

    // Retrieve HTTP POST data
    $user = json_decode(file_get_contents("php://input"), true);

    echo json_encode(["message" => "Записът е успешен"])
  
?>