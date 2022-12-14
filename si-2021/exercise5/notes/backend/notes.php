<?php

    require_once("./db/db.php");

    $db = new DB();
    $connection = $db->getConnection();

    if ($_SERVER["REQUEST_METHOD"] === 'POST') {
        $note = json_decode(file_get_contents("php://input"), true);
        
        $sql = "INSERT into notes (title, description, date_and_time, priority) values (:title, :description, :dateAndTime, :priority)";

        $stmt = $connection->prepare($sql);
        $stmt->execute($note);

        $id = $connection->lastInsertId();

        echo json_encode($note + ["id" => $id]);

    } else if ($_SERVER["REQUEST_METHOD"] === 'GET') {
        $sql = "SELECT id, title, description, priority, date_and_time as dateAndTime from notes";

        $stmt = $connection->query($sql);
        $notes = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($notes);

    } else if ($_SERVER["REQUEST_METHOD"] === 'DELETE') {
        $id = json_decode(file_get_contents("php://input"), true)["id"];

        $sql = "DELETE from notes where id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->execute([$id]);

        echo json_encode(["id" => $id]);
    }

?>