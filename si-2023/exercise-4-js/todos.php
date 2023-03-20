<?php

    $data = json_decode(file_get_contents('php://input'), true);

    // { "result" : "Курсът ...." }

    echo "Курсът" . $data["courseName"] ."асдфасдф";

    $todo1 = [ "id" => 1, "title" => "asdfasdf", "completed" => true ];
    $todo2 = [ "id" => 1, "title" => "asdfasdf 2", "completed" => true ];
    $todos = [ $todo1, $todo2 ];


    echo json_encode($todos);


?>