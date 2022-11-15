
<?php

    require_once("../db/db.php");

    function isUserDataValid($userData) {

        if (!isset($userData["email"]) && !isset($userData["password"]) && !isset($userData["rolesId"])) {
            return ["isValid" => false, "message" => "Некоректни данни!"];
        }

        $regex = "/^[a-z0-9_]+@[a-z]+\.[a-z]+$/";

        if (!preg_match($regex, $userData["email"])) {
            return ["isValid" => false, "message" => "Невалиден email!"];
        }

        return ["isValid" => true, "message" => "Данните са валидни!"];

    }

    if ($_POST) {

        $valid = isUserDataValid($_POST);

        if (!$valid["isValid"]) {
            http_response_code(400);
            exit($valid["message"]);
        }

        $email = $_POST["email"];
        $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
        $rolesId = $_POST["rolesId"];

        try {

            $db = new DB();
            $connection = $db->getConnection();

            $sql = "INSERT INTO users (email, password, roles_id) VALUES (:email, :password, :rolesId)";

            $stmt = $connection->prepare($sql);
            $stmt->execute(["email" => $email, "password" => $password, "rolesId" => $rolesId]);

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
