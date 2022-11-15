
<?php

    require_once("../db/db.php");

    session_start();

    if (isset($_SESSION["user"])) {

        $userId = $_SESSION["user"]["id"];
        
        try {

            $db = new DB();
            $connection = $db->getConnection();
    
            $sql = "SELECT * 
                    FROM notes 
                    WHERE users_id = ?";
    
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