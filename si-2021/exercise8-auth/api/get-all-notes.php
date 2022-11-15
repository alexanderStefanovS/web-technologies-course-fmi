<?php

session_start();

if (isset($_SESSION["user"])) {

    $rolesId = $_SESSION["user"]["rolesId"];

    // select * roles where id = :rolesId

    // if (role["code"] == "ADMIN") {
        // echo all notes
    // }

    echo json_encode(["note 1", "note 2", "note 3"]);

} else {
    http_response_code(401);
    echo json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран!"]);
}


?>