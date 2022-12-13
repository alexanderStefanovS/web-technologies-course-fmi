<?php

    session_start();

    if (isset($_SESSION["count"])) {
        $_SESSION["count"]++;
    } else {
        $_SESSION["count"] = 1;
    }

    echo $_SESSION["count"];

?>