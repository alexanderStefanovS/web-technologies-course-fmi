
<?php

    session_start();

    require_once("../functions/login-func.php");

    $userData = null;
    if (isset($_COOKIE["email"]) && isset($_COOKIE["password"])) {
        $userData = ["email" => $_COOKIE["email"], "password" => $_COOKIE["password"]];
    }

    $canUserBeLogged = null;
    if ($userData) {
        $canUserBeLogged = login($userData);
    }

    if (isset($_SESSION["user"]) || $canUserBeLogged) {

        echo json_encode(["note 1", "note 2", "note 3"]);

    } else {
        http_response_code(401);
        echo json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран!"]);
    }


?>