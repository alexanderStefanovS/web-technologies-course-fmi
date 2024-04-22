<?php

    session_start();

    if (isset($_SESSION["user"])) {

        // Select notes from DB

        echo json_encode([]);
    } else {
        http_response_code(401);
        echo json_encode(["message" => "Изисква се вход"]);
    }


?>