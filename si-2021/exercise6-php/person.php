<?php

    class Person {

        private $name;
        private $age;

        function __construct($name, $age) {
            $this->name = $name;
            $this->age = $age;
        }

        function getName() {
            return $this->name;
        }

        function setName($name) {
            $this->name = $name;
        }
        
    }

?>