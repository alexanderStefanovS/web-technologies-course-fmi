<?php

    require_once("../db/db.php");

    function getUsersRoleCode(PDO $connection, $id) {
        $sql = "SELECT code FROM roles WHERE id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->execute([$id]);
        $code = $stmt->fetch(PDO::FETCH_ASSOC)["code"];
        return $code;
    }

    session_start();

    if (isset($_SESSION["user"])) { 

        $db = new DB();
        $connection = $db->getConnection();
    
        $roleCode = getUsersRoleCode($connection, $_SESSION["user"]["roles_id"]);

        if ($roleCode === 'ADMIN') {

            // Retrieve all notes

            echo json_encode([]);
        } else {
            http_response_code(403);
            echo json_encode(["message" => "Неоторизиран достъп"]);    
        }
    
    } else {
        http_response_code(401);
        echo json_encode(["message" => "Изисква се вход"]);
    }


?>