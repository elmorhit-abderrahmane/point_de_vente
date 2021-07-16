<?php
require_once('../model/product.php');

class productsManager {

	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=point","root","");
		$stack = array();
		$req = "SELECT * FROM former";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["id"]);
			$item->setFirst($row["libelle"]);
			$item->setLast($row["prix"]);
			$item->setMatricule($row["stock"]);
			$item->setEmail($row["quantity"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=point","root","");
			$req = "INSERT INTO `former`(`id`,`libelle`, `prix`,`stock`,`quantity`) VALUES (:id,:libelle,:prix,:stock,:quantity)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":libelle",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":prix",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":stock",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":quantity",$product->getEmail(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=point","root","");

			$req = "DELETE FROM former WHERE id = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
		// update product		
		public function update($product){
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=formers","root","");
			$req = "UPDATE Former SET Firstname = :Firstname,Lastname = :Lastname,Matricule = :Matricule,Email = :Email WHERE id = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Matricule",$product->getMatricule(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Email",$product->getEmail(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>