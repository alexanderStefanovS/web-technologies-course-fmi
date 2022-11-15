
<?php

session_start();

require_once("../db/db.php");

if (!isset($_SESSION["user"])) {
    http_response_code(401);
    exit(json_encode(["status" => "ERROR", "message" => "Потребителят не е оторизиран"]));
}

function checkNoteUser($connection, $id) {
	
	$sql = "SELECT * FROM notes WHERE id = ?";
    $stmt = $connection->prepare($sql);
	$stmt->execute([$id]);
	
	$note = $stmt->fetch(PDO::FETCH_ASSOC);
	
	// var_dump($note);
	
	return $note["users_id"] === $_SESSION["user"]["id"];
	
}

if (isset($_GET["id"])) {

    $id = $_GET["id"];

    try {

        $db = new DB();
        $connection = $db->getConnection();

		$isUserValid = checkNoteUser($connection, $id);
		
		if (!$isUserValid) {
			http_response_code(403);
			exit(json_encode(["status" => "ERROR", "message" => "Потребителят няма право да изтрие тази бележка"]));
		}

        $sql = "DELETE FROM notes WHERE id = ?";
        $connection->prepare($sql)->execute([$id]);

        echo json_encode(["status" => "SUCCESS", "message" => "Бележката е изтрита"]);

    } catch (PDOException $e) {
		http_response_code(500);
        echo json_encode(["status" => "ERROR", "message" => "Грешка при изтриване на бележка"]);
    }

} else {
    http_response_code(400);
    echo json_encode(["status" => "ERROR", "message" => "Некоректни данни"]);
}


?>
