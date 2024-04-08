<?php

    // $priorityId = $_GET["priorityId"];

    // $sql = "SELECT * FROM priority WHERE id = :priorityId";

    // $stmt = $conn->prepare($sql);
    // $stmt->execute(["priorityId" => $priorityId]);
 
    // // $stmt = $conn->query($sql);

    // // while ($row = $stmt->fetch()) {
    // // }

    // $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // echo json_encode($rows);

    // $note = [
    //     "title" => "Заглавие",
    //     "description" => "Описание",
    //     "date" => date('Y-m-d'),
    //     "priorityId" => fetchPriorityId("LOW", $conn)
    // ];

    function fetchPriorityId($code, PDO $conn) {
        $sql = "SELECT id from priority where code = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$code]);

        return $stmt->fetch(PDO::FETCH_ASSOC)["id"];
    }

    $conn = new PDO("mysql:host=localhost:3307;dbname=notes_db", 'root', '');


    $data = json_decode(file_get_contents('php://input'), true);

    // var_dump($data);

    $note = [
        "title" => $data["title"],
        "description" => $data["description"],
        "date" => $data["date"],
        "priorityId" => fetchPriorityId($data["priorityCode"], $conn)
    ];

    $sql = "INSERT INTO notes(title, description, priority_id, date) VALUES (:title, :description, :priorityId, :date)";

    $stmt = $conn->prepare($sql);
    $stmt->execute($note);

    echo json_encode(["message" => "Great success"]);

?>