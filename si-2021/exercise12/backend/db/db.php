
<?php

    /**
     * DB class creates database connection using PDO class.
     */
    class DB {

        private $connection;

        function __construct() {
            
            $host = "localhost";
            $dbname = "notes";
            $username = "root";
            $password = "";

            $dsn = "mysql:host=$host;dbname=$dbname";

            $this->connection = new PDO($dsn, $username, $password);
        }

        function getConnection() {
            return $this->connection;
        }

    }



?>