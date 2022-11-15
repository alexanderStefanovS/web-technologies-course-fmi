<?php

    /**
     * Inserting one row in `students` table
     */

    require_once("../../db/db.php");

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $sql = "INSERT into students (firstname, lastname, email, fn) values ('Стоян', 'Стоянов', 'stoyan@a.bg', 11111)";

        $stmt = $connection->prepare($sql);
        $stmt->execute();


    } catch (PDOException $e) {
        echo $e->getMessage();
    }


?>