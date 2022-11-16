<?php

    $httpMethod = $_SERVER["REQUEST_METHOD"];

    if ($httpMethod == "GET") {
        // echo []
    } else if ($httpMethod == 'POST') {
        // echo { message: "Записът е успешен" }
    }


    // echo json_encode(["name" => "Sasho", "age" => 23]);

    // var_dump($_GET);

    // $person = json_decode(file_get_contents("php://input"), true);

    // echo json_encode($person);

?>