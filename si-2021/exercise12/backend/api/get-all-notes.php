<?php

require_once("../db/db.php");

session_start();

function getRole($connection, $rolesId) {
    $sql = "SELECT * 
            FROM roles 
            WHERE id = ?";
        
    $stmt = $connection->prepare($sql);
    $stmt->execute([$rolesId]);

    $role = $stmt->fetch(PDO::FETCH_ASSOC);

    return $role;
}

function getNotes($connection) {
    
    $sql = "SELECT * 
            FROM notes";
            
    $stmt = $connection->prepare($sql);
    $stmt->execute([]);
    
    $notes = [];
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($notes, $row);    
    }

    return $notes;
}

if (isset($_SESSION["user"])) {

    $rolesId = $_SESSION["user"]["roles_id"];

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $role = getRole($connection, $rolesId);

        if ($role["code"] !== "ADMIN") {
            http_response_code(403);
            exit(json_encode(["status" => "ERROR", "message" => "Забранен достъп!"]));
        }
    
        $notes = getNotes($connection);
    
        echo json_encode($notes);

    } catch (PDOException $e) {
        echo json_encode(["status" => "ERROR", "message" => "Грешка при извличане на всички бележки"]);
    }

} else {
    http_response_code(401);
    echo json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран!"]);
}


?>