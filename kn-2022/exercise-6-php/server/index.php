<?php

    require_once("./person.php");
    require_once("./user.php");

    $num = 5;

    $person = ["name" => "Sasho", "age" => 23];

    $arr = array(1, 2, 3, 4, 5);

    var_dump($arr);

    echo "<br>";

    foreach ($person as $key => $value) {
        echo $person[$key];
        echo "<br>";
    }

    // function sum($first, $second) {
    //     return $first + $second;
    //   }

    function fn1($a, $b) {
        return $a + $b;
    }

    echo fn1(1, 2);

    $obj = new Person("Sasho", 23);

    $user = new User("Sasho", 23, 11111);

    echo "<br>";

    var_dump($obj);

    echo "<br>";

    var_dump($user);


?>
