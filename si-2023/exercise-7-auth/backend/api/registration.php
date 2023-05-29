<?php

    require_once("../db/db.php");

    function isUserDataValid($userData) {
        if (!isset($userData["email"]) || !isset($userData["password"])) {
            return ["isValid" => false, "message" => "Некоректни данни!"];
        }

        $regex = "/^[a-z0-9_]+@[a-z]+\.[a-z]+$/";

        if (!preg_match($regex, $userData["email"])) {
            return ["isValid" => false, "message" => "Невалиден имейл!"];
        }

        return ["isValid" => true, "message" => "Данните са валидни!"];
    }

    function getUsersRoleId(PDO $connection) {
        $sql = "SELECT id FROM roles WHERE code = 'regular_user'";
        $stmt = $connection->query($sql);
        $id = $stmt->fetch(PDO::FETCH_ASSOC)["id"];
        return $id;
    }

    $userData = json_decode(file_get_contents("php://input"), true);

    if ($userData) {

        $valid = isUserDataValid($userData);

        if (!$valid["isValid"]) {
            http_response_code(400);
            exit(json_encode(["status" => "ERROR", "message" => $valid["message"]]));
        }

        $userData["password"] = password_hash($userData["password"], PASSWORD_DEFAULT);

        try {

            $db = new DB();
            $connection = $db->getConnection();

            $roles_id = getUsersRoleId($connection);
            $userData += ["roles_id" => $roles_id];

            $sql = "INSERT INTO users (email, password, roles_id) 
                    VALUES (:email, :password, :roles_id)";

            $stmt = $connection->prepare($sql);
            $stmt->execute($userData);

            echo json_encode(["status" => "SUCCES", "message" => "Регистрацията е успешна"]);

        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["status" => "ERROR", "message" => "Грешка при регистрация!"]);
        }


    } else {
        http_response_code(400);
        echo json_encode(["status" => "ERROR", "message" => "Некоректни данни!"]); 
    }

?>