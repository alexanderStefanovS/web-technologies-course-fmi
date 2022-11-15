<?php

    require_once('../db/db.php');

    function getRoleCode(PDO $connection, $rolesId) {
        $sql = "SELECT code FROM roles WHERE id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->execute([$rolesId]);
        $code = $stmt->fetch(PDO::FETCH_ASSOC)["code"];
        
        return $code;
    }

    session_start();

    if (isset($_SESSION['user'])) {

        try {
            $db = new DB();
            $connection = $db->getConnection();

            $roleCode = getRoleCode($connection, $_SESSION['user']['roles_id']);

            if ($roleCode === 'ADMIN') {

                // save subject logic

                echo json_encode(["status" => "SUCCESS", "message" => "Записът е успешен!"]);

            } else {
                http_response_code(403);
                echo json_encode(["status" => "ERROR", "message" => "Достъпът е забранен!"]);
            }

        } catch (PDOException $exc) {
            http_response_code(500);
            echo json_encode(["status" => "ERROR", "message" => "Записът на предмета е неуспешен!"]);
        }
 
    } else {
        http_response_code(401);
        echo json_encode(["message" => "Потребителят не е автентикиран"]);
    }

?>