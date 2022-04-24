<?php
    $dir = dirname(getcwd()) . "/images/" . $_POST['dir'];
    $files = scandir($dir);
    $files = array_diff($files, array('.','..',','));
    echo json_encode($files);
?>
