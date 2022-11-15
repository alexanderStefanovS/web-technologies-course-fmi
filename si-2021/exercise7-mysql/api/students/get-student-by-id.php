
<?php

/**
 * Retrieving single row from `students` table
 */

require_once("../../db/db.php");
require_once("../../classes/student.php");

if (isset($_GET["studentId"])) {

    $studentId = $_GET["studentId"];

    try {

        $db = new DB();
        $connection = $db->getConnection();

        $sql = "SELECT * from students where id = ?";

        $stmt = $connection->prepare($sql);
        $stmt->execute([$studentId]);

        $student = null;

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $student = new Student($row["id"], $row["firstname"], $row["lastname"], $row["email"], $row["fn"]);    
        }

        echo json_encode($student);

    } catch (PDOException $e) {
        echo $e->getMessage();
    }

} else {
    echo "studentId is not provided!";
}


?>