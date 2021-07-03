<?php
session_start();
include_once("config.php");
if(isset($_SESSION['uid'])!="") {
	header("Location: index.php");
}

$error = false;
if ($row['user']="مواطن") {
 if (isset($_POST['sauvegarde'])) {
		$Num_bulltein = mysqli_real_escape_string($conn, $_POST['Num_bulltein']);
		$Num_folio = mysqli_real_escape_string($conn, $_POST['Num_folio']);
		$Noms_constatation = mysqli_real_escape_string($conn, $_POST['Noms_constatation']);
		$Date_constatation = mysqli_real_escape_string($conn, $_POST['Date_constatation']);
		$Foret_canto = mysqli_real_escape_string($conn, $_POST['Foret_canto']);
		$Age_bois = mysqli_real_escape_string($conn, $_POST['Age_bois']);
		$Nature_delit = mysqli_real_escape_string($conn, $_POST['Nature_delit']);
		$Nature_dommage = mysqli_real_escape_string($conn, $_POST['Nature_dommage']);
		$Nature_objects = mysqli_real_escape_string($conn, $_POST['Nature_objects']);
		$Nom_delinquant = mysqli_real_escape_string($conn, $_POST['Nom_delinquant']);
		$Situation_fortune = mysqli_real_escape_string($conn, $_POST['Situation_fortune']);
		$Saisies_sequestre = mysqli_real_escape_string($conn, $_POST['Saisies_sequestre']);
		$Charge_famille = mysqli_real_escape_string($conn, $_POST['Charge_famille']);
		$Amendes = mysqli_real_escape_string($conn, $_POST['Amendes']);
		$Dommages = mysqli_real_escape_string($conn, $_POST['Dommages']);
		$Restitution = mysqli_real_escape_string($conn, $_POST['Restitution']);
		$Frais = mysqli_real_escape_string($conn, $_POST['Frais']);
		$carnet = mysqli_real_escape_string($conn, $_POST['carnet']);
		$Num_recu = mysqli_real_escape_string($conn, $_POST['Num_recu']);
		$folio = mysqli_real_escape_string($conn, $_POST['folio']);
		$Date_delivrance = mysqli_real_escape_string($conn, $_POST['Date_delivrance']);
		$Signature_proposes = mysqli_real_escape_string($conn, $_POST['Signature_proposes']);
		
		if (!$error) {
		if(mysqli_query($conn, "INSERT INTO rapport(Num_bulltein,Num_folio,Noms_constatation,Date_constatation,Foret_canto,Age_bois,Nature_delit,Nature_dommage,Nature_objects,Nom_delinquant,Situation_fortune,Saisies_sequestre,Charge_famille,Amendes,Dommages,Restitution,Frais,carnet,Num_recu,folio,Date_delivrance,Signature_proposes) VALUES('" . $Num_bulltein . "','" . $Num_folio . "', '" . $Noms_constatation . "','" . $Date_constatation . "', '" . $Foret_canto . "','" . $Age_bois . "','" . $Nature_delit . "','" . $Nature_dommage . "','" . $Nature_objects . "','" . $Nom_delinquant . "','" . $Situation_fortune . "','" . $Saisies_sequestre . "','" . $Charge_famille . "','" . $Amendes . "','" . $Dommages . "','" . $Restitution . "','" . $Frais . "','" . $carnet . "','" . $Num_recu . "','" . $folio . "','" . $Date_delivrance . "','" . $Signature_proposes . "')")) {
			$success_message = "Ajout du rapport avec Succées! <a href='index.php'>Cliquer ici pour ajouter un rapport</a>";
		}else {
			$error_message = "Erreur dans l'ajout... S'il vous plait essayer plustard!";
		}
	 }
	}
}



if ($row['user']="لمراكز الغابية") {
 
}

