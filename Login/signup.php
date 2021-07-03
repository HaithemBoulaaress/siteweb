<?php
include_once("config.php");
session_start();
if(isset($_SESSION['uid'])) {
	header("Location: index.php");
}
$error = false;
if (isset($_POST['signup'])) {
	$username = mysqli_real_escape_string($conn, $_POST['user']);
	$nom = mysqli_real_escape_string($conn, $_POST['nom']);
	$prenom = mysqli_real_escape_string($conn, $_POST['prenom']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$password = mysqli_real_escape_string($conn, $_POST['pass']);
	$cpassword = mysqli_real_escape_string($conn, $_POST['cpassword']);	
	if (!preg_match("/^[a-zA-Z ]+$/",$nom)) {
		$error = true;
		$uname_error = "Name must contain only alphabets and space";
	}
	if (!preg_match("/^[a-zA-Z ]+$/",$prenom)) {
		$error = true;
		$uname_error = "Name must contain only alphabets and space";
	}
	if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
		$error = true;
		$email_error = "Entrer un Email valide";
	}
	if(strlen($password) < 6) {
		$error = true;
		$password_error = "Mot de passe doit avoir minimum 6 caractères";
	}
	if($password != $cpassword) {
		$error = true;
		$cpassword_error = "Mot de passe et confirmation du mot de passe ne sot pas conformes";
	}
	if (!$error) {
		if(mysqli_query($conn, "INSERT INTO users(user,nom,prenom,pass, email) VALUES('" . $username . "','" . $nom . "', '" . $prenom . "','" . md5($password) . "', '" . $email . "')")) {
			$success_message = "Iscription avec Succées! <a href='login.php'>Cliquer ici pour Se Connecter</a>";
		} else {
			$error_message = "Erreur dans l'inscription... S'il vous plait essayer plustard!";
		}
	}
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Créer un compte</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-90 p-b-30">
				<form class="login100-form validate-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform" >
					<span class="login100-form-title p-b-40">
						Inscription
					</span>
					<div class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="text" name="user" placeholder="Entrer nom d'utilisation" required value="<?php if($error) echo $username; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($uname_error)) echo $uname_error; ?></span>
					</div>
					<div class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="text" name="nom" placeholder="Entrer votre Nom" required value="<?php if($error) echo $nom; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($uname_error)) echo $uname_error; ?></span>
					</div>
					<div class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="text" name="prenom" placeholder="Entrer votre Prenom" required value="<?php if($error) echo $prenom; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($uname_error)) echo $uname_error; ?></span>
					</div>
					
					<div class="wrap-input100 validate-input m-b-16" >
						<input class="input100" type="text" name="email" placeholder="Email" required value="<?php if($error) echo $email; ?>" class="form-control" />
						<span class="text-danger"><?php if (isset($email_error)) echo $email_error; ?></span>
					
					</div>
				
					<div class="wrap-input100 validate-input m-b-16" data-validate = "Entrer le mot de passe">
						<span class="btn-show-pass">
							<i class="fa fa fa-eye"></i>
						</span>
						<input class="input100" type="password" name="pass" placeholder="Mot de passe" required class="form-control" />
						<span class="text-danger"><?php if (isset($password_error)) echo $password_error; ?></span>
					</div>
					<div class="wrap-input100 validate-input m-b-20" data-validate = "Entrer le mot de passe">
						<span class="btn-show-pass">
							<i class="fa fa fa-eye"></i>
						</span>
						<input class="input100" type="password" name="cpassword" placeholder="Repeter le mot de passe" required class="form-control" />
						<span class="text-danger"><?php if (isset($password_error)) echo $password_error; ?></span>
					</div>
					

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit" name="signup">
							Créer votre compte
						</button>
					</div>
					
				</form>
				<span class="text-success"><?php if (isset($success_message)) { echo $success_message; } ?></span>
			<span class="text-danger"><?php if (isset($error_message)) { echo $error_message; } ?></span>
			</div>
		</div>
	</div>
	
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>