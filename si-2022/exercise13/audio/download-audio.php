<?php

$file = 'sound.mp3';

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