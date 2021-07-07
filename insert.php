<?php
include('db.php');
include('function.php');
if(isset($_POST["operation"]))
{
	if($_POST["operation"] == "Add")
	{
		$image = '';
		if($_FILES["user_image"]["name"] != '')
		{
			$image = upload_image();
		}
		$statement = $connection->prepare("
			INSERT INTO users (name, stock, image, Quantity, panier) 
			VALUES (:name, :stock, :image, :Quantity, :panier)
		");
		$result = $statement->execute(
			array(
				':name'	=>	$_POST["name"],
				':stock'	=>	$_POST["stock"],
				':Quantity'	=>	$_POST["Quantity"],
				':panier'	=>	$_POST["panier"],
				':image'		=>	$image
			)
		);
		if(!empty($result))
		{
			echo 'Data Inserted';
		}
	}
	if($_POST["operation"] == "Edit")
	{
		$image = '';
		if($_FILES["user_image"]["name"] != '')
		{
			$image = upload_image();
		}
		else
		{
			$image = $_POST["hidden_user_image"];
		}
		$statement = $connection->prepare(
			"UPDATE users 
			SET name = :name, stock = :stock, Quantity = :Quantity, panier = :panier, image = :image  
			WHERE id = :id
			"
		);
		$result = $statement->execute(
			array(
				':name'	=>	$_POST["name"],
				':stock'	=>	$_POST["stock"],
				':Quantity'	=>	$_POST["Quantity"],
				':panier'	=>	$_POST["panier"],
				':image'		=>	$image,
				':id'			=>	$_POST["user_id"]
			)
		);
		if(!empty($result))
		{
			echo 'Data Updated';
		}
	}
}

?>