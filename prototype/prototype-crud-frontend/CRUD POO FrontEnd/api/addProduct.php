<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setFirst($_POST["libelle"]);
$product->setLast($_POST["prix"]);
$product->setMatricule($_POST["stock"]);
$product->setEmail($_POST["quantity"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>