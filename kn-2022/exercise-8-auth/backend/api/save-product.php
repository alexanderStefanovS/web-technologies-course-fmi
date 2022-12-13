<?php

    require_once("../db/db.php");

    function getUserRole(PDO $connection) {
        $sql = "SELECT id from roles where code = 'admin'";
        $stmt = $connection->query($sql);
        $rows = $stmt->fetchAll();

        return $rows[0]["id"];
    }

    session_start();

    if (isset($_SESSION["user"])) {

        $db = new DB();

        $adminRolesId = getUserRole($db->getConnection());

        if ($adminRolesId === $_SESSION["user"]["roles_id"]) {

            // save product

        } else {
            http_response_code(403);
            echo json_encode(["message" => "Невалидни права за достъп"]);
        }

    } else {
        http_response_code(401);
        echo json_encode(["message" => "Невалидни права за достъп"]);
    }


?>