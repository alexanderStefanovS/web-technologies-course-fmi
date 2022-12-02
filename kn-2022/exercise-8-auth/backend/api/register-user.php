<?php

    require_once("../db/db.php");

    function validateUserData($userData) {

        if (!isset($userData["username"])
            || !isset($userData["email"]) 
            || !isset($userData["password"])) {
            return [
                "isValid" => false,
                "message" => "Невалидни данни"
            ];
        }

        $emailRegex = "/^[a-z_]+@[a-z]+\.[a-z]+$/";

        $isEmailValid = preg_match($emailRegex, $userData["email"]);

        if (!$isEmailValid) {
            return [
                "isValid" => false,
                "message" => "Невалиден email"
            ];
        }

        return [
            "isValid" => true
        ];
    }

    function getUserRole(PDO $connection) {
        $sql = "SELECT id from roles where code = 'client'";
        $stmt = $connection->query($sql);
        $rows = $stmt->fetchAll();

        return $rows[0]["id"];
    }

    $userData = json_decode(file_get_contents("php://input"), true);

    if (isset($userData) && $userData) {

        $valid = validateUserData($userData);

        if (!$valid["isValid"]) {
            http_response_code(400);
            exit(json_encode([
                "message" => $valid["message"]
            ]));
        }

        try {

            $db = new DB();
            $connection = $db->getConnection();
            
            $rolesId = getUserRole($connection);
            $passwordHash = password_hash($userData["password"], PASSWORD_DEFAULT);

            $sql = "INSERT into users (username, email, roles_id, password) values (?, ?, ?, ?)";

            $stmt = $connection->prepare($sql);
            $stmt->execute([$userData["username"], $userData["email"], 
                $rolesId, $passwordHash]);

            echo json_encode([
                "message" => "Регистрацията е успешна"
            ]);

        } catch (PDOException $exc) {
            http_response_code(500);
            echo json_encode([
                "message" => "Неуспешна регистрация"
            ]);
        }

    } else {
        http_response_code(400);
        echo json_encode([
            "message" => "Невалидни данни"
        ]);
    }


?>