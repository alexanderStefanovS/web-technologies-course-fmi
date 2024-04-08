<?php

    class DB {
        public $connection;

        public function __construct() {
            $this->connection = new PDO("mysql:host=localhost:3307;dbname=notes_db", 'root', '');
        }

        public function getConnection() {
            return $this->connection;
        }
    }

?>