<?php
require_once("manager.php");
require_once('../model/product.php');

class ProductsManager extends Manager {
	public function get($id){
		$req = "SELECT * FROM salles WHERE id = $id";
		$row = $this->executerRequete($req, array($id))->fetch();
		return new Product($row);
	}
	
	public function getList(){
		$stack = array();
		$req = 'SELECT * FROM salles';
		$result = $this->executerRequete($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Product($row);
			array_push($stack, $itm);
		}
		return $stack;
	}
	//Add Product
	public function add($product){
		$dbh = new PDO("mysql:host=localhost;dbname=formers","root","");
		$req = "INSERT INTO `salles`(`id`,`Firstname`, `Lastname`,`Matricule`,`Email`) VALUES (:id,:Firstname,:Lastname,:Matricule,:Email)";

		$addProductQuery = $dbh ->prepare($req);
		$addProductQuery -> bindParam(":id",$product->id(),PDO::PARAM_STR);	
		$addProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":Matricule",$product->getMatricule(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":Email",$product->getEmail(),PDO::PARAM_STR);
		$addProductQuery->execute();
	}
}
?>