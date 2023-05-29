<?php

    require_once("./db/db.php");

    $typesId = $_GET["typesId"];


    $db = new DB();
    $connection = $db->getConnection();

    $sql = "SELECT * from types where id = :typesId";

    // $stmt = $connection->query($sql);

    $stmt = $connection->prepare($sql);
    $stmt->execute(["typesId" => $typesId]);

    $types = $stmt->fetchAll(PDO::FETCH_ASSOC);

    var_dump($types);
    
    // while ($row = $stmt->fetch()) {

    // }



?>