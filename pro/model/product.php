<?php
class Product implements JsonSerializable {

	public function jsonSerialize()
    {
        return array(
             'id' => $this->_id,
             'Titre' => $this->_Titre,
             'Type' => $this->_Type,
             'Prix' => $this->_Prix,
             'Editing' => $this->_Editing,
        );
    }
	private $_id;
	private $_Titre;
	private $_Type;
	private $_Prix;
	private $_Editing;


	public function __construct($data) {
		$this->array_fill($data);
	}

	public function array_fill( $data)
	{
		$this->setId ($data["id"]);
		$this->setTitre ($data["Titre"]);
		$this->setType ($data["Type"]);
		$this->setPrix ($data["Prix"]);
		$this->setEditing ($data["Editing"]);

	}

		public function id() { return $this->_id; }
		public function Titre() { return $this->_Titre; }
		public function Type() { return $this->_Type; }
		public function Prix() { return $this->_Prix; }
		public function Editing() { return $this->_Editing; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setTitre($Titre){
			if (is_string($Titre) && strlen($Titre) <= 255)
			{
					$this->_Titre = $Titre;
			}
		}
		public function setType($Type){
			if (is_string($Type) && strlen($Type) <= 255)
			{
					$this->_Type = $Type;
			}
		}

		public function setPrix($Prix){
				$this->_Prix = $Prix;
		}

		public function setEditing($Editing){
				if (is_string($Editing) && strlen($Editing)){
					$this->_Editing = $Editing;
				}
		}

}
?>