if ($row['user']="لمراكز الغابية") {
 
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
	<title>Rapport</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images1/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts1/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts1/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor1/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css1/util.css">
	<link rel="stylesheet" type="text/css" href="css1/main.css">
<!--===============================================================================================-->
</head>
<body background="http://www.mobiles24.com/static/previews/downloads/default/331/P-628286-7HztdSctPd-1.jpg">
<div class="wrap-input100 validate-input" >

<ul class="nav navbar-nav navbar-left">
			<?php if (isset($_SESSION['user_id'])) { ?>
			<b><li style="margin-left:70px; "><p class="navbar-text"><strong>Bienvenue  <?php echo $_SESSION['user_name']; ?> !!! </strong> <a style="margin-LEFT:900px; margin-to:90px;" href="logout.php">Déconnexion</a></p></li></b>
			<!--Page Index-->


<div class="container-contact100">
<div class="wrap-contact100">



<form class="login100-form validate-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">

<div class="contact100-form-title  container-login100 wrap-login100 p-t-90 p-b-30" style="background-image: url(images1/bg-01.jpg);">
<div class="contact100-form validate-form1" >
				<div class="wrap-input100 validate-input" >
					<span class="label-input100" style="color: white;">N° du bulltein : </span>
					<input class="input100" type="text" name="Num_bulltein" placeholder="..."  value="<?php if($error) echo $Num_bulltein; ?>" class="form-control" />
					<span class="focus-input100"></span>
				</div>
				<div class="wrap-input100 validate-input" >
					<span class="label-input100" style="
    color: white;">N° du folio du livrer journalier : </span>
					<input class="input100" type="text" name="Num_folio"  placeholder="..." value="<?php if($error) echo $Num_folio; ?>" class="form-control"/>
					<span class="focus-input100"></span>
				</div>

</div>
</div>
<div class="contact100-form validate-form">
				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Noms des préposés présents à la constatation </span>
					<input class="input100" name="Noms_constatation" value="<?php if($error) echo $Noms_constatation; ?>" class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
					<span class="text-danger"><?php if (isset($uname_error)) echo $uname_error; ?></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Date et heure de la constatation </span>
					<input class="input100" name="Date_constatation" value="<?php if($error) echo $Date_constatation; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Foret et canto.n </span>
					<input class="input100" name="Foret_canto" value="<?php if($error) echo $Foret_canto; ?>" class="form-control"class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input">
					<span class="label-input100">Age et nature des bois. S'ils ont étè incendiés,rappeler la date du dernier incendie. </span>
					<input class="input100" name="Age_bois" value="<?php if($error) echo $Age_bois; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

					<div class="wrap-input100 validate-input" >
					<span class="label-input100">Nature et circonstances du delit. </span>
					<input class="input100" name="Nature_delit" value="<?php if($error) echo $Nature_delit; ?>"class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

					<div class="wrap-input100 validate-input" >
					<span class="label-input100">Nature du dommage causé et estimation en argent. </span>
					<input class="input100" name="Nature_dommage" value="<?php if($error) echo $Nature_dommage; ?>"class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Nature quantité des objects enlevés et estimation. </span>
					<input class="input100" name="Nature_objects" value="<?php if($error) echo $Nature_objects; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Nom, Prénoms, Age,domicile du délinquant. </span>
					<input class="input100" name="Nom_delinquant" value="<?php if($error) echo $Nom_delinquant; ?>"class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
				</div>


				<div class="wrap-input100 validate-input" >
					<span class="label-input100">Situation de la fortune et moralité. Charge de famille </span>
					<input class="input100" name="Situation_fortune" value="<?php if($error) echo $Situation_fortune; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
			    </div>

			    <div class="wrap-input100 validate-input" >
					<span class="label-input100">Saisies effectuées,constitution de séquestre.Réquisition à la force publique.Visite dommieliare,arrestation, etc... </span>
					<input class="input100" name="Saisies_sequestre" value="<?php if($error) echo $Saisies_sequestre; ?>"class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
			    </div>

			    <div class="wrap-input100 validate-input" >
					<span class="label-input100">Situation de la fortune et moralité. Charge de famille </span>
					<input class="input100" name="Charge_famille" value="<?php if($error) echo $Charge_famille; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
			    </div>			
<table border="0" >
   <th rowspan="4" style="
    top: 0;
    left: 0;      
    background: none;     
    transform: rotate(270deg);">calculde la transaction</th>
                	<tr>
                		<td>
			    	<div class="wrap-input100 validate-input" >
					<span class="label-input100">Amendes</span>
					<input class="input100" type="text" name="Amendes" value="<?php if($error) echo $Amendes; ?>"class="form-control"/>
					<span class="focus-input100"></span>
				</div>

					<div class="wrap-input100 validate-input" >
					<span class="label-input100">Dommages-intérets</span>
					<input class="input100" type="text" name="Dommages" value="<?php if($error) echo $Dommages; ?>"class="form-control"/>
					<span class="focus-input100"></span>
				</div>

					<div class="wrap-input100 validate-input">
					<span class="label-input100">Restitution</span>
					<input class="input100" type="text" name="Restitution" value="<?php if($error) echo $Restitution; ?>" class="form-control"/>
					<span class="focus-input100"></span>
				</div>

					<div class="wrap-input100 validate-input">
					<span class="label-input100">Frais</span>
					<input class="input100" type="text"  name="Frais" value="<?php if($error) echo $Frais; ?>"class="form-control"/>
					<span class="focus-input100"></span>
				</div>
			</td>
			</tr>
		</table>
                 <table border="0">
                 	<tr>
                 		<td rowspan="2">
					<div class="wrap-input100 validate-input" >
					<span class="label-input100">N° du reçu</span>
					<input class="input100" type="text"  name="Num_recu" value="<?php if($error) echo $Num_recu; ?>" class="form-control"/>
					<span class="focus-input100"></span>
				</div>
			</td><td align="center">
				<div class="wrap-input100 validate-input" >
					<span class="label-input100">du carnet des menus produits :</span>
					<input class="input100" type="text"   name="carnet" value="<?php if($error) echo $carnet; ?>" class="form-control"/>
					<span class="focus-input100"></span>
				</div>
			</td><tr><td align="center">
				<div class="wrap-input100 validate-input" >
					<span class="label-input100">du folio : </span>
					<input class="input100" type="text" name="folio" value="<?php if($error) echo $folio; ?>" class="form-control"/>
					<span class="focus-input100"></span>
				</div>
			</td>
			</tr>
		
				
			</table>

			  
	 <div class="wrap-input100 validate-input" >
					<span class="label-input100">Date de la délivrance du reçu </span>
					<input class="input100" name="Date_delivrance" value="<?php if($error) echo $Date_delivrance; ?>" class="form-control"placeholder="..."/>
					<span class="focus-input100"></span>
			    </div>

			     <div class="wrap-input100 validate-input">
					<span class="label-input100">Signature des proposés </span>
					<input class="input100"name="Signature_proposes" value="<?php if($error) echo $Signature_proposes; ?>"class="form-control" placeholder="..."/>
					<span class="focus-input100"></span>
			    </div>


				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn" type="submit" name="sauvegarde">
						<span>
						Sauvegarder
							<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							
						</span>
					</button>
					
			</div>	
				<span class="text-success"><?php if (isset($success_message)) { echo $success_message; } ?></span>
			<span class="text-danger"><?php if (isset($error_message)) { echo $error_message; } ?></span>	
	</div>
		
	</div>
	
</div>	

</div>
		
	</form>	

			
			<?php } else { ?>
			<b><li style="margin-left:70px; "><p class="navbar-text"> <a href="login.php">Connexion</a></p><p class="navbar-text"> <a style="margin-LEFT:1000px; margin-to:90px;" href="signup.php">Inscription</a></p></li></b>
			
			
			<?php } ?>
		</ul>
</div>
<br/><br/>


	




<!--===============================================================================================-->
	<script src="vendor1/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor1/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor1/bootstrap/js/popper.js"></script>
	<script src="vendor1/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor1/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor1/daterangepicker/moment.min.js"></script>
	<script src="vendor1/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor1/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	
    <img src="http://www.mobiles24.com/static/previews/downloads/default/331/P-628286-7HztdSctPd-1.jpg"></img>
	<script src="js1/map-custom.js"></script>
<!--===============================================================================================-->
	<script src="js1/main.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-23581568-13');
	</script>

</body>
</html>
