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

if ($_POST) {

    $note = $_POST;
    $usersId = $_SESSION["user"]["id"];

    $note["usersId"] = $usersId;

    $valid = validate($_POST);

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

        echo json_encode(["status" => "SUCCES", "message" => "Бележката е записана"]);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при запис на бележка"]);
    }

}

?>