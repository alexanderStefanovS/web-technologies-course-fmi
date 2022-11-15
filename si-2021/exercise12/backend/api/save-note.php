<?php

require_once('../db/db.php');

session_start();

function validate($note) {

    if (!isset($note["dateAndTime"]) && !isset($note["description"]) && !isset($note["priorityId"])) {
        return ["isValid" => false, "message" => "Некоректни данни!"];
    }

    return ["isValid" => true, "message" => "Данните са валидни!"];
}

if (!isset($_SESSION["user"])) {
    http_response_code(401);
    exit(json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран"]));
}

$post = file_get_contents("php://input");

if ($post) {

    $note = json_decode($post, true);
    $usersId = $_SESSION["user"]["id"];

    $note["usersId"] = $usersId;

    $valid = validate($note);

    if (!$valid["isValid"]) {
        http_response_code(400);
        exit($valid["message"]);
    }

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $sql = "INSERT INTO notes (name, date_and_time, description, priority_id, users_id) 
                VALUES (:name, :dateAndTime, :description, :priorityId, :usersId)";

        $stmt = $connection->prepare($sql);
        $stmt->execute($note);

        $notesId = $connection->lastInsertId();

        echo json_encode(["status" => "SUCCES", "message" => "Бележката е записана", "id" => $notesId]);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при запис на бележка"]);
    }

} else {
    http_response_code(400);
    exit(json_encode(["status" => "ERROR", "message" => "Грешка!"]));
}

?>