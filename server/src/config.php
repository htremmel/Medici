<?php
	define("__HOST__", "medici_mariadb_1:3306");
	define("__USER__", "root");
    define("__PASS__", "password");

    // Database name
	define("__BASE__", "medici");

	class DB {
		private $con = false;
		private $data = array();

		public function __construct() {
			$this->con = new mysqli(__HOST__, __USER__, __PASS__, __BASE__);
			
			if ($this->con->connect_error) {
				die("DB connection failed:" . $con->connect_error);
			}
            echo 'Successfully connected!';
		}

		public function qryPop() {
			$sql = "SELECT * FROM `blogs` ORDER BY `id` DESC";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
		}

		public function qryFire($sql=null) {
			if($sql) $this->con->query($sql);
			$this->qryPop();
			$this->con->close();
			return $this->data;
		}
	}
?>
