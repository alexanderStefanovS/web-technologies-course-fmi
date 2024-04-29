<?php

    require_once('../db/db.php');

    session_start();

    if (isset($_SESSION["user"])) {

        try {
            $db = new DB();
            $connection = $db->getConnection();

            $sql = "SELECT * 
                    from notes n join users_notes u_n on n.id = u_n.notes_id 
                    where u_n.users_id = ?";

            $stmt = $connection->prepare($sql);
            $stmt->execute([$_SESSION["user"]["id"]]);

            $userNotes = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($userNotes);

        } catch (PDOException $exc) {
            http_response_code(500);
            echo json_encode(["message" => "Грешка при вход"]);
        }
    } else {
        http_response_code(401);
        echo json_encode(["message" => "Изисква се вход"]);
    }


?>
