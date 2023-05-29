<?php

    require_once("../db/db.php");

    function login($userData) {
        try {
            $db = new DB();
            $connection = $db->getConnection();

            $sql = "SELECT * from users where email = ?";
            $stmt = $connection->prepare($sql);
            $stmt->execute([$userData["email"]]);

            if ($stmt->rowCount() === 1) {
                $user = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
                
                $isPasswordValid = password_verify($userData["password"], $user["password"]);
                if ($isPasswordValid) {
                    return $user;
                } else {
                    return null;
                }
            } else {
                return null;
            }

        } catch (PDOException $exc) {
            throw new Error($exc->getMessage());
        }
    }

    $userData = json_decode(file_get_contents("php://input"), true);

    if (isset($userData) && $userData && isset($userData["email"]) && isset($userData["password"])) {

        try {
            $user = login($userData);

            if (!$user) {
                http_response_code(400);
                exit(json_encode(["message" => "Входът е неуспешен"]));
            }

            session_start();

            $_SESSION["user"] = $user;

            echo json_encode(["message" => "Входът е успешен"]); 

        } catch (Error $exc) {
            http_response_code(500);
            echo json_encode(["message" => "Грешка при вход"]);
        }


    } else {
        http_response_code(400);
        echo json_encode(["message" => "Невалидни данни"]);
    }


?>