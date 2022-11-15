
<?php

    if (isset($_GET["studentId"])) {

        $studentId = $_GET["studentId"];

        try {

            $connection = new PDO("mysql:host=localhost;dbname=univercity", "root", "");

            // SQL Injection vulnerability! Don't use it when adding client params to the query.
            $sql = "SELECT * from students where id = $studentId";
            $stmt = $connection->query($sql);

            // Prepared statement query
            $sql = "SELECT * from students where id = ?";

            $stmt = $connection->prepare($sql);
            $stmt->execute([$studentId]);

            while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
                var_dump($row);
                echo "<br>";
            }

        } catch (PDOException $e) {
            echo $e->getMessage();
        }

    } else {
        echo "studentId is not provided!";
    }


?>
