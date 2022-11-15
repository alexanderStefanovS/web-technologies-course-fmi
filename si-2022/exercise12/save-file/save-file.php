<?php

if (isset($_FILES['csv']['name'])) {

    $fileTmpName = $_FILES['csv']['tmp_name'];
    $fileName = $_FILES['csv']['name'];

    $location = './uploaded-files/' . $fileName;

    // error handling when working with files!

    // move_uploaded_file($fileTmpName, $location);

    $fileContent = file_get_contents($_FILES['csv']['tmp_name']);

    $rows = explode("\n", $fileContent);
    $students = [];

    for ($i = 1; $i < count($rows); $i++) {
        $row = explode(",", rtrim($rows[$i]));
        $student = ["firstname" => $row[0], "lastname" => $row[1], "email" => $row[2], "fn" => $row[3]];

        array_push($students, $student);
    }

    var_dump($students);

    // echo json_encode(["msg" => "Data is saved!"]);

}


?>