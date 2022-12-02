<?php

    require_once('./db.php');

    $product_id = $_GET["product_id"];

    if (isset($product_id)) {

        $db = new DB();
        $connection = $db->getConnection();

        $sql = "SELECT * from products where id = :product_id";

        // $stmt = $connection->query($sql);

        // $stmt->setFetchMode(PDO::FETCH_CLASS, 'Products');

        $stmt = $connection->prepare($sql);
        $stmt->execute(["product_id" => $product_id]);

        $products = $stmt->fetchAll();

        var_dump($products);

        // while ($row = $stmt->fetch()) {

        // }

    }

?>

