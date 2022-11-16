<?php

    echo $_POST["courseName"] . " " .$_POST["credits"];


    $postData = json_decode(file_get_contents("php://input"), true);

?>