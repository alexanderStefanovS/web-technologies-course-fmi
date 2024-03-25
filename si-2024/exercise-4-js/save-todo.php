<?php

    if ($_SERVER["REQUEST_METHOD"] == 'POST') { 

        $todo = json_decode(file_get_contents('php://input'), true);

        echo json_encode(["message" => "Задачата " . $todo["name"] . " е записана успешно."]);
    } else {
        http_response_code(400);

        echo json_encode(["message" => "HTTP методът не се поддържа"]);
    }
?>