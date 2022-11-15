
<?php 

    require_once "./person.php";

    class Student extends Person {

        private $fn;

        function __construct($name, $age, $fn) {
            parent::__construct($name, $age);
            $this->fn = $fn;
        }

    }

?>