
<?php

    require_once("../db/db.php");

    session_start();

    if (isset($_SESSION["user"])) {

        $userId = $_SESSION["user"]["id"];
        
        try {

            $db = new DB();
            $connection = $db->getConnection();
    
            $sql = "SELECT n.id, n.name, n.description, n.date_and_time as dateAndTime, p.name as priority
                    FROM notes n join priority p on n.priority_id = p.id 
                    WHERE n.users_id = ?";
    
            $stmt = $connection->prepare($sql);
            $stmt->execute([$userId]);
    
            $notes = [];
    
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($notes, $row);    
            }

            echo json_encode($notes);
    
        } catch (PDOException $e) {
            echo json_encode(["status" => "ERROR", "message" => "Грешка при извличане на бележките на потребителя"]);
        }

    } else {
        http_response_code(401);
        echo json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран"]);
    }


?>