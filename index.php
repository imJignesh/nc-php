<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

include "vendor/autoload.php";

$loader = new \Twig\Loader\FilesystemLoader('components/');
$twig = new \Twig\Environment($loader, [    'cache' => 'cache']);
$twig = new \Twig\Environment($loader, ['debug' => true]);

if( isset($_GET['path'])){
    $menu =  $path = $_GET['path'];
    $path = str_replace(".html","",$path).'/index.html';
    if(file_exists("components/".$path)){
        echo $twig->render($path, ['menu' => $menu]);
    }
      
    else    {
    $menu="index.html";
    $path='home/index.html';
    echo $twig->render($path, ['menu' => $menu]);
    }

}else{
    $menu="index.html";
    $path='home/index.html';
    echo $twig->render($path, ['menu' => $menu]);

}




//include "components/home/index.html";
?>