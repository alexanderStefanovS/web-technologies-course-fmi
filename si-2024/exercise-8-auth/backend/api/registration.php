<?php

    require_once("../db/db.php");

    function isUserDataValid($userData) {
        if (!$userData || !isset($userData["username"]) ||
            !isset($userData["email"]) || !isset($userData["password"])) {
            return ["isValid" => false, "message" => "Некоректни данни!"];
        }

        $regex = "/^[a-z0-9_]+@[a-z]+\.[a-z]+$/";

        if (!preg_match($regex, $userData["email"])) {
            return ["isValid" => false, "message" => "Невалиден имейл!"];
        }

        return ["isValid" => true, "message" => "Данните са валидни!"];
    }

    function getUsersRoleId(PDO $connection) {
        $sql = "SELECT id FROM roles WHERE code = 'REGULAR_USER'";
        $stmt = $connection->query($sql);
        $id = $stmt->fetch(PDO::FETCH_ASSOC)["id"];
        return $id;
    }

    $userData = json_decode(file_get_contents("php://input"), true);

    $valid = isUserDataValid($userData);

    if ($valid["isValid"]) {

        $userData["password"] = password_hash($userData["password"], PASSWORD_DEFAULT);

        try {

            $db = new DB();
            $conn = $db->getConnection();

            $sql = "INSERT INTO users (username, email, password, roles_id) VALUES (?, ?, ?, ?)";

            $stmt = $conn->prepare($sql);
            $stmt->execute([$userData["username"], $userData["email"],
                            $userData["password"], getUsersRoleId($conn)]);

            echo json_encode(["status" => "SUCCES", "message" => "Регистрацията е успешна"]);
 
        } catch (PDOException $e) {
            http_response_code(500);

            if ($e->errorInfo[1] === 1062) {
                echo json_encode(["message" => "Имейлът вече съществува"]);
            } else {
                echo json_encode(["message" => "Грешка при регистрация"]);
            }
        }

    } else {
        http_response_code(400);
        echo json_encode(["message" => $valid["message"]]);
    }


?>