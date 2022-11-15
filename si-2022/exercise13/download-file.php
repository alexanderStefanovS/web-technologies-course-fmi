<?php

$file = 'cat.jpg';

if (file_exists($file)) {
    
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Content-Length: ' . filesize($file));

    ob_clean();
    flush();
    readfile($file);

    exit;
}


?>