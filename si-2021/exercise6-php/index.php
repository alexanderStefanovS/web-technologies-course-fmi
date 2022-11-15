<?php

    declare(strict_types = 1);

    # Variables

    $str = "Hello World"; // String
    $num = 23; // Integer
    $decimal = 3.14; // Float
    $flag = false; // Bool
    $nothing = null; // Null

    # String

    $myStr = "Hello " . "world";

    echo strlen($myStr);
    echo "<br>";
    echo str_word_count($myStr);
    echo "<br>";
    echo strrev($myStr);
    echo "<br>";
    echo strpos($myStr, "world");
    echo "<br>";
    echo str_replace("world", "php", $myStr);
    echo "<br>";

    # Numbers

    $myNum = 7;

    echo var_dump(is_int($myNum));
    echo "<br>";
    echo var_dump((int)7.0);
    echo "<br>";
    echo 2 ** 3;

    # Conditional statements

    $num1 = 5;
    $str1 = "5";

    if ($num1 === $str1) {
        echo "yes";
    } else {
        echo "no";
    }

    # Loops

    for ($x = 0; $x <= 5; $x++) {
        echo $x;
        echo "<br>";
    }

    while ($x <= 10) {
        echo $x;
        echo "<br>";
        $x++;
    }

    # Functions

    function sayHello(string $name, int $age = 22) {
        return "Hello! My name is $name. I'm $age years old.";
    }

    echo sayHello("Sasho", 23);

    $name = "Sasho";

    function changeName(&$name) {
        $name = "Aleksandar";
    }

    changeName($name);

    echo $name;

    # Arrays

    $indexArray = array("one", 1, true, null, 10);

    var_dump($indexArray);

    echo "<br>";

    $asociativeArray = array("Sasho" => 22, "Pesho" => 23, "Gosho" => 24);

    var_dump($asociativeArray);

    echo "<br>";
    echo count($asociativeArray);
    echo "<br>";

    $myNums = array(1, 0, -9, 10, 5);

    function addTen($num) {
        return $num + 10;
    }

    $myNums = array_map("addTen", $myNums);
    echo "<br>";
    var_dump($myNums);

    foreach ($asociativeArray as $key => $value) {
        echo "$key $value <br>";
    }

    # Sessions and Cookies

    session_start();

    if (!isset($_SESSION["name"]) && isset($_GET["name"])) {
        $_SESSION["name"] = $_GET["name"];
        $name = $_SESSION["name"];
        echo "<h1>$name</h1>";
    } else if (isset($_SESSION["name"])) {
        $name = $_SESSION["name"];
        echo "<h1>Hello again $name</h1>";
    } else {
        echo "<h1>Who are you?</h1>";
    }

    // session_unset();
    // session_destroy();

    if (isset($_GET["name"])) {
        setcookie("name", $_GET["name"], time() + 600);
    }

    # Classes and objects

    require_once './person.php';
    require_once "./student.php";

    $person = new Person("Sasho", 22);
    $student = new Student("Sasho", 22, 11111);

    var_dump($student);


?>
