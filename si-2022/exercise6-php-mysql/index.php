<?php

    if (isset($_GET["types_id"])) {

        $typesId = $_GET["types_id"];

        try {
            
            $connection = new PDO("mysql:host=localhost:3307;dbname=products_store", "root", "test");
            $sql = "SELECT * FROM product_types WHERE id = ?";
            $stmt = $connection->prepare($sql);

            $sql = "INSERT into students (name, age) values (:name, :age)";

            $stmt->execute($data); 

            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            // while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            //     var_dump($row);
            // }

            var_dump($rows);

        } catch(PDOException $exc) {
            echo $exc->getMessage();
        }

    }


?>