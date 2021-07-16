<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'id' => $this->_id,
             'libelle' => $this->_libelle,
             'prix' => $this->_prix,
             'stock' => $this->_stock,
             'quantity' => $this->_quantity,
        );
    }
	private $_id;
	private $_libelle;
	private $_prix;
	private $_stock;
	private $_quantity;
	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getId() { return $this->_id; }
		public function getName() { return $this->_libelle; }
		public function getLast() { return $this->_prix; }
		public function getMatricule() { return $this->_stock; }
		public function getEmail() { return $this->_quantity; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setFirst($libelle){	
					$this->_libelle = $libelle;
			
		}
		public function setLast($prix){
					$this->_prix = $prix;
		}

		public function setMatricule($stock){
				$this->_stock = $stock;
		}

		public function setEmail($quantity){
					$this->_quantity = $quantity;
		}

}
?>