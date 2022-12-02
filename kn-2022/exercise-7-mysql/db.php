<?php

    class DB {

        private $connection;

        function __construct() {
            $this->connection = new PDO('mysql:host=localhost:3307;dbname=store', 'root', '');
        }

        public function getConnection() {
            return $this->connection;
        }

    }


?>