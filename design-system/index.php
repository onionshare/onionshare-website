<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Glenn Sorrentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>🧰 Simple Design System</title>
	<link rel="stylesheet" href="css/style.css">

	<script src="js/jquery-min.js"></script>
	<script src="components/header/js/header.js"></script>
	<script src="components/hint/js/hint.js"></script>
	<script src="components/footer/js/footer.js"></script>
	<script src="builder/js/builder.js"></script>
	<script src="components/chat/js/chat.js"></script>
</head>

<body id="builder">

	<section class="canvas">

		<!-- NOTIFICATIONS -->

		<?php include "components/notification/html/notification.html" ?>

		<!-- BODY -->

		<?php include "templates/instructions.php" ?>

		<?php include "templates/home-template.php" ?>

		<?php include "templates/secondary-template.php" ?>

		<?php include "templates/article-template.php" ?>

		<?php include "templates/table-template.php" ?>

		<?php include "templates/chat-template.php" ?>

	</section> <!-- END CANVAS -->

	<!-- FILTERS -->

	<aside>

		<?php include "components/filters/html/filters.html" ?>

	</aside>

</body>

</html>
