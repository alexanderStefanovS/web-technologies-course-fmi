<?php

    $arr1 = ["success" => true];
    $arr2 = ["errors" => ["" => ""]];

    $arr = array_merge($arr1, $arr2);

    var_dump($arr1 + $arr2);
    echo "<br>";
    var_dump($arr);

?>