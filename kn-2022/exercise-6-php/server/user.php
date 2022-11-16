<?php

    require_once("./person.php");

    class User extends Person {

        public $fn;

        function __construct($name, $age, $fn) {
            parent::__construct($name, $age);
            $this->fn = $fn;
        }

    }


?>