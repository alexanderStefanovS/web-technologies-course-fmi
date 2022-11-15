<?php

    class Student {

        public $id;
        public $firstname;
        public $lastname;
        public $email;
        public $fn;

        function __construct($id, $firstname, $lastname, $email, $fn) {
            $this->id = $id;
            $this->firstname = $firstname;
            $this->lastname = $lastname;
            $this->email = $email;
            $this->fn = $fn;
        }

    }


?>