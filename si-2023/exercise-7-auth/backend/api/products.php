<?php

    require_once("../db/db.php");

    session_start();

    $db = new DB();
    $connection = $db->getConnection();

    function getAdminsRoleId(PDO $connection) {
        $sql = "SELECT id FROM roles WHERE code = 'admin'";
        $stmt = $connection->query($sql);
        $id = $stmt->fetch(PDO::FETCH_ASSOC)["id"];
        return $id;
    }

    if (isset($_SESSION["user"])) {

        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                $sql = "SELECT * from products where userId = ?";

                $userId = $_SESSION["user"]["id"];

                // load data from db

                echo json_encode([["name" => "laptop"], ["name" => "mouse"]]);
        
        } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $roles_id = getAdminsRoleId($connection);

            if ($_SESSION["user"]["roles_id"] === $roles_id) {
                
                // save the product, create product in db

                echo json_encode(["message" => "Записът е успешен"]);

            } else {
                http_response_code(403);
                echo json_encode(["message" => "Потребителят няма права за операцията"]);        
            }

        }

    } else {
        http_response_code(401);
        echo json_encode(["message" => "Потребителят не е влязал в систената"]);
    }


?>


